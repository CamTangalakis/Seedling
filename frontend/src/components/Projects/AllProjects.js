import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProjects } from "../../store/project";
import CategoryBar from "../CategoryBar/CategoryBar";
import ProjectCard from "./ProjectCard";
import './projects.css'

const AllProjects = () => {
    const dispatch = useDispatch()
    let projects = useSelector(state => state.project.projects)

    useEffect(() => {
        dispatch(getProjects())
    }, [dispatch])

    const list = projects.map((project) => <ProjectCard project={project} />)
    return (
        <div>
            <CategoryBar />

            <div className="projectsContainer">
                {list}
            </div>
        </div>
    )
}

export default AllProjects;
