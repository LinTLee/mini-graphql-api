'use strict'
const { gql } = require('apollo-server-express')

const hours = gql`
  """
  Chinese Zodiac Hours
  """
  type Hours {
    """
    Earthly Branches
    """
    name: String!

    """
    Earthly Branches in Chinese
    """
    chinese: String!

    """
    Hours of Day Start Timestamp
    """
    start: Time

    """
    Hours of Day End Timestamp
    """
    end: Time

    """
    Description
    """
    description: String
  }

  extend type Animal {
    """
    Assigned hours of the day, based on solar time
    """
    hoursOfDay: Hours
  }
`

module.exports = hours
