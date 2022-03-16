import { useSelector } from "react-redux";

const AllProjects = () => {
    let projects = useSelector(state => state.projects)

    console.log(projects, "<<<--")


    // const list = projects.map()
    return (
        <div>

        </div>
    )
}

export default AllProjects;
