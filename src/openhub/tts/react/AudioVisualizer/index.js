import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Icon } from '@lobehub/ui';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Flexbox } from 'react-layout-kit';
import Visualizer from "./Visualizer";
import { jsx as _jsx } from "react/jsx-runtime";
var AudioVisualizer = /*#__PURE__*/memo(function (_ref) {
  var audioRef = _ref.audioRef,
    isLoading = _ref.isLoading,
    barStyle = _ref.barStyle,
    style = _ref.style,
    className = _ref.className;
  var _count$gap$width$barS = _objectSpread({
      count: 4,
      gap: 4,
      width: 48
    }, barStyle),
    count = _count$gap$width$barS.count,
    width = _count$gap$width$barS.width,
    gap = _count$gap$width$barS.gap;
  var maxHeight = (barStyle === null || barStyle === void 0 ? void 0 : barStyle.maxHeight) || width * 3;
  var containerStyle = _objectSpread({
    fontSize: 24,
    height: maxHeight,
    minWidth: (width + gap) * count
  }, style);
  return /*#__PURE__*/_jsx(ErrorBoundary, {
    fallback: /*#__PURE__*/_jsx("div", {
      className: className,
      style: containerStyle
    }),
    children: /*#__PURE__*/_jsx(Flexbox, {
      align: 'center',
      className: className,
      gap: gap,
      horizontal: true,
      justify: 'center',
      style: containerStyle,
      children: isLoading ? /*#__PURE__*/_jsx(Icon, {
        icon: Loader2,
        spin: true
      }) : /*#__PURE__*/_jsx(Visualizer, _objectSpread({
        audioRef: audioRef
      }, barStyle))
    })
  });
});
export default AudioVisualizer;