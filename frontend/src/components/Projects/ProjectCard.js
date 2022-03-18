import {Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import './projectCard.css'

const ProjectCard = ({project}) => {
    const categoryId = project?.categoryId - 1
    const categories = ['Tech and Gadgets', 'Food', 'Community', 'Environment and Nature',
    'Art and Design', 'Gaming', 'Music', 'Literature and Film']


    return (
        <Card className='cardContainer' style={{"boxShadow": "1px 1px 1px 1px rgba(0,0,0,0.25), -1px -1px 1px 1px rgba(255, 255, 255, 0.25)"}}>
            <a className='cardContent' href={`/project/${project?.id}`}>
                <CardContent>

                    <CardMedia className='projectImage' image={project?.image} style={{"height": "20vw", "width": "30vw", "margin": "-4vw 4vw 0vw -4vw"}}/>

                    <div className="progressBar">
                        <div className="progressStatus"
                            style={{width:`${(project?.Fundings?.reduce((acc, a)=>acc+a,0)) / (project?.goal_amount) * 100}%`}}>
                        </div>
                    </div>

                    <div className='projectInfo'>
                        <h3 className='projectTitle'>{project?.title}</h3>
                        <p className='projectGoal'>Goal: <strong>${project?.goalAmount}</strong></p>
                        <p className='projectCategory'> By: {project?.User.username}</p>
                    </div>
                </CardContent>
            </a>
        </Card>
    )
}

export default ProjectCard
