import { FC } from 'react';


interface Elemento {
    icono1: string; // Cambiado a tipo string
    icono2: string;
    titulo: string;
    contenido: string;
}

interface DesplegableProps {
    elementos: Elemento[];
}

const Desplegable3: FC<DesplegableProps> = ({ elementos }) => {
    return (
        <ul className="collapsible">
            {elementos.map((elemento, index) => (
                <li key={index}>
                    <div className="collapsible-header cyan-text text-darken-2">
                        <span className='row-fluid valign-wrapper'><img src={elemento.icono1} alt="Icono" style={{ width: '18px', height: '18px' }}/>&nbsp;</span>{/* Utilizando elemento.icono1 como src */}
                        <i className="material-icons">.{elemento.icono2}</i>
                        <div className='container-fluid'>&nbsp;&nbsp;&nbsp;{elemento.titulo}</div>
                    </div>
                    <div className="collapsible-body blue-grey-text text-darken-4 div-class"><span>{elemento.contenido}</span></div>
                </li>
            ))}
        </ul>
    );
}

export default Desplegable3;
