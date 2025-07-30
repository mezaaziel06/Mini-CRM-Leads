import React, { useState } from 'react';
import FormInput from '../../components/Contact/FormInput';
import FormTextArea from '../../components/Contact/FormTextArea';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      toast.error('Todos los campos son obligatorios');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error al enviar el formulario');

      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarnos. Te responderemos pronto.',
        icon: 'success',
        confirmButtonColor: '#2563eb',
      });

      toast.success('Mensaje enviado correctamente ✅');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Ocurrió un error al enviar el mensaje.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          Contáctanos
        </h2>
        <p className="text-center text-gray-500 mb-10">
          ¿Tienes dudas o quieres más información? Completa el siguiente formulario.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Nombre completo"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            label="Correo electrónico"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            label="Teléfono"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
          <FormTextArea
            label="Mensaje"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 ${
                loading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default ContactForm;
