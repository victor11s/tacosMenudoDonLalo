
import './App.css';
import LandingPage from './landingPage/LandingPage';
import Catalogo from './/catalago/Catalago';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalogo" element={<Catalogo />} />


        </Routes>
      </BrowserRouter>
    </div>

  );





};

export default App;
