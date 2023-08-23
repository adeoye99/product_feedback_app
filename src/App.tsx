import React from 'react';
import logo from './logo.svg';
import { Routes ,Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import FeedbackDetails from './Pages/FeedbackDetails';
import NewFeedback from './Pages/NewFeedback';
import EditFeedback from './Pages/EditFeedback';
import RoadMap from './Pages/RoadMap';

function App() {
  return (
    <div className= "" >
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/feedback" element={<FeedbackDetails/>}/>
            <Route path="/newfeedback" element={<NewFeedback/>}/>
            <Route path="/editfeedback" element={<EditFeedback/>}/>
            <Route path="/roadmap" element={<RoadMap/>}/>
      
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
