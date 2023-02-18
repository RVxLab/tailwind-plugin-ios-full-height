# Tailwind Plugin for correct full height on iOS

![Latest version](https://img.shields.io/npm/v/@rvxlab/tailwind-plugin-ios-full-height?label=NPM&style=flat-square)
![Supported TailwindCSS versions](https://img.shields.io/npm/dependency-version/@rvxlab/tailwind-plugin-ios-full-height/peer/tailwindcss?label=TailwindCSS&style=flat-square)
![Weekly downloads](https://img.shields.io/npm/dw/@rvxlab/tailwind-plugin-ios-full-height?label=Weekly%20downloads&style=flat-square)
![Total downloads](https://img.shields.io/npm/dt/@rvxlab/tailwind-plugin-ios-full-height?label=Total%20downloads&style=flat-square)

A TailwindCSS plugin to add utilities for 100vh on iOS

## About

A "feature" of WebKit is that on iOS the screen flows a bit onder the main viewport. This was [reported as a bug](https://bugs.webkit.org/show_bug.cgi?id=141832) on the WebKit bug tracker and closed as WontFix.

To fix this, there is a CSS property you can use:

```css
.some-element {
    height: -webkit-fill-available;
}
```

The issue with this is that it also targets Chrome, which is exactly what you don't want in this case. To go around it you can support an `@supports` rule to specifically target mobile:

```css
@supports (-webkit-touch-callout: none) {
    .some-element {
        height: -webkit-fill-available;
    }
}
```

This plugin aims to make it easier to apply in TailwindCSS.

## Installation

Run one of these:

```sh
npm i -D @rvxlab/tailwind-plugin-ios-full-height

# or

yarn add -D @rvxlab/tailwind-plugin-ios-full-height
```

Then add it to your plugins:

```js
const iOSHeight = require('@rvxlab/tailwind-plugin-ios-full-height');

module.exports = {
    // ... your config
    plugins: [
        // ... your plugins
        iOSHeight,
    ],
};
```

## Usage

This plugin adds 2 utility classes:

- min-h-screen-ios
- h-screen-ios

Add them by their class name or use `@apply`.

```html
<div class="h-screen-ios min-h-screen-ios"></div>
```

```css
.some-element {
    @apply h-screen-ios min-h-screen-ios;
}
```
