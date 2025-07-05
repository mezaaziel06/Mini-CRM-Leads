import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

interface LoginFormProps {
    onLogin: (email: string, password: string) => Promise<boolean>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Por favor completa todos los campos');
            return;
        }

        setIsLoading(true);

        try {
            const success = await onLogin(email, password);

            if (!success) {
                Swal.fire({
                    title: 'Acceso denegado',
                    text: 'Correo o contraseña incorrectos',
                    icon: 'error',
                    confirmButtonColor: '#d33',
                });
            }
        } catch (err) {
            Swal.fire({
                title: 'Error de servidor',
                text: 'Hubo un problema al iniciar sesión. Intenta más tarde.',
                icon: 'error',
                confirmButtonColor: '#d33',
            });
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
            >
                <h2 className="text-xl font-bold mb-4 text-center">Iniciar Sesión</h2>

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Correo electrónico</label>
                    <input
                        type="email"
                        className="w-full border px-3 py-2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Contraseña</label>
                    <input
                        type="password"
                        className="w-full border px-3 py-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full py-2 rounded text-white font-medium ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                        } transition`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Ingresando...' : 'Ingresar'}
                </button>
            </form>

            <ToastContainer position="bottom-right" autoClose={3000} />
        </>
    );
};

export default LoginForm;
