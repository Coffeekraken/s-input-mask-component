import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import Imask from 'imask'

export default class SInputMaskComponent extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps () {
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

    }
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount () {
    super.componentMount()

    // get the input
    if (this.props.for instanceof window.HTMLElement) {
      this._inputElm = this.props.for
    } else if (typeof this.props.for === 'string') {
      this._inputElm = document.querySelector(`[name="${this.props.for}"], #${this.props.for}`)
    }

    if (!this._inputElm) {
      throw new Error(`SInputMaskComponent : In order to work, you need to specify a proper input target...`)
    }

    let mask = this.props.mask
    switch (mask.toString().toLowerCase()) {
      case 'date':
        mask = Date
        break
      case 'number':
        mask = Number
        break
      case 'url':
        mask = /^http:\/\/\d+$/
        break
      case 'email':
        mask = /^\S*@?\S*$/
        break
    }

    // init the mask plugin
    console.log(mask)
    this._imask = new Imask(this._inputElm, {
      mask: mask,
      lazy: !this.props.placeholder, // make placeholder always visible
      placeholderChar: (typeof this.props.placeholder === 'string') ? this.props.placeholder : '_',
      ...this.props.options
    })

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
  componentUnmount () {
    super.componentUnmount()
    // remove the mask if exist on the target input
    if (this._imask) {
      this._imask.destroy()
    }
  }
}
