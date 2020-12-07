'use strict'

import Express from 'express'
import { PolicyModel } from '../models'
import { ResponseBody } from '../../lib'

const PolicyRouter = new Express.Router()

PolicyRouter.post('/', policyHandler)
PolicyRouter.get('/scan', scan)
PolicyRouter.get('/:policyId', getOne)
PolicyRouter.get('/customer/:customerId', getByCustomerId)
PolicyRouter.patch('/:policyId', update)
// PolicyRouter.get('/graph/:region', getByRegion)
// PolicyRouter.delete('/:policyId', remove)

export { PolicyRouter }

function policyHandler (request, response) {
    let { body } = request

    PolicyModel.create(body, (error, data) => {
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

function getOne (request, response) {
    let { params } = request

    PolicyModel.getOne(params, (error, data) => {
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

function getByCustomerId (request, response) {
    let { params } = request

    PolicyModel.getByCustomerId(params, (error, data) => {
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

function scan (request, response) {

    PolicyModel.scan((error, data) => {
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

function update (request, response) {
    let { params, body } = request

    PolicyModel.update(params, body, (error, data) => {
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