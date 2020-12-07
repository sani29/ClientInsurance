'use strict'

import async from 'async'
import { MongoModel } from '../../lib'
import { PolicySchema } from '../schemas'

const model = new MongoModel('policy', PolicySchema)

export const PolicyModel = {
    create,
    getOne,
    scan,
    update,
    getByCustomerId
}

function create(attrs, callback){
    const query = attrs
    model.create(query, (error, policy) => {
        if(error) { callback(error) }
        if(policy) console.log('[Info] Policy Created: ' + policy.policyId)
        return callback(null, policy)
    })
}

function getOne(attrs, callback) {
    model._findOne(attrs, (error, doc) => {
      if (error) { callback(error) }
      if(doc) console.log('[Info] Policy Found: ' + doc.policyId)
      return callback(null, doc)
    })
}

function getByCustomerId(attrs, callback) {
    model._findOne(attrs, (error, doc) => {
      if (error) { callback(error) }
      if(doc) console.log('[Info] Customer Found: ' + doc.customerId)
      return callback(null, doc)
    })
}

function scan(callback) {
    model._find((error, docs) => {
        if (error) { callback(error) }  
        return callback(null, docs)
    })
}

function update(params, attrs, callback) {
    model.update(params, attrs, (error, data) => {
        if (error) { return callback(error) }
        console.log('[Info] Policy updated: ' + params.policyId)
        return callback(null, {status : "Updated"})
    })
}
