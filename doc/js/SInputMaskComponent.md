# SInputMaskComponent

Provide a simple efficient webcomponent wrapper around the amazing imaskjs library

### Example
```html
	<input type="text" name="cool-input" required />
<s-input-mask for="cool-input" mask="(0) 000 000 000"></s-input-mask>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

Extends **SWebComponent**




## Attributes

Here's the list of available attribute(s).

### for

Attach the mask to an input using this attribute. Same as a label is attached to an input

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### mask

Specify the mask wanted

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### placeholder

Specify if need to display a placeholder or not. You can set the placeholder character here as well

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **false**


### options

Specify some option to pass to the imaskjs library

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{}**




## Methods


### registerMask

Register a new mask


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The mask name to register  |  required  |
maskOptions  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The mask options to register  |  required  |

**Static**