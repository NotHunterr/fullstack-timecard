const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const PORT = process.env.PORT || 3500
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb+srv://notryoshi:notryoshii@mernlearning.r0k7m1j.mongodb.net/?retryWrites=true&w=majority'
)

app.get('/getUsers', async (req, res) => {
  try {
    const result = await UserModel.find({})
    res.json(result)
  } catch (err) {
    res.json(err)
  }
})

app.post('/createUser', async (req, res) => {
  const user = req.body
  const newUser = new UserModel(user)
  await newUser.save()

  res.json(user)
})

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON ${PORT}`)
})
