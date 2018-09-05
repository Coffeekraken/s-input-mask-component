'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SWebComponent2 = require('coffeekraken-sugar/js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

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
    key: 'componentWillMount',


    /**
     * Component will mount
     * @definition    SWebComponent.componentWillMount
     * @protected
     */
    value: function componentWillMount() {
      _get(SInputMaskComponent.prototype.__proto__ || Object.getPrototypeOf(SInputMaskComponent.prototype), 'componentWillMount', this).call(this);
    }

    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */

  }, {
    key: 'componentMount',
    value: function componentMount() {
      _get(SInputMaskComponent.prototype.__proto__ || Object.getPrototypeOf(SInputMaskComponent.prototype), 'componentMount', this).call(this);
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
    }

    /**
     * Component will receive prop
     * @definition    SWebComponent.componentWillReceiveProp
     * @protected
     */

  }, {
    key: 'componentWillReceiveProp',
    value: function componentWillReceiveProp(name, newVal, oldVal) {
      switch (name) {}
    }

    /**
     * Render the component
     * Here goes the code that reflect the this.props state on the actual html element
     * @definition    SWebComponent.render
     * @protected
     */

  }, {
    key: 'render',
    value: function render() {
      _get(SInputMaskComponent.prototype.__proto__ || Object.getPrototypeOf(SInputMaskComponent.prototype), 'render', this).call(this);
    }
  }], [{
    key: 'defaultCss',


    /**
     * Css
     * @protected
     */
    value: function defaultCss(componentName, componentNameDash) {
      return '\n      ' + componentNameDash + ' {\n        display : block;\n      }\n    ';
    }
  }, {
    key: 'defaultProps',

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
      return {};
    }

    /**
     * Physical props
     * @definition    SWebComponent.physicalProps
     * @protected
     */

  }, {
    key: 'physicalProps',
    get: function get() {
      return [];
    }
  }]);

  return SInputMaskComponent;
}(_SWebComponent3.default);

exports.default = SInputMaskComponent;