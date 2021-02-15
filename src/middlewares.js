const notFound = (req, res, next) => {
	res.status(404)
	res.json({
		message: `Not Found - ${req.originalUrl}`,
	})
}

const errorHandler = (error, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statusCode)
	res.json({
		message: error.message,
	})
}

module.exports = {
	notFound,
	errorHandler,
}
