import request from 'supertest'
import express from 'express'
import appRoutes from '../../src/routes/app'

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use('/', appRoutes)

describe('tests app routes', () => {
    test('index routes work as expected', async() => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    })
})