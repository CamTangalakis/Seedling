import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { delProject, getProject } from "../../store/project";
import { Button, Dialog } from '@material-ui/core'
import CreateFundModal from "../Funding/CreateFundModal";
import EditProjectModal from "../ProjectForms/EditProjectModal";
import './projects.css'

const ProjectPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const navigate = useNavigate()
    const projectId = useParams().id
    const dispatch = useDispatch()
    const project = useSelector(state => state.project.currentProject)
    const [ deleteDialog, setDeleteDialog ] = useState(false)

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

    const deleteProject = () => {
        dispatch(delProject(projectId))
        navigate('/home')
    }

    useEffect(() => {
        dispatch(getProject(projectId))
    }, [dispatch])

    return (
        <div className='pageContainer'>
            <h1 className='pageTitle'>{project?.title}</h1>
            <p className='pageUser'>By: {project?.User.username}</p>

            <div className='pageInfo'>
                <div className="pageImageContainer">
                    <img className='pageImage' src={project?.image} />
                </div>

                <div className='pageInfoStuff'>
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

                        {sessionUser.id == project.userId &&
                            <div>
                                <EditProjectModal project={project} />

                                <Button onClick={() => setDeleteDialog(true)}>Delete</Button>
                                <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
                                    Are you sure you want to delete this project?
                                    <Button onClick={deleteProject}>Yes!</Button>
                                    <Button onClick={() => setDeleteDialog(false)}>Cancel</Button>
                                </Dialog>
                            </div>
                        }
                    </div>
                }
            </div>

        </div>
    )
}


export default ProjectPage;
