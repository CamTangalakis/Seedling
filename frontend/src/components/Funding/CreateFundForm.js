import { FormControl, TextField, Button } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postFunding } from '../../store/project'
import StripeCheckout from 'react-stripe-checkout'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import './funding.css'
import { csrfFetch } from '../../store/csrf'

const CreateFundForm = ({projectId, setShowModal}) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session?.user?.id)
    const [funded, setFunded] = useState(0)
    const elements = useElements()
    const stripe = useStripe()

    const createFund = () => {
        dispatch(postFunding({projectId, userId, funded}))
        setShowModal(false)
    }

    const makePayment = async (e) => {
        e.preventDefault()

        if(!stripe || !elements) return

        const {clientSecret} = await csrfFetch('/api/fundings/create-intent', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price: funded * 100
            })
        }).then(response => response.json())

        const {paymentIntent} = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                }
            }
        )

        createFund()
    }

    return (
        <div className="createFundFormContainer">
            <FormControl>

                <h2>Seed This Project</h2>
                <TextField
                    type='number'
                    className='fundInput'
                    name='fund'
                    label='Fund'
                    required
                    value={funded}
                    onChange={(e) => setFunded(e.target.value)}
                />

                <CardElement />

                <Button onClick={makePayment}> Invest ${funded}! </Button>
            </FormControl>
        </div>
    )
}


export default CreateFundForm
