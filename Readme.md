# Metric Logging and Reporting Service

# Description

A simple metric logging using [node.js](https://nodejs.org/en/) which is a metric logging and reporting service that sums metrics by time window for the most recent hour.. <br>

The project uses [jest](https://jestjs.io/en/) for writing unit tests and [nodemon](https://www.npmjs.com/package/nodemon) for re-running scripts during development.

## Requirements

For development, you will need Node.js installed in your environement.

### Node

- #### Node installation on Windows

Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your path, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.17.0

    $ npm --version
    6.14.13

If you need to update `npm`, you can make it using `npm`, After running the following command.

    $ npm install npm -g

---

## Usage

Unzip the file simleLogMetrics.zip

Init project:

```
$ cd simleLogMetrics
$ npm install
$ npm install jest
$ npm install express
$ npm install body-parser

```

## Launch

```
$ npm start
```

## Run unit tests

```
$ npm run test
```

## Development mode

```
$ npm run dev
```

## Useful links

- [Jest](https://github.com/facebook/jest)
- [Node](https://nodejs.org/docs/latest-v13.x/api/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
