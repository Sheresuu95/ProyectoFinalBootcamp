import { FC } from 'react'
import '../../App.css'
import LogoAWSNT from '../../assets/circulo-logo_con hoja_blanco_Red.png'

const NavLogin: FC = () => {
    return (
        <>
           <nav>
                <div className="nav-wrapper colorbase fixed">
                    <a href="#!" className="brand-logo">
                        <img src={LogoAWSNT} alt="Logo" className="logo-AWSNT-cabecera" />
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <div className="chip">
                            <img src="../../fotosConocenos/AlbertColor3.jpg" alt="Contact Person" />
                            Jane Doe
                        </div>
                        <li><a href="/feed">Inicio</a></li>
                        <li><a href="/perfil">Perfil</a></li>
                        <li><a href="/ranking">Ranking</a></li>
                    </ul>
                    {/* Responsive para mobile*/}
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
            </nav></>
    )
}

export default NavLogin;