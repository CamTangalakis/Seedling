import { State } from "history"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import CategoryBar from "../CategoryBar/CategoryBar"
import ProjectCard from "../Projects/ProjectCard"
import './categoryResults.css'

interface StateInt {
    session?: any,
    project?: any
}

const CategoryResults = () => {
    const catId: any = useParams().id
    const sessionUser = useSelector((state: StateInt) => state.session?.user)
    const allProjects = useSelector((state: StateInt) => state.project?.projects)
    let projects = allProjects.filter(project => project.categoryId == catId)

    const categories = ['Tech and Gadgets', 'Food', 'Community', 'Environment and Nature', 'Art and Design', 'Gaming', 'Music', 'Literature and Film']

    return (
        <div>
            <CategoryBar />
            <h2 className='categoryTitle'>{categories[catId - 1]}</h2>
            <div className="projectsContainer">
                {projects?.map(project => <ProjectCard project={project} /> )}
            </div>
        </div>
    )
}

export default CategoryResults
