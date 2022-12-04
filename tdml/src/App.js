
import './App.css';
import LandingPage from './landingPage/LandingPage';
import Catalogo from './/catalago/Catalago';
import Login from './login/login';
import Signin from './login/Signin';



import Administrar from './ADMI/Acomponents/generalAdmi/Administrar';
import AdministrarUser from './UserAdmi/AUser/AdministrarUser';
import MainCarrito from './Carrito/MainCarrito';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/administrar' element={<Administrar/>} />
          <Route path='/administrarUser' element={<AdministrarUser/>} />
          <Route path='/carrito' element={<MainCarrito/>} />
          

          
        </Routes>
      </BrowserRouter>
    </div>

  );





};

export default App;
