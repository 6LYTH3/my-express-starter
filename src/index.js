const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()

const middlewares = require('./middlewares')

app = express()
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.json({
		message: 'Hello World!',
	})
})

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

app.listen(process.env.PORT, '0.0.0.0', () => {
	console.log('Server listing on port', process.env.PORT)
})
