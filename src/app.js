import express from 'express'
import compression from 'express-compression'

const app = express()
app.use(compression({
    brotli: { enabled: true, zlib: {} }
}))

app.get('/string', (req, res) => {
    let string = 'String de prueba para la clase 31'
    for (let index = 0; index < 10e4; index++) {
        string += 'Aqui colocamos mas datos para la response'
    }
    res.json(string)
})

app.listen(8080, () => console.log('Server Up'))