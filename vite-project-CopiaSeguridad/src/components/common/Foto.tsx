import {FC} from 'react'

const Foto: FC = () => {
  return (
    <form action="#">
    <div className="file-field inline">
      <div className="btn cyan darken-2">
        <span>¡Sube tu imagen!</span>
        <input type="file" />
      </div>
      
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" placeholder="Si no eliges una imagen, se te asignará una por defecto"/>
      </div>
    </div>
  </form>
  )
}

export default Foto