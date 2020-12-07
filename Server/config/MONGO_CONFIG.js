'use strict'

const MONGO_DBNAME = 'sanidhya', MONGO_HOST = 'localhost', MONGO_USERNAME = null, MONGO_PASSWORD = null, MONGO_PORT = '27017'

const REQUIRED_CONFIG = [
  'MONGO_DBNAME',
  'MONGO_HOST',
  'MONGO_PORT',
  'MONGO_USERNAME',
  'MONGO_PASSWORD'
]

// MongoDB Configuration to required establish connection
const MONGO_CONFIG = {
  DBNAME: MONGO_DBNAME,
  HOST: MONGO_HOST,
  PORT: MONGO_PORT,
  USERNAME: MONGO_USERNAME,
  PASSWORD: MONGO_PASSWORD,
  OPTIONS: {
    db: { native_parser: true },
    server: { poolSize: 5 }
  }
}

MONGO_CONFIG.CONNECTION_URI = [
  'mongodb://',
  MONGO_CONFIG.HOST, 
  ':',
  MONGO_PORT,
  '/',
  MONGO_CONFIG.DBNAME,
  '?retryWrites=true&w=majority'
].join('')


export { MONGO_CONFIG }