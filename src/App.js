import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Pages and Components
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} >
            </Route>
          </Routes>
          </div>
      </BrowserRouter> 
           
    </div>
  );
}

export default App;
