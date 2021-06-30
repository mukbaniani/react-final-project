import { Redirect } from 'react-router';
import { AUTH_TOKEN } from '../utils/constants';

export const WithAuthProtecred = (Component) => {
  const WithNoAuth = (props) => {
    const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
    if (token) {
      return <Redirect to="/" />;
    }
    return <Component {...props} />;
  };
  return WithNoAuth;
};
