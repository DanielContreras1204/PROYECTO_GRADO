import React from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { FaMountainCity } from "react-icons/fa6";
import { TbBinoculars } from "react-icons/tb";


export default function MisionVision() {
    const arreglo = [
        {
            icon:<FaMountainCity />,
            title: "Misión",
            description: "Brindar espacios de trabajo compartidos flexibles e inspiradores, diseñados para fomentar la creatividad, la colaboración y el crecimiento de emprendedores, profesionales y empresas. Nuestro objetivo es construir COEQUIPO con aliados que puedan conectarse, colaborar y compartir conocimientos, habilidades y experiencias. Impulsando la innovación y el desarrollo profesional, ofreciendo servicios, infraestructura de alta calidad y un entorno de trabajo inclusivo y accesible para todos."
        },
        {
            icon: <TbBinoculars /> ,
            title: "Visión",
            description: " Ser líderes en 5 años como centro de coworking en el Cesar, con una expansión nacional e internacional que empoderen a los profesionales y las empresas a alcanzar su máximo potencial. Queremos construir socios o aliados incluyentes que transformen la forma en que las personas trabajan y se conectan, proporcionando espacios de trabajo donde la creatividad, la flexibilidad y la colaboración sean los pilares del éxito profesional."
        },
    ];

    const card = (element, index) => (
        <div key={index} className="flex flex-col gap-2 text-center mb-16 mx-16 bg-white text-slate-700 rounded-xl shadow-lg border-2 border-gold">
            <div className='flex w-full h-40 object-cover justify-center items-center text-6xl' >
                <div className="rounded-full p-4 bg-slate-400">

                    {element?.icon}
                </div>
            </div>
            <h2 className="text-4xl font-bold tracking-wide text-gold">{element.title}</h2>
            <p className="text-base max-w-3xl leading-relaxed font-light pb-8 px-16">
                {element.description}
            </p>
        </div>
    );


    const vidurl = "video/videoInicial.mp4";

    return (
        <>
            <div className="max-w-[1400px] mx-auto via-gray-800 py-16">
                <div className='text-slate-700 font-semibold text-[50px] leading-tight px-16 mt-10 mb-8'>
                    <h1>Conócenos</h1>
                </div>
                <div className="container mx-auto px-6">

                    <div className="mb-12 relative rounded-lg overflow-hidden">
                        <video
                            className="w-full h-96 object-cover transform scale-110 hover:scale-100 transition duration-700 ease-in-out rounded-lg shadow-md"
                            src={vidurl}
                            type="video/mp4"
                            controls
                            autoPlay
                            muted
                            loop
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
                    </div>
                    <div className='p-16 pb-16'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quam unde illum nam, tempora ex perspiciatis laboriosam reiciendis neque perferendis aliquid architecto ullam id dolores necessitatibus amet consequatur atque! Molestias?. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, quisquam libero, mollitia fugiat aut eveniet architecto minima molestiae nisi temporibus fuga. Laborum sapiente itaque harum, enim neque nostrum vero nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet, aperiam sunt maiores, assumenda distinctio aut dolorem dignissimos atque ipsa provident vitae libero tempora nostrum officia, voluptates maxime illo qui.
                    </div>
                    <div className='grid grid-cols-2 gap-8'>
                        {arreglo.map((element, index) => (
                            card(element, index)
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
