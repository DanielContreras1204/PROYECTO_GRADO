import React, { useState } from "react";

import { enqueueSnackbar } from "notistack";
import { addNovedades } from "../service/EventoDash.Crud";

export default function FormEventos({ closeModal }) {

  const [formData, setFormData] = useState({

    fecha: "",
    nombre: "",
    descripcion: "",
    valor: "",
    horasAlquiladas: "", // Nuevo campo para las horas alquiladas
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagen") {
      setFormData((prevState) => ({
        ...prevState,
        imagen: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      await addNovedades(formData);
      // setFormData({
      //   fecha: "",
      //   nombre: "",
      //   descripcion: "",
      //   valor: "",
      //   horasAlquiladas: "",
      // })
      closeModal()
      enqueueSnackbar("Registro exitoso", { variant: "success" })
    } catch (error) {
      enqueueSnackbar("Error al registrar", { variant: "error" })
    }

    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Eventos</h1>
      <form onSubmit={handleSubmit}>
        {/* Campo para cargar imagen */}
        <div className="mb-4">
          <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">
            Imagen del evento
          </label>
          <input
            type="file"
            id="imagen"
            name="imagen"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm py-3"
            required
          />
          {formData.imagen instanceof Blob && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(formData.imagen)}
                alt="Imagen seleccionada"
                className="w-full max-w-full h-60 object-cover rounded-md"
              />
            </div>
          )}
        </div>

        {/* Campo para la fecha del evento */}
        <div className="mb-4">
          <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">
            Fecha del evento
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm py-3"
            required
          />
        </div>

        {/* Campo para el nombre del evento */}
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre del evento
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre del evento"
            className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm py-3"
            required
          />
        </div>

        {/* Campo para la descripción del evento */}
        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
            Descripción del evento
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Descripción del evento"
            rows="4"
            className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm py-3"
            required
          />
        </div>

        {/* Campo para el valor del evento */}
        <div className="mb-6">
          <label htmlFor="valor" className="block text-sm font-medium text-gray-700">
            Valor del evento
          </label>
          <input
            type="number"
            id="valor"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            placeholder="Valor en moneda"
            step="0.01"
            className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm py-3"
            required
          />
        </div>

        {/* Campo para las horas alquiladas */}
        <div className="mb-6">
          <label htmlFor="horasAlquiladas" className="block text-sm font-medium text-gray-700">
            Duración
          </label>
          <input
            type="number"
            id="horasAlquiladas"
            name="horasAlquiladas"
            value={formData.horasAlquiladas}
            onChange={handleChange}
            placeholder="Duración del evento"
            step="1"
            min="1"
            className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm py-3"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md "
        >
          Enviar
        </button>
      </form>
    </div>
  );
};



