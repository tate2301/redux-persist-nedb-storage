# redux-persist-nedb

> Built on top of the codebase from [redux-persist-electron-storage](https://github.com/psperber/redux-persist-electron-storage)

[![npm version](https://img.shields.io/npm/v/redux-persist-nedb.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-nedb)
[![npm downloads](https://img.shields.io/npm/dt/redux-persist-nedb.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-nedb)
[![Build Status](https://travis-ci.org/psperber/redux-persist-nedb.svg?branch=master)](https://travis-ci.org/psperber/redux-persist-nedb)
[![Greenkeeper badge](https://badges.greenkeeper.io/psperber/redux-persist-nedb.svg)](https://greenkeeper.io/)

Storage adapter to use [nedb](https://github.com/louischatriot/nedb) with [redux-persist](https://github.com/rt2zz/redux-persist)

## Installation

### npm

```bash
npm i -S nedb redux-persist-nedb
```

### yarn

```bash
yarn add nedb redux-persist-nedb
```

## Usage

To use redux-persist-nedb, configure redux-persist according to [its documentation](https://github.com/rt2zz/redux-persist#redux-persist).

Modify the classic redux-persist configuration as follows:

- Do **not** import `redux-persist/lib/storage` anymore, as we use an alternative storage.
- Import `redux-persist-nedb`:

```js
import createNeDBStorage from 'redux-persist-nedb'
```

- Modify the options for `persistReducer` in order to use the storage dedicated to Electron:

```js
const persistConfig = {
  key: 'root',
  storage: createNeDBStorage()
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
```

You can pass options like below:

```js
createNeDBStorage({
  databasePathname: 'mydb.db',
  inMemoryOnly: false
})
```
