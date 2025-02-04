import { IoHomeSharp } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { IoConstruct } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = ({ setOpenSlider, openSlider }) => {

    return (
        <div className=" fixed flex flex-col top-0 w-[250px] bg-[#a5d6a7] h-screen transition-all pt-12">
            <img
                src="/img/logo.png" // Reemplaza con la ruta de tu logo
                alt="Logo"
                className="h-auto w-36 transition-transform duration-300  hover:scale-110 pl-6"
            />
            <div>
                <div className="flex flex-col pb-4 h-screen  overflow-y-auto custom-scrollbar-style mt-4">
                    <ul className="flex flex-col pt-6 space-y-2 pl-6 pr-4  gap-4  h-full  ">
                        <Link to= "/dashboard">
                        <div className="flex gap-7 items-center hover:bg-[#16a34a] rounded-r-md p-2  transition-colors cursor-pointer   ">
                            <IoHomeSharp className="text-2xl " />
                            <h2 className="font-bold">Inicio</h2>
                        </div>
                        </Link>
                        <Link to= "dashboard/reserva">
                        <div className="flex gap-7 items-center hover:bg-[#16a34a] rounded-r-md p-2  transition-colors cursor-pointer ">
                            <FaAddressBook className="text-2xl" />
                            <h2 className="font-bold">Reservas</h2>
                        </div>
                        </Link>
                        <Link to="dashboard/eventos">
                            <div className="flex gap-7 items-center hover:bg-[#16a34a] rounded-r-md p-2  transition-colors cursor-pointer ">
                                <MdEvent className="text-2xl" />
                                <h2 className="font-bold">Eventos</h2>
                            </div>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
};


export default Sidebar;