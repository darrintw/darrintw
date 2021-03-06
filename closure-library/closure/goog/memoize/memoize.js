/**
 * @license
 * Copyright The Closure Library Authors.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileOverview Tool for caching the result of expensive deterministic
 * functions.
 *
 * @see http://en.wikipedia.org/wiki/Memoization
 */

goog.provide('goog.memoize');


/**
 * Decorator around functions that caches the inner function's return values.
 *
 * To cache parameterless functions, see goog.functions.cacheReturnValue.
 *
 * @param {Function} f The function to wrap. Its return value may only depend
 *     on its arguments and 'this' context. There may be further restrictions
 *     on the arguments depending on the capabilities of the serializer used.
 * @param {function(number, Object): string=} opt_serializer A function to
 *     serialize f's arguments. It must have the same signature as
 *     goog.memoize.simpleSerializer. It defaults to that function.
 * @return {!Function} The wrapped function.
 */
goog.memoize = function(f, opt_serializer) {
  const serializer = opt_serializer || goog.memoize.simpleSerializer;

  return (/**
           * @this {Object} The object whose function is being wrapped.
           * @return {?} the return value of the original function.
           */
          function() {
            if (goog.memoize.ENABLE_MEMOIZE) {
              // In the strict mode, when this function is called as a global
              // function, the value of 'this' is undefined instead of a global
              // object. See:
              // https://developer.mozilla.org/en/JavaScript/Strict_mode
              // Otherwise, if memoize wraps a method of an object, `this` will
              // be the context object, causing memoize to cache its values on
              // the object instance, instead of on the global object.
              // This (ha!) is a very surprising API, but retained for backwards
              // compatibility.
              const thisOrGlobal = this || goog.global;
              // Maps the serialized list of args to the corresponding return
              // value.
              const cache = thisOrGlobal[goog.memoize.CACHE_PROPERTY_] ||
                  (thisOrGlobal[goog.memoize.CACHE_PROPERTY_] = {});
              const key = serializer(goog.getUid(f), arguments);
              return cache.hasOwnProperty(key) ?
                  cache[key] :
                  (cache[key] = f.apply(this, arguments));
            } else {
              return f.apply(this, arguments);
            }
          });
};


/**
 * @define {boolean} Flag to disable memoization in unit tests.
 */
goog.memoize.ENABLE_MEMOIZE = goog.define('goog.memoize.ENABLE_MEMOIZE', true);


/**
 * Clears the memoization cache on the given object.
 * @param {Object} cacheOwner The owner of the cache. This is the `this`
 *     context of the memoized function.
 */
goog.memoize.clearCache = function(cacheOwner) {
  cacheOwner[goog.memoize.CACHE_PROPERTY_] = {};
};


/**
 * Name of the property used by goog.memoize as cache.
 * @type {string}
 * @private
 */
goog.memoize.CACHE_PROPERTY_ = 'closure_memoize_cache_';


/**
 * Simple and fast argument serializer function for goog.memoize.
 * Supports string, number, boolean, null and undefined arguments. Doesn't
 * support \x0B characters in the strings.
 * @param {number} functionUid Unique identifier of the function whose result
 *     is cached.
 * @param {?{length:number}} args The arguments that the function to memoize is
 *     called with. Note: it is an array-like object, because it supports
 *     indexing and has the length property.
 * @return {string} The list of arguments with type information concatenated
 *     with the functionUid argument, serialized as \x0B-separated string.
 */
goog.memoize.simpleSerializer = function(functionUid, args) {
  const context = [functionUid];
  for (let i = args.length - 1; i >= 0; --i) {
    context.push(typeof args[i], args[i]);
  }
  return context.join('\x0B');
};
