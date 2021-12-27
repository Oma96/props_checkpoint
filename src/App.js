
import './App.css';
import Component from './profile/Component.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const handleName =name =>alert ('My name is : '+name)  
  return (
    <div className="App">
     <Component  handleName={handleName} >
     <img src="/Photo.jpg" alt="myimage" />
     </Component>
     </div>
  );
}

export default App;
