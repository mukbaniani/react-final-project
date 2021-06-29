import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors';
import { setAuthGuestAction } from '../../redux/actions/AuthAction';
import { AUTH_TOKEN } from '../../utils/constants';
import * as routes from '../../utils/routes';

function Navigation() {
  const authed = useSelector(authSelector);
  const history = useHistory();
  const dispath = useDispatch();

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    dispath(setAuthGuestAction());
    history.replace(routes.HOME_PATH);
  };
  return (
    <div>
      <ul className="nav justify-content-center bg-dark">
        <li className="nav-item">
          <NavLink
            className="nav-link active"
            aria-current="page"
            to={routes.HOME_PATH}
            exact>
            მთავარი გვერდი
          </NavLink>
        </li>
        {!authed ? (
          <li className="nav-item">
            <NavLink className="nav-link" to={routes.REGISTER_PATH}>
              რეგისტრაცია
            </NavLink>
          </li>
        ) : null}
        {!authed ? (
          <li className="nav-item">
            <NavLink className="nav-link" to={routes.LOGIN_PATH}>
              ავტორიზაცია
            </NavLink>
          </li>
        ) : null}
        {authed ? (
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={routes.LOGIN_PATH}
              tabIndex="-1"
              aria-disabled="true">
              პროფილი
            </NavLink>
          </li>
        ) : null}
        {authed ? (
          <button className="btn btn-dark" onClick={() => logout()}>
            logout
          </button>
        ) : null}
      </ul>
    </div>
  );
}

export default Navigation;
