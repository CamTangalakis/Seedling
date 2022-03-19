import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { delProject, getProject } from "../../store/project";
import { Button, Dialog, DialogContent, LinearProgress } from '@material-ui/core'
import CreateFundModal from "../Funding/CreateFundModal";
import EditProjectModal from "../ProjectForms/EditProjectModal";
import './projects.css'

interface StateInt {
    session?: any,
    project?: any
}

const ProjectPage = () => {
    const sessionUser = useSelector((state: StateInt) => state.session?.user)
    const navigate = useNavigate()
    const projectId = useParams().id
    const dispatch = useDispatch()
    const project = useSelector((state: StateInt) => state.project?.currentProject)
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

    const percentFunded = ((totalFunded / project?.goalAmount) * 100).toFixed(2)

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
            <p className='pageUser'>By: {project?.User?.username}</p>

            <div className='pageInfo'>
                <div className="pageImageContainer">
                    <img className='pageImage' src={project?.image} />
                </div>

                <div className='pageInfoStuff'>
                    <p className='about'>About This Project</p>
                    <p className='pageDescription'>{project?.description}</p>
                </div>
            </div>

            {/* <div className='progressBar'>
                {percentFunded}% Funded
                <LinearProgress value={percentFunded} />
                <div className='progressFilled' style={{"backgroundColor": "black", "width": "25%"}}></div>
            </div> */}

            <div className='pageBottom'>
                <div className='fundingContainer'>
                    <p className='pageGoal' >Goal: ${project?.goalAmount}</p>
                    <p className='pageRaised' >Seeded: ${totalFunded}</p>
                    <p className='pagePercent'>{((totalFunded / project?.goalAmount) * 100).toFixed(2)}% Funded</p>
                </div>


                {sessionUser &&
                    <div className='userActionsContainer'>
                        <p>You have contributed ${userFundedTotal} to this project!</p>
                        <CreateFundModal projectId={projectId} />

                        {sessionUser?.id == project?.userId &&
                            <div>
                                <EditProjectModal project={project} />

                                <Button className='deleteProjectButton'onClick={() => setDeleteDialog(true)} style={{"margin": "2vh", "backgroundColor": "#880808", "color": "beige"}}>Delete</Button>
                                <Dialog
                                    open={deleteDialog}
                                    onClose={() => setDeleteDialog(false)}
                                    style={{"padding": "2vw"}}
                                >
                                    <DialogContent style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "backgroundColor": "beige"}}>
                                        <div style={{"fontSize": "20px", "marginBottom": "2vh"}}>Are you sure you want to delete this project?</div>

                                        <div>
                                            <Button onClick={deleteProject} style={{"margin": "2vh", "backgroundColor": "#880808", "color": "beige"}}>
                                                Delete
                                            </Button>
                                            <Button onClick={() => setDeleteDialog(false)} style={{"margin": "2vh", "backgroundColor": "#578011", "color": "beige"}}>
                                                Cancel
                                            </Button>
                                        </div>
                                    </DialogContent>
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
