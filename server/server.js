const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
const User = require('./models/User')
const bcrypt = require('bcryptjs')
const app = express()

app.use(express.json())

const __dirname1 = path.resolve()

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname1, '/client/build')))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
    })
} else {
    app.get('/', (req, res) => {
        res.send("API is Running on development")
    })
    require('dotenv').config()
}
connectDB()
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server Started on PORT ${PORT}`))
const cors = require('cors')
app.use(cors({
    origin: 'http://192.168.0.212:3000'
}))

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "86c9fb4a",
  apiSecret: "7X5x8DX5jiHpu6Uk"
})

const stripe = require('stripe')(stripeSecretKey)

const storeItems = new Map([
    [1, {priceInCents: 5000, name: 'Headshot (passport/id/profile)'}],
])

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents, 
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `http://192.168.0.212:3000/success`,
            cancel_url: `http://192.168.0.212:3000/cancel`
        })
        res.json({ url: session.url })
    } catch(e) {
        res.status(500).json({ error: e.message })
    }
})

app.post('/send-text', (req, res) => {
    const from = "18775017308"
    const to = "16195192535"
    vonage.message.sendSms(from, to, req.body.text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
    })
})

app.get('/get-reservation', (req, res) => {
    User.find({})
    .then(allUsers => {
        res.json(allUsers)
    })
})

app.post('/make-res', (req, res) => {
    const newUser = new User({
        month: req.body.month,
        day: req.body.monthDay,
        hour: req.body.hour
    })
    console.log(newUser)
    newUser.save()
})

app.post('/cancel-reservation', (req, res) => {
    User.findOneAndDelete({
        month: req.body.month,
        day: req.body.day,
        hour: req.body.hour
    })
    console.log('deleted')
})