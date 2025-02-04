import React, { createContext, useContext, useState } from 'react';
import { auth, provider, signInWithPopup, signInWithEmailAndPassword } from '../firebase/firebaseService';
import { Link, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { getUserByEmail } from '../modules/Login/service/LoginService';
import { UserContext } from '../modules/Login/context/UserContext';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
  

    const { setUsuario } = useContext(UserContext)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
       
            console.log('Datos enviados:', email);
            try {
                const result = await signInWithEmailAndPassword(auth, email, password.toString());
                const user = result.user;
                console.log("obtenemos usuario", user.email);
                const dataUser = await getUserByEmail(user.email);
                console.log("datos usuario",dataUser)
    
                const dataFormat = {
                    displayName :dataUser[0].username,
                    email:user.email               
                }
    
                setUser(user);
    
                if (dataUser == null || dataUser[0].rol === "cliente") {
                    navigate("/");      
                    dataFormat.rol="cliente"          
                    setUsuario(dataFormat)
                } else {                
                    navigate("/dashboard");
                    dataFormat.rol="admin"    
                    setUsuario(dataFormat)
                }
            } catch (error) {
                enqueueSnackbar("Usuario o contraseña incorrecta");
                console.error("Error al iniciar sesión : ", error.message);
            }
       

    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("usuario", user);
            setUser(user);
            const dataFormat = {
                displayName :user.displayName,
                email:user.email,
                rol:"cliente"
            }
            setUsuario(dataFormat)
            navigate("/");
        } catch (error) {
            console.error("Error al iniciar sesión con Google: ", error);
        }
    };

    return (
        user ? (

            <div>Redirigiendo...</div>
        ) : (
            <div className="max-w-xl mx-auto gap-4 bg-white flex flex-col justify-center p-6 rounded-lg shadow-md mt-20">
                <div>
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Iniciar sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                Correo Electrónico:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                                Contraseña:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            />
                          
                        </div>

                        <div className="mt-6 flex justify-center">
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <p className="mr-2">Crear cuenta</p>
                            <Link to="/crearcuenta">
                                <a className="font-semibold text-sm">aquí</a>
                            </Link>
                        </div>

                    </form>
                </div>

                <button
                    className="flex gap-2 justify-center items-center rounded-md border-slate-600 border-[1px] px-2 mt-2"
                    onClick={signInWithGoogle}
                >
                    <img className="flex w-10" src="/img/logoGoogle.png" alt="Google logo" />
                    <p>Continuar con Google</p>
                </button>
            </div>
        )
    );
};

export default Login;
