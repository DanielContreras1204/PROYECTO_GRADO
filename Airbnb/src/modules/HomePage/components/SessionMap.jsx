const SesionMap = () => {

    return (
        <div>
            <div id="estaciones" className="flex flex-col pb-16">
                <div className="grid grid-cols-5 mt-6 h-auto bg-slate-50 items-center pb-16 pr-10">
                    <div className="flex col-span-2 w-full h-full p-20">
                        <div className="flex flex-col">
                            <h1 className="text-slate-700 font-bold text-[57px] leading-tight ">
                                Como Llegar
                            </h1>
                            <h5 className="text-slate-500 mt-8">
                                ¡Estamos disponibles para ti! <br />
                                Elegirnos es optar por un futuro más sostenible y responsable con
                                el medio ambiente.
                            </h5>
                        </div>
                    </div>
                    <div className="col-span-3 w-full h-auto justify-center items-center mt-20  rounded-xl shadow-lg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.3086460802065!2d-73.25019362519956!3d10.476317089654819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab900a65c9bc1%3A0x77f5aac357a1140a!2sKashecoworking!5e0!3m2!1ses!2sco!4v1735425886652!5m2!1ses!2sco" width="100%" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SesionMap;