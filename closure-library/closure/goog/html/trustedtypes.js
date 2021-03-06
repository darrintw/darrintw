// Copyright 2018 The Closure Library Authors. All Rights Reserved.
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
 * @fileOverview Policy to convert strings to Trusted Types. See
 * https://github.com/WICG/trusted-types for details.
 *
 */

goog.provide('goog.html.trustedtypes');

/** @package @const {?TrustedTypePolicy} */
goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY =
    goog.TRUSTED_TYPES_POLICY_NAME ?
    goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + '#html') :
    null;
