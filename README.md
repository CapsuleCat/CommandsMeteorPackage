# Commands for Meteor

[![Build Status](https://travis-ci.org/CapsuleCat/MeteorCommands.svg?branch=master)](https://travis-ci.org/CapsuleCat/MeteorCommands) [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

Dispatch reusable commands synchronously or asynchronously.

## Installation

```sh
meteor add capsulecat:commands
```

## The Command Pattern

The command pattern is a great way to encapsulate actions into an object. When working with Meteor (or almost any programming framework), you will find that you will want to do the same action over and over, but with some minor changes in the request or response. The Command Pattern is a nice way of encapsulating all the data and logic necessary for an action.

## Documentation

All commands should have a handle function:

```js
class MyCommand {
    constructor(arg1, arg2) {}
    handle() {}
}
```

You can dispatch any command syncronously or asyncronously:

```js
var result = dispatch(MyCommand, arg1, arg2);

var callback = function (result) {}
dispatchAsync(MyCommand, arg1, arg2, callback);
```


## Example Code

```js
class EmailNotificationCommand {
  constructor(email) {
    this.email = email;
  },
  handle() {
    // Do something with this.email
    console.log(this.email);
  }
}

dispatchAsync(EmailNotificationCommand, 'test@test.com');
```

## Running Tests

Tests use Jasmine. You can run tests completely from the command line using:

```sh
VELOCITY_TEST_PACKAGES=1 meteor test-packages --driver-package velocity:html-reporter --velocity ./
```