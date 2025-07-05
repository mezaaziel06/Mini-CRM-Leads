import React, { useEffect, useState } from 'react';
import ProtectedLayout from '../../components/ProtectedLayout';
import LeadTable from '../../components/Clients/LeadTable';
import { ToastContainer, toast } from 'react-toastify';

// Simulación de datos (puedes reemplazar luego con datos reales desde una API)
interface Lead {
    id: number;
    nombre: string;
    correo: string;
    estado: string;
    fecha: string;
}

const DashboardPage: React.FC = () => {
    const [leads, setLeads] = useState<Lead[]>([]);

    useEffect(() => {
        // Aquí simularíamos un fetch (puedes usar axios)
        const fetchLeads = () => {
            const fakeLeads: Lead[] = [
                { id: 1, nombre: 'Juan Pérez', correo: 'juan@mail.com', estado: 'nuevo', fecha: '2025-06-20' },
                { id: 2, nombre: 'Ana García', correo: 'ana@mail.com', estado: 'contactado', fecha: '2025-06-18' },
                { id: 3, nombre: 'Carlos Ruiz', correo: 'carlos@mail.com', estado: 'descartado', fecha: '2025-06-17' },
            ];
            setLeads(fakeLeads);
            toast.info(`Leads cargados: ${fakeLeads.length}`);
        };

        fetchLeads();
    }, []);

    return (
        <ProtectedLayout>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Panel de Leads</h1>
                <button
                    onClick={() => {
                        localStorage.removeItem('token');
                        window.location.href = '/';
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Cerrar sesión
                </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
                <LeadTable leads={leads} />
            </div>

            <ToastContainer position="bottom-right" autoClose={3000} />
        </ProtectedLayout>
    );
};

export default DashboardPage;
