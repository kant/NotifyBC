(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{373:function(t,e,a){"use strict";a.r(e);var s=a(42),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("The notification API encapsulates the backend workflow of staging and dispatching a message to targeted user after receiving the message from event source.")]),t._v(" "),a("p",[t._v("Depending on whether an API call comes from user browser as a user request or from an authorized server application as an admin request, "),a("em",[t._v("NotifyBC")]),t._v(" applies different permissions. Admin request allows full CRUD operations. An authenticated user request, on the other hand, are only allowed to get a list of in-app pull notifications targeted to the current user and changing the state of the notifications. An unauthenticated user request can not access any  API.")]),t._v(" "),a("p",[t._v("When a notification is created by the event source server application, the message is saved to database prior to responding to API caller. In addition, for push notification, the message is delivered immediately, i.e. the API call is synchronous. For in-app pull notification, the message, which by default is in state "),a("em",[t._v("new")]),t._v(", can be retrieved later on by browser user request. A user request can only get the list of in-app messages targeted to the current user. A user request can then change the message state to "),a("em",[t._v("read")]),t._v(" or "),a("em",[t._v("deleted")]),t._v(" depending on user action. A deleted message cannot be retrieved subsequently by user requests, but the state can be updated given the correct "),a("em",[t._v("id")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[a("i",[t._v("Deleted")]),t._v(" message is still kept in database.")]),t._v(" "),a("p",[a("i",[t._v("NotifyBC")]),t._v(" provides API for deleting a notification. For the purpose of auditing and recovery, this API only marks the "),a("i",[t._v("state")]),t._v(" field as deleted rather than deleting the record from database.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("ProTips™ undo in-app notification deletion within a session")]),t._v(" "),a("p",[t._v('Because "deleted" message is still kept in database, you can implement undo feature for in-app notification as long as the message id is retained prior to deletion within the current session. To undo, call '),a("a",{attrs:{href:"#update-a-notification"}},[t._v("update")]),t._v(" API to set desired state.")])]),t._v(" "),a("p",[t._v("In-app pull notification also supports message expiration by setting a date in field "),a("em",[t._v("validTill")]),t._v(". An expired message cannot be retrieved by user requests.")]),t._v(" "),a("p",[t._v("A message, regardless of push or pull, can be unicast or broadcast. A unicast message is intended for an individual user whereas a broadcast message is intended for all confirmed subscribers of a service. A unicast message must have field "),a("em",[t._v("userChannelId")]),t._v(" populated. The value of "),a("em",[t._v("userChannelId")]),t._v(" is channel dependent. In the case of email for example, this would be user's email address. A broadcast message must set "),a("em",[t._v("isBroadcast")]),t._v(" to true and leave "),a("em",[t._v("userChannelId")]),t._v(" empty.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Why field "),a("i",[t._v("isBroadcast")]),t._v("?")]),t._v(" "),a("p",[t._v("Unicast and broadcast message can be distinguished by whether field "),a("i",[t._v("userChannelId")]),t._v(" is empty or not alone. So why the extra field "),a("i",[t._v("isBroadcast")]),t._v("? This is in order to prevent inadvertent marking a unicast message broadcast by omitting "),a("i",[t._v("userChannelId")]),t._v(" or populating  it with empty value. The precaution is necessary because in-app notifications may contain personalized and confidential information.")])]),t._v(" "),a("p",[a("em",[t._v("NotifyBC")]),t._v(" ensures the state of an in-app broadcast message is isolated by user, so that for example, a message read by one user is still new to another user. To achieve this, "),a("em",[t._v("NotifyBC")]),t._v(" maintains two internal fields of array type - "),a("em",[t._v("readBy")]),t._v(" and "),a("em",[t._v("deletedBy")]),t._v(". When a user request updates the "),a("em",[t._v("state")]),t._v(" field of an in-app broadcast message to "),a("em",[t._v("read")]),t._v(" or "),a("em",[t._v("deleted")]),t._v(", instead of altering the "),a("em",[t._v("state")]),t._v(" field, "),a("em",[t._v("NotifyBC")]),t._v(" appends the current user to "),a("em",[t._v("readBy")]),t._v(" or "),a("em",[t._v("deletedBy")]),t._v(" list. When user request retrieving in-app messages, the "),a("em",[t._v("state")]),t._v(" field of the broadcast message in HTTP response is updated based on whether the user exists in field "),a("em",[t._v("deletedBy")]),t._v(" and "),a("em",[t._v("readBy")]),t._v(". If existing in both fields, "),a("em",[t._v("deletedBy")]),t._v(" takes precedence (the message therefore is not returned). The record in database, meanwhile, is unchanged. Neither field "),a("em",[t._v("deletedBy")]),t._v(" nor "),a("em",[t._v("readBy")]),t._v(" is visible to user request.")]),t._v(" "),a("h2",{attrs:{id:"model-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model-schema"}},[t._v("#")]),t._v(" Model Schema")]),t._v(" "),a("p",[t._v("The API operates on following notification data model fields:\n"),a("table",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Attributes")])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("id")]),t._v(" "),a("p",{staticClass:"description"},[t._v("notification id")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("string, format depends on db")])]),t._v(" "),a("tr",[a("td",[t._v("auto-generated")]),a("td",[t._v("true")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("serviceName")]),t._v(" "),a("p",{staticClass:"description"},[t._v("name of the service")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("true")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("channel")]),t._v(" "),a("p",{staticClass:"description"},[t._v("name of the delivery channel. Valid values: inApp, email, sms.")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("default")]),a("td",[t._v("inApp")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("userChannelId")]),t._v(" "),a("p",{staticClass:"description"},[t._v("user's delivery channel id, for example, email address. For unicast inApp notification, this is authenticated user id. When sending unicast push notification, either "),a("i",[t._v("userChannelId")]),t._v(" or "),a("i",[t._v("userId")]),t._v(" is required.")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("userId")]),t._v(" "),a("p",{staticClass:"description"},[t._v("authenticated user id. When sending unicast push notification, either "),a("i",[t._v("userChannelId")]),t._v(" or "),a("i",[t._v("userId")]),t._v(" is required.")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("state")]),t._v(" "),a("p",{staticClass:"description"},[t._v("state of notification. Valid values: "),a("i",[t._v("new")]),t._v(", "),a("i",[t._v("read")]),t._v(" (inApp only), "),a("i",[t._v("deleted")]),t._v(" (inApp only), "),a("i",[t._v("sent")]),t._v(" (push only) or "),a("i",[t._v("error")]),t._v(". For inApp broadcast notification, if the user has read or deleted the message, the value of this field retrived by admin request will still be new. The state for the user is tracked in fields "),a("i",[t._v("readBy")]),t._v(" and "),a("i",[t._v("deletedBy")]),t._v(" in such case. For user request, the value contains correct state.")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("default")]),a("td",[t._v("new")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("created")]),t._v(" "),a("p",{staticClass:"description"},[t._v("date and time of creation")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("date")])]),t._v(" "),a("tr",[a("td",[t._v("auto-generated")]),a("td",[t._v("true")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("updated")]),t._v(" "),a("p",{staticClass:"description"},[t._v("date and time of last update")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("date")])]),t._v(" "),a("tr",[a("td",[t._v("auto-generated")]),a("td",[t._v("true")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("isBroadcast")]),t._v(" "),a("p",{staticClass:"description"},[t._v("whether it's a broadcast message. A broadcast message should omit "),a("i",[t._v("userChannelId")]),t._v(" and "),a("i",[t._v("userId")]),t._v(", in addition to setting "),a("i",[t._v("isBroadcast")]),t._v(" to true")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("boolean")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("default")]),a("td",[t._v("false")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("skipSubscriptionConfirmationCheck")]),t._v(" "),a("p",{staticClass:"description"},[t._v("When sending unicast push notification, whether or not to verify if the recipient has a confirmed subscription. This field allows subscription information be kept elsewhere and "),a("i",[t._v("NotifyBC")]),t._v(" be used as a unicast push notification gateway only.")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("boolean")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("default")]),a("td",[t._v("false")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("validTill")]),t._v(" "),a("p",{staticClass:"description"},[t._v("expiration date-time of the message. Applicable to inApp notification only.")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("date")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("invalidBefore")]),t._v(" "),a("p",{staticClass:"description"},[t._v("date-time in the future after which the notification can be dispatched.")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("date")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[a("a",{attrs:{name:"field-message"}}),t._v("message")]),t._v(" "),a("div",{staticClass:"description"},[t._v("an object whose child fields are channel dependent:\n"),a("ul",[a("li",[a("div",[t._v("\nfor inApp, "),a("i",[t._v("NotifyBC")]),t._v(" doesn't have any restriction as long as web application can handle the message. "),a("i",[t._v("subject")]),t._v(" and "),a("i",[t._v("body")]),t._v(" are  common examples.\n")])]),t._v(" "),a("li",[a("div",[t._v("\nfor email: "),a("i",[t._v("from, subject, textBody, htmlBody")])]),t._v(" "),a("ul",[a("li",[t._v("type: string")]),t._v(" "),a("li",[t._v("\nthese are email template fields.\n")])])]),t._v(" "),a("li",[a("div",[t._v("\nfor sms: "),a("i",[t._v("textBody")])]),t._v(" "),a("ul",[a("li",[t._v("type: string")]),t._v(" "),a("li",[t._v("\nsms message template.\n")])])])]),t._v(" "),a("a",{attrs:{href:"../overview/#mail-merge"}},[t._v("Mail merge")]),t._v(" is performed on email and sms message templates.\n")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("object")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("true")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("httpHost")]),t._v(" "),a("p",{staticClass:"description"},[t._v("This field is used to replace token "),a("i",[t._v("{http_host}")]),t._v(" in push notification message template during "),a("a",{attrs:{href:"../overview/#mail-merge"}},[t._v("mail merge")]),t._v(" and overrides config "),a("i",[t._v("httpHost")]),t._v(".")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("default")]),a("td",[t._v("<http protocol, host and port of current request> for push notification")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("asyncBroadcastPushNotification")]),t._v(" "),a("div",{staticClass:"description"},[t._v("this field determines if the API call to create an immediate (i.e. not future-dated) broadcast push notification is asynchronous or not. If omitted, the API call is synchronous, i.e. the API call blocks until all subscribers have been processed. If set, valid values and corresponding behaviors are\n"),a("ul",[a("li",[t._v("true - async without callback")]),t._v(" "),a("li",[t._v("false - sync ")]),t._v(" "),a("li",[t._v("a string contain callback url - async with callback of the supplied url upon completion")])])])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("string or boolean")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[a("a",{attrs:{name:"data"}}),t._v("data")]),t._v(" "),a("div",{staticClass:"description"},[t._v("the event that triggers the notification, for example, a RSS feed item when the notification is genenrated automatically by RSS cron job. Field "),a("i",[t._v("data")]),t._v(" serves two purposes\n"),a("ul",[a("li",[t._v("to replace "),a("a",{attrs:{href:"../overview/#dynamic-tokens"}},[t._v("dynamic tokens")]),t._v(" in "),a("i",[t._v("message")]),t._v(" template fields")]),t._v(" "),a("li",[t._v("to match against filter defined in subscription field "),a("a",{attrs:{href:"../api-subscription#broadcastPushNotificationFilter"}},[t._v("broadcastPushNotificationFilter")]),t._v(", if supplied, for broadcast push notificiations to determine if the notification should be delivered to the subscriber")])])])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("object")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("readBy")]),t._v(" "),a("p",{staticClass:"description"},[t._v("this is an internal field to track the list of users who have read an inApp broadcast message. It's not visible to a user request.")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("array")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("auto-generated")]),a("td",[t._v("true")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("deletedBy")]),t._v(" "),a("p",{staticClass:"description"},[t._v("this is an internal field to track the list of users who have marked an inApp broadcast message as deleted. It's not visible to a user request.")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("array")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("auto-generated")]),a("td",[t._v("true")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("failedDispatches")]),t._v(" "),a("p",{staticClass:"description"},[t._v("this is an internal field to track the list of "),a("i",[t._v("subscriptions")]),t._v(" a broadcast push notification failed to dispatch to. It is returned to notification creation API caller.")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("array")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("auto-generated")]),a("td",[t._v("true")])])])])]),t._v(" "),a("tr",[a("td",[a("p",{staticClass:"name"},[t._v("successfulDispatches")]),t._v(" "),a("p",{staticClass:"description"},[t._v("this is an internal field to track the list of "),a("i",[t._v("subscriptions")]),t._v(" a broadcast push notification successfully dispatched to. It is returned to notification creation API caller.")])]),t._v(" "),a("td",[a("table",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("array")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("auto-generated")]),a("td",[t._v("true")])])])])])])]),t._v(" "),a("h2",{attrs:{id:"get-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-notifications"}},[t._v("#")]),t._v(" Get Notifications")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET /notifications\n")])])]),a("ul",[a("li",[t._v("inputs\n"),a("ul",[a("li",[t._v("a filter defining fields, where, include, order, offset, and limit. See "),a("a",{attrs:{href:"https://loopback.io/doc/en/lb3/Querying-data.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Loopback Querying Data"),a("OutboundLink")],1),t._v(" for valid syntax and examples\n"),a("ul",[a("li",[t._v("parameter name: filter")]),t._v(" "),a("li",[t._v("required: false")]),t._v(" "),a("li",[t._v("parameter type: query")]),t._v(" "),a("li",[t._v("data type: object")])])])])]),t._v(" "),a("li",[t._v("outcome\n"),a("ul",[a("li",[t._v("for admin requests, returns unabridged array of notification data matching the filter")]),t._v(" "),a("li",[t._v("for authenticated user requests, in addition to filter, following constraints are imposed on the returned array\n"),a("ul",[a("li",[t._v("only inApp notifications")]),t._v(" "),a("li",[t._v("only non-deleted notifications. For broadcast notification, non-deleted means not marked by current user as deleted")]),t._v(" "),a("li",[t._v("only non-expired notifications")]),t._v(" "),a("li",[t._v("for unicast notifications, only the ones targeted to current user")]),t._v(" "),a("li",[t._v("if current user is in "),a("em",[t._v("readBy")]),t._v(", then the "),a("em",[t._v("state")]),t._v(" is changed to "),a("em",[t._v("read")])]),t._v(" "),a("li",[t._v("the internal field "),a("em",[t._v("readBy")]),t._v(" and "),a("em",[t._v("deletedBy")]),t._v(" are removed")])])]),t._v(" "),a("li",[t._v("forbidden to anonymous user requests")])])])]),t._v(" "),a("h2",{attrs:{id:"get-notification-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-notification-count"}},[t._v("#")]),t._v(" Get Notification Count")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET /notifications/count\n")])])]),a("ul",[a("li",[a("p",[t._v("inputs")]),t._v(" "),a("ul",[a("li",[t._v("a "),a("a",{attrs:{href:"https://loopback.io/doc/en/lb3/Where-filter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("where filter"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("parameter name: filter")]),t._v(" "),a("li",[t._v("required: false")]),t._v(" "),a("li",[t._v("parameter type: query")]),t._v(" "),a("li",[t._v("data type: object")])])])])]),t._v(" "),a("li",[a("p",[t._v("outcome")]),t._v(" "),a("p",[t._v("Validations rules are the same as "),a("em",[t._v("GET /notifications")]),t._v(". If passed, the output is a count of notifications matching the query")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"count"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" <number>\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"create-send-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-send-notifications"}},[t._v("#")]),t._v(" Create/Send Notifications")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST /notifications\n")])])]),a("ul",[a("li",[a("p",[t._v("inputs")]),t._v(" "),a("ul",[a("li",[t._v("an object containing notification data model fields. At a minimum all required fields that don't have a default value must be supplied. Id field should be omitted since it's auto-generated. The API explorer only created an empty object for field "),a("em",[t._v("message")]),t._v(" but you should populate the child fields according to "),a("a",{attrs:{href:"#model-schema"}},[t._v("model schema")]),t._v(" "),a("ul",[a("li",[t._v("parameter name: data")]),t._v(" "),a("li",[t._v("required: true")]),t._v(" "),a("li",[t._v("parameter type: body")]),t._v(" "),a("li",[t._v("data type: object")])])])])]),t._v(" "),a("li",[a("p",[t._v("outcome")]),t._v(" "),a("p",[a("em",[t._v("NotifyBC")]),t._v(" performs following actions in sequence")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("if it's a user request, error is returned")])]),t._v(" "),a("li",[a("p",[t._v("inputs are validated. If validation fails, error is returned. In particular, for unicast push notification, the recipient as identified by either "),a("em",[t._v("userChannelId")]),t._v(" or "),a("em",[t._v("userId")]),t._v(" must have a confirmed subscription if field "),a("em",[t._v("skipSubscriptionConfirmationCheck")]),t._v(" is not set to true. If "),a("em",[t._v("skipSubscriptionConfirmationCheck")]),t._v(" is set to true, then the subscription check is skipped, but in such case the request must contain "),a("em",[t._v("userChannelId")]),t._v(", not "),a("em",[t._v("userId")]),t._v(" as subscription data is not queried to obtain "),a("em",[t._v("userChannelId")]),t._v(" from "),a("em",[t._v("userId")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("for push notification, if field "),a("em",[t._v("httpHost")]),t._v(" is empty, it is populated based on request's http protocol and host.")])]),t._v(" "),a("li",[a("p",[t._v("the notification request is saved to database")])]),t._v(" "),a("li",[a("p",[t._v("if the notification is future-dated, then all subsequent request processing is skipped and response is sent back to user. Steps 7-11 below will be carried out later on by the cron job when the notification becomes current.")])]),t._v(" "),a("li",[a("p",[t._v("if it's an async broadcast push notification, then response is sent back to user but steps 7-12 below is processed separately")])]),t._v(" "),a("li",[a("p",[t._v("for unicast push notification, the message is sent to targeted user; for broadcast push notification, following actions are performed:")]),t._v(" "),a("ol",[a("li",[t._v("number of confirmed subscriptions is retrieved")]),t._v(" "),a("li",[t._v("the subscriptions are partitioned and processed concurrently as described in config section "),a("RouterLink",{attrs:{to:"/docs/config-notification/#broadcast-push-notification-task-concurrency"}},[t._v("Broadcast Push Notification Task Concurrency")])],1),t._v(" "),a("li",[t._v("when processing an individual subscription, if the subscription has filter rule defined in field "),a("em",[t._v("broadcastPushNotificationFilter")]),t._v(" and notification contains field "),a("em",[t._v("data")]),t._v(", then the data is matched against the filter rule. Notification message is only sent if there is a match.")])]),t._v(" "),a("p",[t._v("In both cases, mail merge is performed on messages.")])]),t._v(" "),a("li",[a("p",[t._v("the state of push notification is updated to "),a("em",[t._v("sent")]),t._v(" or "),a("em",[t._v("error")]),t._v(" depending on sending status. For broadcast push notification, the delivery could be failed only for a subset of users. In such case, the field "),a("em",[t._v("failedDispatches")]),t._v(" contains a list of objects of {userChannelId, subscriptionId, error} the message failed to deliver to, but the state will still be set to "),a("em",[t._v("sent")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("For broadcast push notifications, if "),a("em",[t._v("logSuccessfulBroadcastDispatches")]),t._v(" is "),a("em",[t._v("true")]),t._v(", then field "),a("em",[t._v("successfulDispatches")]),t._v(" is populated with a list of "),a("em",[t._v("subscriptionId")]),t._v(" of the successful dispatches.")])]),t._v(" "),a("li",[a("p",[t._v("For push notifications, the bounce records of successful dispatches are updated")])]),t._v(" "),a("li",[a("p",[t._v("the updated notification is saved back to database")])]),t._v(" "),a("li",[a("p",[t._v("if it's an async broadcast push notification with a callback url, then the url is called with POST verb containing the notification with updated status as the request body")])]),t._v(" "),a("li",[a("p",[t._v("for synchronous notification, the saved record is returned unless there is an error saving to database, in which case error is returned")])])])]),t._v(" "),a("li",[a("p",[t._v("example")]),t._v(" "),a("p",[t._v("To send a unicast email push notification, copy and paste following json object to the data value box in API explorer, change email addresses as needed, and click "),a("em",[t._v("Try it out!")]),t._v(" button:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serviceName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"education"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userChannelId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo@bar.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skipSubscriptionConfirmationCheck"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"from"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no_reply@bar.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subject"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"textBody"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a test"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"channel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("As the result, "),a("em",[t._v("foo@bar.com")]),t._v(" should receive an email notification even if the user is not a confirmed subscriber, and following json object is returned to caller upon sending the email successfully:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serviceName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"education"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sent"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userChannelId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo@bar.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skipSubscriptionConfirmationCheck"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"from"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no_reply@bar.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subject"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"textBody"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a test"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-09-30T20:37:06.011Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-09-30T20:37:06.011Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"channel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isBroadcast"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"57eeccf23427b61a4820775e"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"update-a-notification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-a-notification"}},[t._v("#")]),t._v(" Update a Notification")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PATCH /notifications/{id}\n")])])]),a("p",[t._v("This API is mainly used for updating an inApp notification.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("inputs")]),t._v(" "),a("ul",[a("li",[t._v("notification id\n"),a("ul",[a("li",[t._v("parameter name: id")]),t._v(" "),a("li",[t._v("required: true")]),t._v(" "),a("li",[t._v("parameter type: path")]),t._v(" "),a("li",[t._v("data type: string")])])]),t._v(" "),a("li",[t._v("an object containing fields to be updated.\n"),a("ul",[a("li",[t._v("parameter name: data")]),t._v(" "),a("li",[t._v("required: true")]),t._v(" "),a("li",[t._v("parameter type: body")]),t._v(" "),a("li",[t._v("data type: object")])])])])]),t._v(" "),a("li",[a("p",[t._v("outcome")]),t._v(" "),a("ul",[a("li",[t._v("for user requests, "),a("em",[t._v("NotifyBC")]),t._v(" performs following actions in sequence\n"),a("ol",[a("li",[t._v("for unicast notification, if the notification is not targeted to current user, error is returned")]),t._v(" "),a("li",[t._v("all fields except for "),a("em",[t._v("state")]),t._v(" are discarded from the input")]),t._v(" "),a("li",[t._v("for broadcast notification, current user id in appended to array "),a("em",[t._v("readBy")]),t._v(" or "),a("em",[t._v("deletedBy")]),t._v(", depending on whether "),a("em",[t._v("state")]),t._v(" is "),a("em",[t._v("read")]),t._v(" or "),a("em",[t._v("deleted")]),t._v(", unless the user id is already in the array. The "),a("em",[t._v("state")]),t._v(" field itself is then discarded")]),t._v(" "),a("li",[t._v("the notification identified by "),a("em",[t._v("id")]),t._v(" is merged with the updates and saved to database")]),t._v(" "),a("li",[t._v("HTTP response code 200 is returned, unless there is error.")])])]),t._v(" "),a("li",[t._v("admin requests are allowed to update any field")])])])]),t._v(" "),a("h2",{attrs:{id:"delete-a-notification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-notification"}},[t._v("#")]),t._v(" Delete a Notification")]),t._v(" "),a("p",[t._v("This API is mainly used for marking an inApp notification deleted. It has the same effect as updating a notification with state set to "),a("em",[t._v("deleted")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("DELETE /notifications/{id}\n")])])]),a("ul",[a("li",[t._v("inputs\n"),a("ul",[a("li",[t._v("notification id\n"),a("ul",[a("li",[t._v("parameter name: id")]),t._v(" "),a("li",[t._v("required: true")]),t._v(" "),a("li",[t._v("parameter type: path")]),t._v(" "),a("li",[t._v("data type: string")])])])])]),t._v(" "),a("li",[t._v("outcome: same as the outcome of "),a("a",{attrs:{href:"#update-a-notification"}},[t._v("Update a Notification")]),t._v(" with "),a("em",[t._v("state")]),t._v(" set to "),a("em",[t._v("deleted")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"replace-a-notification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-a-notification"}},[t._v("#")]),t._v(" Replace a Notification")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PUT /notifications/{id}\n")])])]),a("p",[t._v("This API is intended to be only used by admin web console to modify a notification in "),a("em",[t._v("new")]),t._v(" state. Notifications in such state are typically  future-dated or of channel "),a("em",[t._v("in-app")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("inputs")]),t._v(" "),a("ul",[a("li",[t._v("notification id\n"),a("ul",[a("li",[t._v("parameter name: id")]),t._v(" "),a("li",[t._v("required: true")]),t._v(" "),a("li",[t._v("parameter type: path")]),t._v(" "),a("li",[t._v("data type: string")])])]),t._v(" "),a("li",[t._v("notification data\n"),a("ul",[a("li",[t._v("parameter name: data")]),t._v(" "),a("li",[t._v("required: true")]),t._v(" "),a("li",[t._v("parameter type: body")]),t._v(" "),a("li",[t._v("data type: object")])])])])]),t._v(" "),a("li",[a("p",[t._v("outcome")]),t._v(" "),a("p",[a("em",[t._v("NotifyBC")]),t._v(" process the request same way as "),a("a",{attrs:{href:"#createsend-notifications"}},[t._v("Create/Send Notifications")]),t._v(" except that notification data is saved with "),a("em",[t._v("id")]),t._v(" supplied in the parameter, replacing exsiting one.")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);