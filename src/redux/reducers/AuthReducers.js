import * as types from '../action-types';

const initialState = {
  auth: null,
};

export const AuthReduser = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_GUEST:
      return {
        ...state,
        auth: null,
      };
    case types.SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReduser;
