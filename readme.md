## README

<p align="center">
	<h1>Kh-Popover</h1>
  	<a href="https://www.npmjs.com/package/kh-popover" target="_blank"><img src="https://img.shields.io/badge/kh--popover-dev(beta)-orange.svg" alt="Build Status"></a>
  	<a href="https://www.npmjs.com/package/kh-popover" target="_blank"><img src="https://img.shields.io/badge/npm-v0.3.2-orange.svg" alt="Coverage Status"></a>
  	<a href="https://www.npmjs.com/package/kh-popover" target="_blank"><img src="https://img.shields.io/badge/licence-mit-green.svg" alt="Coverage Status"></a>
  	<br>
</p>

popover build for vuejs framework. 

**kh-popover** package links : <br>
- <a href="https://www.npmjs.com/package/kh-popover" target="_blank">npm</a>
- <a href="https://yarnpkg.com/en/package/kh-popover" target="_blank">yarn</a>

## Getting Started

this packages still in dev mode ( after all this is my first package x) )

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
import KhPopover from 'kh-popover';
export default {
	components:{
		'kh-popover':KhPopover
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