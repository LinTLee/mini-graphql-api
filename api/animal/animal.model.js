'use strict'
const fs = require('fs')
const path = require('path')
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/animals.json'), 'utf8'))

/**
 * Animal defines Chinese Zodiac animal.
 * @class Animal - a Animal class
 */
class Animal {

  constructor () {
    this.name = null
    this.chinese = null
    this.years = []
    this.hours = null
    this.charateristic = null
    this.folklore = null
  }

  /**
   * Find animals
   * @param options - search conditions
   * @return array of {object} - A list of animal objects
   */
  static get (options) {
    // default to a complete data set    
    let recordset = data

    if (options.name != null) {
      recordset = recordset.filter((item) => {
        return (item.name.toUpperCase() === name.toUpperCase())
      })
    }
    if (options.year != null) {
      recordset = recordset.filter((item) => {
        return (item.years.indexOf(options.year) >= 0)
      })
    }
    
    return recordset.map((record) => {
      let animal = new Animal()

      animal.name = record.name
      animal.chinese = record.chinese
      animal.years = record.years
      animal.hours = record.hours
      animal.charateristic = record.charateristic
      animal.folklore = record.folklore

      return animal
    })
  }

}

module.exports = Animal
