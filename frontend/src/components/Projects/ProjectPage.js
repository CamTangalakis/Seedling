import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { delProject, getProject } from "../../store/project";
import { Button } from '@material-ui/core'
import CreateFundModal from "../Funding/CreateFundModal";
import EditProjectModal from "../ProjectForms/EditProjectModal";
import './projects.css'
import ConfirmDeleteModal from "../ProjectForms/ConfirmDeleteModal";

const ProjectPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const projectId = useParams().id
    const dispatch = useDispatch()
    const project = useSelector(state => state.project.currentProject)

    let totalFunded
    let userFundedTotal = 0
    if (project?.Fundings?.length > 0) {
        let fundings = []
        project?.Fundings?.forEach(fund => fundings.push(fund.funded))
        totalFunded = fundings.reduce((accum, ele) => accum + ele)

        const userFunded = project?.Fundings?.filter(ele => ele.userId == sessionUser?.id)
        let userFunds = [0]
        userFunded.forEach(fund => userFunds.push(fund.funded))
        userFundedTotal = userFunds?.reduce((a,b) => a + b)
    } else totalFunded = 0


    useEffect(() => {
        dispatch(getProject(projectId))
    }, [dispatch])

    return (
        <div className='pageContainer'>
            <div className='pageInfo'>
                <div className="pageImageContainer">
                    <img className='pageImage' src={project?.image} />
                </div>

                <div className='pageInfoStuff'>
                    <h1 className='pageTitle'>{project?.title}</h1>
                    <p className='pageUser'>By: {project?.User.username}</p>
                    <p className='pageDescription'>{project?.description}</p>
                </div>
            </div>

            <div className='pageBottom'>
                <div className='fundingContainer'>
                    <p className='pageGoal' >Goal: ${project?.goalAmount}</p>
                    <p className='pageRaised' >Raised: ${totalFunded}</p>
                    <p className='pagePercent'>{(totalFunded / project?.goalAmount) * 100}% Funded</p>
                </div>

                <p>You have contributed ${userFundedTotal} to this project!</p>

                {sessionUser &&
                    <div className='userActionsContainer'>
                        <CreateFundModal projectId={projectId} />

                        <div>
                            <EditProjectModal project={project} />
                            <ConfirmDeleteModal projectId={projectId} />
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}


export default ProjectPage;
