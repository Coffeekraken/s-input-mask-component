import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import IMask from 'imask'

// hold the registered masks
const __masks = {}

/**
 * Provide a simple efficient webcomponent wrapper around the amazing imaskjs library
 * @example    html
 * <input type="text" name="cool-input" required />
 * <s-input-mask for="cool-input" mask="(0) 000 000 000"></s-input-mask>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default class SInputMaskComponent extends SWebComponent {
  /**
   * Register a new mask
   * @param   {String}    name    The mask name to register
   * @param   {Object}    maskOptions    The mask options to register
   */
  static registerMask (name, maskOptions) {
    __masks[name.toLowerCase()] = maskOptions
  }

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
       * Specify some option to pass to the imaskjs library
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
      throw new Error(`SInputMaskComponent : In order to work, you need to specify a proper input target using the "for" attribute...`)
    }

    let maskOptions = {}
    let mask = this.props.mask
    switch (mask.toString().toLowerCase()) {
      case 'date':
        maskOptions.mask = Date
        break
      case 'number':
        maskOptions.mask = Number
        break
      default:
        if (__masks[mask]) {
          maskOptions = __masks[mask]
        } else {
          maskOptions.mask = mask
        }
    }

    // init the mask plugin
    this._imask = new IMask(this._inputElm, {
      lazy: !this.props.placeholder, // make placeholder always visible
      placeholderChar: (typeof this.props.placeholder === 'string') ? this.props.placeholder : '_',
      ...maskOptions,
      ...this.props.options
    })
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

function dateMmddyyyy (separator) {
  return {
    mask: Date,
    pattern: 'm' + separator + '`d' + separator + '`Y',
    groups: {
      d: new IMask.MaskedPattern.Group.Range([1, 31]),
      m: new IMask.MaskedPattern.Group.Range([1, 12]),
      Y: new IMask.MaskedPattern.Group.Range([0, 9999])
    },
    // define date -> str convertion
    format: function (date) {
      var day = date.getDate()
      var month = date.getMonth() + 1
      var year = date.getFullYear()
      if (day < 10) day = '0' + day
      if (month < 10) month = '0' + month
      return [month, day, year].join(separator)
    },
    // define str -> date convertion
    parse: function (str) {
      var monthDayYear = str.split(separator)
      return new Date(monthDayYear[2], monthDayYear[0] - 1, monthDayYear[1])
    }
  }
}
function dateYyyymmdd (separator) {
  return {
    mask: Date,
    pattern: 'Y' + separator + '`m' + separator + '`d',
    groups: {
      d: new IMask.MaskedPattern.Group.Range([1, 31]),
      m: new IMask.MaskedPattern.Group.Range([1, 12]),
      Y: new IMask.MaskedPattern.Group.Range([0, 9999])
    },
    // define date -> str convertion
    format: function (date) {
      var day = date.getDate()
      var month = date.getMonth() + 1
      var year = date.getFullYear()
      if (day < 10) day = '0' + day
      if (month < 10) month = '0' + month
      return [year, month, day].join(separator)
    },
    // define str -> date convertion
    parse: function (str) {
      var yearMonthDay = str.split(separator)
      return new Date(yearMonthDay[0], yearMonthDay[1] - 1, yearMonthDay[2])
    }
  }
}
function dateDdmmyyyy (separator) {
  return {
    mask: Date,
    pattern: 'd' + separator + '`m' + separator + '`Y',
    groups: {
      d: new IMask.MaskedPattern.Group.Range([1, 31]),
      m: new IMask.MaskedPattern.Group.Range([1, 12]),
      Y: new IMask.MaskedPattern.Group.Range([0, 9999])
    },
    // define date -> str convertion
    format: function (date) {
      var day = date.getDate()
      var month = date.getMonth() + 1
      var year = date.getFullYear()
      if (day < 10) day = '0' + day
      if (month < 10) month = '0' + month
      return [day, month, year].join(separator)
    },
    // define str -> date convertion
    parse: function (str) {
      var dayMonthYear = str.split(separator)
      return new Date(dayMonthYear[2], dayMonthYear[1] - 1, dayMonthYear[0])
    }
  }
}

SInputMaskComponent.registerMask('date:mm-dd-yyyy', dateMmddyyyy('-'))
SInputMaskComponent.registerMask('date:mm.dd.yyyy', dateMmddyyyy('.'))
SInputMaskComponent.registerMask('date:mm/dd/yyyy', dateMmddyyyy('/'))
SInputMaskComponent.registerMask('date:dd-mm-yyyy', dateDdmmyyyy('-'))
SInputMaskComponent.registerMask('date:dd.mm.yyyy', dateDdmmyyyy('.'))
SInputMaskComponent.registerMask('date:dd/mm/yyyy', dateDdmmyyyy('/'))
SInputMaskComponent.registerMask('date:yyyy-mm-dd', dateYyyymmdd('-'))
SInputMaskComponent.registerMask('date:yyyy.mm.dd', dateYyyymmdd('.'))
SInputMaskComponent.registerMask('date:yyyy/mm/dd', dateYyyymmdd('/'))

SInputMaskComponent.registerMask('credit-card:security-code', {
  mask: '000[0]'
})

SInputMaskComponent.registerMask('credit-card:number', {
  mask: '0000 0000 0000 0000'
})

SInputMaskComponent.registerMask('credit-card:date', {
  mask: Date,
  pattern: 'm/Y',
  groups: {
    m: new IMask.MaskedPattern.Group.Range([1, 12]),
    Y: new IMask.MaskedPattern.Group.Range([parseInt(new Date().getFullYear().toString().substr(2)), parseInt(new Date().getFullYear().toString().substr(2)) + 20])
  },
  format: function (date) {
    var day = date.getDate()
    var month = date.getMonth() + 1
    var year = date.getFullYear().toString().substr(2)
    if (day < 10) day = '0' + day
    if (month < 10) month = '0' + month
    return [month, year].join('/')
  },
  // define str -> date convertion
  parse: function (str) {
    var monthYear = str.split('/')
    return new Date(parseInt('20' + monthYear[1]), monthYear[0] - 1, 1)
  }
})
