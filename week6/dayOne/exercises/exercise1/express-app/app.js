const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

app.use('/', indexRouter)