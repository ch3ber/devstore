import { STORAGE_CONFIG } from '@config'

class AppLocalstorage {
  constructor (sotrageConfig) {
    this.storageName = sotrageConfig.name
    this.defaultContent = sotrageConfig.content
    this.createStorage()
  }

  #refreshStorage (content) {
    window.localStorage.setItem(this.storageName, JSON.stringify(content))
  }

  // create a storare if no exist before
  createStorage () {
    const STORAGE_ELEMENTS = window.localStorage.length
    if (STORAGE_ELEMENTS === 0) {
      window.localStorage.setItem(this.storageName, JSON.stringify(this.defaultContent))
    }
  }

  // return all content of storage
  getAllStorage () {
    const JSON_STORAGE = window.localStorage.getItem(this.storageName)
    return JSON.parse(JSON_STORAGE)
  }

  // return a single item from key
  getItem (item) {
    const JSON_STORAGE = window.localStorage.getItem(this.storageName)
    const parceStorage = JSON.parse(JSON_STORAGE)
    return parceStorage[item]
  }

  // change a single item
  setItem (key, item) {
    const newContentStorage = this.getAllStorage()
    newContentStorage[key] = item
    this.#refreshStorage(newContentStorage)
  }

  // add a item into the other item
  addItem (key, item) {
    const newContentStorage = this.getAllStorage()
    newContentStorage[key].push(item)
    this.#refreshStorage(newContentStorage)
  }

  // delete a specific item
  delteItem (key, item) {
    const newContentStorage = this.getAllStorage()

    const indexOfItem = newContentStorage[key].indexOf(item)
    if (indexOfItem > -1) {
      newContentStorage[key].splice(indexOfItem, 1)
    }
    this.#refreshStorage(newContentStorage)
  }
}

export const appStorage = new AppLocalstorage(STORAGE_CONFIG)
