import React from 'react';
import ContactForm from '../contact/ContactPage';


const LandingPage: React.FC = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Header */}
            <header className="bg-white shadow py-4 px-6 flex justify-between items-center">
                <h1 className="text-xl font-bold">Mini CRM de Leads</h1>
                <a href="/Login" className="text-blue-600 hover:underline font-medium">
                    Iniciar sesión
                </a>
            </header>

            {/* Hero */}
            <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <h2 className="text-4xl font-bold mb-4">Convierte tus contactos en clientes</h2>
                <p className="text-lg mb-6 max-w-xl mx-auto">
                    Gestiona tus leads fácilmente desde un panel privado y recibe notificaciones cuando alguien se interese por tus servicios.
                </p>
                <a href="#contacto" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
                    ¡Empieza ahora!
                </a>
            </section>

            {/* Características */}
            <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <h3 className="text-xl font-semibold mb-2">🔐 Acceso seguro</h3>
                    <p>Panel protegido con autenticación JWT para mantener tus datos privados.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">📋 Organización simple</h3>
                    <p>Visualiza todos tus leads en una tabla clara con estado editable.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">🔔 Notificaciones automáticas</h3>
                    <p>Recibe alertas por email o Slack cada vez que alguien llena tu formulario.</p>
                </div>
            </section>

            {/* Formulario de contacto */}
            <section id="contacto" className="py-16 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
                <div className="max-w-2xl mx-auto">
                    <ContactForm />
                </div>
            </section>


            {/* Footer */}
            <footer className="bg-gray-100 text-center py-6 mt-12 text-sm text-gray-600">
                © {new Date().getFullYear()} Mini CRM de Leads. Todos los derechos reservados.
            </footer>
        </div>
    );
};

export default LandingPage;
