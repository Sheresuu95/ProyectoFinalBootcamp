import { FC } from "react";
import { useLocation } from "react-router-dom";
import '../../App.css'
import LogoAWSNT from '../../assets/circulo-logo_con hoja_blanco_Red.png'

const NavGenerico: FC = () => {
  // Obtenemos la ruta actual usando useLocation de React Router
  const location = useLocation();

  // Función para determinar si se debe mostrar el enlace "/login"
  const mostrarLogin = () => {
    // Comprobamos si la ruta actual es diferente de "/login"
    return location.pathname !== "/login";
  };

  // Función para determinar si se debe mostrar el enlace "Conócenos"
  const mostrarConocenos = () => {
    // Comprobamos si la ruta actual es diferente de "/know"
    return location.pathname !== "/know";
  };

  // Función para determinar si se debe mostrar el enlace "Inicio"
  const mostrarInicio = () => {
    // Comprobamos si la ruta actual es diferente de "/"
    return location.pathname !== "/";
  };

  const mostrarConSus = () => {
    return location.pathname == "/";
  }

  return (
    <>
      <nav>
      <div className="nav-wrapper colorbase">
            <a href="/" className="brand-logo">
              <img src={LogoAWSNT} alt="Logo" className="responsive-img logo-AWSNT-cabecera" />
            </a>
            <ul className="right hide-on-med-and-down">
              {mostrarInicio() && <li><a href="/">Inicio</a></li>}
              {mostrarConSus() && <li><a href="/#Pres-banner">Presentación</a></li>}
              {mostrarConSus() && <li><a href="/#Sus-banner">Únete</a></li>}
              {mostrarConocenos() && <li><a href="/know">Conócenos</a></li>}
              {mostrarLogin() && <li><a href="/login"><i className="large material-icons">account_circle</i></a></li>}
            {/* Dropdown Trigger */}
          </ul>
          {/* Responsive para mobile*/}
          <ul id="nav-mobile" className="sidenav navbar-fixed">
              {mostrarInicio() && <li><a href="/">Inicio</a></li>}
              {mostrarConSus() && <li><a href="/#Pres-banner">Presentación</a></li>}
              {mostrarConSus() && <li><a href="/#Sus-banner">Únete</a></li>}
              {mostrarConocenos() && <li><a href="/know">Conócenos</a></li>}
              {mostrarLogin() && <li><a href="/login"><i className="large material-icons">account_circle</i></a></li>}
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavGenerico;
