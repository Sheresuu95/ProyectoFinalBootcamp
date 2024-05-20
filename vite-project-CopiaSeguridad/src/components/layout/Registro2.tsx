import { FC, useEffect } from 'react';
import LogoEcoConnect from '../../assets/Logo_hojas_rosa6.png'
import Foto from '../common/Foto';

const Registro: FC = () => {
    useEffect(() => {
        M.updateTextFields();
    }, []);

    useEffect(() => {
        // Inicializa el datepicker
        const elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems, {
            format: 'dd/mm/yyyy', // Formato de la fecha
            yearRange: [1950, 2024],
        });
    }, []);

    return(
        <div className="container valign-wrapper">
            <div className="container center">
                <div className="col center s10 offset-s1 m5 offset-m1 l4 offset-l1">
                    <div className="card-panel" style={{backgroundImage: `url(${LogoEcoConnect})`, backgroundSize: '350px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: '0.88'}} >
                        <h4 className="cyan-text text-darken-2 letraShadow2">¡Únete a nosotros!</h4>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Carmina" id="first_name" type="text" className="validate"  required/>
                                        <label htmlFor="first_name" className='blue-grey-text text-darken-4'>Nombre</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input placeholder="Lopez Hernández" id="last_name" type="text" className="validate" required/>
                                        <label htmlFor="last_name" className='blue-grey-text text-darken-4'>Apellidos</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="Debe tener un mínimo de 8 caracteres" id="password1" type="password" className="validate"  required/>
                                        <label htmlFor="password" className='blue-grey-text text-darken-4'>Contraseña</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="Repite tu contraseña" id="password2" type="password" className="validate"  required/>
                                        <label htmlFor="password" className='blue-grey-text text-darken-4'>Confirmación contraseña</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12" >
                                        <input placeholder="email_user@gmail.com (o el dominio que tengas)" id="email" type="email" className="validate" required/>
                                        <label htmlFor="email" className='blue-grey-text text-darken-4'>Email</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s6" >
                                        <input placeholder="Especifica uno u se te asignará por defecto" id="uername" type="text" className="validate"/>
                                        <label htmlFor="email" className='blue-grey-text text-darken-4'>Usuario</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <label htmlFor="birthdate" className='blue-grey-text text-darken-4'>Fecha de nacimiento</label>
                                        <input placeholder="DD/MM/AAAA" id="birthdate" type="text" className="datepicker"/>
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
}

export default Registro;
