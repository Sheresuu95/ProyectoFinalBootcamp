import { FC } from "react";
import '../../App.css';
import LogoAWSNT from '../../assets/circulo-logo_con hoja_blanco_Red.png';

const NavGenerico: FC = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper colorbase">
          <a href="/" className="brand-logo">
            <img src={LogoAWSNT} alt="Logo" className="responsive-img logo-AWSNT-cabecera" />
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">Bienvenida</a></li>
            <li><a href="/#Pres-banner">Presentación</a></li>
            <li><a href="/#Sus-banner">Únete</a></li>
            <li><a href="/know">Conócenos</a></li>
            <li><a href="/login"><i className="large material-icons">account_circle</i></a></li>
          </ul>
          {/* Responsive para mobile*/}
          <ul id="nav-mobile" className="sidenav navbar-fixed">
            <li><a href="/">Bienvenida</a></li>
            <li><a href="/#Pres-banner">Presentación</a></li>
            <li><a href="/#Sus-banner">Únete</a></li>
            <li><a href="/know">Conócenos</a></li>
            <li><a href="/login"><i className="large material-icons">account_circle</i></a></li>
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

