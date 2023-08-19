# redux-persist-nedb

> Built on top of the codebase from [redux-persist-electron-storage](https://github.com/psperber/redux-persist-electron-storage)

[![npm version](https://img.shields.io/npm/v/redux-persist-nedb.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-nedb)
[![npm downloads](https://img.shields.io/npm/dt/redux-persist-nedb.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-nedb)

Storage adapter to use [nedb](https://github.com/louischatriot/nedb) with [redux-persist](https://github.com/rt2zz/redux-persist)

## Installation

### npm

```bash
npm i -S nedb redux-persist-nedb deep-parse-json
```

### yarn

```bash
yarn add nedb redux-persist-nedb deep-parse-json
```

## Usage

To use redux-persist-nedb, configure redux-persist according to [its documentation](https://github.com/rt2zz/redux-persist#redux-persist).

Modify the classic redux-persist configuration as follows, including the deep-parse-json package:

- Do **not** import `redux-persist/lib/storage` anymore, as we use an alternative storage.
- Import `redux-persist-nedb`:

```js
import createNeDBStorage from 'redux-persist-nedb'
import deepParseJson from 'deep-parse-json'
```

- Modify the options for `persistReducer` in order to use the NeDB storage and set the deserialize option to `deepParseJson`:

```js
const persistConfig = {
  key: 'root',
  storage: createNeDBStorage(),
  deserialize: deepParseJson
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
