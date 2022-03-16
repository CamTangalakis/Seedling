import {Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import './projectCard.css'

const ProjectCard = ({project}) => {
    const categoryId = project.categoryId - 1
    const categories = ['Tech and Gadgets', 'Food', 'Community', 'Environment and Nature',
    'Art and Design', 'Gaming', 'Music', 'Literature and Film']

    return (
        <Card className='cardContainer'>
            <CardContent>
                <CardMedia className='projectImage' image={project?.image} />
                <h3 className='projectTitle'>{project?.title}</h3>
                <p className='projectDesc'>{project?.description}</p>
                <p className='projectGoal'>Goal: ${project?.goalAmount}</p>
                <p className='projectCategory'>{categories[categoryId]}</p>
            </CardContent>
        </Card>
    )
}

export default ProjectCard
