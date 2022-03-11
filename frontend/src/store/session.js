import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (credential, password) => async (dispatch) => {
  const response = await csrfFetch('/api/session/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ credential, password }),
  });

  if(response.ok) {
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  } else if (response.status < 500) {
    const data = await response.json()
    if(data.errors) {
      return data.errors
    } else {
      return ['An error occured. Please try again.']
    }
  }
};

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

// export const authenticate = () => async (dispatch) => {
//   const response = await fetch('/api/auth/', {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   if (response.ok) {
//     const data = await response.json();
//     if (data.errors) {
//       return;
//     }

//     dispatch(setUser(data));
//   }
// }

export const signup = (username, email, password, firstName, lastName) => async (dispatch) => {
  // console.log(username, email, password, firstName, lastName)
  const response = await csrfFetch("/api/users/signup/", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username, email, password, firstName, lastName
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session/', {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'},
  })

  if(response.ok) {
    dispatch(removeUser())
    return response;
  }
}

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
