const clientes = [
    { id: "1", name: "Carlos Oñate", cargo: "Diseñador Grafico", message: "Inicialmente, no estaba convencido de lo que me proporcionaría un lugar de trabajo compartido, pero la realidad es que laborar en un coworking ha sido una experiencia de cambio. Me ha brindado la oportunidad de relacionarme con otros diseñadores y creativos, lo que ha potenciado mi labor. He podido participar en proyectos compartidos, algo que no hubiera ocurrido si hubiera trabajado desde mi hogar. Además, los eventos y conferencias que llevan a cabo en el lugar me han brindado la oportunidad de adquirir nuevos conocimientos y conocer a posibles clientes." },
    { id: "2", name: "Laura Tovar", cargo: "Consultora de Marketing Digital", message: "El trabajo en el coworking me ha proporcionado una enorme adaptabilidad. Es posible que opte por trabajar en un entorno más sereno o en un área más dinámica, dependiendo de cómo me sienta ese día. Esto me ha permitido ser más eficiente. Además, la interacción con otros expertos de diversas disciplinas ha expandido mi visión. Hace poco me uní a un desarrollador que conocí en el ámbito para crear una aplicación. Jamás pensé que un sitio tan ordinario pudiera abrir tantas puertas." },
    { id: "3", name: "Roberto Cassiani", cargo: "Abogado", message: "Al principio tenía dudas sobre cómo funcionaría mi trabajo en un espacio compartido, ya que manejo información confidencial. Sin embargo, las instalaciones del coworking son muy seguras y el ambiente es tranquilo y profesional. Lo que más aprecio es la red de relaciones que he establecido. He obtenido referencias de otros integrantes del centro de trabajo y he tenido la oportunidad de compartir vivencias con otros abogados, lo que me ha aportado tanto en lo personal como en lo laboral." },
]


const SecondSesion = () => {

    const card = (cliente) => (
        <div key={cliente.id} className="bg-slate-50  p-6 rounded-lg shadow-lg py-10">
            <div className="flex gap-1 items-center  ">
                
                <div className="flex flex-col mx-auto">
                    <h3 className="text-xl font-semibold text-center mb-2">{cliente.name}</h3>
                    <p className="text-center text-gray-500 mb-4">{cliente.cargo}</p>
                </div>
            </div>
            <p className="text-start text-gray-700 px-4 text-sm">
                {cliente.message}
            </p>
        </div>
    )

    return (
        <div id="opiniones" className="flex flex-col py-4 px-20 pb-16">
            <h1 className="text-slate-700 font-bold text-[57px] leading-tighttracking-wide mt-16 mb-16 text-center">
                Qué opinan nuestros clientes
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                {/* Carta 1 */}
                {clientes.map((item) => (
                    card(item)
                ))}
            </div>
        </div>
    );
};

export default SecondSesion;
