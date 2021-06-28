import './App.css';
import Navigation from './components/navigation/Navigation';
import LoginPage from './pages/login/';
import Home from './pages/home/';
import RegisterPage from './pages/register/';
import { Switch, Route } from 'react-router-dom';
import PostProviderComponent from './providers/PostProvider';

function App() {
  return (
    <div className="App">
      <Navigation />
      <PostProviderComponent>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/register">
            <RegisterPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </PostProviderComponent>
    </div>
  );
}

export default App;
