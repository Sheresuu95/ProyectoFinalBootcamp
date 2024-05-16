import { FC, useState } from 'react';
import Linkdn from '../../assets/linkdn_logo_sin_fondo.png'
import GitHub from '../../assets/github_sin_fondo.png'

interface PresentacionProps {
    imagePath: string;
    title: string;
    description: string;
    description2: string;
    linkedInLink: string;
    githubLink: string;
}

const Presentacion: FC<PresentacionProps> = ({ imagePath, title, description, description2, linkedInLink, githubLink }) => {
    const [expanded, setExpanded] = useState(false); // Estado para controlar si el desplegable está abierto o cerrado

    const toggleExpand = () => {
        setExpanded(!expanded); // Cambiar el estado de expanded al contrario de su valor actual
    };

    return (
        <div className="col s10 offset-s1 m6 l6">
            <div className="icon-block">
                <h2 className="center brown-text">
                    <img className="circle z-depth-1" width="145px" src={imagePath} alt={title} />
                </h2>
                <div className="icon-block">
                <div className= "row"> 
                    <div className="row center col s3 m3 l3">
                        <a href={linkedInLink} className="brown-text"><img src={Linkdn} width="25px" alt="Logo Linkdn" /></a>
                        <a href={githubLink} className="brown-text"><img src={GitHub} width="28px" alt="Logo Linkdn" /></a>
                    </div>
                    <div className="center-align">
                        <h5 className="center blue-grey-text text-darken-1 letraShadow2">{title}</h5>
                        <p className="center cyan-text text-darken-2">{description}</p>
                    </div>
                    <div className="row right btn-block">
                        {/* Agrega un evento onClick para activar el desplegable */}
                        <a className="btn-floating btn waves-effect waves-light cyan darken-2" onClick={toggleExpand}>
                            <i className="material-icons">{expanded ? 'expand_less' : 'expand_more'}</i>
                        </a>
                    </div>
                    
                    {/* Oculta o muestra la descripción2 según el estado de expanded */}
                    {expanded && (
                        <div className="card-panel grey lighten-5">
                            <p className="div-class blue-grey-text text-darken-2">{description2}</p>
                        </div>
                            
                    )}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Presentacion;
