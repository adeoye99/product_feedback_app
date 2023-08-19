import React from 'react';
import logo from './logo.svg';
import { Routes ,Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import FeedbackDetails from './Pages/FeedbackDetails';

function App() {
  return (
    <div className= "" >
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/feedback" element={<FeedbackDetails/>}/>
        

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
