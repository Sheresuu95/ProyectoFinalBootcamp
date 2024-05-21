import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import LogoEcoConnect from '../../assets/Logo_hojas_rosa6.png';
import Foto from '../common/Foto';

interface FormData {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    username: string;
}

const Registro: FC = () => {
    useEffect(() => {
        M.updateTextFields();
    }, []);

    useEffect(() => {
        const elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems, {
            format: 'dd/mm/yyyy',
            yearRange: [1950, 2024],
        });
    }, []);

    const [formValues, setFormValues] = useState<FormData>({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        username: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues({
            ...formValues,
            [id]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { password, ...userData } = formValues;


        try {
            // Realizar la solicitud POST al endpoint '/users/register' con los datos del usuario
            const response = await axios.post('/users/register', userData);
            
            // Si la solicitud es exitosa, puedes hacer algo con la respuesta
            if (response.status === 200) {
                const data = await response.data;
                // Redirige al usuario a la página de perfil con la ID de usuario obtenida de la respuesta
                window.location.href = `/profile/${data.userId}`;
            } else {
                // Si la solicitud no es exitosa, maneja el error (por ejemplo, mostrando un mensaje de error)
                M.toast({ html: 'Error al logearnos', classes: 'rounded deep-orange lighten-1' });
            }
        } catch (error) {
            // Si hay algún error en la solicitud, se captura aquí
            console.error('Error:', error);
            // Puedes manejar errores aquí, como mostrar un mensaje de error al usuario
        }
        
    };

    return (
        <div className="container valign-wrapper">
            <div className="container center">
                <div className="col center s10 offset-s1 m5 offset-m1 l4 offset-l1">
                    <div
                        className="card-panel"
                        style={{
                            backgroundImage: `url(${LogoEcoConnect})`,
                            backgroundSize: '350px',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            opacity: '0.88',
                        }}
                    >
                        <h4 className="cyan-text text-darken-2 letraShadow2">¡Únete a nosotros!</h4>
                        <div className="row">
                            <form className="col s12" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input
                                            placeholder="Carmina"
                                            id="firstName"
                                            type="text"
                                            className="validate"
                                            value={formValues.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="firstName" className="blue-grey-text text-darken-4">
                                            Nombre
                                        </label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            placeholder="Lopez Hernández"
                                            id="lastName"
                                            type="text"
                                            className="validate"
                                            value={formValues.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="lastName" className="blue-grey-text text-darken-4">
                                            Apellidos
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            placeholder="Debe tener un mínimo de 8 caracteres"
                                            id="password"
                                            type="password"
                                            className="validate"
                                            value={formValues.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="password" className="blue-grey-text text-darken-4">
                                            Contraseña
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            placeholder="Repite tu contraseña"
                                            id="passwordConfirm"
                                            type="password"
                                            className="validate"
                                            required
                                        />
                                        <label htmlFor="passwordConfirm" className="blue-grey-text text-darken-4">
                                            Confirmación contraseña
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            placeholder="email_user@gmail.com (o el dominio que tengas)"
                                            id="email"
                                            type="email"
                                            className="validate"
                                            value={formValues.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="email" className="blue-grey-text text-darken-4">
                                            Email
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input
                                            placeholder="Especifica uno u se te asignará por defecto"
                                            id="username"
                                            type="text"
                                            className="validate"
                                            value={formValues.username}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="username" className="blue-grey-text text-darken-4">
                                            Usuario
                                        </label>
                                    </div>
                                    <div className="input-field col s6">
                                        <label htmlFor="birthdate" className="blue-grey-text text-darken-4">
                                            Fecha de nacimiento
                                        </label>
                                        <input
                                            placeholder="DD/MM/AAAA"
                                            id="birthdate"
                                            type="text"
                                            className="datepicker"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <Foto />
                                </div>
                                <div className="input-field">
                                    <p>
                                        <label>
                                            <input type="checkbox" className="filled-in" defaultChecked />
                                            <span className="div-class">
                                                Al hacer clic en Registrarte, aceptas nuestras{' '}
                                                <a href="/condicions" className="cyan-text text-darken-4">
                                                    Condiciones de uso
                                                </a>
                                                . Obtén más información sobre cómo recogemos, usamos y compartimos tu información en la{' '}
                                                <a href="/privacity" className="cyan-text text-darken-4">
                                                    {' '}
                                                    Política de privacidad
                                                </a>
                                                .
                                            </span>
                                        </label>
                                    </p>
                                </div>
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

