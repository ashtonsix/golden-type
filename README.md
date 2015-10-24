golden-type
===========
Beautiful, semantic typography on any device (React).

Fibonacci sequences often appear in nature and great art. There is a strong interplay between 1, 1, 2, 3, 5... and the golden ratio  `(5^0.5 + 1) / 2`. We can use mathematical functions to make typography easier to read - `body font size -> title font size`, `(font size, line width) -> (line height, space between paragraphs)`.

For theory [read this](http://www.pearsonified.com/2011/12/golden-ratio-typography.php). To see an example:

```
git clone git@github.com:Demi-IO/golden-type.git
cd golden-type
npm i && npm start
```

Usage
=====
For the default config add these fonts to your `<head>` (you can overwrite them ofc):

```html
<link href='https://fonts.googleapis.com/css?family=Roboto:500' rel='stylesheet'>
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet'>
<link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet'>
```

Wrap your root component like so (es6):

```js
import goldenType from 'golden-type';

const App = React.createClass({
  ...
});

export default goldenType(16, windowWidth => windowWidth - 60)(App);
```

Now you're ready:

```js
import {Title, Body, Small, Strong} from 'golden-type';

export const BlogPost = ({title, body, created_at, author}) => (
  <Title>{title}</Title>
  <Body>
    {body}
    <Small noMargin>
      Posted {moment.duration(Date.now() - created_at).humanize()}
      by <Strong inline>{author}</Strong>
    </Small>
  </Body>
);
```

By default you can use `Title`, `Heading`, `SubHeading`, `Body`, `Small`, `Strong` & `Code` straight away.

Which all support these boolean flags `noMargin`, `inverseColor`, `inline`, `inlineBlock` and a `style` prop. Strong also includes an `uppercase` flag. `noMargin` is recommended for the last element in a section.

Everything is configurable and you can create your own flags / components.

API
---
### `goldenType :: (baseFontSize, baseContentWidth, config) -> function`
For readability 16 is the recommended minimum for `baseFontSize`.

`baseContentWidth` takes the `windowWidth` and should return the width of most prevalent text in your design (e.g. central column).

The `config` is an object merged w/ the default config, each key generates a component.

```js
const config = {
  VeryBigHeader: {tag: 'h1', fontScale: 5}
};
```

### `createFontClass :: fontName -> Component`
To use custom components you'll need this helper, it'll grab options from the config.

```js
const VeryBigHeader = createFontClass('VeryBigHeader');
```

Config
------
These options are available for each item in the config:

* **tag** - h1, h2, span, p, etc..
* **fontScale** - 0 = `baseFontSize`, 1.5 = `baseFontSize * goldenRatio^1.5`. Values between -0.5 & 2 are OK.
* **marginScale** - Space under each section, for headers you'll want this to be 0, & otherwise equal to `fontScale`.
* **style** - React style prop, has precedence over `fontScale` / `marginScale` & under direct props on Component.
* **flags** - Toggles for each instance, e.g. `{{flags: {bold: {style: {fontWeight: 900}}}}}`

Decorator Syntax
----------------
Alternate decorator syntax:

```js
import goldenType from 'golden-type';

@goldenType(16, windowWidth => windowWidth - 60)
export default class App extends React.Component {
  ...
}
```

Notes
=====
* Check the example, or create an issue if anything is unclear
* Arbitrary props will be passed down (e.g. `href`, `onClick`)
* **Todo** - Add `extends` config option
