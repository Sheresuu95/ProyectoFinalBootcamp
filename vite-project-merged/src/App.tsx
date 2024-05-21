
//IMPORTS
import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import HomeView from "./views/Home/HomeView";
import Footer from './components/layout/Footer';
import KnowView from './views/Known/KnowView';
import NavGenerico from './components/layout/NavGenerico';
import Nav from './components/layout/Nav';
import LoginView from './views/Login/LoginView';
import RegisterView from './views/Register/RegisterView';
import PrivacityView from './views/Privacity/PrivacityView';
import CondicionsView from './views/Condicions/CondicionsView';
import Profile from './views/Profile/profile';
import Rewards from './views/Rewards/rewards';
import Wins from './views/Wins/Wins';
import { QueryClient, QueryClientProvider } from "react-query";
import ProfileResultPage from './views/search/ProfileResultPage';
import Ranking from './views/Ranking/Ranking';
import FeedView from "./views/Feed/FeedView";

const queryClient = new QueryClient();

function App() {
  //CONSTANTES, FUNCIONES, VARIABLES, ETC
  const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para almacenar el término de búsqueda

  const handleSearch = (term: string) => {
    setSearchTerm(term); // Actualiza el estado con el término de búsqueda
    console.log("Buscar:", term);
  };

  return (
    <QueryClientProvider client={queryClient}>
    <>
    <header>
    <Nav onSearch={handleSearch} />
    </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/know" element={<KnowView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView/>} />
          <Route path="/privacity" element={<PrivacityView/>} />
          <Route path="/condicions" element={<CondicionsView/>} />
          {/*Que se vean solo si estás logueado*/}
          <Route path="/feed/:id" element={<FeedView/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/rewards/:username" element={<Rewards />} />
          <Route path="/wins/:username" element={<Wins />} />
          <Route path="/search" element={<ProfileResultPage searchTerm={searchTerm} />} />
          <Route path="/ranking" element={<Ranking />} />

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>
        <Footer />
    </>
    </QueryClientProvider>
  )
}
export default App
