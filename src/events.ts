/**
 * Copyright 2019 Google Inc. All rights reserved.
 * Modifications copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const Events = {
  Browser: {
    Disconnected: 'disconnected'
  },

  BrowserContext: {
    Close: 'close'
  },

  BrowserServer: {
    Close: 'close',
  },

  Page: {
    Close: 'close',
    Console: 'console',
    Dialog: 'dialog',
    FileChooser: 'filechooser',
    DOMContentLoaded: 'domcontentloaded',
    // Can't use just 'error' due to node.js special treatment of error events.
    // @see https://nodejs.org/api/events.html#events_error_events
    PageError: 'pageerror',
    Request: 'request',
    Response: 'response',
    RequestFailed: 'requestfailed',
    RequestFinished: 'requestfinished',
    FrameAttached: 'frameattached',
    FrameDetached: 'framedetached',
    FrameNavigated: 'framenavigated',
    Load: 'load',
    Popup: 'popup',
    WorkerCreated: 'workercreated',
    WorkerDestroyed: 'workerdestroyed',
  },
};
