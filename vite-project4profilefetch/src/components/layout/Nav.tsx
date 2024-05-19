import { FC, useState } from "react";
import '../../App.css';
import LogoAWSNT from '../../assets/circulo-logo_con hoja_blanco_Red.png';
import PostForm from "../common/Post";
import { useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

interface NavProps {
  onSearch: (searchTerm: string) => void;

}

const Nav: FC<NavProps> = ({ onSearch }) => {
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
      {/* Dropdown Structure */}
      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">Castellano</a></li>
        <li className="divider"></li>
        <li><a href="#!">Catalán</a></li>
        <li className="divider"></li>
        <li><a href="#!">Inglés</a></li>
      </ul>
      <nav>
        <div className="nav-wrapper colorbase">
          <a href="/" className="brand-logo">
            <img src={LogoAWSNT} alt="Logo" className="logo-AWSNT-cabecera" style={{height: '100', width: '100'}}/>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Presentación</a></li>
            <li><a href="badges.html">Conócenos</a></li>
            <li><a href="sass.html">Únete</a></li>
            {/* Dropdown Trigger */}
            <li>
              <a href="#!" onClick={togglePostForm}>Crear Post</a>
            </li>
            {/* Barra de búsqueda */}
            <li>
              <form onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Buscar..." value={searchTerm} onChange={handleSearchChange} style={{backgroundColor: 'white', width: '75%', borderRadius: '5px'}}/>
                <button type="submit" style={{border: 'none', background: 'none', color: 'white'}}><MDBIcon fas icon="search"></MDBIcon></button>
              </form>
            </li>
          </ul>
          {/* Responsive para mobile */}
          <ul id="nav-mobile" className="sidenav">
            <li><a href="#">Navbar Link</a></li>
            <li><a href="idioma.html">Idioma</a></li>
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
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

export default Nav;


