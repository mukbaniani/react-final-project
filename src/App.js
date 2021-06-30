import './App.css';
import Navigation from './components/navigation/Navigation';
import PostProviderComponent from './providers/PostProvider';
import { autoLoginAction } from './redux/actions/middleware-actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Routes from './Routes';

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(autoLoginAction());
  }, [dispath]);
  return (
    <div className="App">
      <Navigation />
      <PostProviderComponent>
        <Routes />
      </PostProviderComponent>
    </div>
  );
}

export default App;
