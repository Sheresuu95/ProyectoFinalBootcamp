import {FC} from 'react'
import Registro from '../../components/layout/Registro'
import Explosion from '../../assets/Fotos de Fondo/No usar.jpg'

const RegisterView: FC = () => {
  return (
    <body className="image-class-opacity2" style={{backgroundImage: `url(${Explosion})`, backgroundSize: 'cover'}}>
        <br />
        <Registro />
        <br />
    </body>
    
  )
}

export default RegisterView