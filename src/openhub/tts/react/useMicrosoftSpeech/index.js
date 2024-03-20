import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["options", "locale", "api"];
import _regeneratorRuntime from "@babel/runtime/regenerator";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useState } from 'react';
import { MicrosoftSpeechTTS } from "../../core/MicrosoftSpeechTTS";
import { useTTS } from "../useTTS";
export var useMicrosoftSpeech = function useMicrosoftSpeech(defaultText, init) {
  var _useState = useState(defaultText),
    _useState2 = _slicedToArray(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];
  var options = init.options,
    locale = init.locale,
    api = init.api,
    swrConfig = _objectWithoutProperties(init, _excluded);
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    response = _useState4[0],
    setResponse = _useState4[1];
  var rest = useTTS(options.voice, text, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(segmentText) {
      var instance, res;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            instance = new MicrosoftSpeechTTS(_objectSpread(_objectSpread({}, api), {}, {
              locale: locale
            }));
            _context.next = 3;
            return instance.create({
              input: segmentText,
              options: options
            });
          case 3:
            res = _context.sent;
            setResponse(res);
            return _context.abrupt("return", res.arrayBuffer());
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), swrConfig);
  return _objectSpread({
    response: response,
    setText: setText
  }, rest);
};