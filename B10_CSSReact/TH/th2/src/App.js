import logo from './logo.svg';
import './App.css';
import styles from './styles.module.css';
import { useState } from 'react';

function App() {
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked((current) => {
      return current = current + 1;
    });
  };

  const textStyle = (numClicked % 2 === 0) ? styles.textBlue : styles.textRed;
  return (
    <div className="App">
      <button onClick={handleClick}>Click here</button>
      <h2 className={textStyle}>You clicked {numClicked} times</h2>
    </div>
  );
}

export default App;
