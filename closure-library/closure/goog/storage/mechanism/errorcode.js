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
 * @fileOverview Defines error codes to be thrown by storage mechanisms.
 */

goog.provide('goog.storage.mechanism.ErrorCode');


/**
 * Errors thrown by storage mechanisms.
 * @enum {string}
 */
goog.storage.mechanism.ErrorCode = {
  INVALID_VALUE: 'Storage mechanism: Invalid value was encountered',
  QUOTA_EXCEEDED: 'Storage mechanism: Quota exceeded',
  STORAGE_DISABLED: 'Storage mechanism: Storage disabled'
};
