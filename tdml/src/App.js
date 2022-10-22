import logo from './logo.svg';
import './App.css';
import LandingPage from './landingPage/LandingPage';
import { Row, Col } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom';



const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />


      </Routes>
      


    </div>

  );





};

export default App;
