import { FC } from 'react'
import '../../App.css'
import CabeceraTierra from '../../assets/Cabecera-Tierra.jpeg'
import LogoNaranja from '../../assets/Logo_hojas_cyan2.png'



const Section1: FC = () => {
    return (
        <>
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="header center">
                            <h2 className="headercol s12 light white-text letraShadow"><span className='cyan-text'>Eco</span>nnect</h2>
                            <img src={LogoNaranja} alt="Logo" className="imagen-logo-AWSNT" />
                            <h4 className="row center col s12 light white-text letraShadow">Tu presente, Tu futuro, Tu red social</h4> 
                        </div>
                        <br /><br />
                    </div>
                </div>
                <div className="parallax">
                    <img src={CabeceraTierra} className='image-class-opacity' alt="Unsplashed background CabeceraTierra" />
                </div>
            </div>
        </>
    )
}

export default Section1;