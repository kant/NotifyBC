(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{426:function(e,t,s){"use strict";s.r(t);var o=s(42),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"automated-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automated-testing"}},[e._v("#")]),e._v(" Automated Testing")]),e._v(" "),s("p",[e._v("Test framework is created with and follows "),s("a",{attrs:{href:"https://jasmine.github.io/2.6/node.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jasmine 2.6"),s("OutboundLink")],1),e._v(" convention. To launch test, run "),s("code",[e._v("npm test")]),e._v(". To debug test scripts in IDE such as WebStorm, create a Node.js run/debug config, set "),s("em",[e._v("cwd")]),e._v(" to project root and script to "),s("em",[e._v("/node_modules/jasmine/bin/jasmine.js")]),e._v(".")]),e._v(" "),s("p",[e._v("Jenkins CI runs tests as part of the build, therefore all test scripts should be able to run unattended, headless, quickly and depend only on local resources.")]),e._v(" "),s("h3",{attrs:{id:"writing-test-specs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-test-specs"}},[e._v("#")]),e._v(" Writing Test Specs")]),e._v(" "),s("p",[e._v("Thanks to "),s("a",{attrs:{href:"https://github.com/visionmedia/supertest",target:"_blank",rel:"noopener noreferrer"}},[e._v("supertest"),s("OutboundLink")],1),e._v(" and LoopBack's "),s("a",{attrs:{href:"https://loopback.io/doc/en/lb3/Memory-connector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("memory database connector"),s("OutboundLink")],1),e._v(", test specs can be written to cover nearly end-to-end request processing workflow (only "),s("em",[e._v("sendMail")]),e._v(" and "),s("em",[e._v("sendSMS")]),e._v(" need to be mocked). This allows test specs to anchor onto business requirements rather than program units such as functions or files, resulting in regression tests that are more resilient to code refactoring.\nWhenever possible, a test spec should be written to")]),e._v(" "),s("ul",[s("li",[e._v("start at a processing phase as early as possible. For example, to test a REST end point, start with the HTTP user request.")]),e._v(" "),s("li",[e._v("assert outcome of a processing phase as late and down below as possible - the HTTP respone body/code, the database record created, for example.")]),e._v(" "),s("li",[e._v("avoid asserting middleware function input/output to facilitate code refactoring.")]),e._v(" "),s("li",[e._v("mock email/sms sending function (implemented by default). Inspect the input of the function, or at least assert the function has been called.")])]),e._v(" "),s("h2",{attrs:{id:"code-coverage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-coverage"}},[e._v("#")]),e._v(" Code Coverage")]),e._v(" "),s("p",[e._v("After running "),s("code",[e._v("npm test")]),e._v(", Istanbul code coverage report is generated in git ignored folder "),s("em",[e._v("/coverage")]),e._v(".  "),s("em",[e._v("/coverage/lcov-report/index.html")]),e._v(" is the report entry point.")])])}),[],!1,null,null,null);t.default=r.exports}}]);