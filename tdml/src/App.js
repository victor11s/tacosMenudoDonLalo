
import './App.css';
import LandingPage from './landingPage/LandingPage';
import Catalogo from './/catalago/Catalago';
import Login from './login/login';
import Signin from './login/Signin';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Resumen from './resumen_compra/resumen';



const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/resumen' element={<Resumen/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );





};

export default App;
