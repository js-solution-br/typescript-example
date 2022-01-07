import app from './app'

const port = process.env.PORT

app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`Server running at port ${port}`)
})
