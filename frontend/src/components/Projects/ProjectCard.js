import {Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import './projectCard.css'

const ProjectCard = ({project}) => {
    const categoryId = project?.categoryId - 1
    const categories = ['Tech and Gadgets', 'Food', 'Community', 'Environment and Nature',
    'Art and Design', 'Gaming', 'Music', 'Literature and Film']


    return (
        <Card className='cardContainer'>
            <CardContent>
                <CardMedia className='projectImage' image={project?.image} style={{"height": "20vw", "width": "30vw", "margin": "-4vw 4vw 0vw -4vw"}}/>
                <h3><a className='projectTitle' href={`/project/${project?.id}`}>{project?.title}</a></h3>
                {/* <p className='projectDesc'>{project?.description}</p> */}
                <p className='projectGoal'>Goal: ${project?.goalAmount}</p>
                <p className='projectCategory'>{categories[categoryId]}</p>
            </CardContent>
        </Card>
    )
}

export default ProjectCard
