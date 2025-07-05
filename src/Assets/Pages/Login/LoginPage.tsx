import React from 'react';
import LoginForm from '../../components/Login/LoginForm'
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = async (email: string, password: string): Promise<boolean> => {
        // Aquí simulas login real (puedes usar fetch o axios)
        if (email === 'admin@example.com' && password === '123456') {
            localStorage.setItem('token', 'fake-jwt-token');
            // localStorage.setItem('token', 'JWT...');
            navigate('/dashboard');
            return true;
        }
        return false;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
