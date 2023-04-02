import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

const DemoComponent = (props) => {
  return (
    <div>
      <div>Day la tuoi : {props.age}</div>
      <div>Day la ten : {props.displayName}</div>
    </div>
  );
};

function App() {

  const [age, setAge] = useState(0);
  const [name, setName] = useState('Ngocanh');
  const onInscreaseAge = () => {
    setAge(age + 1);
  };
  return (

    <div className='container'>
      <div>{age}</div>
      <div onClick={onInscreaseAge}>Tang age len 1</div>
      <DemoComponent age={age} displayName={name} />
    </div>
    // <div>
    //   <Header />
    //   <div>Day la Content</div>
    //   <Footer />
    // </div>

  );
}

export default App;
