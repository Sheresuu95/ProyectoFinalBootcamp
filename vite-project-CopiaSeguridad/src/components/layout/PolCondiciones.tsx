import { FC } from 'react'
import Desplegable2 from '../common/Despleglable2';
import Num7 from '../../assets/Num7-cyan.png';
import Desplegable3 from '../common/Despleglabe3';

const lista1 = [
    {
        icono1: 'looks_one',
        icono2: 'looks_one',
        titulo: 'Registro',
        contenido: 'Para acceder a ciertas funciones de nuestra plataforma, es posible que deba registrarse y crear una cuenta. Al registrarse, acepta proporcionar información precisa y completa sobre usted.'
    },
    {
        icono1: 'looks_one',
        icono2: 'looks_two',
        titulo: 'Cuentas de Usuario',
        contenido: 'Usted es responsable de mantener la confidencialidad de su cuenta y contraseña. Cualquier actividad realizada desde su cuenta será su responsabilidad. Notifíquenos inmediatamente si sospecha un acceso no autorizado a su cuenta.'
    },
    {
        icono1: 'looks_one',
        icono2: 'looks_3',
        titulo: 'Uso Aceptable',
        contenido: 'No utilice nuestra plataforma de manera que viole cualquier ley aplicable o infrinja los derechos de terceros.'
    }
];

<Desplegable2 elementos={lista1} />


const lista2 = [
    {
        icono1: 'looks_two',
        icono2: 'looks_one',
        titulo: 'Recopilación de Información',
        contenido: 'Podemos recopilar cierta información sobre usted y su uso de nuestra plataforma de acuerdo con nuestra Política de Privacidad. Al utilizar nuestra plataforma, usted acepta nuestra recopilación y uso de su información de acuerdo con nuestra Política de Privacidad.'
    },
    {
        icono1: 'looks_two',
        icono2: 'looks_two',
        titulo: 'Comunicaciones',
        contenido: 'Al registrarse en nuestra plataforma, acepta recibir comunicaciones de nuestra parte, que pueden incluir correos electrónicos promocionales y actualizaciones de la plataforma. Puede optar por no recibir estas comunicaciones en cualquier momento.'
    }
];

<Desplegable2 elementos={lista2} />

const lista3 = [
    {
        icono1: 'looks_3',
        icono2: 'looks_one',
        titulo: 'Responsabilidad',
        contenido: 'Usted es el único responsable de todo el contenido que publique o comparta en nuestra plataforma ("contenido del usuario"). Asegúrese de que su contenido del usuario cumpla con nuestras políticas y no infrinja los derechos de propiedad intelectual de terceros.'
    },
    {
        icono1: 'looks_3',
        icono2: 'looks_two',
        titulo: 'Licencia',
        contenido: ' Al publicar contenido en nuestra plataforma, nos otorga una licencia mundial, no exclusiva, transferible, libre de regalías y sublicenciable para usar, reproducir, modificar, adaptar, distribuir y mostrar su contenido del usuario en relación con la operación de nuestra plataforma.'
    }
];

<Desplegable2 elementos={lista3} />


const lista4 = [
    {
        icono1: 'looks_4',
        icono2: 'looks_one',
        titulo: 'Derechos de Autor',
        contenido: 'Todos los derechos de propiedad intelectual relacionados con nuestra plataforma y su contenido son propiedad de Econnect o sus licenciantes. No se le otorga ningún derecho de propiedad intelectual sobre nuestra plataforma, excepto según lo expresamente otorgado en estos términos y condiciones.'
    }
];

<Desplegable2 elementos={lista4} />

const lista5 = [
    {
        icono1: 'looks_5',
        icono2: 'looks_one',
        titulo: 'Exención de Responsabilidad',
        contenido: 'En la medida máxima permitida por la ley aplicable, renunciamos a todas las garantías, expresas o implícitas, en relación con nuestra plataforma y su uso. No seremos responsables ante usted o cualquier tercero por daños indirectos, incidentales, especiales o consecuentes.'
    }
];

<Desplegable2 elementos={lista5} />

const lista6 = [
    {
        icono1: 'looks_6',
        icono2: 'looks_one',
        titulo: 'Modificaciones',
        contenido: 'Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestra plataforma. Es su responsabilidad revisar periódicamente estos términos y condiciones para estar al tanto de las modificaciones.'
    }
];

<Desplegable2 elementos={lista6} />

const lista7 = [
    {
        icono1: Num7,
        icono2: 'looks_one',
        titulo: 'Ley Aplicable',
        contenido: 'Usted es el único responsable de todo el contenido que publique o comparta en nuestra plataforma ("contenido del usuario"). Asegúrese de que su contenido del usuario cumpla con nuestras políticas y no infrinja los derechos de propiedad intelectual de terceros.'
    },
    {
        icono1: Num7,
        icono2: 'looks_two',
        titulo: 'Jurisdicción',
        contenido: ' Al publicar contenido en nuestra plataforma, nos otorga una licencia mundial, no exclusiva, transferible, libre de regalías y sublicenciable para usar, reproducir, modificar, adaptar, distribuir y mostrar su contenido del usuario en relación con la operación de nuestra plataforma.'
    }
];

<Desplegable3 elementos={lista7} />

const PolCondiciones: FC = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s10 offset-s1 m8 offset-m2 l10 offset-l1 ">
                    <h3 className="header center blue-grey-text text-darken-2 letraShadow2">Política de Condiciones Generales de <span className='cyan-text text-darken-2'>Eco</span>nnect</h3>
                    {/* Contenido de la política de privacidad */}
                    <p className="blue-grey-text text-lighten-1 div-class">Última actualización: 17 de mayo de 2024</p>
                    <p className="blue-grey-text text-darken-4 div-class">
                        Bienvenido a Econnect, antes de utilizar nuestra plataforma, lea detenidamente los siguientes términos y condiciones. 
                        Al utilizar nuestra plataforma, acepta cumplir con estos términos y condiciones.
                        Si no está de acuerdo con alguno de estos términos, no utilice nuestra plataforma.
                    </p>    
                    <h5 className="header blue-grey-text text-darken-2">1. Uso de la Plataforma </h5>
                    <Desplegable2 elementos={lista1} />
                    <h5 className="header blue-grey-text text-darken-2">2. Contenido del Usuario</h5>
                    <Desplegable2 elementos={lista2} />
                    <h5 className="header blue-grey-text text-darken-2">3. Privacidad</h5>
                    <Desplegable2 elementos={lista3} />
                    <h5 className="header blue-grey-text text-darken-2">4. Propiedad Intelectual</h5>
                    <Desplegable2 elementos={lista4} />
                    <h5 className="header blue-grey-text text-darken-2">5. Limitación de Responsabilidad</h5>
                    <Desplegable2 elementos={lista5} />
                    <h5 className="header blue-grey-text text-darken-2">6. Modificaciones de los Términos y Condiciones</h5>
                    <Desplegable2 elementos={lista6} />
                    <h5 className="header blue-grey-text text-darken-2">7. Ley Aplicable y Jurisdicción</h5>
                    <Desplegable3 elementos={lista7} />
                    <p className="blue-grey-text text-darken-4 div-class">En nombre de todo nuestro equipo, gracias por tomarte el tiempo de revisar nuestras condiciones de uso.</p>
                    <br />
                    <div className='container left-align'>
                        <span className="left-align light blue-grey-text text-darken-2">Tu equipo de Econnect</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PolCondiciones;