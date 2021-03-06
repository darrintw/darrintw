// Copyright 2011 The Closure Library Authors. All Rights Reserved.
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
 * @fileOverview An XhrIo pool that uses a single mock XHR object for testing.
 */

goog.setTestOnly('goog.testing.net.XhrIoPool');

// TODO(user): We're trying to migrate all ES5 subclasses of Closure
// Library to ES6. In ES6 this cannot be referenced before super is called. This
// file has at least one this before a super call (in ES5) and cannot be
// automatically upgraded to ES6 as a result. Please fix this if you have a
// chance. Note: This can sometimes be caused by not calling the super
// constructor at all. You can run the conversion tool yourself to see what it
// does on this file: blaze run //javascript/refactoring/es6_classes:convert.

goog.provide('goog.testing.net.XhrIoPool');

goog.require('goog.net.XhrIoPool');
goog.require('goog.testing.net.XhrIo');



/**
 * A pool containing a single mock XhrIo object.
 *
 * @param {goog.testing.net.XhrIo=} opt_xhr The mock XhrIo object.
 * @constructor
 * @extends {goog.net.XhrIoPool}
 * @final
 */
goog.testing.net.XhrIoPool = function(opt_xhr) {
  /**
   * The mock XhrIo object.
   * @type {!goog.testing.net.XhrIo}
   * @private
   */
  this.xhr_ = opt_xhr || new goog.testing.net.XhrIo();

  // Run this after setting xhr_ because xhr_ is used to initialize the pool.
  goog.testing.net.XhrIoPool.base(this, 'constructor', undefined, 1, 1);
};
goog.inherits(goog.testing.net.XhrIoPool, goog.net.XhrIoPool);


/**
 * @override
 * @suppress {invalidCasts}
 */
goog.testing.net.XhrIoPool.prototype.createObject = function() {
  return (/** @type {!goog.net.XhrIo} */ (this.xhr_));
};


/**
 * Get the mock XhrIo used by this pool.
 *
 * @return {!goog.testing.net.XhrIo} The mock XhrIo.
 */
goog.testing.net.XhrIoPool.prototype.getXhr = function() {
  return this.xhr_;
};
