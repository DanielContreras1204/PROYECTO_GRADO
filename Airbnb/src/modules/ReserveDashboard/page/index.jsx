import { useEffect, useState } from "react";
import HeadersFormDashboard from "../../../components/HeaderFormDashboard";
import ReserveList from "../components/ReserveList";
import ModalSlideRigth from "../../../components/ModalSlideRight";
import { getAllOficinas } from "../service/ReservaDash.Crud";
import FormReserve from "../components/FormReserve";


export default function Index() {
    const[open,setOpen]=useState(false)
    const[get,setGet]=useState(false)
      const[oficinas,setOficinas]=useState()

    const Info={
        title: 'Reservas',
        subtitle: 'Listado de reservas realizadas',
        filter:"Buscar reservas"
    }
   

    const closeModal=()=>{
       setOpen(false);
       setGet(true);     
    }  

    const getAll = async () => {
        try {
          const newData = await getAllOficinas();
          console.log("lista oficinas",newData)
          setOficinas(newData)
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        getAll();
      }, [])
    

    return (
        <>        
        <ModalSlideRigth open={open} setOpen={()=>setOpen(false)} title="Registro de Reservas" Children={<FormReserve oficinas={oficinas} closeModal={closeModal}  />}/>
          
        <div>
            <HeadersFormDashboard Info={Info} handleOpenModal={()=>setOpen(!open)}/>
            <ReserveList get={get} setGet={()=>setGet(false)} />          
        </div>
        </>
    )
};

