import {FC} from 'react'

interface PanelCardProps {
    colorPanel: string; 
    colorText: string;
    text: string;
  }

const PanelCard: FC<PanelCardProps> = ({ colorPanel, colorText, text}) => {
  return (
    <div className="row">
    <div className="col s10 offset-s1 m12 l12">
      <div className={`div-class card-panel ${colorPanel}`}>
        <span className= {`${colorText}`}>{text}</span>
      </div>
    </div>
  </div>
  )
}

export default PanelCard;