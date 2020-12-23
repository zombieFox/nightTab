const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const port = 3000
const apiKey = process.env.PASSWORD || ''

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const checkAuth = (req, res, next) => {
    const { headers } = req

    if(headers['x-api-key'] !== apiKey)
        return res.status(403).send()

    next()
}

const getData = async (req, res) => {
    try{
        let file = fs.readFileSync('data.json')
        file = JSON.parse(file)
        console.log('Returning file')
        return res.json(file)
    }catch(err){
        // console.error({err})
        return res.status(404).send()
    }
}
app.get('/sync', checkAuth, getData)

const postData = async (req, res) => {
    let { body } = req

    try{
        body.state.data.sync.init = true
        const data = JSON.stringify(body, null, 2)
        fs.writeFileSync('data.json', data)
        console.log('Saved')
        return res.send()
    }catch(err){
        console.error({err})
        return res.status(500).send()
    }
}
app.post('/sync', checkAuth, postData)

const putData = async (req, res) => {
    let { body } = req

    try{
        const data = JSON.stringify(body, null, 2)
        fs.writeFileSync('data.json', data)
        console.log('Updated')
        return res.send()
    }catch(err){
        console.error({err})
        return res.status(500).send()
    }
}
app.put('/sync', checkAuth, putData)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
