import { FC, useEffect } from 'react';
import LogoEcoConnect from '../../assets/Logo_hojas_rosa6.png'

const Registro: FC = () => {
    useEffect(() => {
        M.updateTextFields();
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
                                    <div className="col s12 blue-grey-text text-darken-4">
                                        ¡No te olvides de tu usuario!
                                        <div className="input-field inline">
                                            <input id="email_inline" type="email" className="validate" />
                                            <label htmlFor="email_inline">User1995</label>
                                            <span className="helper-text" data-error="wrong" data-success="right">Si no especifícas un usuario, se te asignará uno automáticamente</span>
                                        </div>
                                    </div>
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
