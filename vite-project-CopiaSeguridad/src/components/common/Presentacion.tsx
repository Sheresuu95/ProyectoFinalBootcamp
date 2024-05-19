import { FC } from 'react';
import Linkdn from '../../assets/linkdn_logo_sin_fondo.png'
import GitHub from '../../assets/github_sin_fondo.png'
import fondoPanel from '../../assets/Fotos de Fondo/PinzadasBlancas2.jpg'

interface PresentacionProps {
  elementos: {
    imagePersonal: string;
    text: string;
    title1: string;
    title2: string;
    linkedInLink: string;
    githubLink: string;
  }[];
}

const Presentacion2: FC<PresentacionProps> = ({ elementos }) => {
  return (
    <>
      {elementos.map((elemento, index) => (
        <div key={index} className="col s10 offset-s1 m8 offset-m2 l10 offset-l1">
          <div className="card-panel grey lighten-5 z-depth-1"  style={{backgroundImage: `url(${fondoPanel})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="row valign-wrapper">
              {index % 2 === 0 ? (
                <>
                  <div className="col s6 m6 l6">
                    <img src={elemento.imagePersonal} alt="" className="circle responsive-img z-depth-3" style={{ width: '200px' }} />
                    {/* notice the "circle" className */}
                  </div>
                  <div className="col s10">
                    <h4 className="center blue-grey-text text-darken-1">
                      {elemento.title1}
                    </h4>
                    <h5 className="center cyan-text text-darken-2">
                      {elemento.title2}
                    </h5>
                    <div className="div-class blue-grey-text text-darken-2">
                      {elemento.text}
                    </div>
                  </div>
                  <div className="row center col s3 m3 l3">
                        <a href={elemento.linkedInLink} className="brown-text"><img src={Linkdn} width="25px" alt="Logo Linkdn" /></a>
                        <a href={elemento.githubLink} className="brown-text"><img src={GitHub} width="28px" alt="Logo Linkdn" /></a>
                  </div>
                </>

              ) : (
                <>
                  <div className="row center col s3 m3 l3">
                        <a href={elemento.linkedInLink} className="brown-text"><img src={Linkdn} width="25px" alt="Logo Linkdn" /></a>
                        <a href={elemento.githubLink} className="brown-text"><img src={GitHub} width="28px" alt="Logo Linkdn" /></a>
                  </div>
                  <div className="col s10">
                    <h4 className="center blue-grey-text text-darken-1">
                      {elemento.title1}
                    </h4>
                    <h5 className="center cyan-text text-darken-2">
                      {elemento.title2}
                    </h5>
                    <div className="div-class blue-grey-text text-darken-2">
                      {elemento.text}
                    </div>
                  </div>
                  <div className="col s6 m6 l6">
                    <img src={elemento.imagePersonal} alt="Image" className="circle responsive-img z-depth-3" style={{ width: '200px' }} />
                    {/* notice the "circle" className */}
                  </div>
                  
                </>

              )}
              
            </div>
          </div>
          <br></br>
        </div>
      ))}
    </>
  );
}

export default Presentacion2;
