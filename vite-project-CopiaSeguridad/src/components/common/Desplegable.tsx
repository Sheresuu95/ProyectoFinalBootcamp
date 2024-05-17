import { FC } from 'react';

interface Elemento {
    icono: string;
    titulo: string;
    contenido: string;
}

interface DesplegableProps {
    elementos: Elemento[];
}

const Desplegable: FC<DesplegableProps> = ({ elementos }) => {
    return (
        <ul className="collapsible">
            {elementos.map((elemento, index) => (
                <li key={index}>
                    <div className="collapsible-header cyan-text text-darken-2"><i className="material-icons">{elemento.icono}</i>{elemento.titulo}</div>
                    <div className="collapsible-body blue-grey-text text-darken-2 div-class"><span>{elemento.contenido}</span></div>
                </li>
            ))}
        </ul>
    );
}

export default Desplegable;
