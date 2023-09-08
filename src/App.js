import React from 'react';
import './App.css';
// import AnimatedRoutes from './components/AnimatedRoutes';
import { BrowserRouter} from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <AnimatedRoutes/>
      </BrowserRouter>
    </div>
  );
};



export default App;