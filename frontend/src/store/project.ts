const GET_ALL_PROJECTS:string = 'projects/GET_ALL'
const GET_PROJECT: string = 'projects/GET'
const CREATE_PROJECT: string = 'projects/POST'
const EDIT_PROJECT: string = 'projects/EDIT'
const DELETE_PROJECT: string = 'projects/DELETE'
const GET_SEARCH: string = 'projects/GET_SEARCH'

const POST_FUND: string = 'fundings/POST'
const EDIT_FUND: string = 'fundings/EDIT'

const getAllProjects = (allProjects) => {
    return {
        type: GET_ALL_PROJECTS,
        payload: allProjects
    }
}

const getProject = (project) => {
    return {
        type: GET_PROJECT,
        payload: project
    }
}

const postProject = (project) => {
    return {
        type: CREATE_PROJECT,
        payload: project
    }
}

const putProject = (project) => {
    return {
        type: EDIT_PROJECT,
        payload: project
    }
}

const deleteProject = (id) => {
    return {
        type: DELETE_PROJECT,
        payload: id
    }
}

const postFund = (fund) => {
    return {
        type: POST_FUND,
        payload: fund
    }
}

const editFund = (fund) => {
    return {
        type: EDIT_FUND,
        payload: fund
    }
}

export const GetAllProjects = () => async (dispatch) => {
    const response = await fetch('/api/projects/')
}
