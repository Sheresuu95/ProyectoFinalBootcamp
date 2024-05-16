import { FC } from 'react';
import Section4 from '../../components/layout/Section4';
import Imagen1 from '../../assets/Fotos de Fondo/RayasDobles3.jpg';

const KnowView: FC = () => {

    return (
        <div style={{backgroundImage: `url(${Imagen1})`, backgroundSize: 'contain'}}>
                <Section4 />
        </div>
    );
}

export default KnowView;


