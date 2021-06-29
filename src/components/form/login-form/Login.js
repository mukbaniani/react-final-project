import { useForm } from 'react-hook-form';
import { login } from '../../../services/authService/auth';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAuthUserAction } from '../../../redux/actions/AuthAction';
import { AUTH_TOKEN } from '../../../utils/constants';
import { HOME_PATH } from '../../../utils/routes';

function Login() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const loggedin = await login(data);
    localStorage.setItem(AUTH_TOKEN, JSON.stringify(loggedin.token));
    dispatch(setAuthUserAction(loggedin.token));
    history.replace(HOME_PATH);
  };
  return (
    <div className="container text-center mt-4 border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            defaultValue="eve.holt@reqres.in"
            {...register('email', { required: true })}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            defaultValue="cityslicka"
            {...register('password', { required: true })}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          ავტორიზაცია
        </button>
      </form>
    </div>
  );
}

export default Login;
