import { FormControl, TextField, Button } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postFunding } from '../../store/project'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { csrfFetch } from '../../store/csrf'
import './funding.css'

// interface StateInt {
//     session?: any,
//     project?: any
// }

const CreateFundForm = ({projectId, setShowModal}) => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.session?.user?.id)
    const [funded, setFunded] = useState()
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
                    InputProps={{inputProps: {min: 0}}}
                    onChange={(e) => setFunded(e.target.value)}
                />

                <CardElement className='cardElement' />

                <Button onClick={makePayment} type='submit' className='createFundButton' style={{"backgroundColor": "rgb(90, 36, 92)", "color": "beige", "margin": "2vw 7vw"}}> Invest ${funded ? funded : 0} </Button>
            </FormControl>
        </div>
    )
}


export default CreateFundForm
