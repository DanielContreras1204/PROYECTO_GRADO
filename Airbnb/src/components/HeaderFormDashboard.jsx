import { FaClipboardList } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const HeadersFormDashboard = ({Info,handleOpenModal}) => {

    return (
        <div className="flex justify-between h-28 items-center px-10 pt-32 pb-14">
            <div className="flex flex-col">

                <div className="flex gap-2">
                    <FaClipboardList className="text-3xl transition-all duration-300" />
                    <h2 className="text-3xl font-semibold mb-4">{Info.title}</h2>
                </div>
                <p className="text-slate-700">{Info.subtitle}</p>

                <div className="relative mb-4 pt-8 pb-8">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                <input
                    type="text"
                    className="pl-10 pr-4 py-2 border rounded-lg w-full text-slate-700"
                    placeholder={Info.filter}
                />
            </div>
            </div>
            
            <button onClick={handleOpenModal} className="flex gap-2 items-center border-2 rounded-lg px-5 py-2 bg-green-500 hover:bg-green-600 text-white ">
                <IoIosAddCircle className="text-3xl transition-all duration-300 text-white" />
                Nuevo
            </button>
        </div>
    )

};


export default HeadersFormDashboard;