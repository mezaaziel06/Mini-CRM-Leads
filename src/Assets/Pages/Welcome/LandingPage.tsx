import React from 'react';
import ContactForm from '../contact/ContactPage';
import { ShieldCheck, Bell, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <ShieldCheck size={42} className="text-indigo-600 mb-4" />,
    title: 'Acceso seguro',
    desc: 'Protege la información con autenticación JWT y acceso controlado.',
  },
  {
    icon: <ClipboardList size={42} className="text-indigo-600 mb-4" />,
    title: 'Gestión visual',
    desc: 'Consulta, edita y organiza leads desde una tabla moderna y funcional.',
  },
  {
    icon: <Bell size={42} className="text-indigo-600 mb-4" />,
    title: 'Alertas instantáneas',
    desc: 'Recibe notificaciones en tiempo real por email o Slack.',
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-indigo-600 tracking-tight">
            Mini CRM de Leads
          </h1>
          <a
            href="/Login"
            className="text-indigo-600 font-semibold hover:underline hover:text-indigo-700 transition"
          >
            Iniciar sesión
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-6 leading-tight drop-shadow">
            Convierte tus contactos en clientes reales
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Organiza y automatiza tu embudo de ventas con un CRM moderno, ligero y efectivo.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-white text-indigo-700 font-semibold px-10 py-4 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            ¡Empieza ahora!
          </a>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-gray-600 text-lg">
            Completa el formulario y te responderemos en menos de 24 horas.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-sm text-gray-600 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
          <span>© {new Date().getFullYear()} Mini CRM de Leads. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#contacto" className="hover:text-indigo-600 transition">
              Contacto
            </a>
            <a href="/Login" className="hover:text-indigo-600 transition">
              Iniciar sesión
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Aviso de privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
