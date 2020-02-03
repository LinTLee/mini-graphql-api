'use strict'
const fs = require('fs')
const path = require('path')

/**
 * API defines GraphQL schema.
 * @class Api - a API class
 */
class Api {
  /**
   * Scan the files in the given directory matching with a particular suffix.
   * @param {string} directory The location of files being searched.
   * @param {string} suffix - The suffix for matching files.
   * @param {string[]} collection - A list of matched files.
   * @return void.
   */
  static async _scan (directory, suffix, collection) {
    // look for any js file with a particular suffix
    const files = fs.readdirSync(directory)
    .filter(file => fs.lstatSync(path.join(directory, file)).isFile())
    .filter(file => file.indexOf('.' + suffix + '.') >= 0 && file.slice(-3) === '.js')

    const dirs = fs.readdirSync(directory)
    .filter(file => fs.lstatSync(path.join(directory, file)).isDirectory())

    files.forEach((file) => {
      const obj = require(path.join(directory, file))
      collection.push(obj)
    })    
    dirs.forEach(async (dir) => {
      await this._scan(path.join(directory, dir), suffix, collection)
    })
  }

  /**
   * Create a GraphQL schema.
   * @param void
   * @return {object} - GraphQL schema.
   */
  static async getSchema () {
    let typeDefs = []
    let resolvers = []

    await this._scan(__dirname, 'typedefs', typeDefs)
    await this._scan(__dirname, 'resolvers', resolvers)

    return {
      typeDefs: typeDefs,
      resolvers: resolvers
    }
  }

}

module.exports = Api
