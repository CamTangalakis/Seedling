import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import './projects.css'

const AllProjects = () => {
    let projects = useSelector(state => state.project.projects)

    const list = projects.map((project) => <ProjectCard project={project} />)
    return (
        <div className="projectsContainer">
            {list}
        </div>
    )
}

export default AllProjects;
