// Copyright 2017 The Closure Library Authors. All Rights Reserved.
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

/** @fileOverview Tests for {@link goog.html.sanitizer.ElementWeakMap} */

goog.module('goog.html.sanitizer.ElementWeakMapTest');
goog.setTestOnly();

const ElementWeakMap = goog.require('goog.html.sanitizer.ElementWeakMap');
const testSuite = goog.require('goog.testing.testSuite');
const userAgent = goog.require('goog.userAgent');

/** @const {boolean} */
const ELEMENTWEAKMAP_SUPPORTED = !userAgent.IE || document.documentMode >= 10;

testSuite({
  testBasic() {
    if (!ELEMENTWEAKMAP_SUPPORTED) {
      return;
    }
    const el1 = document.createElement('a');
    const el2 = document.createElement('b');
    const el3 = document.createElement('a');
    const weakMap = ElementWeakMap.newWeakMap();
    weakMap.set(el1, 1);
    weakMap.set(el2, 2);

    assertEquals(1, weakMap.get(el1));
    assertEquals(2, weakMap.get(el2));
    assertUndefined(weakMap.get(el3));
  },

  testDuplicates() {
    if (!ELEMENTWEAKMAP_SUPPORTED) {
      return;
    }
    const el1 = document.createElement('a');
    const el2 = document.createElement('a');
    const weakMap = ElementWeakMap.newWeakMap();
    weakMap.set(el1, 1);
    weakMap.set(el1, 2);

    assertEquals(2, weakMap.get(el1));
    assertUndefined(weakMap.get(el2));
  },

  testClear() {
    if (!ELEMENTWEAKMAP_SUPPORTED) {
      return;
    }
    const el = document.createElement('a');
    const weakMap = ElementWeakMap.newWeakMap();
    weakMap.set(el, 1);
    weakMap.set(el, 2);

    if (weakMap.clear) {
      weakMap.clear();
    }
  }
});
