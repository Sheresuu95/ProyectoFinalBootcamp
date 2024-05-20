import { FC, useEffect, useState } from 'react';
import LogoEcoConnect from '../../assets/Logo_hojas_rosa6.png';
import defaultUserPhoto from '../../assets/defaultUserPhoto.png'; // Importa la imagen por defecto
import Foto from '../../assets/FotosPerfilUsuarios/EspiralCyan.jpg';

const Registro: FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        password: '',
        confirmarPassword: '',
        email: '',
        usuario: '',
        fechaNacimiento: '',
        foto: defaultUserPhoto, // Establece la imagen predeterminada
    });
    const [errorPassword, setErrorPassword] = useState('');

    useEffect(() => {
        M.updateTextFields();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validar contraseña
        if (formData.password !== formData.confirmarPassword) {
            setErrorPassword('Las contraseñas no coinciden');
            return;
        }
        // Enviar los datos al backend
        fetch('URL_DEL_BACKEND', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Manejar la respuesta del backend
        })
        .catch(error => console.error('Error:', error));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <div className="container valign-wrapper">
            <div className="container center">
                <div className="col center s10 offset-s1 m5 offset-m1 l4 offset-l1">
                    <div className="card-panel" style={{backgroundImage: `url(${LogoEcoConnect})`, backgroundSize: '350px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: '0.88'}} >
                        <h4 className="cyan-text text-darken-2 letraShadow2">¡Únete a nosotros!</h4>
                        <div className="row">
                            <form className="col s12" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Carmina" id="nombre" type="text" className="validate" required onChange={handleChange} />
                                        <label htmlFor="nombre" className='blue-grey-text text-darken-4'>Nombre</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Lopez Hernández" id="apellidos" type="text" className="validate" required onChange={handleChange} />
                                        <label htmlFor="apellidos" className='blue-grey-text text-darken-4'>Apellidos</label>
                                    </div>
                                </div>
                                {/* Otros campos del formulario */}
                                <div className="input-field col s12">
                                    <input placeholder="password" id="password" type="password" className="validate" required onChange={handleChange} />
                                    <label htmlFor="password" className='blue-grey-text text-darken-4'>Contraseña</label>
                                </div>
                                <div className="input-field col s12">
                                    <input placeholder="Repite tu contraseña" id="confirmarPassword" type="password" className="validate" required onChange={handleChange} />
                                    <label htmlFor="confirmarPassword" className='blue-grey-text text-darken-4'>Confirmación contraseña</label>
                                    <span className="red-text">{errorPassword}</span>
                                </div>
                                {/* Otros campos del formulario */}
                                <div className="input-field">
                                    <button type="submit" className="waves-effect waves-light btn-large cyan darken-2" style={{ width: '100%' }}>
                                        Regístrate
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registro;
