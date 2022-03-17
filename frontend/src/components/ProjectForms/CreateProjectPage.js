import { createProject } from "../../store/project";
import { TextField, FormControl, Select, MenuItem, InputLabel, Button } from '@material-ui/core'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

const CreateProjectPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userId = useSelector(state => state.session.user?.id)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [goalAmount, setGoalAmount] = useState(0)
    const [categoryId, setCategoryId] = useState(0)
    const [image, setImage] = useState('')

    if(userId === undefined) {
        navigate('/home')
    }

    const createNewProject = () => {
        dispatch(createProject({userId, categoryId, title, description, goalAmount, image}))
        navigate('/home')
    }

    return (
        <div>
            <FormControl>
                <h2>Create a Project</h2>
                <TextField
                    type='text'
                    className='projectInput'
                    name='title'
                    label='Title'
                    placeholder="what is your project called?"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <TextField
                    type='text'
                    className="projectInput"
                    name='description'
                    label='Description'
                    placeholder='what is your project about?'
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <TextField
                    type='number'
                    className='projectInput'
                    name='goalAmount'
                    label='Goal Amount'
                    placeholder='how much do you need?'
                    required
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(e.target.value)}
                />

                <TextField
                    type='text'
                    className='projectInput'
                    name='image'
                    label='Cover Image'
                    placeholder='enter image url'
                    requiredvalue={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <InputLabel id='category'>Category</InputLabel>
                <Select
                    labelId='category'
                    name='categoryId'
                    label='Category'
                    required
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)} >

                        <MenuItem value={0}>Select a Category</MenuItem>
                        <MenuItem value={1}>Tech and Gadgets</MenuItem>
                        <MenuItem value={2}>Food</MenuItem>
                        <MenuItem value={3}>Community</MenuItem>
                        <MenuItem value={4}>Environment and Nature</MenuItem>
                        <MenuItem value={5}>Art and Design</MenuItem>
                        <MenuItem value={6}>Gaming</MenuItem>
                        <MenuItem value={7}>Music</MenuItem>
                        <MenuItem value={8}>Literature and Film</MenuItem>
                </Select>

                <Button type='submit ' onClick={createNewProject}>Get Funded!</Button>
            </FormControl>
        </div>
    )
}

export default CreateProjectPage;
