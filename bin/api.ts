import app from './../app'

app.use(() => {

})

app.listen(process.env.PORT, () => {
    console.log("Listening at", process.env.PORT)
})