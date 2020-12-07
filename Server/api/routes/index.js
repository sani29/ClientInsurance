'use strict'

import { PolicyRouter } from './Policy'
import packageJSON from '../../package.json'
import { compile } from 'morgan'

const { version } = packageJSON

const routes = [
    {
        path: '/policy', router: PolicyRouter
    }
]

routes.init = app => {
    if (!app || !app.use) {
        console.error('[Error] Route Initialization Failed: app / app.use is undefined')
        return process.exit(1)
    }
    
    app.get('/version', (request, response) => {
        response.send(version)
    })

    routes.forEach(route => {
        const pathWithVersion = '/v' + version.split('.')[0] + route.path
        app.use(pathWithVersion, route.router)
    })

    app.use('*', (request, response, next) => {
        const error = {
            statusCode: 404,
            message: ['Cannot', request.method, request.originalUrl].join(' ')
        }
        next(error)
    })

    app.use((error, request, response, next) => {
        if (!error) { return }

        if (error.statusCode) {
            response.statusMessage = error.message
            return response.status(error.statusCode).json(error)
        }

        const err = {
            statusCode: 500,
            message: error.toString()
        }
        response.statusMessage = err.message
        return response.status(err.statusCode).json(err)
    })
}

export default routes