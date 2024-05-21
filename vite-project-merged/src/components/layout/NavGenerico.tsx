import { FC } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import LogoAWSNT from '../../assets/circulo-logo_con hoja_blanco_Red.png';

const NavGenerico: FC = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper colorbase">
          <Link to="/" className="brand-logo">
            <img src={LogoAWSNT} alt="Logo" className="responsive-img logo-AWSNT-cabecera" />
          </Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Bienvenida</Link></li>
            <li><a href="/#Pres-banner">Presentación</a></li>
            <li><a href="/#Sus-banner">Únete</a></li>
            <li><Link to="/know">Conócenos</Link></li>
            <li><Link to="/login"><i className="large material-icons">account_circle</i></Link></li>
          </ul>
          {/* Responsive para mobile*/}
          <ul id="nav-mobile" className="sidenav navbar-fixed">
            <li><Link to="/">Bienvenida</Link></li>
            <li><a href="/#Pres-banner">Presentación</a></li>
            <li><a href="/#Sus-banner">Únete</a></li>
            <li><Link to="/know">Conócenos</Link></li>
            <li><Link to="/login"><i className="large material-icons">account_circle</i></Link></li>
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

