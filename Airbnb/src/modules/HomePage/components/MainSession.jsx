const MainSession = () => {
    return (
      <div id="kashe" className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 bg-gray-50 py-28">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-slate-700 font-bold text-[57px] leading-tight uppercase tracking-wide  px-16 ">
            Kashe Coworking
          </h1>
          <p className="text-base text-slate-700 leading-relaxed px-16">
            Es un espacio de trabajo compartido donde profesionales de diferentes
            áreas y empresas trabajan de manera independiente, pero en un ambiente
            común. 
          </p>
          <p className="text-base text-slate-700 leading-relaxed px-16">
            Ofrecemos espacios con escritorios, sillas ergonómicas, internet
            de alta velocidad, salas de reuniones y otros servicios como impresoras o
            cafetería, creando un entorno flexible y colaborativo. Brindamos un lugar
            económico, dinámico y con oportunidades para establecer redes de contacto.</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-2xl h-72 relative"> {/* Ajusta la altura aquí */}
            <img
              src="/img/sesionP.jpeg"
              alt="Kashe Coworking"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    );
};
  
export default MainSession;
