// Copyright 2008 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileOverview Protocol Buffer Field Descriptor class.
 */

goog.provide('goog.proto2.FieldDescriptor');

goog.forwardDeclare('goog.proto2.Descriptor');
goog.forwardDeclare('goog.proto2.Message');
goog.require('goog.asserts');
goog.require('goog.string');



/**
 * A class which describes a field in a Protocol Buffer 2 Message.
 *
 * @param {function(new:goog.proto2.Message)} messageType Constructor for the
 *     message class to which the field described by this class belongs.
 * @param {number|string} tag The field's tag index.
 * @param {{
 *       name: string,
 *       fieldType: !goog.proto2.FieldDescriptor.FieldType,
 *       type: !Function,
 *       repeated: (*|undefined),
 *       required: (*|undefined),
 *       packed: (*|undefined),
 *       defaultValue: (*|undefined)
 *     }} metadata The metadata about this field
 *     that will be used to construct this descriptor.
 *
 * @constructor
 * @final
 */
goog.proto2.FieldDescriptor = function(messageType, tag, metadata) {
  /**
   * The message type that contains the field that this
   * descriptor describes.
   * @private {function(new:goog.proto2.Message)}
   */
  this.parent_ = messageType;

  // Ensure that the tag is numeric.
  goog.asserts.assert(goog.string.isNumeric(tag));

  /**
   * The field's tag number.
   * @private {number}
   */
  this.tag_ = /** @type {number} */ (tag);

  /**
   * The field's name.
   * @private {string}
   */
  this.name_ = metadata.name;

  /**
   * If true, this field is a packed field.
   * @private {boolean}
   */
  this.isPacked_ = !!metadata.packed;

  /**
   * If true, this field is a repeating field.
   * @private {boolean}
   */
  this.isRepeated_ = !!metadata.repeated;

  /**
   * If true, this field is required.
   * @private {boolean}
   */
  this.isRequired_ = !!metadata.required;

  /**
   * The field type of this field.
   * @private {goog.proto2.FieldDescriptor.FieldType}
   */
  this.fieldType_ = metadata.fieldType;

  /**
   * If this field is a primitive: The native (ECMAScript) type of this field.
   * If an enumeration: The enumeration object.
   * If a message or group field: The Message function.
   * @private {Function}
   */
  this.nativeType_ = metadata.type;

  /**
   * Is it permissible on deserialization to convert between numbers and
   * well-formed strings?  Is true for 64-bit integral field types and float and
   * double types, false for all other field types.
   * @private {boolean}
   */
  this.deserializationConversionPermitted_ = false;

  switch (this.fieldType_) {
    case goog.proto2.FieldDescriptor.FieldType.INT64:
    case goog.proto2.FieldDescriptor.FieldType.UINT64:
    case goog.proto2.FieldDescriptor.FieldType.FIXED64:
    case goog.proto2.FieldDescriptor.FieldType.SFIXED64:
    case goog.proto2.FieldDescriptor.FieldType.SINT64:
    case goog.proto2.FieldDescriptor.FieldType.FLOAT:
    case goog.proto2.FieldDescriptor.FieldType.DOUBLE:
      this.deserializationConversionPermitted_ = true;
      break;
  }

  /**
   * The default value of this field, if different from the default, default
   * value.
   * @private {*}
   */
  this.defaultValue_ = metadata.defaultValue;
};


/**
 * An enumeration defining the possible field types.
 * Should be a mirror of that defined in descriptor.h.
 *
 * @enum {number}
 */
goog.proto2.FieldDescriptor.FieldType = {
  DOUBLE: 1,
  FLOAT: 2,
  INT64: 3,
  UINT64: 4,
  INT32: 5,
  FIXED64: 6,
  FIXED32: 7,
  BOOL: 8,
  STRING: 9,
  GROUP: 10,
  MESSAGE: 11,
  BYTES: 12,
  UINT32: 13,
  ENUM: 14,
  SFIXED32: 15,
  SFIXED64: 16,
  SINT32: 17,
  SINT64: 18
};


/**
 * Returns the tag of the field that this descriptor represents.
 *
 * @return {number} The tag number.
 */
goog.proto2.FieldDescriptor.prototype.getTag = function() {
  return this.tag_;
};


/**
 * Returns the descriptor describing the message that defined this field.
 * @return {!goog.proto2.Descriptor} The descriptor.
 */
goog.proto2.FieldDescriptor.prototype.getContainingType = function() {
  // Generated JS proto_library messages have getDescriptor() method which can
  // be called with or without an instance.
  return this.parent_.prototype.getDescriptor();
};


/**
 * Returns the name of the field that this descriptor represents.
 * @return {string} The name.
 */
goog.proto2.FieldDescriptor.prototype.getName = function() {
  return this.name_;
};


/**
 * Returns the default value of this field.
 * @return {*} The default value.
 */
goog.proto2.FieldDescriptor.prototype.getDefaultValue = function() {
  if (this.defaultValue_ === undefined) {
    // Set the default value based on a new instance of the native type.
    // This will be (0, false, "") for (number, boolean, string) and will
    // be a new instance of a group/message if the field is a message type.
    var nativeType = this.nativeType_;
    if (nativeType === Boolean) {
      this.defaultValue_ = false;
    } else if (nativeType === Number) {
      this.defaultValue_ = 0;
    } else if (nativeType === String) {
      if (this.deserializationConversionPermitted_) {
        // This field is a 64 bit integer represented as a string.
        this.defaultValue_ = '0';
      } else {
        this.defaultValue_ = '';
      }
    } else {
      return new nativeType;
    }
  }

  return this.defaultValue_;
};


/**
 * Returns the field type of the field described by this descriptor.
 * @return {goog.proto2.FieldDescriptor.FieldType} The field type.
 */
goog.proto2.FieldDescriptor.prototype.getFieldType = function() {
  return this.fieldType_;
};


/**
 * Returns the native (i.e. ECMAScript) type of the field described by this
 * descriptor.
 *
 * @return {Object} The native type.
 */
goog.proto2.FieldDescriptor.prototype.getNativeType = function() {
  return this.nativeType_;
};


/**
 * Returns true if simple conversions between numbers and strings are permitted
 * during deserialization for this field.
 *
 * @return {boolean} Whether conversion is permitted.
 */
goog.proto2.FieldDescriptor.prototype.deserializationConversionPermitted =
    function() {
  return this.deserializationConversionPermitted_;
};


/**
 * Returns the descriptor of the message type of this field. Only valid
 * for fields of type GROUP and MESSAGE.
 *
 * @return {!goog.proto2.Descriptor} The message descriptor.
 */
goog.proto2.FieldDescriptor.prototype.getFieldMessageType = function() {
  // Generated JS proto_library messages have getDescriptor() method which can
  // be called with or without an instance.
  var messageClass =
      /** @type {function(new:goog.proto2.Message)} */ (this.nativeType_);
  return messageClass.prototype.getDescriptor();
};


/**
 * @return {boolean} True if the field stores composite data or repeated
 *     composite data (message or group).
 */
goog.proto2.FieldDescriptor.prototype.isCompositeType = function() {
  return this.fieldType_ == goog.proto2.FieldDescriptor.FieldType.MESSAGE ||
      this.fieldType_ == goog.proto2.FieldDescriptor.FieldType.GROUP;
};


/**
 * Returns whether the field described by this descriptor is packed.
 * @return {boolean} Whether the field is packed.
 */
goog.proto2.FieldDescriptor.prototype.isPacked = function() {
  return this.isPacked_;
};


/**
 * Returns whether the field described by this descriptor is repeating.
 * @return {boolean} Whether the field is repeated.
 */
goog.proto2.FieldDescriptor.prototype.isRepeated = function() {
  return this.isRepeated_;
};


/**
 * Returns whether the field described by this descriptor is required.
 * @return {boolean} Whether the field is required.
 */
goog.proto2.FieldDescriptor.prototype.isRequired = function() {
  return this.isRequired_;
};


/**
 * Returns whether the field described by this descriptor is optional.
 * @return {boolean} Whether the field is optional.
 */
goog.proto2.FieldDescriptor.prototype.isOptional = function() {
  return !this.isRepeated_ && !this.isRequired_;
};
