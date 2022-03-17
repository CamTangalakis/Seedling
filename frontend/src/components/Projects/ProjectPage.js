import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProject } from "../../store/project";
import CreateFundModal from "../Funding/CreateFundModal";
import EditProjectModal from "../ProjectForms/EditProjectModal";
import './projects.css'

const ProjectPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const projectId = useParams().id
    const dispatch = useDispatch()
    const project = useSelector(state => state.project.currentProject)

    let totalFunded
    if (project?.Fundings?.length > 0) {
        let fundings = []
        project.Fundings.forEach(fund => fundings.push(fund.funded))
        totalFunded = fundings.reduce((accum, ele) => accum + ele)
    } else totalFunded = 0

    console.log(totalFunded, '<<<---')

    useEffect(() => {
        dispatch(getProject(projectId))
    }, [dispatch])

    return (
        <div className='pageContainer'>
            <div className='pageInfo'>
                <img className='pageImage' src={project?.image} />

                <div className='pageInfoStuff'>
                    <h1 className='pageTitle'>{project?.title}</h1>
                    <p className='pageDescription'>{project?.description}</p>
                </div>
            </div>

            <div>
                <p className='pageGoal'>Goal: ${project?.goalAmount}</p>
                <p>Raised: $ {totalFunded}</p>
                <p>{(totalFunded / project?.goalAmount) * 100}% funded</p>
            </div>
            {sessionUser &&
                <div>
                    <CreateFundModal projectId={projectId} />

                    <div>
                        <EditProjectModal project={project} />
                    </div>
                </div>

            }
        </div>
    )
}


export default ProjectPage;
