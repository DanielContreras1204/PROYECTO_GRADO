import React, { createContext, useContext, useEffect, useState } from 'react';
import CardDashboard from './CardDashboard';
import { getAllReservaDash } from '../../ReserveDashboard/service/ReservaDash.Crud';
import { UserContext } from '../../Login/context/UserContext';

const HomeDashboard = () => {
  const [oficinasAgendadas, setOficinasAgendadas] = useState([]);



  const getAll = async () => {
    try {
      const newData = await getAllReservaDash();
      console.log(newData)
      setOficinasAgendadas(newData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAll();
  }, [])



  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Oficinas Agendadas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {oficinasAgendadas.map((oficina) => (
          <div key={oficina.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Imagen de la oficina */}
            <CardDashboard oficina={oficina} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDashboard;
