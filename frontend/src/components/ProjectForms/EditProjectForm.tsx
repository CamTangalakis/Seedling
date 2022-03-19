import { createProject, editProject } from "../../store/project";
import { TextField, FormControl, Select, MenuItem, InputLabel, Button } from '@material-ui/core'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import './projectForms.css'

const EditProjectForm = ({project, setShowModal}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState(project?.title)
    const [description, setDescription] = useState(project?.description)
    const [goalAmount, setGoalAmount] = useState(project?.goalAmount)
    const [categoryId, setCategoryId] = useState(project?.categoryId)
    const [image, setImage] = useState(project?.image)
    const projectId = project?.id

    // console.log(projectId, categoryId, title, description, goalAmount, image)

    const updateProject = () => {
        dispatch(editProject({projectId, categoryId, title, description, goalAmount, image}))
        setShowModal(false)
    }

    return (
        <div className="editContainer">
            <FormControl fullWidth >
                <h2 className='editHeader' >Edit Project</h2>
                <TextField
                    type='text'
                    className='projectInput'
                    name='title'
                    label='Title'
                    placeholder="what is your project called?"
                    required
                    value={title}
                    onChange={(e: any) => setTitle(e.target.value)}
                    style={{"margin": "1vw", "color": "beige"}}
                />

                <TextField
                    type='text'
                    className="projectInput"
                    name='description'
                    label='Description'
                    placeholder='what is your project about?'
                    required
                    value={description}
                    multiline
                    maxRows={5}
                    onChange={(e: any) => setDescription(e.target.value)}
                    style={{"margin": "1vw"}}
                />

                <TextField
                    type='number'
                    className='projectInput'
                    name='goalAmount'
                    label='Goal Amount'
                    placeholder='how much do you need?'
                    required
                    value={goalAmount}
                    onChange={(e: any) => setGoalAmount(e.target.value)}
                    style={{"margin": "1vw"}}
                />

                <TextField
                    type='text'
                    className='projectInput'
                    name='image'
                    label='Cover Image'
                    placeholder='enter image url'
                    required
                    value={image}
                    onChange={(e: any) => setImage(e.target.value)}
                    style={{"margin": "1vw"}}
                />

                <Select
                    labelId='category'
                    name='categoryId'
                    label='Category'
                    required
                    value={categoryId}
                    onChange={(e: any) => setCategoryId(e.target.value)}
                    style={{"padding": "15px 0px 5px 0px", "margin": "1vw"}}
                >

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

                <Button
                    type='submit'
                    style={{"margin": "1vw"}}
                    onClick={updateProject}>
                        Update Project
                </Button>
            </FormControl>
        </div>
    )
}

export default EditProjectForm;
