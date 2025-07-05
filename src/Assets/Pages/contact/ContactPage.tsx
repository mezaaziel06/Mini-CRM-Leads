import React, { useState } from 'react';
import FormInput from '../../components/Contact/FormInput';
import FormTextArea from '../../components/Contact/FormTextArea';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

interface FormData {
    nombre: string;
    correo: string;
    telefono: string;
    mensaje: string;
}
//http://localhost:3000/users

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validación simple
        if (!formData.nombre || !formData.correo || !formData.telefono || !formData.mensaje) {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error al enviar el formulario');
            }

            // Mostrar SweetAlert
            Swal.fire({
                title: '¡Formulario enviado!',
                text: 'Gracias por contactarnos. Te responderemos pronto.',
                icon: 'success',
                confirmButtonColor: '#2563eb',
            });

            toast.success('Enviado correctamente ✅');

            // Limpiar formulario
            setFormData({
                nombre: '',
                correo: '',
                telefono: '',
                mensaje: '',
            });
        } catch (error) {
            toast.error('Error al enviar el formulario. Intenta más tarde.');
            console.error(error);
        }
    };


    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg"
            >
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                    Formulario de Contacto
                </h2>

                <FormInput
                    label="Nombre completo"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
                <FormInput
                    label="Correo electrónico"
                    name="correo"
                    type="email"
                    value={formData.correo}
                    onChange={handleChange}
                />
                <FormInput
                    label="Teléfono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                />
                <FormTextArea
                    label="Mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out"
                >
                    Enviar mensaje
                </button>
            </form>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </>
    );
};

export default ContactForm;
