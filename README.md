https://www.npmjs.com/package/interval-micro


## Example

```js
var intervalMicro = require('interval-micro');

var testFunc = intervalMicro(function() {
	console.log("Called after 7 seconds, followed by every 5 seconds");
}, 5000);

testFunc.stop();

setTimeout(function() {
	testFunc.start();
}, 2000);
```

## API

###`intervalMicro(callback, delay[, param1, param2, ...])`