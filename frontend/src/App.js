import logo from './logo.svg';
import './App.css';
import SecondComponent from './Components/SecondComponent';
import React from 'react';

function App() {
  function MyComponent(){
    return (
      <>
        <h1 className='style1'>React.Fragment</h1>
        {/* can create this 'style1' in either index.css file or App.css file.. im using index.css file */}
        <div>
          <h1>My FIRST component</h1>
          <p>Part of MyFirstComponent</p>
        </div>
      </>
    ) 
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
