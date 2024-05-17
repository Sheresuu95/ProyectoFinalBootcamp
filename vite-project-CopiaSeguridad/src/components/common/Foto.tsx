import {FC} from 'react'

const Foto: FC = () => {
  return (
    <form action="#">
    <div className="file-field inline">
      <div className="btn">
        <span>¡Sube tu imagen!</span>
        <input type="file" />
      </div>
      
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
      <span className="helper-text" data-error="wrong" data-success="right">Si no eliges una imagen, se te asignará una por defecto</span>
    </div>
  </form>
  )
}

export default Foto