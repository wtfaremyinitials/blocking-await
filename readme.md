blocking-await
===

![](https://img.shields.io/npm/dm/blocking-await.svg)
![](https://img.shields.io/npm/v/blocking-await.svg)
![](https://img.shields.io/npm/l/blocking-await.svg)

> Synchronously wait for a Promise to resolve

Use this module to block the entire node process while waiting for a Promise to resolve.

**NOTE**: In almost every case you should not use this and instead opt for true `async` functions
using JavaScript's built-in `await` construct. Your entire app will become unresponsive while waiting.

Installation
===

```bash
npm install blocking-await --save
```

Usage
===

```js
var wait = require('blocking-await')
var got = require('got')

var res = wait(got('todomvc.com'))
console.log(res.body)
//=> '<!doctype html> ...'
```

API
===

### Wait for a Promise to resolve

`wait(promise) -> value`

Synchronously waits for a Promise to resolve. This locks up the entire node process.

**promise**

Type: `Promise`

The promise to wait on.

**return**

Type: `T`

Returns the value the promise resolved (or throws what it rejected).
