import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <ul className="nav justify-content-center bg-dark">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/" exact>
            მთავარი გვერდი
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            რეგისტრაცია
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            ავტორიზაცია
          </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" tabIndex="-1" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
