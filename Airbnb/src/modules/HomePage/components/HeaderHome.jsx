import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-[#a5d6a7] px-4 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo y enlaces de navegación */}
                <div className="flex items-center space-x-6">
                    <img
                        src="/img/logo.png" // Reemplaza con la ruta de tu logo
                        alt="Logo"
                        className="h-12 w-auto transition-transform duration-300 hover:scale-110 pl-6"
                    />
                    <div className="hidden md:flex items-center space-x-6 pl-10">
                        <a
                            href="#kashe"
                            className="text-black hover:text-[#388e3c] text-[16px]"
                        >
                            Kashe
                        </a>
                        <a
                            href="#oficinas"
                            className="text-black hover:text-[#388e3c] text-[16px]"
                        >
                            Nuestras Oficinas
                        </a>
                        <a
                            href="#opiniones"
                            className="text-black hover:text-[#388e3c] text-[16px]"
                        >
                            Qué opinan nuestros clientes
                        </a>
                        <a
                            href="#estaciones"
                            className="text-black hover:text-[#388e3c] text-[16px]"
                        >
                            Cómo llegar
                        </a>
                    </div>
                </div>

                {/* Botones */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/conocenos"
                            className="text-black hover:text-[#388e3c] text-[16px]">
                            Conócenos
                        </Link>

                        <Link to="/reservar" className="bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">Reserva</Link>

                    </div>
                    <Link className="text-black bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#388e3c] transition" to="/login">

                        Iniciar Sesión
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
