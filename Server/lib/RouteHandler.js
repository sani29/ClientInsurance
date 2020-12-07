'use strict'

import { ResponseBody } from './ResponseBody'

class RouteHandler {
  constructor (Model) {
    this.Model = Model

    // Method Hard-Binding to allow them to be assigned to
    // other variables and work as expected
    this.create = this.create.bind(this)
    this.index = this.index.bind(this)
    this.findByPrimaryKey = this.findByPrimaryKey.bind(this)
  }

  create (request, response) {
    const Model = this.Model
    const attrs = request.body

    Model.create(attrs, (error, data) => {
      let responseBody

      if (error && error.constructor === ResponseBody) {
        response.statusMessage = error.message
        return response.status(error.statusCode).json(error)
      } else if (error) {
        responseBody = new ResponseBody(500, error.toString())
        response.statusMessage = responseBody.message
        return response.status(responseBody.statusCode).json(responseBody)
      }

      responseBody = new ResponseBody(201, 'OK', data)
      response.statusMessage = responseBody.message
      response.status(responseBody.statusCode).json(responseBody)
    })
  }

  index (request, response) {
    const Model = this.Model

    Model.index((error, data) => {
      let responseBody
      let statusCode
      let message

      if (error && error.constructor === ResponseBody) {
        response.statusMessage = error.message
        return response.status(error.statusCode).json(error)
      } else if (error) {
        responseBody = new ResponseBody(500, error.toString())
        response.statusMessage = responseBody.message
        return response.status(responseBody.statusCode).json(responseBody)
      }

      statusCode = (data.length && 200) || 204
      message = (data.length && 'OK') || 'No Content'
      responseBody = new ResponseBody(statusCode, message, data)
      response.statusMessage = responseBody.message
      response.status(200).json(responseBody)
    })
  }

  findByPrimaryKey (request, response) {
    const Model = this.Model
    const primaryKeyValue = request.params.primaryKeyValue

    Model.findByPrimaryKey(primaryKeyValue, (error, data) => {
      let responseBody
      let statusCode
      let message

      if (error && error.constructor === ResponseBody) {
        response.statusMessage = error.message
        return response.status(error.statusCode).json(error)
      } else if (error) {
        responseBody = new ResponseBody(500, error.toString())
        response.statusMessage = responseBody.message
        return response.status(responseBody.statusCode).json(responseBody)
      }

      statusCode = (data && 200) || 204
      message = (data && 'OK') || 'No Content'
      data = data || {}
      responseBody = new ResponseBody(statusCode, message, data)
      response.statusMessage = responseBody.message
      response.status(200).json(responseBody)
    })
  }

  _handleError (error, response) {
    let responseBody
    if (error && error.constructor === ResponseBody) {
      response.statusMessage = error.message
      response.status(error.statusCode).json(error)
      return true
    } else if (error) {
      responseBody = new ResponseBody(500, error.toString())
      response.statusMessage = responseBody.message
      response.status(responseBody.statusCode).json(responseBody)
      return true
    }

    return false
  }
}

export { RouteHandler }