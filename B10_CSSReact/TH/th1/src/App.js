import logo from './logo.svg';
import './App.css';
import photo1 from './photo.jpg'
import { base64Photo } from './Constant'
import DeleteIcon from './DeleteIcon'

function App() {
  return (
    <div className="something">
      <div>This is TH1 B10</div>
      <img src={photo1} alt=""  width='200'  height = '100' className = "img" />
      <div>import sử dụng require</div>
      <img src={require('./photo.jpg')} alt="" className="img2"/>
      <div>import sử dụng link online</div>
      <img src='https://i.imgur.com/0BJobQo.jpg' className='img2' />
      <div>Base64</div>
      <img src={base64Photo} alt=""  width='200'  height = '100' className = "img3" />
      <div>This is TH1 B10</div>
      <img src={logo} width='200'  height = '100' className = "img4" />
    </div>
  );
}

export default App;
