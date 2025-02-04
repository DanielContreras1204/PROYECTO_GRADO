import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const images = [
    { imagen: "img/img1.jpeg", color: "rojo", Description: "KM7 Autopista " },
    { imagen: "img/img2.jpeg", color: "verde", Description: "KM7 Autopista " },
    { imagen: "img/img3.jpeg", color: "azul", Description: "KM7 Autopista " },
    { imagen: "img/img4.jpeg", color: "azul", Description: "KM7 Autopista " },
  ];
const Slider = () => {
      const [currentIndex, setCurrentIndex] = useState(0);      
    
      const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      };

    return (
  
            <div id="bicis" className="w-full">            
              <div className="relative w-full   mx-auto">
                <div className="overflow-hidden   ">
                  <div
                    className="flex h-[calc(100vh-80px)]  transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {images.map((item, index) => (
                      <div key={index} className="min-w-full  ">
                        <div className="flex w-full h-full justify-center ">
                          <img
                            src={item.imagen}
                            alt={`Slide ${index}`}
                            className="w-[100%] h-full object-cover"
                          />
                          <div className=" absolute  w-[55%] hover:shadow-lg h-auto transition-colors  rounded-2xl ">
                            {" "}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
        
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-400 bg-opacity-50 text-white px-4 py-4 rounded-full mx-8"
                >
                  <IoIosArrowBack />
                </button>
        
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-400 bg-opacity-50 text-white px-4 py-4 rounded-full mx-8"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
     
    );
};

export default Slider;
