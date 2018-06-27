# Kh-popover

popover build for vuejs framework

## Getting Started

this packages still in dev mode ( after all this is my first package x) )

## Installing

as all npm packages : 

```
npm i kh-popover
```

## Usage

```javascript
import KhPopover from 'kh-popover';
export default {

	components:{
		'kh-popover':KhPopover
	}

}
```
**Attributes**
- user : Object. of { id, name, photo, avatar, email }
- trigger : String. accept two options ['hover','click'] // default : 'hover'
- name : Boolean. to display given user's name // default : false
- icon : Boolean. to display avatar // defaukt : true

**Actions**
- @action : ..

**Slots**
- avatar : where avatar located
- content : where popover core is located ( include both [ content_info, content_actions ])
- content_info : where popover header is located
- content_actions : where popover footer is located