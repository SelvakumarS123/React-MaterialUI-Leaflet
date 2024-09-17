import logo from './logo.svg';
import './App.css';
import SecondComponent from './Components/SecondComponent';

function App() {
  function MyComponent(){
    return <h1>My FIRST component</h1>
  }
  return (
    <div>
      {/* <h1>Hello React</h1> */}
      <MyComponent/>
      <SecondComponent/>
    </div>
  );
}

export default App;
