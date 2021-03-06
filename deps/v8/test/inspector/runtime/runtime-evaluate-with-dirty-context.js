// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

InspectorTest.log('Checks that Runtime.evaluate works with dirty context.');
InspectorTest.setupInjectedScriptEnvironment();
Protocol.Runtime.enable();
Protocol.Runtime.onConsoleAPICalled(InspectorTest.logMessage);
Protocol.Runtime.evaluate({expression: 'console.log(42)'})
  .then(InspectorTest.logMessage)
  .then(InspectorTest.completeTest);
