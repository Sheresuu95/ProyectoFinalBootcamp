import { FC } from 'react'
import Reto from '../../assets/Reto.png'
import Retos from '../../assets/Retos2.jpg'
import Recompensa from '../../assets/Recompensa.png'
import Recompensas from '../../assets/Recompensas2.jpg'
import Publicacion from '../../assets/Publicacion.png'
import Publicaciones from '../../assets/publicaciones3.jpg'
import CustomCard from '../common/CustomCard.tsx'
import PanelCard from './PanelCard.tsx'

const Section2: FC = () => {
    return (
        <div id="Pres-banner" className="container">
            <div className="section no-pad-bot">
                <h2 className='header center blue-grey-text text-darken-2'>Bienvenido</h2>
                <div className="container row center">
                    <PanelCard colorPanel="grey lighten-4" colorText="blue-grey-text text-darken-4" text="En EcoConnect, creemos en un mundo más verde y sostenible, y estamos comprometidos a hacerlo realidad. Somos una red social única que combina la pasión por el medio ambiente con la tecnología para crear un impacto positivo en el mundo." />
                    <h4 className='header center blue-grey-text text-darken-2'>Nuestra Misión</h4>
                    <PanelCard colorPanel="grey lighten-4" colorText="blue-grey-text text-darken-4" text="EcoConnect se fundó con un propósito claro: inspirar y empoderar a las personas de todo el mundo para que tomen medidas en pro del medio ambiente. Creemos en la fuerza del cambio colectivo y en el poder de las pequeñas acciones cotidianas." />
                    <h4 className='header center blue-grey-text text-darken-2'>¿Qué nos hace diferentes?</h4>
                    <PanelCard colorPanel="grey lighten-4" colorText="blue-grey-text text-darken-4" text="En EcoConnect, no solo te conectamos con personas que comparten tus valores ambientales, sino que también te ofrecemos una plataforma interactiva para participar en desafíos ecológicos y recibir recompensas éticas. Desde reducir el consumo de plástico hasta plantar árboles, cada acción cuenta y merece ser reconocida." />
                    <h4 className='header center blue-grey-text text-darken-2'>¿Cómo funciona?</h4>
                </div>
                <div className="row">
                    <div className="col s10 offset-s1 m4">
                        <CustomCard imagePath={Retos} title="Retos" />
                        <div className="icon-block">
                            <h2 className="center brown-text">
                                <img src={Reto} className="imagen-iconos-personales" />
                            </h2>
                            <h5 className="center blue-grey-text text-darken-2">¿Qué reto te apetece esta semana?</h5>

                            <p className="light div-class">Ayudar a reforestar un bosque, limpiar nuestras playas, ayudar en protectoras, apoyar y promover la agricultura local y sostenible, etc. Escoge un reto, programa una cita, ayuda al planeta y ¡Llévate tu recompensa! ¿Te unes? 😁</p>
                        </div>
                    </div>

                    <div className="col s10 offset-s1 m4">
                        <CustomCard imagePath={Recompensas} title="Recompensas" />
                        <div className="icon-block">
                            <h2 className="center brown-text">
                                <img src={Recompensa} className="imagen-iconos-personales" />
                            </h2>
                            <h5 className="center blue-grey-text text-darken-2">¡Elige tu recompensa!</h5>
                            <p className="light div-class">¡Sumérgete en un mundo de premios y diversión! Consigue entradas gratuitas para el cine, el teatro o la ópera, organiza emocionantes escapadas a destinos increíbles, accede a suscripciones gratuitas a servicios de streaming, obtén descuentos en restaurantes locales y cafeterías populares, y mucho más. ¡Cumple diferentes retos, acumula puntos y canjéalos por el premio que más te guste! Sin duda, ¡hemos llegado a la mejor parte! ¿No crees? 🎁</p>
                        </div>
                    </div>

                    <div className="col s10 offset-s1 m4">
                        <CustomCard imagePath={Publicaciones} title="Publicaciones" />
                        <div className="icon-block">
                            <h2 className="center brown-text">
                                <img src={Publicacion} className="imagen-iconos-personales" />
                            </h2>
                            <h5 className="center blue-grey-text text-darken-2">Publica y comparte tus experiencias</h5>
                            <p className="light div-class">¡Captura el momento! Tómate una foto, grábalo en vídeo o crea un pequeño gif. Presume de tus logros ante tus amigos, compite con ellos e intenta alcanzar el primer puesto en el ranking. ¡Todo suma puntos!🌟</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section2;