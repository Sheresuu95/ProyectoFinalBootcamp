import {FC} from 'react'

interface PresentacionProps {
    imagePersonal: string;
    text: string;
    title1: string;
    title2: string;
  }
const Presentacion2: FC<PresentacionProps> = ({ imagePersonal, text, title1, title2 }) => {
  return (
    <div className="col s12 m8 offset-m2 l6 offset-l3">
    <div className="card-panel grey lighten-5 z-depth-1">
      <div className="row valign-wrapper">
        <div className="col s2">
          <img src={imagePersonal} alt="" className="circle responsive-img" />  {/* notice the "circle" className */}
        </div>
        <div className="col s10">
          <h4 className="black-text">
            {title1}
            </h4>
            <h5 className="black-text">
            {title2}
            </h5>
          <span className="black-text">
            {text}
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Presentacion2