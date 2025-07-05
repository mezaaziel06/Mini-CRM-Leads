import React from 'react';
import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/" />;
    }

    return <div className="min-h-screen bg-gray-50 p-6">{children}</div>;
};

export default ProtectedLayout;
