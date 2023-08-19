'use strict'

const createNeDBStorage = require('../lib/index')
const assert = require('chai').assert

describe('Initialisation', function () {
  it('no args', function () {
    const storage = createNeDBStorage()
    assert.isObject(storage, 'created storage is not an object')
  })

  describe('args', function () {
    it('databasePathname', function () {
      const storage = createNeDBStorage({
        databasePathname: 'test.db'
      })
      assert.isObject(storage, 'created storage is not an object')
    })
  })
})

describe('Functions', function () {
  const storage = createNeDBStorage()

  it('setItem', function () {
    return storage.setItem('key', 'value')
  })

  it('getItem', function (done) {
    storage.getItem('key').then(function (value) {
      const data = JSON.parse(value)
      assert.equal(data.value, 'value')
      done()
    })
  })

  it('removeItem', function (done) {
    storage
      .removeItem('key')
      .then(storage.getItem('key'))
      .then(function (value) {
        assert.isUndefined(value)
        done()
      })
  })
})
