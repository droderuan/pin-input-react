# pin-input-react

> This package is in a very early stage, so any help can be usefull.

[![NPM](https://img.shields.io/npm/v/pin-input-react.svg)](https://www.npmjs.com/package/pin-input-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The `pin-input-react` is a react component to be used when you want a pin component. This component is being develop to be very generic to attend many user cases as possible.

## Install

**The package is unpublished**

```bash
npm install --save pin-input-react

yarn add pin-input-react
```

## Usage

A example of usage can be found [here](./example/src/App.tsx).

the component accepts 3 other component:
* pinComponent - required and is used as each pin value
* pinComponentOnFocus - is used when the pin position is focused
* pinComponentOnFill - is used when the pin position has a value

If you set showValues, make sure the **`pinComponentOnFocus`** get his chield, becaused it will be used to insert the content. The same to pinText, which is used to receive the values. Any questions, [here](./example/src/App.tsx) show a implementation.

## Properties

| name                | type              | description                                         | is required |   |
|---------------------|-------------------|-----------------------------------------------------|-------------|---|
| length              | number            | length of the input                                 | yes         |   |
| direction           | `row` or `column` | the direction of the pins                           | yes         |   |
| pinComponent        | `React.FC`        | A component for default pin                         | yes         |   |
| pinComponentOnFocus | `React.FC`        | A component for when the pin is focused             | no          |   |
| pinComponentOnFill  | `React.FC`        | A component for when the pin is filled              | no          |   |
| onChangePin         | Callback          | Used for onChange from input                        | no          |   |
| ShowValues          | boolean           | If want to show the values when filled              | no          |   |
| pinText             | `React.FC`        | Used to show values inside the `pinComponentOnFill` | no          |   |

## License

MIT © [droderuan](https://github.com/droderuan)
