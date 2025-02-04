import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Header = ({title=""}) => {

    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-between p-4 bg-[#a5d6a7] text-white shadow-md">
            <button
                onClick={() => navigate("/")}
                className="flex items-center bg-[#a5d6a7] hover:bg-[#87d389] text-black py-2 px-4 rounded-lg focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
               Regresar
            </button>

            <h1 className="flex justify-center text-slate-700 font-bold text-[40px] leading-tight uppercase tracking-wide px-16 w-full text-center">
                {title}
            </h1>

        </div>
    );
};

export default Header;                                                                      
