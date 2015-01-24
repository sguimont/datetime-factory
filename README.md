# Date Time Factory

Node and bower module to get date and time in centralize way and can be changes for test easily.

## Install

```
npm install datetime-factory
```

## Basic Usage

```js
var datetimeFactory = require('datetime-factory');

console.log(datetimeFactory.now());
```

## Override the date for testing

```js
var datetimeFactory = require('datetime-factory');

datetimeFactory.overwriteDate(new Date(2014, 11, 10));
console.log(datetimeFactory.now()); // Wed Dec 10 2014 00:00:00 GMT-0500 (Eastern Standard Time)

datetimeFactory.reset(); // Put default factory

```

## Can use other date factory

```js
var moment = require('moment');
var datetimeFactory = require('datetime-factory');

datetimeFactory.configure({
    factory: function() {
        return moment();
    });
});

console.log(datetimeFactory.now());

```

## License

MIT
