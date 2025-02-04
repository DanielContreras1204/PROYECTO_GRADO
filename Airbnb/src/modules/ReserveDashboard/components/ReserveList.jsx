import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { deleteReservaDash, getAllReservaDash } from "../service/ReservaDash.Crud";
import { enqueueSnackbar } from "notistack";
import Modal from "../../../components/Modal";

const EventosList = ({ get }) => {
  const [reservas, setReservas] = useState()
  const [open, setOpen] = useState(false)
  const [idDocument, setIdDocument] = useState()

  const getAll = async () => {
    try {
      const newData = await getAllReservaDash();
      console.log(newData)
      setReservas(newData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {    
    getAll();
  }, [get])

  const handleOpenModal = async (id) => {
    setOpen(true);  
    setIdDocument(id);     
  };

  const handleDelete=async()=>{
    try {
      await deleteReservaDash(idDocument);
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
                <th className="py-2 px-4 border-b text-left text-gray-700">Nombre</th>
                <th className="py-2 px-4 border-b text-left text-gray-700">Oficina</th>
                <th className="py-2 px-4 border-b text-left text-gray-700">Precio</th>
                <th className="py-2 px-4 border-b text-left text-gray-700">Fecha</th>
                <th className="py-2 px-4 border-b text-left text-gray-700">Horas de alquiler</th> {/* Nueva columna para duración */}
                <th className="py-2 px-4 border-b text-left text-gray-700">Opción</th>
              </tr>
            </thead>
            {reservas && (

              <tbody>
                {reservas.map((reserva, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b text-gray-700">{reserva?.nombre}</td>
                    <td className="py-2 px-4 border-b text-gray-700">{reserva?.idOficina?.nombre}</td>
                    <td className="py-2 px-4 border-b text-gray-700">{reserva?.precio}</td>
                    <td className="py-2 px-4 border-b text-gray-700">{reserva?.fecha}</td>
                    <td className="py-2 px-4 border-b text-gray-700">{reserva?.horas}</td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      <button
                        onClick={() => handleOpenModal(reserva.id)}
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
