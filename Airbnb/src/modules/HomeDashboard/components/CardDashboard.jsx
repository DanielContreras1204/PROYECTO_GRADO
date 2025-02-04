const CardDashboard = ({oficina})=>{
    return (
        <div>
            <img 
              src={oficina?.idOficina?.imagen} 
              alt="imagen" 
              className="w-full h-36
               object-cover rounded-t-lg" 
            />
            <div className="mt-4">
              <h3 className="text-lg  text-gray-800">Nombre cliente:<span className="font-bold"> {oficina.nombre}</span></h3>
              <p className="text-gray-600 mt-2"><strong>Email:</strong> {oficina?.usuario?.email}</p>
              <p className="text-gray-600 mt-2"><strong>Precio:</strong> {oficina?.precio}</p>
              <p className="text-gray-600 mt-1"><strong>Horas de Alquiler:</strong> {oficina?.horas}</p>
              
            </div>
        </div>
    )
};

export default CardDashboard;