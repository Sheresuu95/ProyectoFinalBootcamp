import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Logo from '../../assets/circulo-logo_con hoja_ajustado.png';

import GoogleLogo from '../../assets/Logo_Google.png';
import AppleLogo from '../../assets/Logo_Apple.png';
import FacebookLogo from '../../assets/Logo_Face.png';
import Registro from './Registro';

const Login: FC = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user']);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:8080/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usernameOrEmail, password })
            });

            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }

            // Guardar cookie de usuario
            setCookie('user', usernameOrEmail, { path: '/' });

            // Aquí puedes manejar la respuesta de tu API, como redirigir al usuario a otra página
            console.log('Inicio de sesión exitoso');
            navigate('/know'); // Redirigir al usuario a la página "know" después de iniciar sesión
        } catch (error) {
            setError('Error al iniciar sesión. Por favor, revisa tus credenciales e intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="center-align row full-height">
            
            {/* Columna izquierda */}
            <div className="col s10 offset-s1 m5 offset-m1 l5 offset-l1">
                <div>
                    <img src={Logo} alt="Logo ASNET" width="150px" className="image-class-opacity" />
                    <h4 className="cyan-text text-darken-2 letraShadow2">ASNET</h4>
                    <p className="div-class grey-text text-darken-2">Awareness Social Network te conecta con aquellos que son parte de tu vida, al tiempo que promueve la conciencia global y el bienestar del planeta con desafíos ecológicos emocionantes.</p>
                </div>
            </div>
            {/* Columna derecha */}
            <div className="col s10 offset-s1 m5 offset-m1 l4 offset-l1">
                <div className="card-panel grey lighten-5">
                    {/* Formulario de inicio de sesión */}
                    <h5 className='cyan-text text-darken-2'>Iniciar sesión</h5>
                    <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <i className="material-icons prefix">person</i>
                        <input
                                id="UsuarioOEmail"
                                type="text"
                                className="validate"
                                value={usernameOrEmail}
                                onChange={(e) => setUsernameOrEmail(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        <label htmlFor="Contraseña">Contraseña</label>
                    </div>
                    <div className="input-field">
                        <form action="#">
                            <p>
                                <label>
                                    <input type="checkbox" className="filled-in" defaultChecked />
                                    <span>Recordarme</span>
                                </label>
                            </p>
                        </form>
                    </div>
                    <div className="input-field">
                        {/* Texto "o registrate con:" */}
                        <p className="cyan-text text-darken-3">o inicia sesión con:</p>
                    </div>
                    {/* Logos de Google, Apple y Facebook */}
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
                    <div className="input-field">
                        {/* Enlace para "¿Has perdido la contraseña?" */}
                        <a href="#" className="cyan-text text-darken-3">¿Has perdido la contraseña?</a>
                    </div>
                    <div className="input-field">
                        {/* Texto "No tienes cuenta, registrate" */}
                        <p className="grey-text text-darken-2">¿Eres nuevo?</p>
                    </div>
                    <div className="input-field">
                        <a href="#registro" className="waves-effect waves-light btn modal-trigger blue-grey lighten-2">
                            Regístrate aquí
                        </a>
                        <Registro />
                    </div>
                </div>
                
            </div>
                    
        </div>
    )
}

export default Login;


import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Logo from '../../assets/circulo-logo_con hoja_ajustado.png';

import GoogleLogo from '../../assets/Logo_Google.png';
import AppleLogo from '../../assets/Logo_Apple.png';
import FacebookLogo from '../../assets/Logo_Face.png';
import Registro from './Registro';

const Login: FC = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user']);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!usernameOrEmail || !password) {
            console.log('Por favor, completa todos los campos.');
            setError('Por favor, completa todos los campos.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8080/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usernameOrEmail, password })
            }).then((response) => response.json());

            if (!response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.error == 'Invalid credentials') {
                    throw new Error('Usuario/email o contraseña incorrectos.');
                } else {
                    throw new Error('Error al iniciar sesión.');
                }
            }

            // Guardar cookie de usuario
            setCookie('user', usernameOrEmail, { path: '/' });

            // Aquí puedes manejar la respuesta de tu API, como redirigir al usuario a otra página
            console.log('Inicio de sesión exitoso');
            navigate('/know'); // Redirigir al usuario a la página "know" después de iniciar sesión
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="center-align row full-height">
            
            {/* Columna izquierda */}
            <div className="col s10 offset-s1 m5 offset-m1 l5 offset-l1">
                <div>
                    <img src={Logo} alt="Logo ASNET" width="150px" className="image-class-opacity" />
                    <h4 className="cyan-text text-darken-2 letraShadow2">ASNET</h4>
                    <p className="div-class grey-text text-darken-2">Awareness Social Network te conecta con aquellos que son parte de tu vida, al tiempo que promueve la conciencia global y el bienestar del planeta con desafíos ecológicos emocionantes.</p>
                </div>
            </div>
            {/* Columna derecha */}
            <div className="col s10 offset-s1 m5 offset-m1 l4 offset-l1">
                <div className="card-panel grey lighten-5">
                    {/* Formulario de inicio de sesión */}
                    <h5 className='cyan-text text-darken-2'>Iniciar sesión</h5>
                    <form onSubmit={handleSubmit} method='POST' id='login'>
                    <div className="input-field">
                        <i className="material-icons prefix">person</i>
                        <input
                                id="UsuarioOEmail"
                                type="text"
                                className="validate"
                                value={usernameOrEmail}
                                onChange={(e) => setUsernameOrEmail(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
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
                        {/* Texto "o registrate con:" */}
                        <p className="cyan-text text-darken-3">o inicia sesión con:</p>
                    </div>
                    {/* Logos de Google, Apple y Facebook */}
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
                    <div className="input-field">
                        {/* Enlace para "¿Has perdido la contraseña?" */}
                        <a href="#" className="cyan-text text-darken-3">¿Has perdido la contraseña?</a>
                    </div>
                    <div className="input-field">
                        {/* Texto "No tienes cuenta, registrate" */}
                        <p className="grey-text text-darken-2">¿Eres nuevo?</p>
                    </div>
                    <div className="input-field">
                        <a href="#registro" className="waves-effect waves-light btn modal-trigger blue-grey lighten-2">
                            Regístrate aquí
                        </a>
                        <Registro />
                    </div>
                </div>
                
            </div>
                    
        </div>
    )
}

export default Login;