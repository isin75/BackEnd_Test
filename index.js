import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'

import router from './router.js'

const PORT = 5000
const DB_URL = `mongodb+srv://isin:isin@cluster0.w7orbdc.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload())
app.use('/api', router)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        app.listen(PORT, () => console.log(`Server start -> http://localhost:${PORT}/`))
    } catch (e) {
        console.log(e)
    }
}

startApp()