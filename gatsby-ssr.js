"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  if (process.env.NODE_ENV === "production") {
    return setHeadComponents([/*#__PURE__*/_react.default.createElement("script", {
      key: "gatsby-plugin-smartlook",
      dangerouslySetInnerHTML: {
        __html: "\nwindow.smartlook||(function(d) {\nvar o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];\nvar c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';\nc.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);\n})(document);\nsmartlook('init', '" + pluginOptions.projectKey + "');\n      "
      }
    })]);
  }

  return null;
};

exports.onRenderBody = onRenderBody;