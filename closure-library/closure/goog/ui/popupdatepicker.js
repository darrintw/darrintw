// Copyright 2007 The Closure Library Authors. All Rights Reserved.
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
 * @fileOverview Popup Date Picker implementation.  Pairs a goog.ui.DatePicker
 * with a goog.ui.Popup allowing the DatePicker to be attached to elements.
 *
 * @see ../demos/popupdatepicker.html
 */

goog.provide('goog.ui.PopupDatePicker');

goog.require('goog.events.EventType');
goog.require('goog.positioning.AnchoredViewportPosition');
goog.require('goog.positioning.Corner');
goog.require('goog.style');
goog.require('goog.ui.Component');
goog.require('goog.ui.DatePicker');
goog.require('goog.ui.Popup');
goog.require('goog.ui.PopupBase');



/**
 * Popup date picker widget. Fires goog.ui.PopupBase.EventType.SHOW or HIDE
 * events when its visibility changes.
 *
 * @param {goog.ui.DatePicker=} opt_datePicker Optional DatePicker.  This
 *     enables the use of a custom date-picker instance.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @extends {goog.ui.Component}
 * @constructor
 */
goog.ui.PopupDatePicker = function(opt_datePicker, opt_domHelper) {
  goog.ui.Component.call(this, opt_domHelper);

  this.datePicker_ = opt_datePicker || new goog.ui.DatePicker();

  /**
   * Whether to reposition the popup when the date picker size changes (due to
   * going to a different month with more weeks) so that all weeks are visible
   * in the viewport.
   * @private {boolean}
   */
  this.keepAllWeeksInViewport_ = false;
};
goog.inherits(goog.ui.PopupDatePicker, goog.ui.Component);
goog.tagUnsealableClass(goog.ui.PopupDatePicker);


/**
 * Instance of a date picker control.
 * @type {goog.ui.DatePicker?}
 * @private
 */
goog.ui.PopupDatePicker.prototype.datePicker_ = null;


/**
 * Instance of goog.ui.Popup used to manage the behavior of the date picker.
 * @type {goog.ui.Popup?}
 * @private
 */
goog.ui.PopupDatePicker.prototype.popup_ = null;


/**
 * Reference to the element that triggered the last popup.
 * @type {?Element}
 * @private
 */
goog.ui.PopupDatePicker.prototype.lastTarget_ = null;


/**
 * Whether the date picker can move the focus to its key event target when it
 * is shown.  The default is true.  Setting to false can break keyboard
 * navigation, but this is needed for certain scenarios, for example the
 * toolbar menu in trogedit which can't have the selection changed.
 * @type {boolean}
 * @private
 */
goog.ui.PopupDatePicker.prototype.allowAutoFocus_ = true;


/** @override */
goog.ui.PopupDatePicker.prototype.createDom = function() {
  goog.ui.PopupDatePicker.superClass_.createDom.call(this);
  this.getElement().className = goog.getCssName('goog-popupdatepicker');
  this.popup_ = new goog.ui.Popup(this.getElement());
  this.popup_.setParentEventTarget(this);
};


/**
 * @return {boolean} Whether the date picker is visible.
 */
goog.ui.PopupDatePicker.prototype.isVisible = function() {
  return this.popup_ ? this.popup_.isVisible() : false;
};


/** @override */
goog.ui.PopupDatePicker.prototype.enterDocument = function() {
  goog.ui.PopupDatePicker.superClass_.enterDocument.call(this);
  // Create the DatePicker, if it isn't already.
  // Done here as DatePicker assumes that the element passed to it is attached
  // to a document.
  if (!this.datePicker_.isInDocument()) {
    var el = this.getElement();
    // Make it initially invisible
    el.style.visibility = 'hidden';
    goog.style.setElementShown(el, false);
    this.datePicker_.decorate(el);
  }
  this.getHandler()
      .listen(
          this.datePicker_, goog.ui.DatePicker.Events.CHANGE,
          this.onDateChanged_)
      .listen(
          this.datePicker_, goog.ui.DatePicker.Events.SELECT,
          this.onDateSelected_);
};


/** @override */
goog.ui.PopupDatePicker.prototype.disposeInternal = function() {
  goog.ui.PopupDatePicker.superClass_.disposeInternal.call(this);
  if (this.popup_) {
    this.popup_.dispose();
    this.popup_ = null;
  }
  this.datePicker_.dispose();
  this.datePicker_ = null;
  this.lastTarget_ = null;
};


/**
 * DatePicker cannot be used to decorate pre-existing html, since they're
 * not based on Components.
 * @param {Element} element Element to decorate.
 * @return {boolean} Returns always false.
 * @override
 */
goog.ui.PopupDatePicker.prototype.canDecorate = function(element) {
  return false;
};


/**
 * @return {goog.ui.DatePicker} The date picker instance.
 */
goog.ui.PopupDatePicker.prototype.getDatePicker = function() {
  return this.datePicker_;
};

/**
 * @return {?goog.ui.Popup} The popup instance.
 */
goog.ui.PopupDatePicker.prototype.getPopup = function() {
  return this.popup_;
};


/**
 * @return {goog.date.Date?} The selected date, if any.  See
 *     goog.ui.DatePicker.getDate().
 */
goog.ui.PopupDatePicker.prototype.getDate = function() {
  return this.datePicker_.getDate();
};


/**
 * Sets the selected date.  See goog.ui.DatePicker.setDate().
 * @param {goog.date.Date?} date The date to select.
 */
goog.ui.PopupDatePicker.prototype.setDate = function(date) {
  this.datePicker_.setDate(date);
};


/**
 * @return {Element} The last element that triggered the popup.
 */
goog.ui.PopupDatePicker.prototype.getLastTarget = function() {
  return this.lastTarget_;
};


/**
 * Attaches the popup date picker to an element.
 * @param {Element} element The element to attach to.
 */
goog.ui.PopupDatePicker.prototype.attach = function(element) {
  this.getHandler().listen(
      element, goog.events.EventType.MOUSEDOWN, this.showPopup_);
};


/**
 * Detatches the popup date picker from an element.
 * @param {Element} element The element to detach from.
 */
goog.ui.PopupDatePicker.prototype.detach = function(element) {
  this.getHandler().unlisten(
      element, goog.events.EventType.MOUSEDOWN, this.showPopup_);
};


/**
 * Sets whether the date picker can automatically move focus to its key event
 * target when it is set to visible.
 * @param {boolean} allow Whether to allow auto focus.
 */
goog.ui.PopupDatePicker.prototype.setAllowAutoFocus = function(allow) {
  this.allowAutoFocus_ = allow;
};


/**
 * @return {boolean} Whether the date picker can automatically move focus to
 * its key event target when it is set to visible.
 */
goog.ui.PopupDatePicker.prototype.getAllowAutoFocus = function() {
  return this.allowAutoFocus_;
};


/**
 * Sets whether to reposition the popup when the date picker size changes so
 * that all weeks are visible in the viewport.
 * @param {boolean} keepAllWeeksInViewport
 */
goog.ui.PopupDatePicker.prototype.setKeepAllWeeksInViewport = function(
    keepAllWeeksInViewport) {
  this.keepAllWeeksInViewport_ = keepAllWeeksInViewport;
};


/**
 * @return {boolean} Whether to reposition the popup when the date picker size
 *     changes so that all weeks are visible in the viewport.
 */
goog.ui.PopupDatePicker.prototype.getKeepAllWeeksInViewport = function() {
  return this.keepAllWeeksInViewport_;
};


/**
 * Show the popup at the bottom-left corner of the specified element.
 * @param {Element} element Reference element for displaying the popup -- popup
 *     will appear at the bottom-left corner of this element.
 * @param {boolean=} opt_keepDate Whether to keep the date picker's current
 *     date. If false, the date is set to null. Defaults to false.
 */
goog.ui.PopupDatePicker.prototype.showPopup = function(element, opt_keepDate) {
  this.lastTarget_ = element;
  this.popup_.setPosition(new goog.positioning.AnchoredViewportPosition(
      element, goog.positioning.Corner.BOTTOM_START, true));

  // Don't listen to date changes while we're setting up the popup so we don't
  // have to worry about change events when we call setDate(). Don't listen to
  // grid size changes since the popup will position itself when we call
  // setVisible().
  this.getHandler()
      .unlisten(
          this.datePicker_, goog.ui.DatePicker.Events.CHANGE,
          this.onDateChanged_)
      .unlisten(
          this.datePicker_, goog.ui.DatePicker.Events.SELECT,
          this.onDateSelected_)
      .unlisten(
          this.datePicker_, goog.ui.DatePicker.Events.GRID_SIZE_INCREASE,
          this.onGridSizeIncrease_);

  var keepDate = !!opt_keepDate;
  if (!keepDate) {
    this.datePicker_.setDate(null);
  }

  // Forward the change event onto our listeners.  Done before we start
  // listening to date changes again, so that listeners can change the date
  // without firing more events.
  this.dispatchEvent(goog.ui.PopupBase.EventType.SHOW);

  this.popup_.setVisible(true);
  if (this.allowAutoFocus_) {
    this.getElement().focus();  // Our element contains the date picker.
  }

  this.getHandler()
      .listen(
          this.datePicker_, goog.ui.DatePicker.Events.CHANGE,
          this.onDateChanged_)
      .listen(
          this.datePicker_, goog.ui.DatePicker.Events.SELECT,
          this.onDateSelected_);

  if (this.keepAllWeeksInViewport_) {
    this.getHandler().listen(
        this.datePicker_, goog.ui.DatePicker.Events.GRID_SIZE_INCREASE,
        this.onGridSizeIncrease_);
  }
};


/**
 * Handles click events on the targets and shows the date picker.
 * @param {goog.events.Event} event The click event.
 * @private
 */
goog.ui.PopupDatePicker.prototype.showPopup_ = function(event) {
  this.showPopup(/** @type {Element} */ (event.currentTarget));
};


/**
 * Hides this popup.
 */
goog.ui.PopupDatePicker.prototype.hidePopup = function() {
  this.popup_.setVisible(false);
  if (this.allowAutoFocus_ && this.lastTarget_) {
    this.lastTarget_.focus();
  }
};


/**
 * Called when date selection is made.
 *
 * @param {!goog.events.Event} event The date change event.
 * @private
 */
goog.ui.PopupDatePicker.prototype.onDateSelected_ = function(event) {
  this.hidePopup();

  // Forward the change event onto our listeners.
  this.dispatchEvent(event);
};


/**
 * Called when the date is changed.
 *
 * @param {!goog.events.Event} event The date change event.
 * @private
 */
goog.ui.PopupDatePicker.prototype.onDateChanged_ = function(event) {
  // Forward the change event onto our listeners.
  this.dispatchEvent(event);
};


/**
 * Called when the container DatePicker's size increases.
 * @private
 */
goog.ui.PopupDatePicker.prototype.onGridSizeIncrease_ = function() {
  this.popup_ && this.popup_.reposition();
};
