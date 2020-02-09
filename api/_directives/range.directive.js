'use strict'
const { SchemaDirectiveVisitor } = require('apollo-server-express')
const { GraphQLScalarType, GraphQLNonNull } = require('graphql')

class RangeDirective extends SchemaDirectiveVisitor {
  visitInputFieldDefinition(field) {
    this.wrapType(field)
  }
  visitFieldDefinition(field) {
    this.wrapType(field)
  }

  // replace field.type with a custom GraphQLScalarType 
  // that enforces the range restriction.
  wrapType(field) {
    const { min, max } = this.args

    // if the root is a non-null type, we should wrap the inner type instead
    if (field.type instanceof GraphQLNonNull && field.type.ofType instanceof GraphQLScalarType) {
      field.type = new GraphQLNonNull(new LimitedRangeType(field.type.ofType, min, max))
      return
    } 
    
    // wrap scalar types directly
    if (field.type instanceof GraphQLScalarType) {
      field.type = new LimitedRangeType(field.type, min, max)
      return
    }

    throw new Error(`Not a scalar type: ${field.type}`);
  }
}

class LimitedRangeType extends GraphQLScalarType {
  constructor(type, min, max) {
    super({
      name: `IsInRange`,
      serialize(value) {
        return type.serialize(value)
      },

      // client (variable) -> server
      parseValue(value) {
        const parsedValue = type.parseValue(value)
        if (parsedValue < min || parsedValue > max) {
          throw new Error(`out of range within ${min} and ${max}`)
        }
        return parsedValue
      },

      // client (param) -> server
      parseLiteral(value) {
        const parsedValue = type.parseLiteral(value)
        if (parsedValue < min || parsedValue > max) {
          throw new Error(`out of range within ${min} and ${max}`)
        }
        return parsedValue
      }
    })
  }
}

module.exports = RangeDirective
