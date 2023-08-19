import createNeDBStorage = require('..')

createNeDBStorage({
  databasePathname: 'foo.db',
  inMemoryOnly: true
})

const storage = createNeDBStorage()
storage.getItem('foo')
storage.setItem('foo', 'bar')
storage.removeItem('foo')

interface SampleStorage {
  enabled: boolean
  interval: number
}

const typedStorage = createNeDBStorage<SampleStorage>()
const enabled: Promise<boolean> = typedStorage.getItem('enabled')
const interval: Promise<number> = typedStorage.getItem('interval')
