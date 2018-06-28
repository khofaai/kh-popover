<p align="center">
	<h1>Kh-Popover</h1>
  	<a href="https://www.npmjs.com/package/kh-popover"><img src="https://img.shields.io/badge/kh--popover-dev(beta)-orange.svg" alt="Build Status"></a>
  	<a href="https://www.npmjs.com/package/kh-popover"><img src="https://img.shields.io/badge/npm-v0.1.8-orange.svg" alt="Coverage Status"></a>
  	<a href="https://www.npmjs.com/package/kh-popover"><img src="https://img.shields.io/badge/licence-mit-green.svg" alt="Coverage Status"></a>
  	<br>
</p>

popover build for vuejs framework

npm link : [npm kh-popover](https://www.npmjs.com/package/kh-popover)
yarn link : [yarn kh-popover](https://yarnpkg.com/en/package/kh-popover)

## Getting Started

this packages still in dev mode ( after all this is my first package x) )

## Installing

as all npm packages : 

```
npm i kh-popover
```

as all yarn packages : 

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
- **_trigger_** : String. accept two options ['hover','click'] `// default : 'hover'`
- **_name_** : Boolean. to display given user's name `// default : false`
- **_icon_** : Boolean. to display avatar `// defaukt : true`

## Actions

- **_action_** : ..

## Slots

- **_avatar_** : where avatar located
- **_content_** : where popover core is located ( include both [ content_info, content_actions ])
- **_content_info_** : where popover header is located
- **_content_actions_** : where popover footer is located