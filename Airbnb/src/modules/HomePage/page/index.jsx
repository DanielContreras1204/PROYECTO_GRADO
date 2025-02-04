
import { useContext, useEffect } from "react";
import Header from "../../../components/Header";
import Conocenos from "../../About/components/conocenos";
import FirstSession from "../components/FirstSession";
import Footer from "../components/Footer";
import HeaderHome from "../components/headerHome";
import MainSession from "../components/MainSession";
import SecondSesion from "../components/SecondSesion";
import SesionMap from "../components/SessionMap";
import Slider from "../components/slider";
import { UserContext } from "../../Login/context/UserContext";

export default function Index() {

    const { usuario } = useContext(UserContext)

  
    useEffect(() => {
      if (usuario) {
  
        console.log("DALOS USUARIO LOGEADO", usuario)
      }
    }, [usuario])

    return (
        <div>
            <HeaderHome />
            <Slider />
            <MainSession />
            <FirstSession />
            <SecondSesion />
            <SesionMap />
            <Footer />
            <style jsx global>{`
                html {
                scroll-behavior: smooth;
                }
            `}</style>

         

        </div>
              
    )
};