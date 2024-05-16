import { FC } from 'react';

interface ImageProps {
    src: string;
    className: string;
    alt: string;
}

const ImageComplement: FC<ImageProps> = ({ src, className, alt }) => {
    return (
        <div className="parallax-container">
            <div className="parallax">
                <img src={src} className={className} alt={alt} />
            </div>
        </div>
    );
};

export default ImageComplement;
