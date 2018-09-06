'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SWebComponent2 = require('coffeekraken-sugar/js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _imask = require('imask');

var _imask2 = _interopRequireDefault(_imask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SInputMaskComponent = function (_SWebComponent) {
  _inherits(SInputMaskComponent, _SWebComponent);

  function SInputMaskComponent() {
    _classCallCheck(this, SInputMaskComponent);

    return _possibleConstructorReturn(this, (SInputMaskComponent.__proto__ || Object.getPrototypeOf(SInputMaskComponent)).apply(this, arguments));
  }

  _createClass(SInputMaskComponent, [{
    key: 'componentMount',


    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */
    value: function componentMount() {
      _get(SInputMaskComponent.prototype.__proto__ || Object.getPrototypeOf(SInputMaskComponent.prototype), 'componentMount', this).call(this);

      // get the input
      if (this.props.for instanceof HTMLElement) {
        this._inputElm = this.props.for;
      } else if (typeof this.props.for === 'string') {
        this._inputElm = document.querySelector('[name="' + this.props.for + '"], #' + this.props.for);
      }

      if (!this._inputElm) {
        throw 'SInputMaskComponent : In order to work, you need to specify a proper input target...';
      }

      var mask = this.props.mask;
      switch (mask.toString().toLowerCase()) {
        case 'date':
          mask = Date;
          break;
        case 'number':
          mask = Number;
          break;
        case 'url':
          mask = /^http:\/\/\d+$/;
          break;
        case 'email':
          mask = /^\S*@?\S*$/;
          break;
      }

      // init the mask plugin
      console.log(mask);
      this._imask = new _imask2.default(this._inputElm, _extends({
        mask: mask,
        lazy: !this.props.placeholder, // make placeholder always visible
        placeholderChar: typeof this.props.placeholder === 'string' ? this.props.placeholder : '_'
      }, this.props.options));

      // init the mask plugin
      // this._inputMask = __Inputmask(this.props.mask, {
      //   jitMasking: this.props.jit,
      //   importDataAttributes: false,
      //   inputFormat: this.props.inputFormat,
      //   ...this.props.options
      // }).mask(this._inputElm)
    }

    /**
     * Component unmount
     * @definition    SWebComponent.componentUnmount
     * @protected
     */

  }, {
    key: 'componentUnmount',
    value: function componentUnmount() {
      _get(SInputMaskComponent.prototype.__proto__ || Object.getPrototypeOf(SInputMaskComponent.prototype), 'componentUnmount', this).call(this);
      // remove the mask if exist on the target input
      if (this._imask) {
        this._imask.destroy();
      }
    }
  }], [{
    key: 'defaultProps',


    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
      return {

        /**
         * Attach the mask to an input using this attribute. Same as a label is attached to an input
         * @prop
         * @type    {String}
         */
        for: null,

        /**
         * Specify the mask wanted
         * @prop
         * @type    {String}
         */
        mask: null,

        /**
         * Specify if need to display a placeholder or not. You can set the placeholder character here as well
         * @prop
         * @type    {Boolean|String}
         */
        placeholder: false,

        /**
         * Input format when using some aliases like "datetime", etc...
         * @prop
         * @type    {String}
         */
        inputFormat: null,

        /**
         * Jit masking (just in time) make the mask visible only when the user as entered a character
         * @prop
         * @type    {Boolean}
         */
        jit: false,

        /**
         * Specify some option to pass to the inputmask plugin
         * @prop
         * @type    {Object}
         */
        options: {}

      };
    }
  }]);

  return SInputMaskComponent;
}(_SWebComponent3.default);

exports.default = SInputMaskComponent;