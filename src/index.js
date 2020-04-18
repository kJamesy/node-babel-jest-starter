import express from 'express'
import CONFIG from './config/config'
import appRoutes from './routes/app'

const server = express()
server.use('/', appRoutes)

server.listen(CONFIG.PORT, function() {
    console.warn(`Listening on port ${CONFIG.PORT}...`)
})
