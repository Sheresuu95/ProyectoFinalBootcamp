import { FC } from 'react'
import Desplegable from '../common/Desplegable'

const lista1 = [
    {
        icono: 'looks_one',
        titulo: 'Información proporcionada por el usuario',
        contenido: 'Recopilamos la información que proporcionas voluntariamente al registrarte en Econnect, como tu nombre, dirección de correo electrónico, fecha de nacimiento, género, ubicación y otros detalles de perfil.'
    },
    {
        icono: 'looks_two',
        titulo: 'Información de uso',
        contenido: 'Recopilamos información sobre cómo interactúas con nuestra plataforma, incluidos tus patrones de navegación, actividades de inicio de sesión, interacciones con otras cuentas y publicaciones, y cualquier información que compartas en Econnect.'
    },
    {
        icono: 'looks_3',
        titulo: 'Información de dispositivo',
        contenido: 'Recopilamos información sobre el dispositivo que utilizas para acceder a Econnect, como tu dirección IP, tipo de dispositivo, sistema operativo, identificadores únicos del dispositivo y datos de ubicación aproximada.'
    }
];

<Desplegable elementos={lista1} />


const lista4 = [
    {
        icono: 'looks_one',
        titulo: 'Proporcionar y mejorar nuestros servicios: ',
        contenido: 'Utilizamos tu información para proporcionar, mantener, personalizar y mejorar la funcionalidad y el rendimiento de Econnect, así como para desarrollar nuevos productos y servicios.'
    },
    {
        icono: 'looks_two',
        titulo: 'Comunicación contigo',
        contenido: 'Utilizamos tu dirección de correo electrónico para enviarte comunicaciones relacionadas con el servicio, como notificaciones de actividad, actualizaciones de la plataforma y mensajes importantes sobre tu cuenta.'
    },
    {
        icono: 'looks_3',
        titulo: 'Marketing y publicidad',
        contenido: "Podemos utilizar tu información para mostrarte anuncios personalizados, promociones y contenido relevante relacionado con Econnect, tanto en nuestra plataforma como en sitios web de terceros."
    }
];

<Desplegable elementos={lista4} />


const PolPrivacidad: FC = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s10 offset-s1 m8 offset-m2 l10 offset-l1 ">
                    <h3 className="header center blue-grey-text text-darken-2 letraShadow2">Política de Privacidad de <span className='cyan-text text-darken-2'>Eco</span>nnect</h3>
                    {/* Contenido de la política de privacidad */}
                    <p className="blue-grey-text text-lighten-1 div-class">Última actualización: 17 de mayo de 4044</p>
                    <p className="blue-grey-text text-darken-4 div-class">
                        Bienvenido a Econnect, la red social del futuro comprometida con la conciencia medioambiental.
                        En Econnect, nos comprometemos a proteger y respetar tu privacidad.
                        Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información personal que puedas proporcionarnos a través de nuestra plataforma Econnect.
                    </p>
                    <h5 className="header blue-grey-text text-darken-2">Información que recopilamos</h5>
                    <Desplegable elementos={lista1} />
                    <h5 className="header blue-grey-text text-darken-2">Cómo usamos tu información</h5>
                    <Desplegable elementos={lista4} />
                    <h5 className="header blue-grey-text text-darken-2">Cómo protegemos tu información</h5>
                    <p className="blue-grey-text text-darken-4 div-class">
                        Nos comprometemos a proteger la seguridad y confidencialidad de tu información personal.
                        Tomamos medidas técnicas, administrativas y físicas para proteger tus datos contra accesos no autorizados, uso indebido, divulgación, alteración o destrucción.
                    </p>
                    <h5 className="header blue-grey-text text-darken-2">Compartir tu información</h5>
                    <p className="blue-grey-text text-darken-4 div-class">
                        No vendemos ni alquilamos tu información personal a terceros con fines comerciales.
                        Sin embargo, podemos compartir tu información con proveedores de servicios de confianza que nos ayudan a proporcionar y mantener Econnect, así como con autoridades legales en respuesta a solicitudes legales válidas.
                    </p>
                    <h5 className="header blue-grey-text text-darken-2">Tus opciones y derechos</h5>
                    <p className="blue-grey-text text-darken-4 div-class">
                        Tienes ciertos derechos sobre tu información personal, incluido el derecho a acceder, corregir, eliminar o limitar el uso de tu información.
                        También tienes derecho a oponerte al procesamiento de tus datos personales y a solicitar la portabilidad de tus datos.
                    </p>
                    <h5 className="header blue-grey-text text-darken-2">Cambios en nuestra política de privacidad</h5>
                    <p className="blue-grey-text text-darken-4 div-class">
                        Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento.
                        Te notificaremos sobre cambios significativos en la forma en que tratamos tu información personal mediante una notificación en nuestra plataforma o por otros medios.
                    </p>
                    <h5 className="header blue-grey-text text-darken-2">Cómo ponerte en contacto con nosotros</h5>
                    <p className="blue-grey-text text-darken-4 div-class">
                        Si tienes preguntas, comentarios o inquietudes sobre esta Política de Privacidad o nuestras prácticas de privacidad,
                        no dudes en ponerte en contacto con nosotros a través de <span className='cyan-text text-darken-2'>info@Econnect.com.</span>
                    </p>
                    <p className="blue-grey-text text-darken-4 div-class">En nombre de todo nuestro equipo, gracias por tomarte el tiempo de revisar nuestra política de privacidad. ¡Cuidémonos mutuamente y protejamos nuestros datos con responsabilidad!</p>
                    <br />
                    <div className='container left-align'>
                        <span className="left-align light blue-grey-text text-darken-2">Tu equipo de Econnect</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PolPrivacidad