import React from 'react';
import logo from './logo.svg';
import { Routes ,Route, HashRouter} from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div >
       <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>} />



          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
