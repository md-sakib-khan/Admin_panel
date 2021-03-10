import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Welcome from './MyComponents/Welcome';  //Functional 
import Display from './MyComponents/Display'

function App() {

  return (
    <div className="App">
      <Welcome name = "Admin"></Welcome>
      <Display></Display>
    </div>
  );
}

export default App;
