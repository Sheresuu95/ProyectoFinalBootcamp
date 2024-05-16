import { FC } from 'react';
import Albert from '../../assets/fotosConocenos/AlbertColor3.jpeg'
import Daniel from '../../assets/fotosConocenos/DanielRedi.jpeg'
import Eric from '../../assets/fotosConocenos/EricColor.jpeg'
import Shere from '../../assets/fotosConocenos/ShereRedi.jpg'
import Presentacion from '../common/Presentacion'


const Section4: FC = () => {
    return (
        <div className="container">
            <div className="section">
                <h2 className='header center blue-grey-text text-darken-2 letraShadow2'>¡Conoce al equipo!</h2>
                    <div className="container center">
                        <p className="div-class">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere molestias quas pariatur doloremque! Cum accusamus quidem consequatur neque, laboriosam voluptas et saepe optio, dolorem eum alias similique id voluptate?</p>
                    </div>
                <div className="row">
                    <Presentacion 
                    imagePath={Eric} 
                    title="Eric Alcántara Valenzuela" 
                    description="Full Stack Developer" 
                    description2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, excepturi saepe, alias fuga illum, officia accusamus et pariatur quasi numquam nulla inventore reiciendis delectus corrupti dolorem est tempora incidunt voluptatibus."
                    linkedInLink="https://www.linkedin.com/in/ericalcantaravalenzuela/"
                    githubLink="!#"/>
                    <Presentacion
                    imagePath={Albert} 
                    title="Albert Fernández Morata" 
                    description="Full Stack Developer / Backend Expert" 
                    description2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere molestias quas pariatur doloremque! Cum accusamus quidem consequatur neque, laboriosam voluptas et saepe optio, dolorem eum alias similique id voluptate?"
                    linkedInLink="https://www.linkedin.com/in/albert-fern%C3%A1ndez-morata-55803b155/"
                    githubLink="!#"/>
                </div>
                <br />
                <div className="row">
                    <Presentacion 
                    imagePath={Shere} 
                    title="Sheherezade Gomez Roig" 
                    description="Data scientist & Data Engineer" 
                    description2='que taaal'
                    linkedInLink="https://www.linkedin.com/in/sheherezade-gomez-roig/"
                    githubLink="!#"/>
                    <Presentacion 
                    imagePath={Daniel} 
                    title="Daniel Maldonado Uribe" 
                    description="Full Stack Developer" 
                    description2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere molestias quas pariatur doloremque! Cum accusamus quidem consequatur neque, laboriosam voluptas et saepe optio, dolorem eum alias similique id voluptate?"
                    linkedInLink="https://www.linkedin.com/in/sky-nova-a10668302/?originalSubdomain=es"
                    githubLink="!#"/>
                </div>
            </div>
        </div>
    );
};

export default Section4;

