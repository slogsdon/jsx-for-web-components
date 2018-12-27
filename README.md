# jsx-for-web-components

> WIP: A basic JSX factory for use in projects leveraging [web components](https://www.webcomponents.org/)

### Features

- Drop-in ready
- [TypeScript](https://www.typescriptlang.org/) support

## Requirements

- Compiler that can convert JSX to JSX factory JavaScript calls

## Installation

```
yarn install jsx-for-web-components
```

## Getting Started

We'll use TypeScript and [Rollup](https://rollupjs.org) to build for the browser. Let's start with pulling in some dependencies:

```
yarn install --dev typescript rollup rollup-plugin-node-resolve rollup-plugin-typescript2
```

A couple configuration files to help the project build correctly:

> ./tsconfig.json

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "h",
    "moduleResolution": "node",
    "target": "es2015"
  }
}
```

> ./rollup.config.js

```js
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/index.tsx",
  output: {
    file: "./dist/index.js",
    format: "iife",
  },
  plugins: [
    resolve({
      extensions: [ '.js', '.ts', '.tsx' ],
    }),
    typescript({
      typescript: require("typescript"),
    }),
  ],
};
```

Define your custom element:

> ./src/index.tsx

```tsx
import { h, JSXCustomElement } from "jsx-for-web-components";

class ExampleElement extends JSXCustomElement {
  public render() {
    return <div id="testing">hello</div>;
  }
}

window.customElements.define('example-element', ExampleElement);
```

Leverage your custom element:

> ./index.html

```html
<!DOCTYPE html>
<script src="/dist/index.js" defer></script>
<example-element></example-element>
```

After building the project with `rollup -c rollup.config.js`, you should be able to load your HTML in a browser to see your work.

## Notes

### `connectedCallback`

While there is some setup performed within the `constructor` of `JSXCustomElement`, the DOM nodes defined by your `render` method are not attached until the `connectedCallback` method is called. If you need to leverage this callback within your code, be sure to call the super method, e.g.:

```ts
class ExampleElement extends JSXCustomElement {
  // ...
  public connectedCallback() {
    super.connectedCallback();

    // your code
  }
}
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
