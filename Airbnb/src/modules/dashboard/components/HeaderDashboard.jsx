const HeaderDashboard = ({})=>{

return (
    <div className="justify-end w-full flex  shadow-lg h-20 p-10 "> 
        <div className="flex gap-4 items-center">
       <h1>
        Sheila Martinez
        </h1> 
        <img className="w-10 h-auto rounded-full" src="https://e7.pngegg.com/pngimages/893/930/png-clipart-businessperson-computer-icons-business-woman-people-logo.png" alt="" />
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 border-2 rounded-full">Cerrar Sesion</button>
        </div>
    </div>
)


};

export default HeaderDashboard;