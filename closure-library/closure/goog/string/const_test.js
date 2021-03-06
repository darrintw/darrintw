// Copyright 2013 The Closure Library Authors. All Rights Reserved.
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

/** @fileOverview Unit tests for Const. */

goog.module('goog.string.constTest');
goog.setTestOnly();

const Const = goog.require('goog.string.Const');
const testSuite = goog.require('goog.testing.testSuite');

testSuite({
  testConst() {
    const constString = Const.from('blah');
    const extracted = Const.unwrap(constString);
    assertEquals('blah', extracted);
    assertEquals('blah', constString.getTypedStringValue());
    assertEquals('Const{blah}', String(constString));

    // Interface marker is present.
    assertTrue(constString.implementsGoogStringTypedString);
  },

  /** @suppress {checkTypes} */
  testUnwrap() {
    const evil = {};
    evil.constStringValueWithSecurityContract__googStringSecurityPrivate_ =
        'evil';
    evil.CONST_STRING_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = {};

    const exception = assertThrows(() => {
      Const.unwrap(evil);
    });
    assertTrue(exception.message.indexOf('expected object of type Const') > 0);
  },

  testExplicitConstructorInvocation() {
    assertEquals('', Const.unwrap(new Const({}, 'foo')));
  },

  testBackwardsCompatibility() {
    assertEquals('', Const.unwrap(new Const()));
  },
});
