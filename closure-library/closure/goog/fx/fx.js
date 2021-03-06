// Copyright 2010 The Closure Library Authors. All Rights Reserved.
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
 * @fileOverview Legacy stub for the goog.fx namespace.  Requires the moved
 * namespaces. Animation and easing have been moved to animation.js and
 * easing.js.  Users of this stub should move off so we may remove it in the
 * future.
 *
 * @suppress {extraRequire} All the requires in this file are "extra"
 * because this file is not actually using them.
 */

goog.provide('goog.fx');

goog.require('goog.asserts');
goog.require('goog.fx.Animation');
goog.require('goog.fx.Animation.EventType');
goog.require('goog.fx.Animation.State');
goog.require('goog.fx.AnimationEvent');
goog.require('goog.fx.Transition.EventType');
goog.require('goog.fx.easing');
