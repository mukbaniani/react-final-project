import './App.css';
import Navigation from './components/navigation/Navigation';
import LoginPage from './pages/login/';
import Home from './pages/home/';
import RegisterPage from './pages/register/';
import { Switch, Route } from 'react-router-dom';
import PostProviderComponent from './providers/PostProvider';
import * as route from './utils/routes';

function App() {
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

          <Route path={route.HOME_PATH}>
            <Home />
          </Route>
        </Switch>
      </PostProviderComponent>
    </div>
  );
}

export default App;
