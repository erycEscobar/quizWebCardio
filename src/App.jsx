import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Practicas from './pages/Practicas/Practicas';
import Suscripcion from './pages/Suscripcion/Suscripcion';
import Teoria from './pages/Teoria/Teoria';
import Usuario from './pages/Usuario/Usuario';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import InterpretacionDeElectrocardiogramas from './pages/Practicas/pages/InterpretacionDeElectrocardiogramas/InterpretacionDeElectrocardiogramas';
import CompleteLosCasilleros from './pages/Practicas/pages/CompleteLosCasilleros/CompleteLosCasilleros';
import MultipleChoice from './pages/Practicas/pages/MultipleChoice/MultipleChoice';
import ConsideracionesClinicas from './pages/Practicas/pages/ConsideracionesClinicas/ConsideracionesClinicas';
function App() {

    return (
      <>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/Teoria' element={<Teoria />} />
            <Route path='/Practicas' element={<Practicas />} />
            <Route path='/Practicas/InterpretacionDeElectrocardiogramas' element={<InterpretacionDeElectrocardiogramas />} />
            <Route path='/Practicas/CompleteLosCasilleros' element={<CompleteLosCasilleros />} />
            <Route path='/Practicas/MultipleChoice' element={<MultipleChoice />} />
            <Route path='/Practicas/ConsideracionesClinicas' element={<ConsideracionesClinicas />} />
            <Route path='/Suscripcion' element={<Suscripcion />} />
            <Route path='/Usuario' element={<Usuario />} />
            <Route path='*' element={<>404</>} />
          </Routes>
        <Footer />
        </BrowserRouter>
      </>
    )

}
export default App
