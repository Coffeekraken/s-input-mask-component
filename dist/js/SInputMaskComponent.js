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

// hold the registered masks
var __masks = {};

/**
 * Provide a simple efficient webcomponent wrapper around the amazing imaskjs library
 * @example    html
 * <input type="text" name="cool-input" required />
 * <s-input-mask for="cool-input" mask="(0) 000 000 000"></s-input-mask>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */

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
      if (this.props.for instanceof window.HTMLElement) {
        this._inputElm = this.props.for;
      } else if (typeof this.props.for === 'string') {
        this._inputElm = document.querySelector('[name="' + this.props.for + '"], #' + this.props.for);
      }

      if (!this._inputElm) {
        throw new Error('SInputMaskComponent : In order to work, you need to specify a proper input target using the "for" attribute...');
      }

      var maskOptions = {};
      var mask = this.props.mask;
      switch (mask.toString().toLowerCase()) {
        case 'date':
          maskOptions.mask = Date;
          break;
        case 'number':
          maskOptions.mask = Number;
          break;
        default:
          if (__masks[mask]) {
            maskOptions = __masks[mask];
          } else {
            maskOptions.mask = mask;
          }
      }

      // init the mask plugin
      this._imask = new _imask2.default(this._inputElm, _extends({
        lazy: !this.props.placeholder, // make placeholder always visible
        placeholderChar: typeof this.props.placeholder === 'string' ? this.props.placeholder : '_'
      }, maskOptions, this.props.options));
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
    key: 'registerMask',

    /**
     * Register a new mask
     * @param   {String}    name    The mask name to register
     * @param   {Object}    maskOptions    The mask options to register
     */
    value: function registerMask(name, maskOptions) {
      __masks[name.toLowerCase()] = maskOptions;
    }

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */

  }, {
    key: 'defaultProps',
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
         * Specify some option to pass to the imaskjs library
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


function dateMmddyyyy(separator) {
  return {
    mask: Date,
    pattern: 'm' + separator + '`d' + separator + '`Y',
    groups: {
      d: new _imask2.default.MaskedPattern.Group.Range([1, 31]),
      m: new _imask2.default.MaskedPattern.Group.Range([1, 12]),
      Y: new _imask2.default.MaskedPattern.Group.Range([0, 9999])
    },
    // define date -> str convertion
    format: function format(date) {
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;
      return [month, day, year].join(separator);
    },
    // define str -> date convertion
    parse: function parse(str) {
      var monthDayYear = str.split(separator);
      return new Date(monthDayYear[2], monthDayYear[0] - 1, monthDayYear[1]);
    }
  };
}
function dateYyyymmdd(separator) {
  return {
    mask: Date,
    pattern: 'Y' + separator + '`m' + separator + '`d',
    groups: {
      d: new _imask2.default.MaskedPattern.Group.Range([1, 31]),
      m: new _imask2.default.MaskedPattern.Group.Range([1, 12]),
      Y: new _imask2.default.MaskedPattern.Group.Range([0, 9999])
    },
    // define date -> str convertion
    format: function format(date) {
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;
      return [year, month, day].join(separator);
    },
    // define str -> date convertion
    parse: function parse(str) {
      var yearMonthDay = str.split(separator);
      return new Date(yearMonthDay[0], yearMonthDay[1] - 1, yearMonthDay[2]);
    }
  };
}
function dateDdmmyyyy(separator) {
  return {
    mask: Date,
    pattern: 'd' + separator + '`m' + separator + '`Y',
    groups: {
      d: new _imask2.default.MaskedPattern.Group.Range([1, 31]),
      m: new _imask2.default.MaskedPattern.Group.Range([1, 12]),
      Y: new _imask2.default.MaskedPattern.Group.Range([0, 9999])
    },
    // define date -> str convertion
    format: function format(date) {
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;
      return [day, month, year].join(separator);
    },
    // define str -> date convertion
    parse: function parse(str) {
      var dayMonthYear = str.split(separator);
      return new Date(dayMonthYear[2], dayMonthYear[1] - 1, dayMonthYear[0]);
    }
  };
}

SInputMaskComponent.registerMask('date:mm-dd-yyyy', dateMmddyyyy('-'));
SInputMaskComponent.registerMask('date:mm.dd.yyyy', dateMmddyyyy('.'));
SInputMaskComponent.registerMask('date:mm/dd/yyyy', dateMmddyyyy('/'));
SInputMaskComponent.registerMask('date:dd-mm-yyyy', dateDdmmyyyy('-'));
SInputMaskComponent.registerMask('date:dd.mm.yyyy', dateDdmmyyyy('.'));
SInputMaskComponent.registerMask('date:dd/mm/yyyy', dateDdmmyyyy('/'));
SInputMaskComponent.registerMask('date:yyyy-mm-dd', dateYyyymmdd('-'));
SInputMaskComponent.registerMask('date:yyyy.mm.dd', dateYyyymmdd('.'));
SInputMaskComponent.registerMask('date:yyyy/mm/dd', dateYyyymmdd('/'));

SInputMaskComponent.registerMask('credit-card:security-code', {
  mask: '000[0]'
});

SInputMaskComponent.registerMask('credit-card:number', {
  mask: '0000 0000 0000 0000'
});

SInputMaskComponent.registerMask('credit-card:date', {
  mask: Date,
  pattern: 'm/Y',
  groups: {
    m: new _imask2.default.MaskedPattern.Group.Range([1, 12]),
    Y: new _imask2.default.MaskedPattern.Group.Range([parseInt(new Date().getFullYear().toString().substr(2)), parseInt(new Date().getFullYear().toString().substr(2)) + 20])
  },
  format: function format(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear().toString().substr(2);
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    return [month, year].join('/');
  },
  // define str -> date convertion
  parse: function parse(str) {
    var monthYear = str.split('/');
    return new Date(parseInt('20' + monthYear[1]), monthYear[0] - 1, 1);
  }
});