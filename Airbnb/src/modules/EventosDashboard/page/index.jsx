import { useState } from "react";
import HeadersFormDashboard from "../../../components/HeaderFormDashboard";

import EventosList from "../components/EventosList";
import ModalSlideRigth from "../../../components/ModalSlideRight";
import FormEventos from "../components/FormEventos";

export default function Index() {

    const [open, setOpen] = useState(false)
    const [get, setGet] = useState(false)

    const Info = {
        title: 'Eventos',
        subtitle: 'Listado de Eventos',
        filter: "Buscar eventos"
    }
    const handleOpenModal = ()=>{
        setOpen(true)
    }

    const closeModal=()=>{
        setOpen(false);
        setGet(true);     
     }  

    return (


        <div>

            <ModalSlideRigth open={open} setOpen={() => setOpen(false)} title="Registro de eventos" Children={<FormEventos  closeModal={closeModal}/>} />
            <HeadersFormDashboard Info={Info}  handleOpenModal={handleOpenModal} />
            <EventosList get={get} />
        </div>
    )
};