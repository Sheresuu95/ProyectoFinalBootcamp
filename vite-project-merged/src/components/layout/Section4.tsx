import { FC } from 'react';
import Albert from '../../assets/fotosConocenos/AlbertColor3.jpeg'
import Daniel from '../../assets/fotosConocenos/DanielRedi.jpeg'
import Eric from '../../assets/fotosConocenos/EricColor.jpeg'
import Shere from '../../assets/fotosConocenos/ShereRedi.jpg'
import Presentacion from '../common/Presentacion';



const Section4: FC = () => {
    const lista = [
        {
            imagePersonal: Eric,
            text: 'Eric es un Full Stack Developer excepcionalmente trabajador, tranquilo y amable. Su capacidad para adaptarse a cualquier desafío lo convierte en un activo invaluable en cualquier equipo de desarrollo. Su enfoque dedicado y su naturaleza colaborativa lo hacen querido por todos sus compañeros.',
            title1: 'Eric Alcántara Valenzuela',
            title2: 'Full Stack Developer',
            linkedInLink: 'https://www.linkedin.com/in/ericalcantaravalenzuela/',
            githubLink: '!#'
        },
        {
            imagePersonal: Albert,
            text: 'Albert, un talentoso full stack developer, encuentra su pasión en el backEnd. Ama profundamente el conocimiento, la filosofía y la ciencia, encontrando inspiración en cada línea de código. Enamorado de Python, despliega su creatividad y destreza técnica para construir soluciones innovadoras y robustas.',
            title1: 'Albert Fernández Morata',
            title2: 'Full Stack Developer / Backend Expert',
            linkedInLink: 'https://www.linkedin.com/in/albert-fern%C3%A1ndez-morata-55803b155/',
            githubLink: '!#'
        },
        {
            imagePersonal: Shere,
            text: 'Shere es una entusiasta de las matemáticas y la programación, apasionada por la lógica del backEnd y el fascinante mundo del machine learning. Su objetivo es adentrarse en el data science y el data engineering. Se destaca por su habilidad para organizar equipos y liderar proyectos, confiando plenamente en su equipo y disfrutando cada paso del progreso.',
            title1: 'Sheherezade Gomez Roig',
            title2: 'Data scientist & Data Engineer',
            linkedInLink: 'https://www.linkedin.com/in/sheherezade-gomez-roig/',
            githubLink: '!#'
        },  
        {   
            imagePersonal: Daniel,
            text: 'Dani, un full stack developer reservado y tímido, encuentra su fortaleza en la tranquilidad y el fundamento al aprender cosas nuevas. Su enfoque seguro y colaborativo lo convierte en un miembro confiable y valioso para cualquier equipo de desarrollo.',
            title1: 'Daniel Maldonado Uribe',
            title2: 'Full Stack Developer',
            linkedInLink: 'https://www.linkedin.com/in/sky-nova-a10668302/?originalSubdomain=es',
            githubLink: '!#'
        },
    ];

    return (
        <div className="container">
            <div className="section">
                <h2 className='header center blue-grey-text text-darken-2 letraShadow2'>¡Conoce al equipo!</h2>
                    <div className="container-fluid center-align">
                        <p className="blue-grey-text text-darken-2">El equipo está conformado por cuatro talentosos desarrolladores full stack, unidos por una idea innovadora: crear una nueva red social que sensibilice a sus usuarios sobre el bienestar del planeta y los motive a llevar a cabo acciones para su cuidado. Juntos, forman un equipo diverso y complementario, capaz de enfrentar cualquier desafío tecnológico con creatividad, determinación y espíritu de camaradería.</p>
                    </div>
                    <br></br>
                <div className="container-fluid center-align">
                   <Presentacion elementos={lista} />
                </div>
            </div>
        </div>
    );
};

export default Section4;

