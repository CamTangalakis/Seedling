import { FormControl, TextField, Button } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postFunding } from '../../store/project'
import './funding.css'

const CreateFundForm = ({projectId, setShowModal}) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const [funded, setFunded] = useState(0)

    console.log(userId, projectId, funded, '<<<<<---')

    const createFund = () => {
        dispatch(postFunding({projectId, userId, funded}))
        setShowModal(false)
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

                <Button onClick={createFund}> Fund! </Button>
            </FormControl>
        </div>
    )
}


export default CreateFundForm
