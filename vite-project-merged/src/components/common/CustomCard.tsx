import {FC} from 'react'

interface CustomCardProps {
  imagePath: string;
  title: string;
}
const CustomCard: FC<CustomCardProps> = ({imagePath, title}) => {
  return (
    <div className="card hoverable">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="image-class-opacity" src={imagePath} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title center blue-grey-text text-darken-2">{title}</span>
      </div>
    </div>
  );
}

export default CustomCard;