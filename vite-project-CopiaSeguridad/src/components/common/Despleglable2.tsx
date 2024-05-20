import { FC } from 'react';

interface Elemento {
    icono1: string;
    icono2: string;
    titulo: string;
    contenido: string;
}

interface DesplegableProps {
    elementos: Elemento[];
}

const Desplegable2: FC<DesplegableProps> = ({ elementos }) => {
    return (
        <ul className="collapsible">
            {elementos.map((elemento, index) => (
                <li key={index}>
                    <div className="collapsible-header cyan-text text-darken-2"><i className="material-icons">{elemento.icono1}.{elemento.icono2}</i><div className='container-fluid'>&nbsp;&nbsp;&nbsp;{elemento.titulo}</div></div>
                    <div className="collapsible-body blue-grey-text text-darken-4 div-class"><span>{elemento.contenido}</span></div>
                </li>
            ))}
        </ul>
    );
}

export default Desplegable2;