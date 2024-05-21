import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoAWSNT from '../../assets/circulo-logo_con hoja_blanco_Red.png';
import PostForm from "../common/Post";

interface NavProps {
  onSearch: (searchTerm: string) => void;
}

const NavLogin: FC<NavProps> = ({ onSearch }) => {
  const [showPostForm, setShowPostForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const togglePostForm = () => {
    setShowPostForm(!showPostForm);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Llamar a la función onSearch pasando el término de búsqueda
    onSearch(searchTerm);
    // Redirigir al usuario a la página de resultados de búsqueda
    navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper colorbase">
          <a href="/" className="brand-logo">
            <img src={LogoAWSNT} alt="Logo" className="responsive-img logo-AWSNT-cabecera" />
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/feed/:id">Inicio</a></li>
            <li><a href="/profile/:id">Perfil</a></li>
            <li><a href="/rewards/:username">Logros</a></li>
            <li><a href="/wins/:username">Retos</a></li>
            <li><a href="/ranking">Ranking</a></li>
            {/* Dropdown Trigger */}
            <li>
              <a href="#!" onClick={togglePostForm}>Crear Post</a>
            </li>
            {/* Barra de búsqueda */}
            <li style={{ flexGrow: 1 }}>
              <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', width: '100%', height: '55px', marginTop: '8px' }}>
                <input
                  type="text"
                  placeholder="Busca a un usuario"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  style={{ backgroundColor: 'white', flexGrow: 1 }}
                />
                <button type="submit" style={{ border: 'none', borderRadius: '0 5px 5px 0', background: 'none', color: 'white', padding: '5px 10px' }}>
                  <i className="material-icons">search</i>
                </button>
              </form>
            </li>
          </ul>
          {/* Responsive para mobile */}
          <ul id="nav-mobile" className="sidenav">
            <li><a href="/feed/:id">Inicio</a></li>
            <li><a href="/profile/:id">Perfil</a></li>
            <li><a href="/rewards/:username">Logros</a></li>
            <li><a href="/wins/:username">Retos</a></li>
            <li><a href="/ranking">Ranking</a></li>
            {/* Dropdown Trigger */}
            <li>
              <a href="#!" onClick={togglePostForm}>Crear Post</a>
            </li>
            <li>
              <a href="#" data-target="nav-mobile" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {showPostForm && (
        <div className="post-form-container" style={{ position: 'absolute', top: '60px', right: '10px', backgroundColor: 'white', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', zIndex: 1000 }}>
          <PostForm onSubmit={(postDetail) => {
            console.log(postDetail);
            togglePostForm();
          }} />
        </div>
      )}
    </>
  );
};

export default NavLogin;

