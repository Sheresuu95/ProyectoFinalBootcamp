
//IMPORTS
import {Routes, Route} from 'react-router-dom';
import HomeView from "./views/Home/HomeView";
import Footer from './components/layout/Footer';
import KnowView from './views/Known/KnowView';
import NavGenerico from './components/layout/NavGenerico';
import LoginView from './views/Login/LoginView';
import RegisterView from './views/Register/RegisterView';

function App() {
  //CONSTANTES, FUNCIONES, VARIABLES, ETC

  return (
    //IMPRESION HTML
    <>
    <header>
      <NavGenerico />
    </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/know" element={<KnowView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView/>} />

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>
        <Footer />
    </>
  )
}
export default App
