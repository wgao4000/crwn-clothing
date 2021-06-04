import {UserActionTypes} from './user.types';
const setCurrentUser = user => ({
    type: UserActionTypes.SET_USER_STATE,
    payload: user
})

export default setCurrentUser;