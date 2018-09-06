module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-input-mask-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {

    // compile server port
    port: 4000

  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <h1 class="h3 m-b-small">
          Coffeekraken s-input-mask-component
        </h1>
        <p class="p m-b-bigger">
          Provide a simple efficient webcomponent wrapper around the amazing imaskjs library
        </p>

        <form name="s-input-mask" method="POST" action="#">

          <div class="m-b">
            <input type="text" class="form-input" name="cool-input-1" placeholder="(8)-345 232 122" required/>
            <s-input-mask for="cool-input-1" mask="(0) 000 000 000" placeholder="#"></s-input-mask>
            <s-validator for="cool-input-1" pattern="\([0-9]\)\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}" messages="{pattern:'The value entered does not match the input mask'}"></s-validator>
          </div>

          <div class="m-b">
            <input type="text" class="form-input" name="cool-input-2" placeholder="0000 0000 0000 0000" required/>
            <s-input-mask for="cool-input-2" mask="credit-card:number"></s-input-mask>
            <s-validator for="cool-input-2" pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}" messages="{pattern:'This field has to be a valid credit card number'}"></s-validator>
          </div>

          <div class="m-b">
            <input type="text" class="form-input" name="cool-input-3" placeholder="MM/YY" required/>
            <s-input-mask for="cool-input-3" mask="credit-card:date"></s-input-mask>
            <s-validator for="cool-input-3" pattern="\d\d\/\d\d" messages="{pattern:'This field has to be a valid MM/YY value'}"></s-validator>
          </div>

          <div class="m-b">
            <input type="text" class="form-input" name="cool-input-4" placeholder="365" required/>
            <s-input-mask for="cool-input-4" mask="credit-card:security-code"></s-input-mask>
            <s-validator for="cool-input-4" pattern="\d\d\d\d?" messages="{pattern:'This field has to be a valid 3/4 digits value'}"></s-validator>
          </div>

          <div class="m-b">
            <input type="text" class="form-input" name="cool-input-5" placeholder="YYYY-MM-DD" required/>
            <s-input-mask for="cool-input-5" mask="date:yyyy-mm-dd"></s-input-mask>
            <s-validator for="cool-input-5" yyyymmdd></s-validator>
          </div>

          <input type="submit" class="btn" value="Submit" />

        </form>
      `
    },
    css: {
      language: 'sass',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-form-component/index';
        @import 'node_modules/coffeekraken-s-button-component/index';

        @include s-setup(());
        @include s-init();
        @include s-classes();
        @include s-form-classes();
        @include s-button-classes();

        body {
          padding: s-space(bigger);
        }
      `
    },
    js: {
      language: 'js',
      data: `
        import 'webcomponents.js/webcomponents-lite'
        import SInputMaskComponent from './dist/index'
        import SValidatorComponent from 'coffeekraken-s-validator-component'
      `
    }
  }
}
