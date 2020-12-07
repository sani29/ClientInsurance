'use strict'

import Express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Routes from './api/routes'
import startServer from './startServer'
import http from 'http';
const app = new Express()
const Http = http.createServer(app);

// Middleware Initializations
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

// Initialize Routes
Routes.init(app)

startServer(Http)

// For testing
module.export = app