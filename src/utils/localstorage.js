import { STORAGE_CONFIG } from '../config'

class AppLocalstorage {
  constructor (sotrageConfig) {
    this.key = sotrageConfig.name
    this.defaultContent = sotrageConfig.content
  }

  #refreshStorage (content) {
    window.localStorage.setItem(this.key, JSON.stringify(content))
  }

  // create a storare if no exist before
  createStorage () {
    if (window.localStorage.length === 0) {
      window.localStorage.setItem(this.key, JSON.stringify(this.defaultContent))
    }
  }

  // return all content of storage
  getAllStorage () {
    const resonse = window.localStorage.getItem(this.key)
    return JSON.parse(resonse)
  }

  // return a single item from key
  getItem (item) {
    const resonse = window.localStorage.getItem(this.key)
    const data = JSON.parse(resonse)
    return data[item]
  }

  // change a single item
  setItem (key, item) {
    const newContent = this.getAllStorage()
    newContent[key] = item
    this.#refreshStorage(newContent)
  }

  // add a item into the other item
  addItem (key, item) {
    const newContent = this.getAllStorage()
    newContent[key].push(item)
    this.#refreshStorage(newContent)
  }

  // delete a specific item
  delteItem (key, item) {
    const newContent = this.getAllStorage()

    const index = newContent[key].indexOf(item)
    if (index > -1) {
      newContent[key].splice(index, 1)
    }
    this.#refreshStorage(newContent)
  }
}

export const appStorage = new AppLocalstorage(STORAGE_CONFIG)
appStorage.createStorage()
