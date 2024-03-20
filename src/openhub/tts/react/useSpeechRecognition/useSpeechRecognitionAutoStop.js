import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["onStart", "onStop", "onBlobAvailable", "onRecognitionFinish"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useCallback } from 'react';
import { useAudioRecorder } from "../useAudioRecorder";
import { useSpeechRecognitionCore } from "./useSpeechRecognitionCore";
export var useSpeechRecognitionAutoStop = function useSpeechRecognitionAutoStop(locale) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    onStart = _ref.onStart,
    onStop = _ref.onStop,
    onBlobAvailable = _ref.onBlobAvailable,
    _onRecognitionFinish = _ref.onRecognitionFinish,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useAudioRecorder = useAudioRecorder(onBlobAvailable),
    time = _useAudioRecorder.time,
    formattedTime = _useAudioRecorder.formattedTime,
    startRecord = _useAudioRecorder.start,
    stopRecord = _useAudioRecorder.stop,
    blob = _useAudioRecorder.blob,
    url = _useAudioRecorder.url;
  var _useSpeechRecognition = useSpeechRecognitionCore(locale, _objectSpread({
      onRecognitionFinish: function onRecognitionFinish(data) {
        _onRecognitionFinish === null || _onRecognitionFinish === void 0 || _onRecognitionFinish(data);
        stopRecord();
      }
    }, rest)),
    isLoading = _useSpeechRecognition.isLoading,
    start = _useSpeechRecognition.start,
    stop = _useSpeechRecognition.stop,
    text = _useSpeechRecognition.text;
  var handleStart = useCallback(function () {
    onStart === null || onStart === void 0 || onStart();
    start();
    startRecord();
  }, [start, startRecord]);
  var handleStop = useCallback(function () {
    onStop === null || onStop === void 0 || onStop();
    stop();
    stopRecord();
  }, [stop, stopRecord]);
  return {
    blob: blob,
    formattedTime: formattedTime,
    isLoading: isLoading,
    isRecording: isLoading,
    response: new Response(JSON.stringify({
      text: text
    }), {
      status: 200
    }),
    start: handleStart,
    stop: handleStop,
    text: text,
    time: time,
    url: url
  };
};