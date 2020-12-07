'use strict'

import mongoose from 'mongoose'
import async from 'async'
import { SERVER_CONFIG, MONGO_CONFIG } from './config'
const { PORT } = SERVER_CONFIG

const startServer = (app) => {
    async.waterfall([
        next => {
          console.log('[Info] Connecting to MongoDB...')
          const { DBNAME, CONNECTION_URI, OPTIONS } = MONGO_CONFIG
    
          mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology:true })
            .then(() => {
              console.log('[Info] Connected to MongoDB')
              next()
            })
            .catch(error => {
              console.error(error)
              return process.exit(-1)
            })
        }
      ], error => {
        if (error) {
          console.error(error)
          return process.exit(-1)
        }
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
        console.log('[Info] Starting Server...')
        app.listen(PORT, () => console.log('[Info] Server Started Successfully! Listening on Port:', PORT))
      })
}

export default startServer