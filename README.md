# live-event
Live event binding in the DOM using plain JavaScript. This repo is based on this article http://stackoverflow.com/questions/9106329/implementing-jquerys-live-binder-with-native-javascript and all credit goes to OP.

## Install:
```
npm install live-event
```

## Usage
With [browserify](http://browserify.org/) or [webpack](https://webpack.github.io/):
```
var live = require('live-event');

live('click', '.target', function (event) {
  console.log(event);
});
```

## API
`live(eventType, querySelector, callback) -> undefined`
### eventType
Required

Tpye: `String`

A DOM event.

### querySelector
Required

Type: `String`

A `querySelector` String.

### callback
Required

Type: `Function`

Event handler function.

## Supported browsers
http://caniuse.com/#search=querySelector
