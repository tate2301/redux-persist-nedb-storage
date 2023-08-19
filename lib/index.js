const { deepParseJson } = require('deep-parse-json')
const path = require('path')
const Nedb = require('nedb')

module.exports = ({
  config = {
    databasePathname: 'app.db',
    inMemoryOnly: false
  }
} = {}) => {
  const databasePathname = path.join(__dirname, config.databasePathname)

  const store = new Nedb({
    filename: databasePathname,
    autoload: true,
    inMemoryOnly: config.inMemoryOnly
  })

  return {
    getItem: (key) => {
      return new Promise((resolve, reject) => {
        store.findOne({ key }, (err, data) => {
          if (err) resolve(JSON.stringify({}))
          if (!data) resolve(JSON.stringify({}))
          resolve(JSON.stringify(data))
        })
      })
    },
    setItem: (key, item) => {
      return new Promise((resolve) => {
        try {
          JSON.parse(item)
        } catch (e) {
          item = JSON.stringify({ key, value: item })
        }
        resolve(
          store.update(
            { key },
            { $set: { ...deepParseJson(item) } },
            { upsert: true, new: true }
          )
        )
      })
    },
    removeItem: (key) => {
      return new Promise((resolve) => {
        resolve(store.remove({ key }))
      })
    }
  }
}
