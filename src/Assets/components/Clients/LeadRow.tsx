import React from 'react';
import LeadStatusSelect from './LeadStatusSelect';

interface Lead {
    id: number;
    nombre: string;
    correo: string;
    estado: string;
    fecha: string;
}

interface LeadRowProps {
    lead: Lead;
}

const LeadRow: React.FC<LeadRowProps> = ({ lead }) => {
    const handleStatusChange = (newStatus: string) => {
        console.log(`Lead ${lead.id} cambió a: ${newStatus}`);
        // Aquí puedes hacer un fetch/axios para actualizarlo en backend
    };

    return (
        <tr className="border-t">
            <td className="px-4 py-2">{lead.nombre}</td>
            <td className="px-4 py-2">{lead.correo}</td>
            <td className="px-4 py-2">{lead.fecha}</td>
            <td className="px-4 py-2">
                <LeadStatusSelect currentStatus={lead.estado} onStatusChange={handleStatusChange} />
            </td>
        </tr>
    );
};

export default LeadRow;
