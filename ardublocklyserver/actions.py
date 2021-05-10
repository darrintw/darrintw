# -*- coding: utf-8 -*-
"""Collection of actions to the ardublocklyserver for relieved HTTP requests.

Copyright (c) 2017 carlosperate https://github.com/carlosperate/
Licensed under the Apache License, Version 2.0 (the "License"):
    http://www.apache.org/licenses/LICENSE-2.0
"""
from __future__ import unicode_literals, absolute_import, print_function

import json
import locale
import os
import subprocess
import sys
# local-packages imports
import six
# This package modules
from os import listdir
from os.path import isfile, isdir, join
from ardublocklyserver import sketchcreator
from ardublocklyserver.compilersettings import ServerCompilerSettings


#
# Sketch loading to Arduino functions
#
def arduino_ide_send_code(code_str):
    """Create a sketch from a code string and sends it to the Arduino IDE.

    :param code_str: String of Arduino code
    :return: Tuple with (success, ide_mode, std_out, err_out, exit_code)
    """
    sketch_path = create_sketch_from_string(code_str)
    if not sketch_path:
        return False, 'unknown', None, None, 51
    return load_arduino_cli(sketch_path)


def create_sketch_from_string(sketch_code):
    """Create an Arduino Sketch in location and name given by Settings.

    :param sketch_code: Code for the sketch.
    :return: Sketch location. None if there was a problem.
    """
    settings = ServerCompilerSettings()
    return sketchcreator.create_sketch(sketch_dir=settings.sketch_dir,
                                       sketch_name=settings.sketch_name,
                                       sketch_code=sketch_code)


def load_arduino_cli(sketch_path):
    """Launch subprocess for Arduino IDE CLI with values from Settings.

    Launches a subprocess to invoke the Arduino IDE command line to open,
    verify or upload an sketch, the location of which is indicated in the input
    parameter.

    :param sketch_path: Path to the sketch to load into the Arduino IDE.
    :return: A tuple with the following data (success, ide_mode, std_out,
            err_out, exit_code)
    """
    success = True
    ide_mode = 'unknown'
    std_out, err_out = '', ''
    exit_code = 0

    # Input sanitation and output defaults
    if not os.path.isfile(sketch_path):
        err_out = 'Provided sketch path is not a valid file: %s' % sketch_path
        success = False
        exit_code = 52
        return success, ide_mode, std_out, err_out, exit_code

    settings = ServerCompilerSettings()

    # Check if CLI flags have been set
    if not settings.compiler_dir:
        success = False
        exit_code = 53
        err_out = 'Compiler directory not configured in the Settings.'
    elif not settings.load_ide_option:
        success = False
        exit_code = 54
        err_out = 'Launch IDE option not configured in the Settings.'
    elif not settings.get_arduino_board_flag() and (
            settings.load_ide_option == 'upload' or
            settings.load_ide_option == 'verify'):
        success = False
        exit_code = 56
        err_out = 'Arduino Board not configured in the Settings.'
    elif not settings.get_serial_port_flag() and \
            settings.load_ide_option == 'upload':
        success = False
        exit_code = 55
        err_out = 'Serial Port configured in Settings not accessible.'

    if success:
        ide_mode = settings.load_ide_option
        # Concatenates the CLI command and execute if the flags are valid
        cli_command = [settings.compiler_dir, "%s" % sketch_path]
        if settings.load_ide_option == 'upload':
            if (settings.get_serial_port_flag() == 'USB'):
                print('\nUploading sketch to Board from USB...')
                cli_command.append('--upload')
                cli_command.append('--board')
                cli_command.append(settings.get_arduino_board_flag())
            else:
                print('\nUploading sketch to Board...')
                cli_command.append('--upload')
                cli_command.append('--port')
                cli_command.append(settings.get_serial_port_flag())
                cli_command.append('--board')
                cli_command.append(settings.get_arduino_board_flag())
        elif settings.load_ide_option == 'verify':
            print('\nVerifying the sketch...')
            cli_command.append('--board')
            cli_command.append(settings.get_arduino_board_flag())
            cli_command.append('--verify')
        elif settings.load_ide_option == 'open':
            print('\nOpening the sketch in the Arduino IDE...')
        print('CLI command: %s' % ' '.join(cli_command))
        # Python 2 needs the input to subprocess.Popen to be in system encoding
        if sys.version_info[0] < 3:
            sys_locale = locale.getpreferredencoding()
            cli_command = [x.encode(sys_locale) for x in cli_command]

        if settings.load_ide_option == 'open':
            # Open IDE in a subprocess without capturing outputs
            subprocess.Popen(cli_command, shell=False)
            exit_code = 0
        else:
            # Launch the Arduino CLI in a subprocess and capture output data
            process = subprocess.Popen(
                cli_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                shell=False)
            std_out, err_out = process.communicate()
            # fix chinese traditional encoding for arduino version less than 1.8.9, modify by darrin 20190317
            # print('Arduino env code:', locale.getpreferredencoding(), '\n')
            if locale.getpreferredencoding() == 'cp950':
                std_out = std_out.decode('big5', 'ignore')
                err_out = err_out.decode('big5', 'ignore')
            else:
                # std_out = std_out.decode('utf-8', 'ignore')
                # err_out = err_out.decode('utf-8', 'ignore')
                std_out = six.u(std_out)
                err_out = six.u(err_out)
            exit_code = process.returncode
            print('Arduino Error output:\n%s' % err_out)
            print('Arduino output:\n%s' % std_out)
            # print('Arduino Error output:\n%s' % err_out)
            print('Arduino Exit code: %s' % exit_code)
            # For some reason Arduino CLI can return 256 on success
            if (process.returncode != 0) and (process.returncode != 256):
                success = False
                if exit_code >= 50:
                    # Custom exit codes from server start at 50
                    err_out = '%s\nUnexpected Arduino exit error code: %s' % \
                              (err_out, exit_code)
                    exit_code = 50

    return success, ide_mode, std_out, err_out, exit_code


#
# Compiler Settings
#
def set_compiler_path(new_path):
    """Open the file browser to select an Arduino IDE executable.

    The new file path is saved into ServerCompilerSettings.

    :param new_path: New path for the Arduino IDE executable.
    :return: Same as get_compiler_path().
    """
    ServerCompilerSettings().compiler_dir = new_path
    return get_compiler_path()


def get_compiler_path():
    """Return the Arduino IDE executable path as stored in the Settings.

    :return: String with compiler path from the Settings.
             None if there is no path saved in the Settings.
    """
    compiler_directory = ServerCompilerSettings().compiler_dir
    if not compiler_directory:
        compiler_directory = None
    return compiler_directory


#
# Sketch settings
#
def set_sketch_path(new_path):
    """Open the file browser to select an folder to store the Arduino Sketch.

    The new file path is saved into ServerCompilerSettings.

    :param new_path: New path to store the Arduino Sketch.
    :return: Same as get_sketch_path().
    """
    ServerCompilerSettings().sketch_dir = new_path
    return get_sketch_path()


def get_sketch_path():
    """Return the path to the folder to store the Arduino Sketch.

    :return: String with the sketch path from the Settings.
             None if there is no path saved in the Settings.
    """
    sketch_directory = ServerCompilerSettings().sketch_dir
    if not sketch_directory:
        sketch_directory = None
    return sketch_directory


#
# Example settings
#
def set_examples_path(new_path):
    """Open the file browser to select an folder to load the block example xml file.

    The new file path is saved into ServerCompilerSettings.

    :param new_path: New path to load the block example xml file.
    :return: Same as get_examples_path().
    """
    ServerCompilerSettings().examples_dir = new_path
    return get_examples_path()


def get_examples_path():
    """Return the path to the folder to load the block example xml file.

    :return: String with the example path from the Settings.
             None if there is no path saved in the Settings.
    """
    examples_directory = ServerCompilerSettings().examples_dir
    if not examples_directory:
        examples_directory = None
    return examples_directory


#
# Arduino Board settings
#
def set_arduino_board(new_value):
    """Set new Arduino board value in the Settings.

    :param new_value: New Arduino board value, must be the board name, not the
            flag (so 'Uno', not 'arduino:avr:uno').
    :return: Same as the get_arduino_board_selected() function.
    """
    ServerCompilerSettings().arduino_board = new_value
    return get_arduino_board_selected()


def get_arduino_board_selected():
    """Get the selected board from the Settings.

    :return: The currently selected Arduino board from the Settings.
    """
    return ServerCompilerSettings().arduino_board


def set_arduino_board_flag(new_value):
    """Set new Arduino board value in the Settings.

    :param new_value: New Arduino board flag, must be the board flag, not the
            name (so 'arduino:avr:uno', not 'Uno').
    :return: Same as the get_arduino_board_flag_selected() function.
    """
    ServerCompilerSettings().arduino_board_flag = new_value
    return get_arduino_board_flag_selected()


def get_arduino_board_flag_selected():
    """Get the selected board from the Settings.

    :return: The currently selected Arduino board flag from the Settings.
    """
    return ServerCompilerSettings().arduino_board_flag


#
# Serial Port settings
#
def set_serial_port(new_value):
    """Set a new serial port in the Settings.

    :param new_value: New serial port to save.
    :return: Same as get_serial_ports() function.
    """
    ServerCompilerSettings().serial_port = new_value
    return get_serial_port_selected()


def get_serial_ports():
    """Get the available serial ports.

    :return: Dictionary of serial ports.
    """
    return ServerCompilerSettings().get_serial_ports()


def get_serial_port_selected():
    """Get the selected serial port from the Settings.

    :return: The currently selected serial port in the Settings.
    """
    return ServerCompilerSettings().serial_port


#
# Load examples from path
#
def get_examples_files_list(exdir):
    examples_files = []
    dir_files = listdir(exdir)
    for f in dir_files:
        fullpath = join(exdir, f)
        if isfile(fullpath):
            examples_files.append(f)

    return examples_files


def get_examples_files():
    """Return the file list of the examples folder.

    :return: Json with the example files of example path.
    """
    examples_directory = get_examples_path()
    examples_files = []

    files = listdir(examples_directory)
    for f in files:
        fullpath = join(examples_directory, f)
        if isdir(fullpath):
            examples_files.append({'name': f, 'files': get_examples_files_list(fullpath)})

    return json.dumps(examples_files)


#
# Load IDE settings
#
def set_load_ide_only(new_value):
    """Set a new Arduino IDE load option.

    :param new_value: New IDE load option to save in the Settings.
    :return: Same as the get_load_ide_selected() function.
    """
    ServerCompilerSettings().load_ide_option = new_value
    return get_load_ide_selected()


def get_load_ide_options():
    """Get the available Arduino IDE load options.

    :return: Dictionary of IDE load options.
    """
    return ServerCompilerSettings().get_load_ide_options()


def get_load_ide_selected():
    """Get the load option from the Settings.

    :return: The currently selected Arduino IDE option from the Settings.
    """
    return ServerCompilerSettings().load_ide_option


#
# Baud Rate settings
#
def set_baud_rate_only(new_value):
    """Set a new Baud Rate option.

    :param new_value: New Baud Rate option to save in the Settings.
    :return: Same as the get_baud_rate_selected() function.
    """
    ServerCompilerSettings().baud_rate_option = new_value
    return get_baud_rate_selected()


def get_baud_rate_options():
    """Get the available Baud Rate options.

    :return: Dictionary of Baud Rate options.
    """
    return ServerCompilerSettings().get_baud_rate_options()


def get_baud_rate_selected():
    """Get the Baud Rate option from the Settings.

    :return: The currently selected Baud Rate option from the Settings.
    """
    return ServerCompilerSettings().baud_rate_option


#
# End Of Line settings
#
def set_end_of_line_only(new_value):
    """Set a new End Of Line option.

    :param new_value: New End Of Line option to save in the Settings.
    :return: Same as the get_end_of_line_selected() function.
    """
    ServerCompilerSettings().end_of_line_option = new_value
    return get_end_of_line_selected()


def get_end_of_line_options():
    """Get the available End Of Line options.

    :return: Dictionary of End Of Line options.
    """
    return ServerCompilerSettings().get_end_of_line_options()


def get_end_of_line_selected():
    """Get the Baud Rate option from the Settings.

    :return: The currently selected End Of Line option from the Settings.
    """
    return ServerCompilerSettings().end_of_line_option


#
# Call Putty
#
def load_putty_cli():
    success = True
    std_out = ''
    err_out = ''
    exit_code = 0

    settings = ServerCompilerSettings()

    if not settings.get_serial_port_flag():
        success = False
        exit_code = 55
        err_out = 'Serial Port configured in Settings not accessible.'

    if success:
        baud = settings.get_baud_rate()
        cli_command = ['putty.exe']
        cli_command.append('-serial')
        cli_command.append(settings.get_serial_port_flag())
        cli_command.append('-sercfg')
        cli_command.append(baud)
        # print(cli_command)
        print('\nOpen putty...')
        subprocess.Popen(cli_command, shell=False)

    return success, std_out, err_out, exit_code
