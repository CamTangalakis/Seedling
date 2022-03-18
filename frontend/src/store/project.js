import { csrfFetch } from './csrf';

const GET_ALL_PROJECTS = 'projects/GET_ALL'
const GET_PROJECT = 'projects/GET'
const CREATE_PROJECT = 'projects/POST'
const EDIT_PROJECT = 'projects/EDIT'
const DELETE_PROJECT = 'projects/DELETE'
const GET_SEARCH = 'projects/GET_SEARCH'

const POST_FUND = 'fundings/POST'
const EDIT_FUND = 'fundings/EDIT'
const DELETE_FUND = 'fundings/DELETE'

const getAllProjects = (allProjects) => {
    return {
        type: GET_ALL_PROJECTS,
        payload: allProjects
    }
}

const getOneProject = (project) => {
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

const deleteFund = (fund) => {
    return {
        type: DELETE_FUND,
        payload: fund
    }
}

const getSearch = (search) => {
    return {
        type: GET_SEARCH,
        payload: search
    }
}

export const getProjects = () => async (dispatch) => {
    const response = await csrfFetch('/api/projects/')
    if(response.ok) {
        const data = await response.json()
        dispatch(getAllProjects(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        if(data.errors) {
            return data.errors
        } else return ['An error occured. Please try again']
    }
}

export const getProject = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/projects/${id}/`)
    if(response.ok) {
        const data = await response.json()
        dispatch(getOneProject(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        if(data.errors) {
            return data.errors
        } else return ['An error occured. Please try again']
    }
}

export const createProject = (project) => async (dispatch) => {
    const response = await csrfFetch('/api/projects/', {
        method: 'POST',
        body: JSON.stringify(project)
    })
    if(response.ok) {
        const data = await response.json()
        dispatch(postProject(data))
        return null
    } else if (response.status < 500) {
        const data = await response.json()
        if (data.errors) return data.errors
        else return ['An error occured. Please try again']
    }
}


export const editProject = (project) => async (dispatch) => {
    const projectId = project.projectId
    const response = await csrfFetch(`/api/projects/${projectId}/`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(project)
    })

    if(response.ok) {
        const data = await response.json()
        dispatch(putProject(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        if(data.errors) {
            return data.errors
        } else return ['An error occured. Please try again']
    }
}

export const delProject = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/projects/${id}/`, {
        method: 'DELETE'
    })
    if(response.ok) {
        const data = await response.json()
        dispatch(deleteProject(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        if(data.errors) {
            return data.errors
        } else return ['An error occured. Please try again']
    }
}


export const postFunding = (fund) => async (dispatch) => {
    const response = await csrfFetch('/api/fundings/', {
        method: 'POST',
        headers: {'Content-Type': 'Application/json'},
        body: JSON.stringify(fund)
    })

    if(response.ok) {
        const data = await response.json()
        dispatch(postFund(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        if(data.errors) {
            return data.errors
        } else return ['An error occured. Please try again']
    }
}

export const editFunding = (id, fund) => async (dispatch) => {
    const response = await csrfFetch(`/api/fundings/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fund)
    })

    if(response.ok) {
        const data = await response.json()
        dispatch(editFund(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        if(data.errors) {
            return data.errors
        } else return ['An error occured. Please try again']
    }
}

export const deleteFunding = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/fundings/${id}`, {
        method: 'DELETE'
    })

    if(response.ok) {
        const data = await response.json()
        dispatch(deleteFund(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        if(data.errors) {
            return data.errors
        } else return ['An error occured. Please try again']
    }
}

export const searchProjects = (term) => async (dispatch) => {
    const response = await csrfFetch(`/api/projects/search/${term}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(getSearch(data))
        return data
    }else if (response.status < 500) {
        const data = await response.json()
        if(data.errors) {
            return data.errors
        } else return ['An error occured. Please try again']
    }
}

let initialState = {projects: [], currentProject: null, searchProjects: null}


const reducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case GET_ALL_PROJECTS:
            newState = {...state}
            newState.projects = action.payload
            return newState
        case GET_PROJECT:
            newState = {...state}
            newState.currentProject = action.payload
            return newState
        case CREATE_PROJECT:
            newState = {...state}
            newState.projects.push(action.payload.project)
            return newState
        case EDIT_PROJECT:
            newState = {...state}
            const projectI = newState.projects.findIndex(project => project.projectId === action.payload.id)
            newState.projects[projectI] = action.payload
            newState.currentProject = action.payload
            return newState
        case DELETE_PROJECT:
            newState = {...state}
            const projectInd = newState.projects.findIndex(project => project.id === action.payload.id)
            newState.projects.splice(projectInd, 1)
            return newState
        case POST_FUND:
            newState = {...state}
            newState.currentProject.Fundings.push(action.payload.funding)
            newState.currentProject.Fundings = newState.currentProject.Fundings.slice()
            const proId = newState.projects.findIndex(project => project.id === action.payload.funding.projectId)
            console.log(proId, '<<<---')
            // const project = newState.projects.find(proj => proj.id == action.payload.funding.projectId)
            newState.projects[proId].Fundings.push(action.payload.funding)
            return newState
        case EDIT_FUND:
            newState = {...state}
            const fundingI = newState.currentProject.funding.findIndex(funding => funding[1] === action.payload[1])
            newState.currentProject.funding[fundingI] = action.payload
            return newState
        case DELETE_FUND:
            newState = {...state}
            const fundingInd = newState.currentProject.funding.findIndex(funding => funding[1] === action.payload[1])
            newState.currentProject.funding.splice(fundingInd, 1)
            return newState
        case GET_SEARCH:
            newState = {...state}
            newState.searchProjects = action.payload.projects
            return newState
        default:
            return state;
    }
}

export default reducer
