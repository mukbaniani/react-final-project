import './App.css';
import Navigation from './components/navigation/Navigation';
import LoginPage from './pages/login/';
import Home from './pages/home/';
import RegisterPage from './pages/register/';
import { Switch, Route } from 'react-router-dom';
import PostProviderComponent from './providers/PostProvider';
import * as route from './utils/routes';
import { autoLoginAction } from './redux/actions/middleware-actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserPage from './pages/profile-page/';

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(autoLoginAction());
  }, [dispath]);
  return (
    <div className="App">
      <Navigation />
      <PostProviderComponent>
        <Switch>
          <Route path={route.LOGIN_PATH}>
            <LoginPage />
          </Route>

          <Route path={route.REGISTER_PATH}>
            <RegisterPage />
          </Route>

          <Route path={route.USER_PROFILE}>
            <UserPage />
          </Route>

          <Route path={route.HOME_PATH}>
            <Home />
          </Route>
        </Switch>
      </PostProviderComponent>
    </div>
  );
}

export default App;
