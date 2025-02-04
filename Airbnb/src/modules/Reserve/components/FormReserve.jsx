import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addReservaDash } from '../../ReserveDashboard/service/ReservaDash.Crud';
import { enqueueSnackbar } from 'notistack';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: null,
    idOficina: '1',
    precio: 0,
    horas: 0,
  });

  // Función para calcular el precio basado en el tipo de oficina
  const calculatePrice = (type, hours) => {
    let basePrice = 0;
    switch (type) {
      case '1':
        basePrice = 50;
        break;
      case '2':
        basePrice = 100;
        break;
      case '3':
        basePrice = 150;
        break;
      case '4':
        basePrice = 30;
        break;
      default:
        basePrice = 0;
        break;
    }

    // Multiplicamos el precio base por la duración
    return basePrice * hours;
  };

  // Actualizamos el precio cuando cambia el tipo de oficina o la duración
  useEffect(() => {
    const precio = calculatePrice(formData.idOficina, formData.horas);
    setFormData((prevData) => ({
      ...prevData,
      precio,
    }));
  }, [formData.idOficina, formData.horas]); // Dependencias en el tipo de oficina y horas

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);

    try {
      await addReservaDash(formData);
      setFormData({
        nombre: '',
        fecha: '',
        idOficina: null,
        precio: 0,
        horas: 0,
      })    
      enqueueSnackbar("Registro exitoso", { variant: "success" })
    } catch (error) {
      enqueueSnackbar("Error al registrar", { variant: "error" })
    }

  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Formulario de Reserva</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="date">
            Fecha de Reserva:
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="idOficina">
            Escoger Oficina:
          </label>
          <select
            id="idOficina"
            name="idOficina"
            value={formData.idOficina}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          >
            <option value="1">Oficina 1</option>
            <option value="2">Oficina 2</option>
            <option value="3">Sala de junta</option>
            <option value="4">Zona coworking</option>
          </select>
        </div>

        {/* Duración en horas */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="hours">
            Horas de alquiler:
          </label>
          <input
            type="number"
            id="horas"
            name="horas"
            value={formData.horas}
            onChange={handleChange}
            min="1"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        {/* Mostrar el precio basado en la selección */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="price">
            Precio:
          </label>
          <input
            type="text"
            id="precio"
            name="precio"
            value={`$${formData.precio}`}
            readOnly
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Realizar Reserva
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
