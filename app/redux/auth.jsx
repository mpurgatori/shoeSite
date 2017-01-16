import axios from 'axios'

/* --------------    ACTION CONSTANTS    ---------------- */

const AUTHENTICATED = 'AUTHENTICATED'

/* --------------    ACTION CREATORS    ----------------- */

export const authenticated = user=> ({ type: AUTHENTICATED, user })

/* ------------------    REDUCER    --------------------- */

export default (state=null, action) => {
   switch(action.type) {
      case AUTHENTICATED: return action.user  
   }
   return state
}

/* --------------    THUNKS/DISPATCHERS    -------------- */

export const login = (username, password) => dispatch =>
   axios.post('/api/auth/local/login', {username, password})
   .then(() => dispatch(whoami()))
   .catch(() => dispatch(whoami()))      

export const logout = () => dispatch =>
   axios.post('/api/auth/logout')
   .then(() => dispatch(whoami()))
   .catch(() => dispatch(whoami()))

export const whoami = () => dispatch =>
   axios.get('/api/auth/whoami')
   .then(res => dispatch(authenticated(res.data)))
   .catch(failed => dispatch(authenticated(null)))

export const updateAddress = (id, address) => dispatch => 
   axios.put(`/api/users/${id}`, {address})
   .then(() => dispatch(whoami()))
   .catch(err => console.error(`Updating address unsuccessful`, err))

export const updateName = (id, firstname, lastname) => dispatch => 
   axios.put(`/api/users/${id}`, {firstname, lastname})
   .then(() => dispatch(whoami()))
   .catch(err => console.error(`Updating name unsuccessful`, err))