import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomeView from "./views/Home/HomeView";
import Footer from './components/layout/Footer';
import Rewards from './views/Rewards/rewards';
import Ranking from './views/Ranking/Ranking';
import Wins from './views/Wins/Wins';
import Nav from './components/layout/Nav';
import ProfileResultPage from './views/search/ProfileResultPage';
import { QueryClient, QueryClientProvider } from "react-query";
import Profile from './views/Profile/Profile';

const queryClient = new QueryClient();

const App: FC = () => {
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
            <Route path="/rewards/:username" element={<Rewards />} />
            <Route path="/wins/:username" element={<Wins />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/profile/:id" element={<Profile />} />
            {/* Pasar searchTerm al componente ProfileResultPage */}
            <Route path="/search" element={<ProfileResultPage searchTerm={searchTerm} />} />
          </Routes>
        </main>
        <Footer />
      </>
    </QueryClientProvider>
  );
};

export default App;
