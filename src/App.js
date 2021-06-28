import './App.css';
import Navigation from './components/navigation/Navigation';
import LoginPage from './pages/login/';
import Home from './pages/home/';
import RegisterPage from './pages/register/';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
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
    </div>
  );
}

export default App;
