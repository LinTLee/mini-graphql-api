'use strict'
const fs = require('fs')
const path = require('path')
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/hours.json'), 'utf8'))

/**
 * Hours defines Chinese Zodiac Hours.
 * @class Hours - a hours class
 */
class Hours {

  constructor () {
    this.name = null
    this.chinese = null
    this.start = null
    this.end = null
    this.description = null
  }

  /**
   * Find hours by the name of animal
   * @return object - An object for Hours
   */
  static get (animalName) {
    // default to a complete data set    
    let recordset = data

    // filter by animal's name
    recordset = recordset.filter((item) => {
      return (item.name.toUpperCase() === animalName.toUpperCase())
    })

    return recordset.map((record) => {
      let hours = new Hours()

      hours.name = record.branch
      hours.chinese = record.chinese
      hours.start = record.hoursOfDayStart
      hours.end = record.hoursOfDayEnd
      hours.description = record.description

      return hours
    })
  }

}

module.exports = Hours
