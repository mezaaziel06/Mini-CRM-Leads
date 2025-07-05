import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface LeadStatusSelectProps {
    currentStatus: string;
    onStatusChange?: (newStatus: string) => void;
}

const LeadStatusSelect: React.FC<LeadStatusSelectProps> = ({
    currentStatus,
    onStatusChange,
}) => {
    const [status, setStatus] = useState(currentStatus);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value;
        setStatus(newStatus);
        toast.success(`Estado cambiado a: ${newStatus}`);
        onStatusChange?.(newStatus);
    };

    return (
        <select
            className="border px-2 py-1 rounded"
            value={status}
            onChange={handleChange}
        >
            <option value="nuevo">Nuevo</option>
            <option value="contactado">Contactado</option>
            <option value="descartado">Descartado</option>
        </select>
    );
};

export default LeadStatusSelect;
