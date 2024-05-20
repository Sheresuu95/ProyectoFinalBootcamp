import { FC, useState, ChangeEvent, FormEvent } from 'react'; // { useState, ChangeEvent, FormEvent } from 'react';
import Logo from '../../assets/circulo-logo_con hoja_ajustado.png';
import GoogleLogo from '../../assets/Logo_Google.png';
import AppleLogo from '../../assets/Logo_Apple.png';
import FacebookLogo from '../../assets/Logo_Face.png';
import fondo from '../../assets/Fotos de Fondo/Nueves.jpg';


const Login: FC = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!usernameOrEmail || !password) {
            //alertMessage = 'Por favor, completa todos los campos.';
            M.toast({ html: 'Por favor, completa todos los campos.', classes: 'rounded deep-orange lighten-1' });
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('http://localhost:8080/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usernameOrEmail, password })
            });

            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                console.log(data);
                window.location.href = '/know';
            } else {
                //alertMessage = 'Credenciales inválidas.'
                M.toast({ html: 'Credenciales inválidas.', classes: 'rounded deep-orange lighten-1' });
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            //alertMessage = 'Ocurrió un error al intentar iniciar sesión.'
            M.toast({ html: 'Ocurrió un error al intentar iniciar sesión.', classes: 'rounded deep-orange lighten-1' });
        } finally {
            setLoading(false);
        }
    };

    const handleUsernameOrEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsernameOrEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div id="index-banner" className="image-class-opacity2" style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <div className="center-align row full-height valign-wrapper">
                <div className="col s10 offset-s1 m5 offset-m1 l5 offset-l1">
                    <div>
                        <img src={Logo} alt="Logo ASNET" width="150px" className="image-class-opacity" />
                        <h4 className="blue-grey-text text-darken-2 letraShadow2"><span className="cyan-text text-darken-2 letraShadow2">Eco</span>nnect</h4>
                        <p className="div-class grey-text text-darken-2">Econnect te conecta con aquellos que son parte de tu vida, al tiempo que promueve la conciencia global y el bienestar del planeta con desafíos ecológicos emocionantes.</p>
                    </div>
                </div>
                <div className="col s10 offset-s1 m5 offset-m1 l4 offset-l1">
                    <br />
                    <div className="card-panel" style={{ opacity: '0.82' }}>
                        <h5 className='cyan-text text-darken-2 letraShadow2'>Iniciar sesión</h5>
                        <form onSubmit={handleSubmit} method='POST' id='login'>
                            <div className="input-field">
                                <i className="material-icons prefix">person</i>
                                <input
                                    id="UsuarioOEmail"
                                    type="text"
                                    className="validate"
                                    value={usernameOrEmail}
                                    onChange={handleUsernameOrEmailChange}
                                />
                                <label htmlFor="UsuarioOEmail">Usuario o correo</label>
                            </div>
                            <div className="input-field">
                                <i className="material-icons prefix">vpn_key</i>
                                <input
                                    id="Contraseña"
                                    type="password"
                                    className="validate"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <label htmlFor="Contraseña">Contraseña</label>
                            </div>
                            <div className="input-field">
                                <p>
                                    <label>
                                        <input type="checkbox" className="filled-in" defaultChecked />
                                        <span>Recordarme</span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field">
                                <p className="cyan-text text-darken-3">o inicia sesión con:</p>
                            </div>
                            <div className="input-field">
                                <a href="https://www.google.com/?hl=es"><img src={GoogleLogo} alt="Google" className="Logo Google" width="32px" /></a>
                                <a href="https://www.apple.com/es/"><img src={AppleLogo} alt="Apple" className="Logo Apple" width="40px" /></a>
                                <a href="https://www.facebook.com/?locale=es_ES"><img src={FacebookLogo} alt="Facebook" className="Logo Facebook" width="30px" /></a>
                            </div>
                            <div className="input-field">
                                <button type="submit" className="waves-effect waves-light btn-large cyan darken-2" style={{ width: '100%' }} disabled={loading}>
                                    {loading ? 'Iniciando sesión...' : 'Entrar'}
                                </button>
                            </div>
                        </form>

                        <a href="/register" className="cyan-text text-darken-3">¿Has perdido la contraseña?</a>
                        <div className="input-field">
                            <p className="grey-text text-darken-2">¿Eres nuevo?</p>
                        </div>

                        <div className="input-field">
                            <a href="/register" className="waves-effect waves-light btn blue-grey lighten-2">
                                Regístrate aquí
                            </a>
                            {/* Aquí deberías tener un componente de registro */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login