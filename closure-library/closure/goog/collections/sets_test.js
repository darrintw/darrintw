/**
 * @license
 * Copyright The Closure Library Authors.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileOverview Unit tests for goog.collections.set.
 */

goog.module('goog.collections.setsTest');
goog.setTestOnly('goog.collections.setsTest');

const sets = goog.require('goog.collections.sets');
const testSuite = goog.require('goog.testing.testSuite');

/** Yield of the given arguments in order. */
function* yieldArguments(...args) {
  for (const arg of args) {
    yield arg;
  }
}

/** Produce an empty generator. */
function* emptyGenerator() {}

testSuite({
  testIntersection() {
    // arrays
    assertSameElements([2], sets.intersection(new Set([1, 2]), [2, 3]));
    assertSameElements([], sets.intersection(new Set([]), []));
    assertSameElements([1], sets.intersection(new Set([1, 1, 1]), [1, 1]));

    // generators
    assertSameElements(
        [2], sets.intersection(new Set([1, 2]), yieldArguments(2, 3)));
    assertSameElements([], sets.intersection(new Set([]), emptyGenerator()));
    assertSameElements(
        [1], sets.intersection(new Set([1, 1, 1]), yieldArguments(1, 1)));

    // sets
    assertSameElements(
        [2], sets.intersection(new Set([1, 2]), new Set([2, 3])));
    assertSameElements([], sets.intersection(new Set([]), new Set()));
    assertSameElements(
        [1], sets.intersection(new Set([1, 1, 1]), new Set([1, 1])));
  },

  testUnion() {
    // arrays
    assertSameElements([1, 2, 3], sets.union(new Set([1, 2]), [2, 3]));
    assertSameElements([], sets.union(new Set([]), []));
    assertSameElements([1], sets.union(new Set([1, 1, 1]), [1, 1]));

    // generators
    assertSameElements(
        [1, 2, 3], sets.union(new Set([1, 2]), yieldArguments(2, 3)));
    assertSameElements([], sets.union(new Set([]), emptyGenerator()));
    assertSameElements(
        [1], sets.union(new Set([1, 1, 1]), yieldArguments(1, 1)));

    // sets
    assertSameElements([1, 2, 3], sets.union(new Set([1, 2]), new Set([2, 3])));
    assertSameElements([], sets.union(new Set([]), new Set()));
    assertSameElements([1], sets.union(new Set([1, 1, 1]), new Set([1, 1])));
  },

  testDifference() {
    // arrays
    assertSameElements([1], sets.difference(new Set([1, 2]), [2, 3]));
    assertSameElements([], sets.difference(new Set([]), []));
    assertSameElements([], sets.difference(new Set([1, 1, 1]), [1, 1]));

    // generators
    assertSameElements(
        [1], sets.difference(new Set([1, 2]), yieldArguments(2, 3)));
    assertSameElements([], sets.difference(new Set([]), emptyGenerator()));
    assertSameElements(
        [], sets.difference(new Set([1, 1, 1]), yieldArguments(1, 1)));

    // sets
    assertSameElements([1], sets.difference(new Set([1, 2]), new Set([2, 3])));
    assertSameElements([], sets.difference(new Set([]), new Set()));
    assertSameElements(
        [], sets.difference(new Set([1, 1, 1]), new Set([1, 1])));
  },

  testSymmetricDifference() {
    // sets (only sets are accepted for symmetricDifference)
    assertSameElements(
        [1, 3], sets.symmetricDifference(new Set([1, 2]), new Set([2, 3])));
    assertSameElements([], sets.symmetricDifference(new Set([]), new Set()));
    assertSameElements(
        [], sets.symmetricDifference(new Set([1, 1, 1]), new Set([1, 1])));
  },
});
