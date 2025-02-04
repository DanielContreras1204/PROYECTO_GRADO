import React from 'react';
import { Link } from 'react-router-dom';

const FirstSession = () => {

    const productos = [
        {
            id: 1,
            nombre: "SALA  DE JUNTAS",
            descripcion: "Espacio multifuncional; más empleado para encuentros empresariales, exposición de proyectos y más, dotado con tecnología para reuniones exitosas (incluye baño privado, televisión de videobeam, climatización, pizarra).",
            precio: "$20.00",
            imagen: "/img/OficinaCompartida.jpeg"
        },
        {
            id: 2,
            nombre: "ZONA LOFT",
            descripcion: "Ambiente exterior, enmarcado por la naturaleza (todos los espacios cuentan con cafetería gratuita e internet.",
            precio: "$30.00",
            imagen: "/img/SalaJunta.jpeg"
        },
        {
            id: 3,
            nombre: "OFICINA  PRIVADA",
            descripcion: "Entorno de trabajo exclusivo, especial para empresarios y emprendedores.",
            precio: "$40.00",
            imagen: "/img/AireLibre.jpeg"
        },
        {
            id: 4,
            nombre: "CALL CENTER",
            descripcion: "Esta oficina es perfecta para llamadas privadas de reunión de Zoom.",
            precio: "$50.00",
            imagen: "/img/AireLibre.jpeg"
        },
        {
            id: 5,
            nombre: "ZONA COWORKER VIP",
            descripcion: "Espacio exclusivo con acceso premium a áreas privadas y comunes, WiFi de alta velocidad, café ilimitado y servicios adicionales en un ambiente cómodo y profesional. Precio por persona.",
            precio: "$60.00",
            imagen: "/img/OficinaCompartida.jpeg"
        },
        {
            id: 6,
            nombre: "ZONA COWORKER ESTANDAR",
            descripcion: "Espacio compartido abierto y climatizado, con acceso a WiFi, café ilimitado y áreas comunes durante las horas laborales.",
            precio: "$70.00",
            imagen: "/img/Kashe.jpeg"
        },
        
    ];

    const card = (producto) => (
        <div key={producto.id} className="w-[90%] bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col h-full">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-40 object-cover" /> {/* Imagen */}
            <div className="p-7 flex flex-col justify-between flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{producto.nombre}</h2>
                <p className="text-gray-600 text-sm flex-1 mb-4">{producto.descripcion}</p>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className="text-xl font-bold text-slate-600">{producto.precio}</span>
                        <div className="text-sm text-gray-500 mt-1">Precio por hora</div> {/* Texto debajo del precio */}
                    </div>
                    <Link to="reserva">
                    <button className="mt-4 py-3 px-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm self-start">
                        Reservar
                    </button> {/* Botón de reserva */}
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <div id='oficinas' className='py-20'>
            <div className='text-slate-700 font-bold text-[57px] leading-tight px-16 mt-10 text-center mb-8'>
                <h1>Nuestra Oficinas</h1>
            </div>
            <div className="grid grid-cols-3 justify-center gap-8 ml-6 px-8 pt-8">
                {productos.map((producto) => (
                    card(producto)
                ))}
            </div>
        </div>
    );
};

export default FirstSession;
