import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

import Modal from "../../../components/Modal";
import { deleteNovedadesDash, getAllNovedades } from "../service/EventoDash.Crud";
import { enqueueSnackbar } from "notistack";

const EventosList = ({get}) => {
  const [open, setOpen] = useState(false)
  const [idDocument, setIdDocument] = useState()

  const [data, setData] = useState()

  const reservas = [
    {
      nombre: "Juan Pérez",
      correo: "juan@example.com",
      telefono: "+1234567890",
      fecha: "2025-01-10",
      oficina: "Oficina A",
      duracion: "2 horas", // Campo de duración agregado
    },
    {
      nombre: "María López",
      correo: "maria@example.com",
      telefono: "+0987654321",
      fecha: "2025-01-15",
      oficina: "Oficina B",
      duracion: "3 horas", // Campo de duración agregado
    },
  ];

  const getAll = async () => {
    try {
      const dataNovedades = await getAllNovedades();
      setData(dataNovedades)      
    } catch (error) {
      console.log(error)
    }
  }


  //consultar los datos
  useEffect(() => {
    getAll();
  }, [get])

  const handleOpenModal = async (id) => {
    console.log("impresion console", id)
    setOpen(true);
    setIdDocument(id);
  };

  const handleDelete = async () => {
    console.log(idDocument)
    try {
      await deleteNovedadesDash(idDocument);
      setOpen(false)
       getAll()  
      enqueueSnackbar("Reserva eliminada correctamente", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Error al eliminar reserva", { variant: "error" });
    }
  }

  return (
    <>
      <Modal open={open} setOpen={() => setOpen(false)} handleDelete={handleDelete}>
        <div>¡Seguro desea eliminar este registro!</div>
      </Modal>

      <div className="container mx-auto p-4 px-10">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-[#a5d6a7]">
                <th className="py-2 px-4 border-b text-left text-gray-700">nombre</th>
                <th className="py-2 px-4 border-b text-left text-gray-700">duracion</th>
                <th className="py-2 px-4 border-b text-left text-gray-700">Fecha</th>
                <th className="py-2 px-4 border-b text-left text-gray-700">descripcion</th>
                <th className="py-2 px-4 border-b text-left text-gray-700">valor</th>
                <th className="py-2 px-4 border-b text-left text-gray-700">Opción</th>
              </tr>
            </thead>
            {data && (
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b text-gray-700">{item.nombre}</td>
                    <td className="py-2 px-4 border-b text-gray-700">{item.horasAlquiladas}</td>
                    <td className="py-2 px-4 border-b text-gray-700">{item.fecha}</td>
                    <td className="py-2 px-4 border-b text-gray-700">{item.descripcion}</td>
                    <td className="py-2 px-4 border-b text-gray-700">{item.valor}</td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      <button
                        onClick={() => handleOpenModal(item.id)}
                        className=""
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default EventosList;
