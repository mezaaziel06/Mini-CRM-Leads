import React from 'react';
import LeadRow from './LeadRow';

interface Lead {
    id: number;
    nombre: string;
    correo: string;
    estado: string;
    fecha: string;
}

interface LeadTableProps {
    leads: Lead[];
}

const LeadTable: React.FC<LeadTableProps> = ({ leads }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left">Nombre</th>
                        <th className="px-4 py-2 text-left">Correo</th>
                        <th className="px-4 py-2 text-left">Fecha</th>
                        <th className="px-4 py-2 text-left">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((lead) => (
                        <LeadRow key={lead.id} lead={lead} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeadTable;
