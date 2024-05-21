import { useState } from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import NavGenerico from './components/layout/NavGenerico';
import NavLogin from './components/layout/NavLogin';
import HomeView from "./views/Home/HomeView";
import KnowView from './views/Known/KnowView';
import LoginView from './views/Login/LoginView';
import RegisterView from './views/Register/RegisterView';
import PrivacityView from './views/Privacity/PrivacityView';
import CondicionsView from './views/Condicions/CondicionsView';
import Profile from './views/Profile/profile';
import Rewards from './views/Rewards/rewards';
import Wins from './views/Wins/Wins';
import ProfileResultPage from './views/search/ProfileResultPage';
import Ranking from './views/Ranking/Ranking';
import FeedView from "./views/Feed/FeedView";
import Footer from './components/layout/Footer';

const queryClient = new QueryClient();

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    console.log("Buscar:", term);
  };

  return (
    <QueryClientProvider client={queryClient}>
  
        <header>
          {/* NavGenerico se renderizará si no hay una coincidencia de ruta */}
          <Routes>
            <Route path="/" element={<NavGenerico />} />
            <Route path="/know" element={<NavGenerico />} />
            <Route path="/privacity" element={<NavGenerico />} />
            <Route path="/condicions" element={<NavGenerico />} />
            <Route path="/login" element={<NavGenerico />} />
            <Route path="/register" element={<NavGenerico />} />
            <Route path="/feed/:id" element={<NavLogin onSearch={handleSearch} />} />
            <Route path="/profile/:id" element={<NavLogin onSearch={handleSearch} />} />
            <Route path="/rewards/:username" element={<NavLogin onSearch={handleSearch} />} />
            <Route path="/wins/:username" element={<NavLogin onSearch={handleSearch} />} />
            <Route path="/search" element={<NavLogin onSearch={handleSearch} />} />
            <Route path="/ranking" element={<NavLogin onSearch={handleSearch} />} />
          </Routes>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/know" element={<KnowView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/privacity" element={<PrivacityView />} />
            <Route path="/condicions" element={<CondicionsView />} />
            <Route path="/feed/:id" element={<FeedView />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/rewards/:username" element={<Rewards />} />
            <Route path="/wins/:username" element={<Wins />} />
            <Route path="/search" element={<ProfileResultPage searchTerm={searchTerm} />} />
            <Route path="/ranking" element={<Ranking />} />
            {/* Redirección predeterminada si no hay coincidencia de ruta */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
    </QueryClientProvider>
  );
}

export default App;







