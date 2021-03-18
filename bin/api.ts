import app from './../app';
import https from 'http';
import config from 'config'
const port : number = config.get('server.port')
app.use('/', (req, res, next) => {
    res.status(200).json({
        message: "Helloworld",
        status: 200,
    })
})

app.listen(port , ()=> {
    console.log(port)
})