
import './App.css';
import LandingPage from './landingPage/LandingPage';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';



const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />


        </Routes>
      </BrowserRouter>
    </div>

  );





};

export default App;
