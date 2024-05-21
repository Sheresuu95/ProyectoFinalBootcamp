import { FC, ReactNode } from 'react'

interface BodyProps {
    children: ReactNode; // Para aceptar cualquier contenido adicional que desees agregar al cuerpo
}
const Body: FC<BodyProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
}

export default Body;