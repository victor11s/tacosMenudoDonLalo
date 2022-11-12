
import './App.css';
import LandingPage from './landingPage/LandingPage';
import Login from './login/Login';
import Singin from './login/Singin';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/singin' element={<Singin/>} />

        </Routes>
      </BrowserRouter>
    </div>

  );





};

export default App;
