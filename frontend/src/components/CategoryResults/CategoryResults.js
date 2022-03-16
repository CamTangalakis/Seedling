import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProjectCard from "../Projects/ProjectCard"

const CategoryResults = () => {
    const {catId} = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const allProjects = useSelector(state => state.project.projects)
    let projects = allProjects.filter(project => project.categoryId === catId)

    const categories = ['Tech and Gadgets', 'Food', 'Community', 'Environment and Nature', 'Art and Design', 'Gaming', 'Music', 'Literature and Film']

    return (
        <div>
            <h2>{categories[catId - 1]}</h2>
            <div>
                {projects?.map(project => <ProjectCard project={project} /> )}
            </div>
        </div>
    )
}

export default CategoryResults
