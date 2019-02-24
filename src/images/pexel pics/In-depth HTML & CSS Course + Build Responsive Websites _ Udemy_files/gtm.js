
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"289",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-clp-course-id\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";return a\/100})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery('a[data-purpose\\x3d\"take-this-course-button\"').attr(\"data-signuppopupidentifier\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery(\"div.hidden-course-bar.slideDown\").length)return\"scrolled\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery(\".current-price\").length})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery(\".current-price\").text().replace(\"$\",\"\").trim()})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",9],8,16],"||\"ja-JP\"==",["escape",["macro",9],8,16],"||\"jp-JP\"==",["escape",["macro",9],8,16],"||\"jp_JP\"==",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"en_US\"==",["escape",["macro",9],8,16],"||\"en-US\"==",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-course-labels-experiment-hotjar\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-hotjar-channel-type\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=jQuery(\"body\").attr(\"data-hotjar-channel-type\");hotjarPage=jQuery(\"body\").attr(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__u"
    },{
      "function":"__r"
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analyticsAccount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount.appId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount.successLabel"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"video-player-no-purpose",
      "vtp_name":"gtm.element.dataset.purpose"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor.id"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.impact_radius_id"
    },{
      "function":"__j",
      "vtp_name":"UD.me.impact_radius_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-purpose"
    },{
      "function":"__f"
    },{
      "function":"__r"
    },{
      "function":"__d",
      "vtp_selectorType":"ID",
      "vtp_elementId":"tag-manager-courseId"
    },{
      "function":"__c",
      "vtp_value":"Course"
    },{
      "function":"__c",
      "vtp_value":"Topic"
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"nonInteraction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_defaultValue":"undefined",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_defaultValue":"undefined",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventNoninteraction",
      "vtp_defaultValue":"False",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"experiment",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",17],
      "vtp_defaultValue":"Included",
      "vtp_map":["list",["map","key","12392710","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"env"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.isLinkshare"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount"
    },{
      "function":"__c",
      "vtp_value":"aw"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"name"
    },{
      "function":"__j",
      "vtp_name":"window.scrollY"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.start"
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-47"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.affiliateType"
    }],
  "tags":[{
      "function":"__html",
      "priority":2,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"Retargeting\"});\u003C\/script\u003E\n\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/udemy\/tfa.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":125
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1457291081167286\");fbq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__lcl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":46
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":49
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"951369813",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",19],
      "tag_id":62
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"966888136",
      "vtp_conversionLabel":"TQxQCNq4hV0QyJWGzQM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":65
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"951369813",
      "vtp_conversionLabel":"5dghCNW2hV0Q1YDTxQM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":66
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=a1ed898d-f7f9-4815-ba08-19fe053ee591\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "tag_id":78
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=6af875c0-59a1-49cd-9618-5df0d111948d\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "vtp_randomNumber":["macro",20],
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"userID",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"excluded",
      "vtp_dimension":["list",["map","index","16","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/ct.pinterest.com\/?tid=fGjngNzQ7mk",
      "tag_id":82
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-29",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":88
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":["macro",23],
      "vtp_conversionLabel":["macro",24],
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/join\/login-popup\/"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":94
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/payment\/checkout\/"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-46",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":95
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"seotest",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"seotest",
      "vtp_dimension":["list",["map","index","19","dimension","show price"]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",0],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",0]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":132
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventValue":["macro",2],
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"course",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",19],
      "tag_id":134
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":136
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":141
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":142
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"877552150",
      "vtp_conversionLabel":"80LmCOWbwGgQlsS5ogM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":143
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.quora.com\/_\/ad\/f3d99eb602d5430b8ecc99610afe3ded\/pixel",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"test video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"submission",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":154
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"createcourse",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":155
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":158
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":159
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":160
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",19],
      "tag_id":161
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"852928941",
      "vtp_conversionLabel":"CzYTCLjiy3MQrdPalgM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":173
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":178
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":179
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",2],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__cl",
      "tag_id":203
    },{
      "function":"__cl",
      "tag_id":204
    },{
      "function":"__cl",
      "tag_id":205
    },{
      "function":"__cl",
      "tag_id":206
    },{
      "function":"__cl",
      "tag_id":207
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"10000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_107",
      "tag_id":208
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"10000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_108",
      "tag_id":209
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"20000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_109",
      "tag_id":210
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"20000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_110",
      "tag_id":211
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_111",
      "tag_id":212
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_112",
      "tag_id":213
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"40000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_113",
      "tag_id":214
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"40000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_114",
      "tag_id":215
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"50000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_115",
      "tag_id":216
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"50000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_116",
      "tag_id":217
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_117",
      "tag_id":218
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_118",
      "tag_id":219
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"70000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_119",
      "tag_id":220
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"80000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_120",
      "tag_id":221
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"80000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_121",
      "tag_id":222
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"90000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_122",
      "tag_id":223
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"90000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_123",
      "tag_id":224
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"110000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_124",
      "tag_id":225
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"100000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_125",
      "tag_id":226
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"110000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_126",
      "tag_id":227
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_127",
      "tag_id":228
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_128",
      "tag_id":229
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"70000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_129",
      "tag_id":230
    },{
      "function":"__cl",
      "tag_id":231
    },{
      "function":"__cl",
      "tag_id":232
    },{
      "function":"__cl",
      "tag_id":233
    },{
      "function":"__cl",
      "tag_id":234
    },{
      "function":"__cl",
      "tag_id":235
    },{
      "function":"__cl",
      "tag_id":236
    },{
      "function":"__cl",
      "tag_id":237
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":238
    },{
      "function":"__cl",
      "tag_id":239
    },{
      "function":"__cl",
      "tag_id":240
    },{
      "function":"__cl",
      "tag_id":241
    },{
      "function":"__cl",
      "tag_id":242
    },{
      "function":"__cl",
      "tag_id":243
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_param={pixel_id:\"6009170267856\",value:\"0.00\",currency:\"USD\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6009170267856\u0026amp;value=0\u0026amp;currency=USD\"\u003E\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];_fbq.push([\"track\",\"6009170268656\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);_fbq.push([\"track\",\"6016501834270\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6009170268656\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6016501834270\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":4
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/s3.amazonaws.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();(function(){_kiq.push([\"identify\",",["escape",["macro",17],8,16],"||\"\"]);_kiq.push([\"set\",{user_id:",["escape",["macro",17],8,16],"||\"\",visitor_id:",["escape",["macro",31],8,16],"||\"\"}])})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=989116586,google_conversion_language=\"en\",google_conversion_format=\"2\",google_conversion_color=\"ffffff\",google_conversion_label=\"Ah9qCJbXgAgQqvHS1wM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/989116586\/?label=Ah9qCJbXgAgQqvHS1wM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_param={pixel_id:\"6016391666497\",value:\"0.00\",currency:\"USD\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6016391666497\u0026amp;value=0\u0026amp;currency=USD\"\u003E\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=966888136,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"SgynCKCv_VoQyJWGzQM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=951369813,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"kUq1CNrK-1oQ1YDTxQM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6034528106080\",{value:\"0.00\",currency:\"JPY\"}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar $course_id=jQuery(\"body\").attr(\"data-clp-course-id\");if(void 0!==$course_id\u0026\u00260\u003C$course_id.length){var clp_course_id=jQuery(\"body\").attr(\"data-clp-course-id\");window._fbq=window._fbq||[];_fbq.push([\"track\",\"ViewContent\",{content_ids:clp_course_id,content_type:\"product\"}])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});window._fbq=window._fbq||[];_fbq.push([\"track\",\"isMember\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=951369813,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=951369813,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E0\u003C$(\".signup-link\").length\u0026\u0026$(\".signup-link\").trigger(\"click\");\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=101425363524479\u0026amp;ev=PixelInitialized\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/javascript\" language=\"javascript\"\u003Evar yahoo_retargeting_id=\"BKO82CLEGF\",yahoo_retargeting_label=\"\";\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" language=\"javascript\" src=\"\/\/b92.yahoo.co.jp\/js\/s_retargeting.js\"\u003E\u003C\/script\u003E\n\n\u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/aax-fe.amazon-adsystem.com\/s\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D97c97873-b320-2f7a-9117-f3d5aa752a9e%26type%3Dnull%26m%3D6\u0026amp;ex-fch=416613\u0026amp;ex-src=udemy.com\u0026amp;ex-hargs=v%3D1.0%3Bc%3D7690357268661%3Bp%3D97C97873-B320-2F7A-9117-F3D5AA752A9E\"\u003E　",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar $course_id=jQuery(\"body\").attr(\"data-clp-course-id\");\nif(void 0!==$course_id\u0026\u00260\u003C$course_id.length){$course_id=jQuery(\"body\").attr(\"data-clp-course-id\");var price=jQuery(\".price-text__current\").text().replace(\"$\",\"\").trim().match(\/\\d+\/);void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",$course_id),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",price),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",$course_id,price,{nonInteraction:1}));window._fbq=window._fbq||[];_fbq.push([\"track\",\n\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:$course_id,content_type:\"product\"}])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"Purchase\",{content_ids:",["escape",["macro",33],8,16],",content_type:\"product\",order_id:",["escape",["macro",34],8,16],",value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript language=\"JavaScript\"\u003Evar OB_ADV_ID=26518,str='\\x3cscript src\\x3d\"\/\/widgets.outbrain.com\/obtp.js\" type\\x3d\"text\/javascript\"\\x3e\\x3c\/script\\x3e';document.write(str);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _pop=_pop||[];_pop.push([\"_set_conversion_id\",\"benesse_cci\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"api.popin.cc\/conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.charset=\"utf-8\";a.async=!0;a.src=window.location.protocol+\"\/\/api.popin.cc\/ads\/benesse_cci.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":85
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"Conversion\",revenue:",["escape",["macro",2],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"SignupSuccess\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"SignupClick\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=window.MTBADVS=window.MTBADVS||{};a.ConvContext=a.ConvContext||{};a.ConvContext.queue=a.ConvContext.queue||[];a.ConvContext.queue.push({advertiser_id:1808,price:0,convtype:0,dat:\"\"});a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.mtburn.com\/advs-conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n        ",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:10595,advertiser_id:1808,contractor_id:5});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n    ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,d,b,f,e){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:298206,hjsv:5};f=c.getElementsByTagName(\"head\")[0];e=c.createElement(\"script\");e.async=1;e.src=d+a._hjSettings.hjid+b+a._hjSettings.hjsv;f.appendChild(e)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\n(function(){var a=jQuery(\"body\"),c=a.attr(\"data-hotjar-page\"),d=a.attr(\"data-hotjar-device\");a=a.attr(\"data-hotjar-bw\");var b=[];c\u0026\u0026(b.push(c),d\u0026\u0026a\u0026\u0026b.push(d,a),b.push(void 0===UD.me.id?\"visitor\":\"user\"),hj(\"trigger\",b.join(\"-\")))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"NewUserPurchase\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Eadroll_adv_id=\"554CPNW4XBAX5EYKBL4HVU\";adroll_pix_id=\"OKLCQMMNANCRNGGEOKKR5M\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":162
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"LinkshareSignupClick\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"a9df566e\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/px?id=849711\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":167
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"6oe2u\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E!function(){if(window.SmartnewsAds=window.SmartnewsAds||{},!window.SmartnewsAds.p){var a=window.SmartnewsAds.p=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)};window.SmartnewsAds._p||(window.SmartnewsAds._p=a);a.push=a;a.version=\"1.0.0\";a.queue=[];var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/cdn.smartnews-ads.com\/i\/pixel.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)}}();SmartnewsAds.p(\"3743a3945eb6b3d209bbf3bc\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/i.smartnews-ads.com\/p?id=3743a3945eb6b3d209bbf3bc\u0026amp;e=PageView\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":169
    },{
      "function":"__html",
      "setup_tags":["list",["tag",123,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eire(\"trackConversion\",12148,{orderId:",["escape",["macro",38],8,16],",customerId:",["escape",["macro",39],8,16],",email:",["escape",["macro",40],8,16],",orderPromoCode:",["escape",["macro",41],8,16],",currencyCode:\"USD\",items:[{subTotal:",["escape",["macro",42],8,16],",category:",["escape",["macro",43],8,16],",sku:",["escape",["macro",44],8,16],",quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "setup_tags":["list",["tag",123,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eire(\"identify\",{customerId:",["escape",["macro",39],8,16],",customerEmail:",["escape",["macro",40],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"455027734843984\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=455027734843984\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":174
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"BecomeAnInstructor\"]);sendPageEvent(\"track\",\"teach_funnel\",{action:\"create-course\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":180
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:23601,advertiser_id:8881,contractor_id:5});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":182
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=window.MTBADVS=window.MTBADVS||{};a.ConvContext=a.ConvContext||{};a.ConvContext.queue=a.ConvContext.queue||[];a.ConvContext.queue.push({advertiser_id:8881,price:0,convtype:1,dat:\"\"});a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.mtburn.com\/advs-conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":183
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar request=new XMLHttpRequest;request.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);request.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");request.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");request.send(JSON.stringify({type:\"aff\"}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar request=new XMLHttpRequest;request.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);request.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");request.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");request.send(JSON.stringify({type:\"paid_acq\"}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript src=\"https:\/\/bannerfarm.aolp.jp\/smartpxl\/89892\/smartpxl.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":190
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\"});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1147638\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1147638\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"conversion\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/action?name=conversion\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"6317021retargeting\"});\u003C\/script\u003E\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/mark?marking-type=6317021retargeting\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":193
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"6314024retargeting\"});\u003C\/script\u003E\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/mark?marking-type=6314024retargeting\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E \n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":194
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E_linkedin_data_partner_id=\"371524\";\u003C\/script\u003E\u003Cscript type=\"text\/javascript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E \u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=371524\u0026amp;fmt=gif\"\u003E \u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":195
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\"});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1049902\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"add_to_cart\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=add_to_cart\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"make_purchase\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":198
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"BuyNow\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=BuyNow\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":199
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"Login\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=Login\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":200
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"complete_registration\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=complete_registration\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":201
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d,g,e,a,f,b){c.ktag||(a=function(){a.sendEvent?a.sendEvent(arguments):a.ktq.push(arguments)},a.ktq=[],c.ktag=a,f=d.getElementsByTagName(e)[0],b=d.createElement(e),b.async=!0,b.src=g,f.parentNode.appendChild(b))}(window,document,\"\/\/resources.xg4ken.com\/js\/v2\/ktag.js?tid\\x3dKT-N3AE7-3EC\",\"script\");ktag(\"setup\",\"KT-N3AE7-3EC\",\"\\x3cUSER_ID\\x3e\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"https:\/\/events.xg4ken.com\/pixel\/v2?tid=KT-N3AE7-3EC\u0026amp;noscript=1\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/tapen\/"
    },{
      "function":"_ew",
      "arg0":["macro",15],
      "arg1":"signup_success=1"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"udemy\\.com\\\/cart\\\/success"
    },{
      "function":"_gt",
      "arg0":["macro",3],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/jp\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"instructor_analytics"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/payment\/checkout\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"button-enroll-b"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"take-this-course-button"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.click"
    },{
      "function":"_gt",
      "arg0":["macro",7],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"submit-id-submit"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"btn btn-primary btn btn-success"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"cart\/success"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"submit-id-submit"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/course\\\/([0-9]*)\\\/manage\\\/feedback\\\/test"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"middle create_course button"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/affiliate\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/mobile\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/cart\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"udemy.com"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?course\/subscribe\/.*$"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"^(va2site|aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/apps\/admin"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"www.udemy.com\/course-manage\/edit-getting-started\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.udemy.com\/courses\/?pmtag=blog\u0026utm_source=blog\u0026utm_medium=udemyads\u0026utm_content=hellobar\u0026utm_campaign=content-marketing-blog\u0026source=blogpop\u0026utm_source=blog\u0026utm_medium=udemyads\u0026utm_content=post0\u0026utm_campaign=content-marketing-blog\u0026xref=blog"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/collection\\\/jp\\-"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"[0-9]+"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"add-to-cart"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/courses\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/collection\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/home\/teaching\/topics\/"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/manage\/feedback\/test\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/home\/teaching\/insights\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/affiliate\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"\/.+\/learn\/v4\/.+\/reviews\/|\/home\/my-courses\/.+\/.+\/reviews\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/teaching\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/topic"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/redeem\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/share\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"localhost"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/home\/teaching\/onboarding\/"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"buy-this-course-button"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"login"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"signup"
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",2,3,0,113,123,124,130]],
    [["if",3,5,6],["add",4,5,8,91,92,93,98,99]],
    [["if",3,7],["add",6,12,13,15,28,40,87,105,106,107,125]],
    [["if",8,9],["add",6,15,31,43,87,103,108,119,131,133,134,143]],
    [["if",3,10],["add",7,96,97]],
    [["if",0,3,6],["add",9,26,29,38,42,112,121,128,135,136,138,139]],
    [["if",6,11],["add",10,11]],
    [["if",3,4],["add",14],["block",2,3,9,16,23,26,29,38,42,88,1,104,0,112,116,118,121,123,124,128,130,141]],
    [["if",3],["add",14,16,36,104,116,141,147,45,46,47,48,49,73,74,75,76,77,78,79,81,82,83,84,85]],
    [["if",12],["add",17,18]],
    [["if",13,14,15,16],["add",19]],
    [["if",13,15,16],["unless",14],["add",20]],
    [["if",3,17],["add",21]],
    [["if",3],["unless",18],["add",22,44,113,50,53,54,57,59,61,64,66,68,69,70,72]],
    [["if",19,20],["add",23]],
    [["if",16,21,22],["add",24,110]],
    [["if",11],["add",25,30,35,37]],
    [["if",6,8,9],["add",27,41,111,120,126,127,137],["block",138,139]],
    [["if",3,23],["add",28]],
    [["if",3,25],["add",32,115]],
    [["if",16,26,27],["add",33]],
    [["if",16,28],["add",34]],
    [["if",16,29,30],["add",39,117]],
    [["if",3,31],["add",44,113]],
    [["if",3,32],["add",44]],
    [["if",3,33],["add",44,113],["block",123,124]],
    [["if",3,31,34],["add",44,113]],
    [["if",3,35],["add",44,113]],
    [["if",3,36],["add",44,113]],
    [["if",3,37],["add",44,113]],
    [["if",3,38],["add",44,113]],
    [["if",3,39],["add",44]],
    [["if",3,40],["add",51,52,55,56,58,60,62,63,65,67,71]],
    [["if",3,41],["add",80]],
    [["if",3,42],["add",86]],
    [["if",3,43],["add",88],["block",122,123,124,141]],
    [["if",3,44],["unless",45],["add",88]],
    [["if",46,47],["add",88]],
    [["if",3,49],["add",1]],
    [["if",3,51],["add",89,90]],
    [["if",52],["add",94]],
    [["if",52,53],["add",95,118],["block",112]],
    [["if",52,54],["add",100]],
    [["if",3,55],["add",101]],
    [["if",52,56,57],["add",101]],
    [["if",16,58],["add",102,142]],
    [["if",3,5],["add",109]],
    [["if",3,59],["add",113]],
    [["if",3,60],["add",113]],
    [["if",3,61],["add",113],["block",123,124]],
    [["if",3,62],["add",113]],
    [["if",3,63],["add",113]],
    [["if",3],["unless",64],["add",113]],
    [["if",3,65],["add",113]],
    [["if",3,66],["add",113]],
    [["if",3,67],["add",113]],
    [["if",3,68],["add",113]],
    [["if",3,69],["add",113,113]],
    [["if",3,70],["add",113]],
    [["if",0,2,3],["unless",1],["add",113]],
    [["if",3,71],["unless",72,73],["add",113]],
    [["if",8,74],["add",114,140]],
    [["if",75,76,77,78],["add",122,132]],
    [["if",3,83],["add",129]],
    [["if",16,84],["add",144]],
    [["if",16,85],["add",145]],
    [["if",16,86],["add",146]],
    [["if",3,24],["block",29,88,1]],
    [["if",3,48],["block",88]],
    [["if",3,50],["block",1]],
    [["if",3,79],["block",122,123,124,141]],
    [["if",3,80],["block",122,123,124,141]],
    [["if",3,81],["block",122,123,124,141]],
    [["if",3,82],["block",123,124]]]
},
"runtime":[
[],[]
]
};
var f,aa=this,ha=function(){if(null===ea){var a;a:{var b=aa.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&fa.test(d)){a=d;break a}}a=null}ea=a||""}return ea},fa=/^[\w+/_-]+[=]{0,2}$/,ea=null,ia=function(a,b){function c(){}c.prototype=b.prototype;a.tf=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.$e=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,
d)}};var v=function(a,b){this.C=a;this.yd=b};v.prototype.Md=function(){return this.C};v.prototype.getData=function(){return this.yd};v.prototype.getData=v.prototype.getData;v.prototype.getType=v.prototype.Md;var ka=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},la=function(){this.ka={};this.Ba=!1};la.prototype.get=function(a){return this.ka["dust."+a]};la.prototype.set=function(a,b){!this.Ba&&(this.ka["dust."+a]=b)};la.prototype.has=function(a){return this.ka.hasOwnProperty("dust."+a)};var ma=function(a){var b=[],c;for(c in a.ka)a.ka.hasOwnProperty(c)&&b.push(c.substr(5));return b};
la.prototype.remove=function(a){!this.Ba&&delete this.ka["dust."+a]};la.prototype.M=function(){this.Ba=!0};var w=function(a){this.na=new la;this.i=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ka(b)?this.i[Number(b)]=a[Number(b)]:this.na.set(b,a[b]))};f=w.prototype;f.toString=function(){for(var a=[],b=0;b<this.i.length;b++){var c=this.i[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};f.set=function(a,b){if("length"==a){if(!ka(b))throw"RangeError: Length property must be a valid integer.";this.i.length=Number(b)}else ka(a)?this.i[Number(a)]=b:this.na.set(a,b)};
f.get=function(a){return"length"==a?this.length():ka(a)?this.i[Number(a)]:this.na.get(a)};f.length=function(){return this.i.length};f.V=function(){for(var a=ma(this.na),b=0;b<this.i.length;b++)a.push(b+"");return new w(a)};f.remove=function(a){ka(a)?delete this.i[Number(a)]:this.na.remove(a)};f.pop=function(){return this.i.pop()};f.push=function(a){return this.i.push.apply(this.i,Array.prototype.slice.call(arguments))};f.shift=function(){return this.i.shift()};
f.splice=function(a,b,c){return new w(this.i.splice.apply(this.i,arguments))};f.unshift=function(a){return this.i.unshift.apply(this.i,Array.prototype.slice.call(arguments))};f.has=function(a){return ka(a)&&this.i.hasOwnProperty(a)||this.na.has(a)};w.prototype.unshift=w.prototype.unshift;w.prototype.splice=w.prototype.splice;w.prototype.shift=w.prototype.shift;w.prototype.push=w.prototype.push;w.prototype.pop=w.prototype.pop;w.prototype.remove=w.prototype.remove;w.prototype.getKeys=w.prototype.V;
w.prototype.get=w.prototype.get;w.prototype.set=w.prototype.set;var na=function(){function a(a,b){c[a]=b}function b(){c={};g=!1}var c={},d,e={},g=!1,h={add:a,Xb:function(a,b,c){e[a]||(e[a]={});e[a][b]=c},create:function(e){var h={add:a,assert:function(a,b){if(!g){var h=c[a]||d;h&&h.apply(e,Array.prototype.slice.call(arguments,0))}},reset:b};h.add=h.add;h.assert=h.assert;h.reset=h.reset;return h},yc:function(a){return e[a]?(b(),c=e[a],!0):!1},oa:function(a){d=a},reset:b,Ic:function(a){g=a}};h.add=h.add;h.addToCache=h.Xb;h.loadFromCache=h.yc;h.registerDefaultPermission=
h.oa;h.reset=h.reset;h.setPermitAllAsserts=h.Ic;return h};var oa=function(){function a(a,c){if(b[a]){if(b[a].Ra+c>b[a].max)throw Error("Quota exceeded");b[a].Ra+=c}}var b={},c=void 0,d=void 0,e={ne:function(a){c=a},Yb:function(){c&&a(c,1)},oe:function(a){d=a},U:function(b){d&&a(d,b)},Je:function(a,c){b[a]=b[a]||{Ra:0};b[a].max=c},Ld:function(a){return b[a]&&b[a].Ra||0},reset:function(){b={}},sd:a};e.onFnConsume=e.ne;e.consumeFn=e.Yb;e.onStorageConsume=e.oe;e.consumeStorage=e.U;e.setMax=e.Je;e.getConsumed=e.Ld;e.reset=e.reset;e.consume=e.sd;return e};var pa=function(a,b,c){this.N=a;this.I=b;this.Y=c;this.i=new la};f=pa.prototype;f.add=function(a,b){this.i.Ba||(this.N.U(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b))};f.set=function(a,b){this.i.Ba||(this.Y&&this.Y.has(a)?this.Y.set(a,b):(this.N.U(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};f.get=function(a){return this.i.has(a)?this.i.get(a):this.Y?this.Y.get(a):void 0};
f.has=function(a){return!!this.i.has(a)||!(!this.Y||!this.Y.has(a))};f.K=function(){return this.N};f.M=function(){this.i.M()};pa.prototype.has=pa.prototype.has;pa.prototype.get=pa.prototype.get;pa.prototype.set=pa.prototype.set;pa.prototype.add=pa.prototype.add;var qa=function(){},ra=function(a){return"function"==typeof a},sa=function(a){return"string"==typeof a},ta=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},va=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},wa=function(a,b){if(!ta(a)||!ta(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a){return Math.round(Number(a))||
0},Aa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ba=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ca=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Da=function(){return(new Date).getTime()},Ea=function(){this.prefix="gtm.";this.values={}};Ea.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ea.prototype.get=function(a){return this.values[this.prefix+a]};Ea.prototype.contains=function(a){return void 0!==this.get(a)};
var Fa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ga=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ha=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ia=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1};var x=function(a,b){la.call(this);this.zc=a;this.Id=b};ia(x,la);var Ka=function(a,b){for(var c,d=0;d<b.length&&!(c=Ja(a,b[d]),c instanceof v);d++);return c},Ja=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof x))throw"Attempting to execute non-function "+b[0]+".";return c.o.apply(c,[a].concat(b.slice(1)))};x.prototype.toString=function(){return this.zc};x.prototype.getName=function(){return this.zc};x.prototype.getName=x.prototype.getName;x.prototype.V=function(){return new w(ma(this))};
x.prototype.getKeys=x.prototype.V;x.prototype.o=function(a,b){var c,d={F:function(){return a},evaluate:function(b){var c=a;return ua(b)?Ja(c,b):b},xa:function(b){return Ka(a,b)},K:function(){return a.K()},ya:function(){c||(c=a.I.create(d));return c}};a.K().Yb();return this.Id.apply(d,Array.prototype.slice.call(arguments,1))};x.prototype.invoke=x.prototype.o;var La=function(){la.call(this)};ia(La,la);La.prototype.V=function(){return new w(ma(this))};La.prototype.getKeys=La.prototype.V;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},Qa=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=Qa(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=Qa(e,c[d])):c[d]=e}return c};var Ra=function(a){if(a instanceof w){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Ra(a.get(d)));return b}if(a instanceof La){for(var e={},g=a.V(),h=g.length(),k=0;k<h;k++)e[g.get(k)]=Ra(a.get(g.get(k)));return e}return a instanceof x?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Sa(b[c]);var d=new pa(oa(),na());return Ra(a.o.apply(a,[d].concat(b)))}:a},Sa=function(a){if(ua(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Sa(a[c]));return new w(b)}if(Pa(a)){var d=
new La,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Sa(a[e]));return d}if("function"===typeof a)return new x("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Ra(this.evaluate(c[d]));return Sa(a.apply(a,c))});var g=typeof a;if(null===a||"string"===g||"number"===g||"boolean"===g)return a};var Ta={control:function(a,b){return new v(a,this.evaluate(b))},fn:function(a,b,c){var d=this.F(),e=this.evaluate(b);if(!(e instanceof w))throw"Error: non-List value given for Fn argument names.";var g=Array.prototype.slice.call(arguments,2);this.K().U(a.length+g.length);return new x(a,function(){return function(a){for(var b=new pa(d.N,d.I,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof v)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new w(c));var q=Ka(b,g);if(q instanceof v)return"return"===q.C?q.getData():q}}())},list:function(a){var b=this.K();b.U(arguments.length);for(var c=new w,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.U(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.K(),c=new La,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",g=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof g?g.length:1;b.U(h);c.set(e,g)}return c},undefined:function(){}};var Ua=function(){this.N=oa();this.I=na();this.za=new pa(this.N,this.I)};f=Ua.prototype;f.T=function(a,b){var c=new x(a,b);c.M();this.za.set(a,c)};f.Wb=function(a,b){Ta.hasOwnProperty(a)&&this.T(b||a,Ta[a])};f.K=function(){return this.N};f.Za=function(){this.N=oa();this.za.N=this.N};f.Ge=function(){this.I=na();this.za.I=this.I};f.L=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.zb(c)};
f.zb=function(a){for(var b,c=0;c<arguments.length;c++){var d=Ja(this.za,arguments[c]);b=d instanceof v||d instanceof x||d instanceof w||d instanceof La||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};f.M=function(){this.za.M()};Ua.prototype.makeImmutable=Ua.prototype.M;Ua.prototype.run=Ua.prototype.zb;Ua.prototype.execute=Ua.prototype.L;Ua.prototype.resetPermissions=Ua.prototype.Ge;Ua.prototype.resetQuota=Ua.prototype.Za;
Ua.prototype.getQuota=Ua.prototype.K;Ua.prototype.addNativeInstruction=Ua.prototype.Wb;Ua.prototype.addInstruction=Ua.prototype.T;var Va=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var Wa={Ne:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof w)for(var e=arguments[d],g=0;g<e.length();g++)c.push(e.get(g));else c.push(arguments[d]);return new w(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.o(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.o(a,this.get(e),e,this)&&d.push(this.get(e));return new w(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.o(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var g=e;g<d;g++)if(this.has(g)&&this.get(g)===
b)return g;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var g=e;0<=g;g--)if(this.has(g)&&this.get(g)===b)return g;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.o(a,this.get(e),e,this));return new w(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);g=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=g;h<d;h++)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);g=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=g;0<=h;h--)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Va(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],g=b;g<c;g++)e.push(this.get(g));return new w(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.o(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Va(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.o(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var y={qc:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},Xa="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Ya=new v("break"),Za=new v("continue");y.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};y.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
y.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof w))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=va(Xa,b))return Sa(a[b].apply(a,Va(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof w){if(a.has(b)){var d=
a.get(b);if(d instanceof x){var e=Va(c);e.unshift(this.F());return d.o.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=va(Wa.Ne,b))return e=Va(c),e.unshift(this.F()),Wa[b].apply(a,e)}if(a instanceof x||a instanceof La){if(a.has(b)){d=a.get(b);if(d instanceof x)return e=Va(c),e.unshift(this.F()),d.o.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof x?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Va(c))}throw"TypeError: Object has no '"+
b+"' property.";};y.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.F();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};y["break"]=function(){return Ya};y["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof v)return d}};y["continue"]=function(){return Za};
y.zd=function(a,b,c){var d=new w;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var g=[y.qc.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.F().set(a,this.evaluate(g))};y.Cd=function(a,b){return this.evaluate(a)/this.evaluate(b)};y.Fd=function(a,b){return this.evaluate(a)==this.evaluate(b)};y.Gd=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
y.Jd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.F();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var g=this.xa(c);if(g instanceof v){if("break"==g.C)break;if("return"==g.C)return g}}else if(b instanceof La||b instanceof w||b instanceof x){var h=b.V(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),g=this.xa(c),g instanceof v){if("break"==g.C)break;if("return"==g.C)return g}}};y.get=function(a){return this.F().get(this.evaluate(a))};
y.ic=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof La||a instanceof w||a instanceof x?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ka(b)&&(c=a[b]));return c};y.Nd=function(a,b){return this.evaluate(a)>this.evaluate(b)};y.Od=function(a,b){return this.evaluate(a)>=this.evaluate(b)};y.Vd=function(a,b){return this.evaluate(a)===this.evaluate(b)};y.Wd=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
y["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.xa(d);if(e instanceof v)return e};y.de=function(a,b){return this.evaluate(a)<this.evaluate(b)};y.ee=function(a,b){return this.evaluate(a)<=this.evaluate(b)};y.he=function(a,b){return this.evaluate(a)%this.evaluate(b)};y.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};y.ie=function(a){return-this.evaluate(a)};y.je=function(a){return!this.evaluate(a)};
y.ke=function(a,b){return this.evaluate(a)!=this.evaluate(b)};y["null"]=function(){return null};y.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};y.Ec=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};y.Fc=function(a){return this.evaluate(a)};y.quote=function(a){return Array.prototype.slice.apply(arguments)};y["return"]=function(a){return new v("return",this.evaluate(a))};
y.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof x||a instanceof w||a instanceof La)&&a.set(b,c);return c};y.Me=function(a,b){return this.evaluate(a)-this.evaluate(b)};
y["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!ua(b)||!ua(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,g=0;g<b.length;g++)if(e||a===this.evaluate(b[g]))if(d=this.evaluate(c[g]),d instanceof v){var h=d.C;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof v&&("return"==d.C||"continue"==d.C)))return d};
y.Oe=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};y["typeof"]=function(a){a=this.evaluate(a);return a instanceof x?"function":typeof a};y.undefined=function(){};y["var"]=function(a){for(var b=this.F(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
y["while"]=function(a,b,c,d){var e,g=this.evaluate(d);if(this.evaluate(c)&&(e=this.xa(g),e instanceof v)){if("break"==e.C)return;if("return"==e.C)return e}for(;this.evaluate(a);){e=this.xa(g);if(e instanceof v){if("break"==e.C)break;if("return"==e.C)return e}this.evaluate(b)}};var cb=function(){this.oc=!1;this.H=new Ua;$a(this);this.oc=!0};cb.prototype.ae=function(){return this.oc};cb.prototype.isInitialized=cb.prototype.ae;cb.prototype.L=function(a){this.H.I.yc(String(a[0]))||(this.H.I.reset(),this.H.I.Ic(!0));return this.H.zb(a)};cb.prototype.execute=cb.prototype.L;cb.prototype.M=function(){this.H.M()};cb.prototype.makeImmutable=cb.prototype.M;
var $a=function(a){function b(a,b){e.H.Wb(a,String(b))}function c(a,b){e.H.T(String(d[a]),b)}var d=y.qc,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",y.add);c("AND",y.and);c("APPLY",y.apply);c("ASSIGN",y.assign);c("BREAK",y["break"]);c("CASE",y["case"]);c("CONTINUE",y["continue"]);c("DEFAULT",y["case"]);c("DEFN",y.zd);c("DIVIDE",y.Cd);c("EQUALS",y.Fd);c("EXPRESSION_LIST",y.Gd);c("FOR_IN",y.Jd);c("GET",y.get);c("GET_INDEX",
y.ic);c("GET_PROPERTY",y.ic);c("GREATER_THAN",y.Nd);c("GREATER_THAN_EQUALS",y.Od);c("IDENTITY_EQUALS",y.Vd);c("IDENTITY_NOT_EQUALS",y.Wd);c("IF",y["if"]);c("LESS_THAN",y.de);c("LESS_THAN_EQUALS",y.ee);c("MODULUS",y.he);c("MULTIPLY",y.multiply);c("NEGATE",y.ie);c("NOT",y.je);c("NOT_EQUALS",y.ke);c("NULL",y["null"]);c("OR",y.or);c("POST_DECREMENT",y.Ec);c("POST_INCREMENT",y.Ec);c("PRE_DECREMENT",y.Fc);c("PRE_INCREMENT",y.Fc);c("QUOTE",y.quote);c("RETURN",y["return"]);c("SET_PROPERTY",y.setProperty);
c("SUBTRACT",y.Me);c("SWITCH",y["switch"]);c("TERNARY",y.Oe);c("TYPEOF",y["typeof"]);c("VAR",y["var"]);c("WHILE",y["while"])};cb.prototype.T=function(a,b){this.H.T(a,b)};cb.prototype.addInstruction=cb.prototype.T;cb.prototype.K=function(){return this.H.K()};cb.prototype.getQuota=cb.prototype.K;cb.prototype.Za=function(){this.H.Za()};cb.prototype.resetQuota=cb.prototype.Za;cb.prototype.oa=function(a){this.H.I.oa(a)};cb.prototype.Pa=function(a,b,c){this.H.I.Xb(a,b,c)};var db=function(){this.Va={}};db.prototype.get=function(a){return this.Va.hasOwnProperty(a)?this.Va[a]:void 0};db.prototype.add=function(a,b){if(this.Va.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(!b)throw"Attempting to add an undefined function: "+a+".";var c=new x(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.M();this.Va[a]=c};
db.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var z=window,B=document,eb=navigator,fb=B.currentScript&&B.currentScript.src,gb=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},hb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ib=function(a,b,c){var d=B.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;hb(d,b);c&&(d.onerror=c);ha()&&d.setAttribute("nonce",ha());var e=B.getElementsByTagName("script")[0]||B.body||B.head;
e.parentNode.insertBefore(d,e);return d},jb=function(a,b){var c=B.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=B.body&&B.body.lastChild||B.body||B.head;d.parentNode.insertBefore(c,d);hb(c,b);void 0!==a&&(c.src=a);return c},G=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},kb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&
a.attachEvent("on"+b,c)},lb=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){z.setTimeout(a,0)},nb=function(a){var b=B.getElementById(a);if(b&&mb(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(mb(document.all[a][c],"id")==a)return document.all[a][c];return b},mb=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},ob=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,
""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},qb=function(a){var b=B.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},rb=function(a){eb.sendBeacon&&eb.sendBeacon(a)||G(a)};var sb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var tb=/:[0-9]+$/,ub=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")==b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},vb=function(a,b,c,d,e){var g,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(z.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "protocol":g=k;break;case "host":g=(a.hostname||z.location.hostname).replace(tb,"").toLowerCase();
if(c){var l=/^www\d*\./.exec(g);l&&l[0]&&(g=g.substr(l[0].length))}break;case "port":g=String(Number(a.hostname?a.port:z.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":g="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=g.split("/");0<=va(d||[],m[m.length-1])&&(m[m.length-1]="");g=m.join("/");break;case "query":g=a.search.replace("?","");e&&(g=ub(g,e));break;case "extension":var n=a.pathname.split(".");g=1<n.length?n[n.length-1]:"";g=g.split("/")[0];break;case "fragment":g=
a.hash.replace("#","");break;default:g=a&&a.href}return g},wb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},N=function(a){var b=document.createElement("a");a&&(sb.test(a),b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(tb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var zb=function(){this.Ya=new cb;var a=new db;a.addAll(xb());yb(this,function(b){return a.get(b)})},xb=function(){return{callInWindow:Ab,callLater:Bb,copyFromWindow:Cb,encodeURI:encodeURI,encodeURIComponent:encodeURIComponent,getReferrer:Db,getUrl:Eb,getUrlFragment:Fb,isPlainObject:Gb,injectHiddenIframe:Hb,injectScript:Ib,logToConsole:Jb,queryPermission:Kb,removeUrlFragment:Lb,replaceAll:Mb,sendPixel:Nb,setInWindow:Ob}};zb.prototype.L=function(a){return this.Ya.L(a)};zb.prototype.execute=zb.prototype.L;
var yb=function(a,b){a.Ya.T("require",b)};zb.prototype.oa=function(a){this.Ya.oa(a)};zb.prototype.Pa=function(a,b,c){this.Ya.Pa(a,b,c)};function Ab(a,b){for(var c=a.split("."),d=z,e=d[c[0]],g=1;e&&g<c.length;g++)d=e,e=e[c[g]];if("function"==Na(e)){var h=[];for(g=1;g<arguments.length;g++)h.push(Ra(arguments[g]));e.apply(d,h)}}function Bb(a){var b=this.F();I(function(){a instanceof x&&a.o(b)})}
function Cb(a,b,c){for(var d=a.split("."),e=z,g=0;g<d.length-1;g++)if(e=e[d[g]],void 0===e||null===e)return;b&&(void 0===e[d[g]]||c&&!e[d[g]])&&(e[d[g]]=Ra(b));return Sa(e[d[g]])}function Db(){return B.referrer}function Eb(a,b,c,d){var e=z.location.href,g;if(c&&c instanceof w){g=[];for(var h=0;h<c.length();h++){var k=c.get(h);"string"==typeof k&&g.push(k)}}return vb(N(e),a,b,g,d)}function Fb(a){return vb(N(a),"fragment")}function Gb(a){return a instanceof La}
function Hb(a,b){var c=this.F();jb(a,function(){b instanceof x&&b.o(c)})}var Pb={};
function Ib(a,b,c,d){this.ya().assert("injectScript",a);var e=this.F(),g=function(){b instanceof x&&b.o(e)},h=function(){c instanceof x&&c.o(e)};d?Pb[d]?(Pb[d].onSuccess.push(g),Pb[d].onFailure.push(h)):(Pb[d]={onSuccess:[g],onFailure:[h]},g=function(){for(var a=Pb[d].onSuccess,b=0;b<a.length;b++)I(a[b]);a.push=function(a){I(a);return 0}},h=function(){for(var a=Pb[d].onFailure,b=0;b<a.length;b++)I(a[b]);Pb[d]=null},ib(a,g,h)):ib(a,g,h)}
function Jb(){try{this.ya().assert("logging")}catch(c){return}for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Ra(a[b]);console.log.apply(console,a)}function Lb(a){return wb(N(a))}function Mb(a,b,c){return a.replace(new RegExp(b,"g"),c)}function Nb(a,b,c){this.ya().assert("sendPixel",a);var d=this.F();G(a,function(){b instanceof x&&b.o(d)},function(){c instanceof x&&c.o(d)})}
function Ob(a,b,c){this.ya().assert("writeGlobals",a);for(var d=a.split("."),e=z,g=0;g<d.length-1;g++)if(e=e[d[g]],void 0===e)return!1;return void 0===e[d[g]]||c?(e[d[g]]=Ra(b),!0):!1}function Kb(a,b){try{return this.ya().assert.apply(null,Array.prototype.slice.call(arguments,0)),!0}catch(c){return!1}};
var Qb=[],Rb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sb=function(a){return Rb[a]},Tb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Zb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,$b={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},ac=function(a){return $b[a]};
Qb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Zb,ac)+"'"}};var ic=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,jc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},kc=function(a){return jc[a]};Qb[16]=function(a){return a};var mc,nc=[],oc=[],pc=[],qc=[],rc=[],sc={},tc,uc,vc,wc=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},xc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!sc[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?sc[b](d):mc(b,d)},zc=function(a,b,c,d){c=c||[];d=d||qa;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=yc(a[g],b,c,d));return e},
Ac=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=sc[b];return c?c.b||0:0},yc=function(a,b,c,d){if(ua(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(yc(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=nc[h];if(!k||b(k))return;c[h]=!0;try{var l=zc(k,b,c,d);e=xc(l);vc&&(e=vc.ud(e,l))}catch(C){d(h,C),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=2)e[yc(a[m],
b,c,d)]=yc(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,p=1;p<a.length;p++){var q=yc(a[p],b,c,d);uc&&(n=n||q===uc.Ja);e.push(q)}return uc&&n?uc.vd(e):e.join("");case "escape":e=yc(a[1],b,c,d);if(uc&&ua(a[1])&&"macro"===a[1][0]&&uc.be(a))return uc.ue(e);e=String(e);for(var r=2;r<a.length;r++)Qb[a[r]]&&(e=Qb[a[r]](e));return e;case "tag":var u=a[1];if(!qc[u])throw Error("Unable to resolve tag reference "+u+".");return e={cc:a[2],index:u};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};
t["function"]=a[1];var A=Dc(t,b,c,d);a[4]&&(A=!A);return A;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Dc=function(a,b,c,d){try{return tc(zc(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Ec=null,Ic=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Ec=Fc(a,Gc()||function(){});for(var e=0;e<oc.length;e++){var g=oc[e],h=Hc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}var m=[];for(e=0;e<qc.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},Hc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ec(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=Ec(e[c]);if(null===
d)return null;if(d)return!1}return!0};var Fc=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Dc(pc[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Jc,Kc=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.dd&&(h["fix_"+k]=!0),h.fc=h.fc||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=p.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,D:b.D,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||g.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],D:d,Ha:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},q=function(){for(var b in l)if(l[b].test(a)){var c=p[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.fc&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.wc=function(){return this[this.length-1]};d.rb=function(a){var b=this.wc();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.td=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Ha=b.test(a.tagName)||a.Ha);return a},g=q,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.rb("TABLE")?(a="<TBODY>"+a,m()):h.ef&&c.test(e)&&d.td(e)?d.rb(e)?k():(a="</"+b.tagName+">"+a,m()):b.Ha||d.push(b)},endTag:function(a){d.wc()?h.Hd&&!d.rb(a.tagName)?k():d.pop():h.Hd&&(g(),m())}},m=function(){var b=a,c=e(g());a=b;if(c&&
l[c.type])l[c.type](c)};q=function(){m();return e(g())}}();return{append:function(b){a+=b},ze:q,nf:function(a){for(var b;(b=q())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},pf:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.uf="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.rf=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.vf=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.D){var d=a.D[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Ha?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.df=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.jd=a.jd||!b[h]&&h;Jc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function g(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(r){var b=[];c(a,function(a){b.push(a)});return b}}var k={Vc:a,Wc:a,Xc:a,Yc:a,ed:a,fd:function(a){return a},done:a,error:function(a){throw a;},De:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var g=a.getAttribute(e);return b(g)?String(g):g}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function g(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,Ia:d.defaultView||d.parentWindow,ja:d,Xa:Jc("",{dd:!0}),hb:[b],xb:"",yb:d.createElement(b.nodeName),Fa:[],ba:[]});a(this.yb,"proxyof",0)}g.prototype.write=function(){[].push.apply(this.ba,arguments);for(var a;!this.Sa&&this.ba.length;)a=this.ba.shift(),"function"===typeof a?this.nd(a):this.Ib(a)};g.prototype.nd=function(a){var b={type:"function",value:a.name||a.toString()};this.ub(b);a.call(this.Ia,this.ja);this.Bc(b)};
g.prototype.Ib=function(a){this.Xa.append(a);for(var b,c=[],d,e;(b=this.Xa.ze())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.Ue(c);d&&this.Pd(b);e&&this.Qd(b)};g.prototype.Ue=function(a){var b=this.kd(a);b.Vb&&(b.nb=this.xb+b.Vb,this.xb+=b.ye,this.yb.innerHTML=b.nb,this.Se())};g.prototype.kd=function(a){var b=this.hb.length,d=[],e=[],g=[];c(a,function(a){d.push(a.text);if(a.D){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.D.id&&"ps-style"!==a.D.id&&g.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Ha?" />":">"))}}else e.push(a.text),g.push("endTag"===a.type?a.text:"")});return{wf:a,raw:d.join(""),Vb:e.join(""),ye:g.join("")}};g.prototype.Se=function(){for(var c,d=[this.yb];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.hb[a(c,"id")]=c,a(c,"id",null));var g=c.parentNode&&a(c.parentNode,"proxyof");
g&&this.hb[g].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};g.prototype.Pd=function(a){var b=this.Xa.clear();b&&this.ba.unshift(b);a.src=a.D.src||a.D.Xe;a.src&&this.Fa.length?this.Sa=a:this.ub(a);var c=this;this.Te(a,function(){c.Bc(a)})};g.prototype.Qd=function(a){var b=this.Xa.clear();b&&this.ba.unshift(b);a.type=a.D.type||a.D.Ye||"text/css";this.Ve(a);b&&this.write()};g.prototype.Ve=function(a){var b=this.md(a);this.$d(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.ja.createTextNode(a.content)))};g.prototype.md=function(a){var b=this.ja.createElement(a.tagName);b.setAttribute("type",a.type);d(a.D,function(a,c){b.setAttribute(a,c)});return b};g.prototype.$d=function(a){this.Ib('<span id="ps-style"/>');var b=this.ja.getElementById("ps-style");b.parentNode.replaceChild(a,b)};g.prototype.ub=function(a){a.pe=this.ba;this.ba=[];this.Fa.unshift(a)};g.prototype.Bc=function(a){a!==this.Fa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Fa.shift(),this.write.apply(this,a.pe),!this.Fa.length&&this.Sa&&(this.ub(this.Sa),this.Sa=null))};g.prototype.Te=function(a,b){var c=this.ld(a),d=this.Ke(c),e=this.options.Vc;a.src&&(c.src=a.src,this.Ie(c,d?e:function(){b();e()}));try{this.Zd(c),a.src&&!d||b()}catch(D){this.options.error(D),b()}};g.prototype.ld=function(a){var b=this.ja.createElement(a.tagName);d(a.D,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};g.prototype.Zd=function(a){this.Ib('<span id="ps-script"/>');
var b=this.ja.getElementById("ps-script");b.parentNode.replaceChild(a,b)};g.prototype.Ie=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};g.prototype.Ke=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.De&&a.src&&a.hasAttribute("async"))};
return g}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.Wc(),a.stream=c.apply(null,a),b.Xc())}function c(c,g,k){function l(a){a=k.fd(a);t.write(a);k.Yc(a)}t=new n(c,k);t.id=d++;t.name=k.name||t.id;var m=c.ownerDocument,p={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var q=t.Ia.onerror||a;t.Ia.onerror=function(a,b,c){k.error({jf:a+
" - "+b+":"+c});q.apply(t.Ia,arguments)};t.write(g,function(){e(m,p);t.Ia.onerror=q;k.done();t=null;b()});return t}var d=0,m=[],t=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=g(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.ff?c[0]:c;var h=[c,d,e];c.te={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.ed(h);m.push(h);t||b();return c.te},{streams:{},lf:m,Ze:n})}();Kc=l.postscribe}})();var Lc={},Mc=null;Lc.w="GTM-7BF3X";Lc.Na="af";var Nc=null,Oc=null,Pc="//www.googletagmanager.com/a?id="+Lc.w+"&cv=289",Qc={},Rc={},Sc=function(){var a=Mc.sequence||0;Mc.sequence=a+1;return a};var P=function(){var a=function(a){return{toString:function(){return a}}};return{Lb:a("convert_case_to"),Mb:a("convert_false_to"),Nb:a("convert_null_to"),Ob:a("convert_true_to"),Pb:a("convert_undefined_to"),ca:a("function"),Mc:a("instance_name"),Nc:a("live_only"),Oc:a("malware_disabled"),Pc:a("once_per_event"),Rb:a("once_per_load"),Sb:a("setup_tags"),Qc:a("tag_id"),Tb:a("teardown_tags")}}();var Tc=new Ea,Uc={},Xc={set:function(a,b){Qa(Vc(a,b),Uc)},get:function(a){return Wc(a,2)},reset:function(){Tc=new Ea;Uc={}}},Wc=function(a,b){return 2!=b?Tc.get(a):Yc(a)},Yc=function(a,b,c){var d=a.split(".");return $c(d)},$c=function(a){for(var b=Uc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var bd=function(a,b){Tc.set(a,b);Qa(Vc(a,b),Uc)},Vc=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};var cd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),dd={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ed={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},fd=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var gd=function(a){var b=Wc("gtm.whitelist");var c=b&&fd(Ba(b),dd),d=Wc("gtm.blacklist")||Wc("tagTypeBlacklist")||[];
cd.test(z.location&&z.location.hostname)&&(d=Ba(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&fd(Ba(d),ed),g={};return function(h){var k=h&&h[P.ca];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Rc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>va(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>va(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var r;if(!(r=
0<=va(e,k)))a:{for(var u=l||[],t=new Ea,A=0;A<e.length;A++)t.set(e[A],!0);for(var C=0;C<u.length;C++)if(t.get(u[C])){r=!0;break a}r=!1}q=r}return g[k]=!m||q}};var hd={ud:function(a,b){b[P.Lb]&&"string"===typeof a&&(a=1==b[P.Lb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(P.Nb)&&null===a&&(a=b[P.Nb]);b.hasOwnProperty(P.Pb)&&void 0===a&&(a=b[P.Pb]);b.hasOwnProperty(P.Ob)&&!0===a&&(a=b[P.Ob]);b.hasOwnProperty(P.Mb)&&!1===a&&(a=b[P.Mb]);return a}};var id=function(a,b){this.qe=b};ia(id,Error);id.prototype.getParameters=function(){return this.qe};var jd=function(a){var b=Mc.zones;!b&&a&&(b=Mc.zones=a());return b},kd={active:!0,isWhitelisted:function(){return!0}};var ld=!1,md=0,nd=[];function od(a){if(!ld){var b=B.createEventObject,c="complete"==B.readyState,d="interactive"==B.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ld=!0;for(var e=0;e<nd.length;e++)I(nd[e])}nd.push=function(){for(var a=0;a<arguments.length;a++)I(arguments[a]);return 0}}}function pd(){if(!ld&&140>md){md++;try{B.documentElement.doScroll("left"),od()}catch(a){z.setTimeout(pd,50)}}}var qd=function(a){ld?a():nd.push(a)};var rd=function(){function a(a){return!ta(a)||0>a?0:a}if(!Mc._li&&z.performance&&z.performance.timing){var b=z.performance.timing.navigationStart,c=ta(Xc.get("gtm.start"))?Xc.get("gtm.start"):0;Mc._li={cst:a(c-b),cbt:a(Nc-b)}}};var sd=!1,td=function(){return z.GoogleAnalyticsObject&&z[z.GoogleAnalyticsObject]};var ud=function(a){z.GoogleAnalyticsObject||(z.GoogleAnalyticsObject=a||"ga");var b=z.GoogleAnalyticsObject;if(!z[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);z[b]=c}rd();return z[b]},wd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=td();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Ad=function(){return"&tc="+qc.filter(function(a){return a}).length},Bd="0.005000">Math.random(),Cd=function(){var a=0,b=0;return{ce:function(){if(2>a)return!1;1E3<=Da()-b&&(a=0);return 2<=a},Be:function(){1E3<=Da()-b&&(a=0);a++;b=Da()}}},Dd="",Ed=function(){Dd=[Pc,"&v=3&t=t","&pid="+wa(),"&rv="+Lc.Na].join("")},Fd={},Gd="",Hd=void 0,Id={},Jd={},Kd=void 0,Ld=null,Md=1E3,Nd=function(){var a=Hd;return void 0===a?"":[Dd,Fd[a]?"":"&es=1",Id[a],Ad(),Gd,"&z=0"].join("")},Od=function(){Kd&&
(z.clearTimeout(Kd),Kd=void 0);void 0===Hd||Fd[Hd]&&!Gd||(Jd[Hd]||Ld.ce()||0>=Md--?Jd[Hd]=!0:(Ld.Be(),G(Nd()),Fd[Hd]=!0,Gd=""))},Pd=function(a,b,c){if(Bd&&!Jd[a]&&b){a!==Hd&&(Od(),Hd=a);var d=c+String(b[P.ca]||"").replace(/_/g,"");Gd=Gd?Gd+"."+d:"&tr="+d;Kd||(Kd=z.setTimeout(Od,500));2022<=Nd().length&&Od()}};function Qd(a,b,c,d,e,g){var h=qc[a],k=Rd(a,b,c,d,e,g);if(!k)return null;var l=yc(h[P.Sb],g.X,[],Sd());if(l&&l.length){var m=l[0];k=Qd(m.index,b,k,1===m.cc?e:k,e,g)}return k}
function Rd(a,b,c,d,e,g){function h(){var b=zc(k,g.X,[],l);b.vtp_gtmOnSuccess=function(){Pd(g.id,qc[a],"5");c()};b.vtp_gtmOnFailure=function(){Pd(g.id,qc[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[P.Oc])d();else{Pd(g.id,k,"1");try{xc(b)}catch(C){Pd(g.id,
k,"7");e()}}}var k=qc[a];if(g.X(k))return null;var l=Sd(),m=yc(k[P.Tb],g.X,[],l);if(m&&m.length){var n=m[0],p=Qd(n.index,b,c,d,e,g);if(!p)return null;c=p;d=2===n.cc?e:p}if(k[P.Rb]||k[P.Pc]){var q=k[P.Rb]?rc:b,r=c,u=d;if(!q[a]){h=Ga(h);var t=Td(a,q,h);c=t.S;d=t.la}return function(){q[a](r,u)}}return h}
function Td(a,b,c){var d=[],e=[];b[a]=Ud(d,e,c);return{S:function(){b[a]=Vd;for(var c=0;c<d.length;c++)d[c]()},la:function(){b[a]=Wd;for(var c=0;c<e.length;c++)e[c]()}}}function Ud(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Vd(a){a()}function Wd(a,b){b()}function Sd(){return function(){}};function Xd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ga(function(){b++;d&&b>=c&&a()})},bd:function(){d=!0;b>=c&&a()}}}function Yd(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Kc,k=b.Kc;g=h>k?1:h<k?-1:0}return g}
function Zd(a,b){if(!Bd)return;var c=function(a){var d=b.X(qc[a])?"3":"4",g=yc(qc[a][P.Sb],b.X,[],qa);g&&g.length&&c(g[0].index);Pd(b.id,qc[a],d);var h=yc(qc[a][P.Tb],b.X,[],qa);h&&h.length&&c(h[0].index)};c(a);}var $d=!1;function Gc(){return function(){}};var ae=function(a,b){var c=wc(a,b),d;for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);qc.push(c);return qc.length-1};var be="allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");var ce=/[A-Z]+/,de=/\s/,ee=function(a){if(sa(a)&&(a=a.trim(),!de.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ce.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],W:d}}}}};var fe=null,ge={},he={},ie;function je(){fe=fe||!Mc.gtagRegistered;Mc.gtagRegistered=!0;return fe}var ke=function(a,b){var c={event:a};b&&(c.eventModel=Qa(b),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function le(a){if(void 0===he[a.id]){var b;switch(a.prefix){case "UA":b=ae("gtagua",{trackingId:a.id});break;case "AW":b=ae("gtagaw",{conversionId:a});break;case "DC":b=ae("gtagfl",{targetId:a.id});break;case "GF":b=ae("gtaggf",{conversionId:a});break;case "G":b=ae("get",{trackingId:a.id,isAutoTag:!0});break;case "HA":b=ae("gtagha",{conversionId:a});break;default:return}if(!ie){var c=wc("v",{name:"send_to",dataLayerVersion:2});nc.push(c);ie=["macro",nc.length-1]}var d={arg0:ie,arg1:a.id,ignore_case:!1};
d[P.ca]="_lc";pc.push(d);var e={"if":[pc.length-1],add:[b]};e["if"]&&(e.add||e.block)&&oc.push(e);he[a.id]=b}}
var ne={event:function(a){var b=a[1];if(sa(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2]))return;c=a[2]}var d=ke(b,c);return d}},set:function(a){var b;2==a.length&&Pa(a[1])?
b=Qa(a[1]):3==a.length&&sa(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Qa(b),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},me=Ga(function(){});var oe=!1,pe=[];function qe(){if(!oe){oe=!0;for(var a=0;a<pe.length;a++)I(pe[a])}};var re=[],se=!1,te=function(a){var b=a.eventCallback,c=Ga(function(){ra(b)&&I(function(){b(Lc.w)})}),d=a.eventTimeout;d&&z.setTimeout(c,Number(d));return c},ue=function(){for(var a=!1;!se&&0<re.length;){se=!0;delete Uc.eventModel;var b=re.shift();if(ra(b))try{b.call(Xc)}catch(Ie){}else if(ua(b)){var c=b;if(sa(c[0])){var d=c[0].split("."),e=d.pop(),g=c.slice(1),h=Wc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,g)}catch(Ie){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{if(b.length&&sa(b[0])){var l=ne[b[0]];if(l){b=l(b);break a}}b=void 0}if(!b){se=!1;continue}}var m;var n=void 0,p=b,q=p._clear;for(n in p)p.hasOwnProperty(n)&&"_clear"!==n&&(q&&bd(n,void 0),bd(n,p[n]));var r=p.event;if(r){var u=p["gtm.uniqueEventId"];u||(u=Sc(),p["gtm.uniqueEventId"]=u,bd("gtm.uniqueEventId",u));Oc=r;var t;var A,C,D=p,L=D.event,E=D["gtm.uniqueEventId"],F=Mc.zones;C=F?F.checkState(Lc.w,E):kd;if(C.active){var J=te(D);c:{var H=C.isWhitelisted;
if("gtm.js"==L){if($d){A=!1;break c}$d=!0}var K=E,R=L;if(Bd&&!Jd[K]&&Hd!==K){Od();Hd=K;Gd="";var ja=Id,W=K,ba,M=R;ba=0===M.indexOf("gtm.")?encodeURIComponent(M):"*";ja[W]="&e="+ba+"&eid="+K;Kd||(Kd=z.setTimeout(Od,500))}var T=gd(H),O={id:E,name:L,callback:J||qa,X:T,Ea:[]};O.Ea=Ic(T);for(var za,ab=O,Vb=Xd(ab.callback),Bc=[],pb=[],bb=0;bb<qc.length;bb++)if(ab.Ea[bb]){var Je=qc[bb];var Wb=Vb.add();try{var Ke=Qd(bb,Bc,Wb,Wb,Wb,ab);Ke?pb.push({Kc:bb,b:Ac(Je),L:Ke}):(Zd(bb,ab),Wb())}catch(Ie){Wb()}}Vb.bd();pb.sort(Yd);for(var vd=0;vd<pb.length;vd++)pb[vd].L();za=0<pb.length;if("gtm.js"===L||"gtm.sync"===L)d:{}if(za){for(var Mg={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Cc=0;Cc<O.Ea.length;Cc++)if(O.Ea[Cc]){var Me=qc[Cc];if(Me&&!Mg[Me[P.ca]]){A=!0;break c}}A=!1}else A=za}t=A?!0:!1}else t=!1;Oc=null;m=t}else m=!1;a=m||a}se=!1}return!a},ve=function(){var a=ue();try{var b=z["dataLayer"].hide;if(b&&void 0!==b[Lc.w]&&b.end){b[Lc.w]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},we=function(){var a=gb("dataLayer",[]),b=gb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};nd.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});pe.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(re.push.apply(re,b);300<this.length;)this.shift();return ue()};re.push.apply(re,a.slice(0));
I(ve)};var xe={};xe.Ja=new String("undefined");xe.fb={};var ye=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===xe.Ja?b:a[d]);return c.join("")}};ye.prototype.toString=function(){return this.resolve("undefined")};ye.prototype.valueOf=ye.prototype.toString;xe.vd=function(a){return new ye(a)};var ze={};xe.Ce=function(a,b){var c=Sc();ze[c]=[a,b];return c};xe.Zb=function(a){var b=a?0:1;return function(a){var c=ze[a];if(c&&"function"===typeof c[b])c[b]();ze[a]=void 0}};
xe.be=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};xe.ue=function(a){if(a===xe.Ja)return a;var b=Sc();xe.fb[b]=a;return'google_tag_manager["'+Lc.w+'"].macro('+b+")"};xe.Rc=ye;var Ae=new Ea,Be=function(a,b){function c(a){var b=N(a),c=vb(b,"protocol"),d=vb(b,"host",!0),e=vb(b,"port"),g=vb(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,g]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0};
function Ce(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<e.length;g++)if(b[e[g]]){d=b[e[g]](c);break a}}catch(u){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=va(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,r=Ae.get(q);r||(r=new RegExp(c,p),Ae.set(q,r));n=r.test(b)}catch(u){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Be(b,c)}return!1};var De=function(){return!1};function Ee(a,b){return Sa(Wc(a,b||2))}function Fe(){return(new Date).getTime()}function Ge(a){return ya(Ra(a))}function He(a){return null===a?"null":void 0===a?"undefined":a.toString()}function Ne(a,b){return wa(a,b)}function Oe(a,b,c){if(!(a instanceof w))return null;for(var d=new La,e=!1,g=0;g<a.length();g++){var h=a.get(g);h instanceof La&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var Pe=function(){var a=new db,b=xb();De()&&(b.loadJavaScript=qa,b.loadIframe=qa);a.addAll({injectScript:b.injectScript,sendPixel:b.sendPixel,injectHiddenIframe:b.injectHiddenIframe,encodeUri:b.encodeURI,encodeUriComponent:b.encodeURIComponent,setInWindow:b.setInWindow,copyFromWindow:b.copyFromWindow,copyFromDataLayer:Ee,getUrl:b.getUrl,getDate:Fe,callLater:b.callLater,generateRandom:Ne,makeTableMap:Oe,makeString:He,makeInteger:Ge,logToConsole:b.logToConsole,queryPermission:b.queryPermission});return function(b){return a.get(b)}};var Qe,Te=function(){var a=data.runtime||[],b=data.permissions||{};Qe=new zb;mc=function(a,b){var c=new La,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,Sa(b[d]));var e=Qe.L([a,c]);e instanceof v&&"return"===e.C&&(e=e.getData());return Ra(e)};tc=Ce;yb(Qe,Pe());for(var c=0;c<a.length;c++){var d=a[c];if(!ua(d)||3>d.length){if(0==d.length)continue;return}Qe.L(d)}var e=function(a){throw Re(a,{},"The requested permission is not configured.");};Qe.oa(e);for(var g in b)if(b.hasOwnProperty(g)){var h=b[g],k=!1,
l;for(l in h)h.hasOwnProperty(l)&&(k=!0,Qe.Pa(g,l,Se(l,h[l])));k||Qe.Pa(g,"default",e)}};function Se(a,b){var c=wc(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Re;return xc(c)}function Re(a,b,c){return new id(a,b,c)};var Ue=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ve=function(a){return encodeURIComponent(a)},We=function(a,b){if(!a)return!1;var c=vb(N(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Q=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null},Xe=function(a,b){Qa(a,b)},Ye=function(a){return ya(a)},Ze=function(a,b){return va(a,b)},$e=function(){return!1};var af=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||mb(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},bf=function(a){Mc.hasOwnProperty("autoEventsSettings")||(Mc.autoEventsSettings={});var b=Mc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},cf=function(a,b,c,d){var e=bf(a),g=Fa(e,b,d);e[b]=
c(g)},df=function(a,b,c){var d=bf(a);return Fa(d,b,c)};var ff=function(a,b){if(!ef)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!B.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);return null},gf=!1;
if(B.querySelectorAll)try{var hf=B.querySelectorAll(":root");hf&&1==hf.length&&hf[0]==B.documentElement&&(gf=!0)}catch(a){}var ef=gf;var jf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},mf=function(a,b,c,d){var e=kf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=lf(e,function(a){return a.Dd},b);if(1===e.length)return e[0].id;e=lf(e,function(a){return a.se},c);return e[0]?e[0].id:void 0}},pf=function(a,b,c,d,e,
g){c=c||"/";var h=d=d||"auto",k=c;if(nf.test(document.location.hostname)||"/"===k&&of.test(h))return!1;g&&(b=encodeURIComponent(b));var l=b;l&&1200<l.length&&(l=l.substring(0,1200));b=l;var m=a+"="+b+"; path="+c+"; ";void 0!==e&&(m+="expires="+e.toUTCString()+"; ");if("auto"===d){var n=!1,p;a:{var q=[],r=document.location.hostname.split(".");if(4===r.length){var u=r[r.length-1];if(parseInt(u,10).toString()===u){p=["none"];break a}}for(var t=r.length-2;0<=t;t--)q.push(r.slice(t).join("."));q.push("none");
p=q}for(var A=p,C=0;C<A.length&&!n;C++)n=pf(a,b,c,A[C],e);return n}d&&"none"!==d&&(m+="domain="+d+";");var D=document.cookie;document.cookie=m;return D!=document.cookie||0<=jf(a).indexOf(b)};function lf(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function kf(a,b){for(var c=[],d=jf(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Dd:1*k[0]||1,se:1*k[1]||1}))}}return c}var of=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,nf=/(^|\.)doubleclick\.net$/i;var qf=function(){for(var a=eb.userAgent+(B.cookie||"")+(B.referrer||""),b=a.length,c=z.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Da()/1E3)].join(".")},tf=function(a,b,c,d){var e=rf(b);return mf(a,e,sf(c),d)};function rf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}
function sf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1}function uf(a,b){var c=""+rf(a),d=sf(b);1<d&&(c+="-"+d);return c};var vf=["1"],wf={},Af=function(a,b,c){var d=xf(a);wf[d]||yf(d,b,c)||(zf(d,qf(),b,c),yf(d,b,c))};function zf(a,b,c,d){var e;e=["1",uf(c,d),b].join(".");pf(a,e,d,c,new Date(Da()+7776E6))}function yf(a,b,c){var d=tf(a,b,c,vf);d&&(wf[a]=d);return d}function xf(a){return(a||"_gcl")+"_au"};function Bf(){for(var a=Cf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Df(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Cf,Ef,Ff=function(a){Cf=Cf||Df();Ef=Ef||Bf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Cf[l],Cf[m],Cf[n],Cf[p])}return b.join("")},Gf=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=Ef[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Cf=Cf||Df();Ef=Ef||
Bf();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Hf;function If(a,b){if(!a||b===B.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Jf=function(){var a=gb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Kf=/(.*?)\*(.*?)\*(.*)/,Lf=/([^?#]+)(\?[^#]*)?(#.*)?/,Mf=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Of=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ff(String(d))))}var e=b.join("*");return["1",Nf(e),e].join("*")},Nf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:
b),a].join("*"),d;if(!(d=Hf)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Hf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Hf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Qf=function(){return function(a){var b=N(z.location.href),c=b.search.replace("?",""),d=ub(c,"_gl",!0)||"";a.query=Pf(d)||{};var e=vb(b,"fragment").match(Mf);a.fragment=Pf(e&&e[3]||"")||{}}},Pf=function(a){var b;b=void 0===b?3:b;try{if(a){var c=Kf.exec(a);if(c&&
"1"===c[1]){var d=c[3],e;a:{for(var g=c[2],h=0;h<b;++h)if(g===Nf(d,h)){e=!0;break a}e=!1}if(e){for(var k={},l=d?d.split("*"):[],m=0;m<l.length;m+=2)k[l[m]]=Gf(l[m+1]);return k}}}}catch(n){}};
function Rf(a,b,c){function d(a){var b=a,c=Mf.exec(b),d=b;if(c){var e=c[2],g=c[4];d=c[1];g&&(d=d+e+g)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=Lf.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Sf(a,b,c){for(var d={},e={},g=Jf().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&If(k.domains,b)&&(k.fragment?Ha(e,k.callback()):Ha(d,k.callback()))}if(Ia(d)){var l=Of(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,q=0;q<n.length;q++){var r=n[q];if("_gl"===r.name){r.setAttribute("value",l);p=!0;break}}if(!p){var u=B.createElement("input");u.setAttribute("type","hidden");u.setAttribute("name","_gl");u.setAttribute("value",
l);a.appendChild(u)}}else if("post"===m){var t=Rf(l,a.action);sb.test(t)&&(a.action=t)}}}else Tf(l,a,!1)}if(!c&&Ia(e)){var A=Of(e);Tf(A,a,!0)}}function Tf(a,b,c){if(b.href){var d=Rf(a,b.href,void 0===c?!1:c);sb.test(d)&&(b.href=d)}}
var Uf=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Sf(e,e.hostname,!1)}}catch(h){}},Vf=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=vb(N(b.action),"host");Sf(b,c,!0)}}catch(d){}},Wf=function(a,b,c,d){var e=Jf();e.init||(kb(B,"mousedown",Uf),kb(B,"keyup",Uf),kb(B,"submit",Vf),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};Jf().decorators.push(g)};var Xf=/^\w+$/,Yf=/^[\w-]+$/,Zf=/^~?[\w-]+$/,$f={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"},bg=function(a){var b=jf(a,B.cookie),c=[];if(!b||0==b.length)return c;for(var d=0;d<b.length;d++){var e=b[d].split(".");3==e.length&&"GCL"==e[0]&&e[1]&&c.push(e[2])}return ag(c)};function cg(a){return a&&"string"==typeof a&&a.match(Xf)?a:"_gcl"}
var dg=function(a){if(a){if("string"==typeof a){var b=cg(a);return{dc:b,aw:b,gf:b,ha:b}}if(a&&"object"==typeof a)return{dc:cg(a.dc),aw:cg(a.aw),gf:cg(a.gf),ha:cg(a.ha)}}return{dc:"_gcl",aw:"_gcl",gf:"_gcl",ha:"_gcl"}},eg=function(){var a=N(z.location.href),b={},c=function(a,c){b[c]||(b[c]=[]);b[c].push(a)},d=vb(a,"query",!1,void 0,"gclid"),e=vb(a,"query",!1,void 0,"gclsrc");if(!d||!e){var g=a.hash.replace("#","");d=d||ub(g,"gclid");e=e||ub(g,"gclsrc")}if(void 0!==d&&d.match(Yf))switch(e){case void 0:c(d,
"aw");break;case "aw.ds":c(d,"aw");c(d,"dc");break;case "ds":c(d,"dc");break;case "gf":c(d,"gf");break;case "ha":c(d,"ha")}var h=vb(a,"query",!1,void 0,"dclid");h&&c(h,"dc");return b},gg=function(a){function b(a,b){var g=fg(a,c);g&&pf(g,b,e,d,h,!0)}a=a||{};var c=dg(a.prefix),d=a.domain||"auto",e=a.path||"/",g=Da(),h=new Date(g+7776E6),k=Math.round(g/1E3),l=eg(),m=function(a){return["GCL",k,a].join(".")};l.aw&&(!0===a.xf?b("aw",m("~"+l.aw[0])):b("aw",m(l.aw[0])));l.dc&&b("dc",m(l.dc[0]));l.gf&&b("gf",
m(l.gf[0]));l.ha&&b("ha",m(l.ha[0]))},fg=function(a,b){var c=$f[a];if(void 0!==c){var d=b[a];if(void 0!==d)return d+c}},hg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)},ig=function(a,b,c,d,e){if(ua(b)){var g=dg(e);Wf(function(){for(var b={},c=0;c<a.length;++c){var d=fg(a[c],g);if(d){var e=jf(d,B.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},ag=function(a){return a.filter(function(a){return Zf.test(a)})};var jg=/^\d+\.fls\.doubleclick\.net$/;function kg(a){var b=N(z.location.href),c=vb(b,"host",!1);if(c&&c.match(jg)){var d=vb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
var lg=function(a){var b=kg("gclaw");if(b)return b.split(".");var c=dg(a);if("_gcl"==c.aw){var d=eg().aw||[];if(0<d.length)return d}var e=fg("aw",c);return e?bg(e):[]},mg=function(a){var b=kg("gcldc");if(b)return b.split(".");var c=dg(a);if("_gcl"==c.dc){var d=eg().dc||[];if(0<d.length)return d}var e=fg("dc",c);return e?bg(e):[]},ng=function(a){var b=dg(a);if("_gcl"==b.ha){var c=eg().ha||[];if(0<c.length)return c}return bg(b.ha+"_ha")},og=function(){var a=kg("gac");if(a)return decodeURIComponent(a);
for(var b=[],c=B.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var g=c[e].match(d);g&&b.push({Db:g[1],value:g[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Db]||(h[b[k].Db]=[]),h[b[k].Db].push({timestamp:l[1],Kd:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],r=0;r<q.length;r++)p.push(q[r].Kd);p=ag(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")},pg=function(a,
b,c){Af(a,b,c);var d=wf[xf(a)],e=eg().dc||[];if(d&&0<e.length){var g=Mc.joined_au=Mc.joined_au||{},h=a||"_gcl";if(!g[h]){for(var k=!1,l=0;l<e.length;l++){var m="https://adservice.google.com/ddm/regclk";m+="?gclid="+e[l]+"&auiddc="+d;rb(m);k=!0}if(k){var n=xf(a);wf[n]&&zf(n,wf[n],b,c);g[h]=!0}}}};var rg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:qg()};function qg(){if(3===Lc.Na.length)return"g";return"G"}var sg=function(a){var b=Lc.w.split("-"),c=b[0].toUpperCase(),d=rg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===Lc.Na.length){var h;a:{h="w"}g="2"+h}else g="";return g+d+Lc.Na+e};var zg=!!z.MutationObserver,Ag=void 0,Bg=function(a){if(!Ag){var b=function(){var a=B.body;if(a)if(zg)(new MutationObserver(function(){for(var a=0;a<Ag.length;a++)I(Ag[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;kb(a,"DOMNodeInserted",function(){b||(b=!0,I(function(){b=!1;for(var a=0;a<Ag.length;a++)I(Ag[a])}))})}};Ag=[];B.body?b():I(b)}Ag.push(a)};var Cg=/\./g,Dg=/\*/g;var Ug="www.googletagmanager.com/gtm.js";
var Vg=Ug,Wg=function(a,b,c,d){kb(a,b,c,d)},Xg=function(a,b){return z.setTimeout(a,b)},S=function(a,b,c){if(De()){b&&I(b)}else return ib(a,b,c)},Yg=function(){return z.location.href},Zg=function(a){return vb(N(a),"fragment")},$g=function(a,b,c,d,e){return vb(a,b,c,d,e)},U=function(a,b){return Wc(a,b||2)},ah=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return z["dataLayer"].push(a)},bh=function(a,
b){z[a]=b},V=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},ch=function(a,b,c){return jf(a,b,void 0===c?!0:!!c)},dh=function(a,b,c){gg({prefix:a,path:b,domain:c})},eh=function(a,b,c,d){var e=Qf(),g=Jf();g.data||(g.data={query:{},fragment:{}},e(g.data));var h={},k=g.data;k&&(Ha(h,k.query),Ha(h,k.fragment));for(var l=dg(b),m=0;m<a.length;++m){var n=a[m];if(void 0!==$f[n]){var p=fg(n,l),q=h[p];if(q){var r=Math.min(hg(q),Da()),u;b:{for(var t=
r,A=jf(p,B.cookie),C=0;C<A.length;++C)if(hg(A[C])>t){u=!0;break b}u=!1}u||pf(p,q,c,d,new Date(r+7776E6),!0)}}}},fh=function(a,b,c,d,e){ig(a,b,c,d,e);},gh=function(a,b,c){var d;a:{var e;e=c||100;for(var g={},h=0;h<b.length;h++)g[b[h]]=!0;for(var k=a,l=0;k&&l<=e;l++){if(g[String(k.tagName).toLowerCase()]){d=k;break a}k=k.parentElement}d=null}return d},X=function(a,b,c,d){var e=
!d&&"http:"==z.location.protocol;e&&(e=2!==hh());return(e?b:a)+c},ih=function(a,b){if(De()){b&&I(b)}else jb(a,b)};
var jh=function(a){var b=0;return b},kh=function(a){},lh=function(a){var b=!1;return b},mh=function(a,b){var c;a:{if(a&&
ua(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},nh=function(a,b,c,d){cf(a,b,c,d)},oh=function(a,b,c){return df(a,b,c)},ph=function(a){return!!df(a,"init",!1)},qh=function(a){bf(a).init=!0};
var hh=function(){var a=Vg;if(fb){var b=fb.toLowerCase();if(0===b.indexOf("https://"))return 2;if(0===b.indexOf("http://"))return 3}a=a.toLowerCase();for(var c="https://"+a,d="http://"+a,e=1,g=B.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var k=g[h].src;if(k){k=k.toLowerCase();if(0===k.indexOf(d))return 3;1===e&&0===k.indexOf(c)&&(e=2)}}return e};
var uh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Vg;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));S(X("https://","http://",d))};
var wh=function(a,b,c){a instanceof xe.Rc&&(a=a.resolve(xe.Ce(b,c)),b=qa);return{nb:a,S:b}};var Jh=function(a,b,c){this.n=a;this.t=b;this.p=c},Kh=function(){this.c=1;this.e=[];this.p=null};function Lh(a){var b=Mc,c=b.gss=b.gss||{};return c[a]=c[a]||new Kh}var Mh=function(a,b){Lh(a).p=b},Nh=function(a,b,c){var d=Math.floor(Da()/1E3);Lh(a).e.push(new Jh(b,d,c))},Oh=function(a){};var Xh=window,Yh=document,Zh=function(a){var b=Xh._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Xh["ga-disable-"+a])return!0;try{var c=Xh.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=jf("AMP_TOKEN",Yh.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var di=function(a){if(1===Lh(a).c){Lh(a).c=2;var b=encodeURIComponent(a);ib(("http:"!=z.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},ei=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;rd();S("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=V("google_trackConversion");if(ra(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Q(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:sg(void 0)})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.b=0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.g="d";Z.__d.h=!0;Z.__d.b=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=ef?B.querySelectorAll(a.vtp_elementSelector):null;e&&0<e.length&&(b=e[0])}else b=nb(a.vtp_elementId);b&&(c=d?mb(b,d):ob(b));return Ca(String(b&&c))})}();Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.b=0})(function(){return Oc})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.b=0})(function(a){var b=U("gtm.referrer",1)||B.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?$g(N(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):wb(N(String(b))):String(b)})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=af(b);d.event="gtm.click";ah(d)}}(function(a){Z.__cl=a;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.b=0})(function(b){if(!ph("cl")){var c=V("document");kb(c,"click",a,!0);qh("cl")}I(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.b=0})(function(a){return wa(a.vtp_min,a.vtp_max)})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.g="u";Z.__u.h=!0;Z.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:U("gtm.url",1))||Yg();var d=b[a("vtp_component")];return d&&"URL"!=d?$g(N(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):wb(N(String(c)))})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(a){return function(){if(a.sb&&a.tb>=a.sb)a.ob&&V("self").clearInterval(a.ob);else{a.tb++;var b=(new Date).getTime();ah({event:a.O,"gtm.timerId":a.ob,"gtm.timerEventNumber":a.tb,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.sb,"gtm.timerStartTime":a.Jc,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.Jc,"gtm.triggers":a.Qe})}}}(function(a){Z.__tl=a;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.b=0})(function(b){I(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{O:b.vtp_eventName,tb:0,interval:Number(b.vtp_interval),sb:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Qe:String(b.vtp_uniqueTriggerId||"0"),Jc:(new Date).getTime()};c.ob=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();

Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},g={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;Xe(Q(l.vtp_fieldsToSet,"fieldName","value"),e);Xe(Q(l.vtp_contentGroup,"index","group"),g);Xe(Q(l.vtp_dimension,"index","dimension"),h);Xe(Q(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=Qa(l,void 0);b=Qa(b,m)}Xe(Q(b.vtp_fieldsToSet,"fieldName","value"),e);Xe(Q(b.vtp_contentGroup,
"index","group"),g);Xe(Q(b.vtp_dimension,"index","dimension"),h);Xe(Q(b.vtp_metric,"index","metric"),k);var n=ud(b.vtp_functionName),p="",q="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(q=b.vtp_trackerName,p=q+"."):(q="gtm"+Sc(),p=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},t=function(a){var b=[].slice.call(arguments,0);b[0]=p+b[0];n.apply(window,b)},A=function(a,b){return void 0===b?b:a(b)},C=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&t("set",a+c,b[c])},D=function(){},L=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&r[e]||!c&&void 0===r[e])){var g=u[e]?Aa(a[e]):a[e];"anonymizeIp"!=e||g||(g=void 0);b[e]=g;d++}return d},E={name:q};L(e,E,
!0);n("create",b.vtp_trackingId||c.trackingId,E);t("set","&gtm",sg(!0));(function(a,c){void 0!==b[c]&&t("set",a,b[c])})("nonInteraction","vtp_nonInteraction");C("contentGroup",g);C("dimension",h);C("metric",k);var F={};L(e,F,!1)&&t("set",F);var J;b.vtp_enableLinkId&&t("require","linkid","linkid.js");t("set","hitCallback",function(){var a=
e&&e.hitCallback;ra(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(t("require","ec","ec.js"),D());var H={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:A(String,b.vtp_eventLabel||c.label),eventValue:A(Ye,b.vtp_eventValue||c.value)};L(J,H,!1);t("send",H);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(t("require","ec","ec.js"),D());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var T="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");t("require","displayfeatures",void 0,{cookieName:T})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&
(T="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),t("require","adfeatures",{cookieName:T}));J?t("send","pageview",J):t("send","pageview");b.vtp_autoLinkDomains&&wd(p,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var O=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(O="internal/"+O);a=!0;S(X("https:","http:","//www.google-analytics.com/"+O,e&&e.forceSSL),function(){var a=td();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Z.__ua=b;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.b=0}();



Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(a){var b=U(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(Yg()),d;d=ua(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],g=0;g<d.length;g++)if(d[g]instanceof RegExp){if(d[g].test(a))return!1}else{var h=d[g];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!We(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return $g(N(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.b=0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return U("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=U("gtm.element",1),m=U("event",1),r=Number(new Date);a===l&&b===m&&c>r-250?k=d:(d=k=l?ob(l):"",a=l,b=m);c=r;return k||e.vtp_defaultValue;case "URL":var u;a:{var t=String(U("gtm.elementUrl",1)||e.vtp_defaultValue||""),A=N(t);switch(e.vtp_component||"URL"){case "URL":u=t;break a;case "IS_OUTBOUND":u=h(t,e);break a;default:u=vb(A,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return u;case "ATTRIBUTE":var C;if(void 0===e.vtp_attribute)C=
g(e);else{var D=U("gtm.element",1);C=mb(D,e.vtp_attribute)||e.vtp_defaultValue||""}return C;default:return g(e)}})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=V("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(c){rd();var d={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:sg(void 0)},h=function(a){return function(b,e,g){var h="DATA_LAYER"==a?U(g):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return{value:a.price,quantity:a.quantity,item_id:a.id}}));c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&
(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,S("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.b=0}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.b=0})(function(a){var b=a.vtp_input,c=Q(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();

Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.b=0})(function(a){I(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){var a=function(b,c,g,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,g,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=B.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,hb(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else g()}catch(q){I(h)}}};var b=function(a,b,c){qd(function(){var d,e=Mc;e.postscribe||(e.postscribe=Kc);d=e.postscribe;var g={done:b},m=B.createElement("div");m.style.display="none";m.style.visibility="hidden";B.body.appendChild(m);try{d(m,a,g)}catch(n){I(c)}})};var c=function(d){if(B.body){var e=
d.vtp_gtmOnFailure,g=wh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.nb,k=g.S;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(B.body,qb(h),k,e)()}else Xg(function(){c(d)},200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.b=
0}();
Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.b=0})(function(a){var b=qb('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}G(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();

Z.a.lcl=[],function(){function a(){var a=V("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=gh(e,["a","area"],100);if(!e)return c.returnValue;var g=c.defaultPrevented||!1===c.returnValue,l=df("lcl",g?"nv.mwt":"mwt",0),m=af(e);m.event="gtm.linkClick";if(g){var n=oh("lcl","nv.ids",[]).join(",");if(n)m["gtm.triggers"]=n;else return}else{var p=oh("lcl","ids",[]).join(",");m["gtm.triggers"]=p}if(b(c,e,a)&&!g&&l&&e.href){var q=V((e.target||
"_self").substring(1)),r=!0;if(ah(m,function(){r&&q&&(q.location.href=e.href)},l))r=!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else ah(m,function(){},l||2E3);return!0}};kb(a,"click",e,!1);kb(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=wb(N(b.href)),l=wb(N(e.location));return k!==l}return!0}(function(a){Z.__lcl=
a;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.b=0})(function(b){var c=void 0===b.vtp_waitForTags?!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,g=Number(b.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(g,a)};cf("lcl","mwt",k,0);e||cf("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};nh("lcl","ids",l,[]);e||nh("lcl","nv.ids",l,[]);ph("lcl")||(a(),qh("lcl"));I(b.vtp_gtmOnSuccess)})}();


var fi={macro:function(a){if(xe.fb.hasOwnProperty(a))return xe.fb[a]}};fi.dataLayer=Xc;fi.onHtmlSuccess=xe.Zb(!0);fi.onHtmlFailure=xe.Zb(!1);fi.callback=function(a){Qc.hasOwnProperty(a)&&ra(Qc[a])&&Qc[a]();delete Qc[a]};fi.gd=function(){Mc[Lc.w]=fi;Rc=Z.a;uc=uc||xe;vc=hd};
fi.Yd=function(){Mc=z.google_tag_manager=z.google_tag_manager||{};if(Mc[Lc.w]){var a=Mc.zones;a&&a.unregisterChild(Lc.w)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)nc.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)qc.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)pc.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);oc.push(p)}sc=Z;Te();fi.gd();we();ld=!1;md=0;if("interactive"==
B.readyState&&!B.createEventObject||"complete"==B.readyState)od();else{kb(B,"DOMContentLoaded",od);kb(B,"readystatechange",od);if(B.createEventObject&&B.documentElement.doScroll){var r=!0;try{r=!z.frameElement}catch(t){}r&&pd()}kb(z,"load",od)}oe=!1;"complete"===B.readyState?qe():kb(z,"load",qe);a:{
if(!Bd)break a;Ed();Hd=void 0;Id={};Fd={};Kd=void 0;Jd={};Gd="";Ld=Cd();z.setInterval(Ed,864E5);}Nc=(new Date).getTime()}};fi.Yd();

})()
