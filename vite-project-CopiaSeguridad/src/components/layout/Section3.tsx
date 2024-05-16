import { FC } from 'react'
import Conexiones from '../../assets/Conexiones2.png'
import PanelCard from './PanelCard';
import ButtonSubs from '../common/ButtonSubs';

const Section3: FC = () => {
    return (
            <div id="Sus-banner" className="parallax-container valign-wrapper">
                <div className="row center">
                    <div className="container valign-wrapper">
                        <div className='row center'>
                        <h3 className="header center div-class cyan-text text-darken-2 letraShadow2">Únete a Nosotros</h3>
                        <PanelCard colorPanel="grey lighten-4" colorText="blue-grey-text text-darken-4" text="Haz de cada acción un impacto positivo en el mundo. Crea nuevos vínculos, cultiva los presentes y recupera algunos olvidados. Juntos, podemos crear un futuro más verde y brillante. Únete a EcoConnect hoy mismo y comienza tu viaje hacia un mundo mejor. ¡Hagamos que cada acción cuente!"/>
                        </div>
                    </div>
                    <div className="container center">
                        <ButtonSubs />
                    </div>
                </div>
                <div className="parallax">
                    <img src={Conexiones} className='image-class-opacity2' alt="Unsplashed background img 2" />          
                </div>
            </div>
    )
}

export default Section3;