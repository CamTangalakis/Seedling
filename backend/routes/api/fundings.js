const express = require('express')
const asyncHandler = require('express-async-handler');
const { Funding } = require('../../db/models');
const router = express.Router();
const uuid = require('uuid');
const stripe = require('stripe')('sk_test_51KeBquIXDN1OZLZBwUPCF0nvj6ByK55HRnWJcM4p6auUjF8toC1pDOP7jWYuIaV6d08CJSVSzVqtncAvL6YTj58I00qX9kVXg9')

router.post('/', asyncHandler(async(req, res) => {
    const {projectId, userId, funded} = req.body
    const funding = await Funding.create({projectId, userId, funded})
    return res.json({funding})
}))

router.put('/:id/', asyncHandler(async(req, res) => {
    const {id} = req.params
    const {funded} = req.body
    const funding = await Funding.findByPk(id)
    await funding.update({funded})
    res.json(funding)
}))

router.delete('/:id/', asyncHandler(async(req, res) => {
    const {id} = req.params
    const funding = await Funding.findByPk(id)
    await funding.destroy()
    res.send('Funding deleted successfully!')
}))


//--------------------- stripe routes --------------------------

router.post('/pay', async (req, res) => {
    const {price} = req.body
    const session = await stripe.checkout.sessions.create({
        line_items: [{
            price_data: {
                currency: 'usd',
                unit_amount: price
            },
            quantity: 1
        }],
        mode: 'payment',
    })
    res.send({"message": "Successfully paid!"})
})

router.post('/create-intent', async(req, res) => {
    const {price} = req.body
    console.log(price)
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: price,
            currency: 'usd',
            payment_method_types: ['card']
        })
        res.json({clientSecret: paymentIntent.client_secret})

    } catch (e) {
        res.status(400).json({error: {message: e.message}})
    }
})

// router.get('/pay', (req, res) => {
//     res.send('HELLO FROM STRIPE!!!!')
// })


module.exports = router;
