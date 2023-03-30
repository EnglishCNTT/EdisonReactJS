import logo from './logo.svg';
import './App.css';

function App() {
  const isUserLoggedIn =  true;
  return (
    <h1>{isUserLoggedIn ? 'Hello User' : 'Login Now'}</h1>
  );
}

export default App;
