import { AUTO_LOGIN } from '../action-types/';
import { AUTH_TOKEN } from '../../utils/constants';
import { setAuthUserAction } from '../actions';

export const autoLoginMiddleware = (store) => {
  return (next) => {
    return (action) => {
      if (action.type === AUTO_LOGIN) {
        if (localStorage.getItem(AUTH_TOKEN)) {
          const user = JSON.parse(localStorage.getItem(AUTH_TOKEN));
          store.dispatch(setAuthUserAction(user));
        }
      } else {
        next(action);
      }
    };
  };
};

export default autoLoginMiddleware;
