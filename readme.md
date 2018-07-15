## Kh-Popover

[![npm](https://img.shields.io/npm/v/kh-popover.svg)](https://www.npmjs.com/package/kh-popover) ![license](https://img.shields.io/github/license/khofaai/kh-popover.svg) [![npm](https://img.shields.io/npm/dw/kh-popover.svg)](https://www.npmjs.com/package/kh-popover) [![npm](https://img.shields.io/npm/dt/kh-popover.svg)](https://www.npmjs.com/package/kh-popover) 

## Description

Popover build for vuejs framework.
This packages still in dev mode ( after all this is my first package x) )

## Getting Started

This package help you create Popover/Tooltip with a pre-squelette and give you the possibility to set yours and dynamic positions.

You can view this package on both **npm** and **yarn**

**kh-popover** Package links : <br>
- <a href="https://www.npmjs.com/package/kh-popover" target="_blank">npm</a>
- <a href="https://yarnpkg.com/en/package/kh-popover" target="_blank">yarn</a>

## Installing

npm installation : 

```
npm i kh-popover
```

yarn installation : 

```
yarn add kh-popover
```

## Usage

```javascript

require('kh-popover/dist/kh-popover.css');
import khPopover from 'kh-popover';

export default {
	components:{
		'kh-popover':khPopover
	}
}
```

## Attributes

- **_user_** : Object. of { id, name, photo, avatar, email }
- **_position_** : String. define popover position ['auto','top','bottom'] `// defaukt : auto > adapted to be centred in screen`
- **_trigger_** : String. accept two options ['hover','click'] `// default : 'hover' > popover displayed on hover event`
- **_name_** : Boolean. to display given user's name `// default : false it will show avatar not user name`
- **_icon_** : Boolean. to display avatar `// defaukt : true`

## Slots

- **_avatar_** : where avatar located
- **_content_** : where popover core is located ( include both [ content_info, content_actions ])
- **_content_info_** : where popover header is located
- **_content_actions_** : where popover footer is located

## Next

- **Demo** : We will publish a demo asap
- **Testing** : We will add Unit Test