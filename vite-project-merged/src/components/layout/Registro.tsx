import { FC, useEffect, useState } from 'react';
import LogoEcoConnect from '../../assets/Logo_hojas_rosa6.png';
import Foto from '../common/Foto';

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

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        password1: '',
        password2: '',
        email: '',
        username: '',
        birthdate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues({
            ...formValues,
            [id]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const user = formValues
        console.log(user);
        
        try {
            fetch('http://localhost:8080/users/register', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container valign-wrapper">
            <div className="container center">
                <div className="col center s10 offset-s1 m5 offset-m1 l4 offset-l1">
                    <div className="card-panel" style={{ backgroundImage: `url(${LogoEcoConnect})`, backgroundSize: '350px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: '0.88' }}>
                        <h4 className="cyan-text text-darken-2 letraShadow2">¡Únete a nosotros!</h4>
                        <div className="row">
                            <form className="col s12" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Carmina" id="firstName" type="text" className="validate" value={formValues.firstName} onChange={handleChange} required />
                                        <label htmlFor="firstName" className='blue-grey-text text-darken-4'>Nombre</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Lopez Hernández" id="lastName" type="text" className="validate" value={formValues.lastName} onChange={handleChange} required />
                                        <label htmlFor="lastName" className='blue-grey-text text-darken-4'>Apellidos</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="Debe tener un mínimo de 8 caracteres" id="password1" type="password" className="validate" value={formValues.password1} onChange={handleChange} required />
                                        <label htmlFor="password1" className='blue-grey-text text-darken-4'>Contraseña</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="Repite tu contraseña" id="password2" type="password" className="validate" value={formValues.password2} onChange={handleChange} required />
                                        <label htmlFor="password2" className='blue-grey-text text-darken-4'>Confirmación contraseña</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="email_user@gmail.com (o el dominio que tengas)" id="email" type="email" className="validate" value={formValues.email} onChange={handleChange} required />
                                        <label htmlFor="email" className='blue-grey-text text-darken-4'>Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Especifica uno u se te asignará por defecto" id="username" type="text" className="validate" value={formValues.username} onChange={handleChange} />
                                        <label htmlFor="username" className='blue-grey-text text-darken-4'>Usuario</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <label htmlFor="birthdate" className='blue-grey-text text-darken-4'>Fecha de nacimiento</label>
                                        <input placeholder="DD/MM/AAAA" id="birthdate" type="text" className="datepicker" value={formValues.birthdate} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <Foto />
                                </div>
                                <div className="input-field">
                                    <p>
                                        <label>
                                            <input type="checkbox" className="filled-in" defaultChecked />
                                            <span className='div-class'>Al hacer clic en Registrarte, aceptas nuestras <a href="/condicions" className="cyan-text text-darken-4">Condiciones de uso</a>. Obtén más información sobre cómo recogemos, usamos y compartimos tu información en la <a href="/privacity" className="cyan-text text-darken-4"> Política de privacidad</a>.</span>
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
