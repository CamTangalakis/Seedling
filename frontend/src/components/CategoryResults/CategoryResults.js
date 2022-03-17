import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import CategoryBar from "../CategoryBar/CategoryBar"
import ProjectCard from "../Projects/ProjectCard"
import './categoryResults.css'

const CategoryResults = () => {
    const catId = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const allProjects = useSelector(state => state.project.projects)
    let projects = allProjects.filter(project => project.categoryId == catId.id)


    const categories = ['Tech and Gadgets', 'Food', 'Community', 'Environment and Nature', 'Art and Design', 'Gaming', 'Music', 'Literature and Film']

    return (
        <div>
            <CategoryBar />
            <h2 className='categoryTitle'>{categories[catId.id - 1]}</h2>
            <div className="projectsContainer">
                {projects?.map(project => <ProjectCard project={project} /> )}
            </div>
        </div>
    )
}

export default CategoryResults
