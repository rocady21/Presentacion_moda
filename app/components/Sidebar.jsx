"use client"
import { useRouter } from "next/navigation";
import react, { useEffect, useState } from "react";
import { CgDetailsMore } from "react-icons/cg";

const Sidebar = ()=> {

  const router = useRouter()

  const [stateSiebar,setStateSidebar] = useState(false)
  const abrir = ()=> {
    setStateSidebar(true)
  }
  const cerrar = ()=> {
    setStateSidebar(false)

  }

  const nav80 = ()=> {
    router.push("/los80")
        setStateSidebar(false)

  }
  const home = ()=> {
    router.push("/")
        setStateSidebar(false)

  }
  const time = ()=> {
    router.push("/todo_el_tiempo")
        setStateSidebar(false)
  }
  
    useEffect(() => {
      // Acceder al elemento del DOM después de que el componente se haya montado
      const DivCard = document.getElementById("card");
      
      if (DivCard) {
        console.log("A");
        if (stateSiebar === true) {
          console.log("abrir");
          DivCard.classList.add("modaSidebarAbrir");
          DivCard.classList.remove("modaSidebarCerrar");
        } else {
          console.log("Cerrar");
          DivCard.classList.add("modaSidebarCerrar");
          DivCard.classList.remove("modaSidebarAbrir");
        }
      }
    }, [stateSiebar]);

    return (
      <>
        {
          stateSiebar === true? <div id="card" className="modaCoso flex flex-col absolute top-0 bg-black left-0 w-[20%] h-screen z-50">
            <button onClick={cerrar} className="bg-black text-white p-3"><CgDetailsMore size={30}/></button>
          <div className="content w-[80%] m-auto mt-0 flex flex-col ">
            <h1 className="uppercase self-center text-white text-[25px] ">Moda<span className="text-purple-500 mx-1 font-bold">app</span></h1>
            <div className="options text-white text-start mt-[50px] text-[20px] flex flex-col  justify-around">
              <div role="button" onClick={home } className="py-5 w-full hover:scale-[110%]  hover:bg-white rounded hover:text-purple-300 pl-5">Home</div>
              <div role="button" onClick={nav80} className="py-5 w-full hover:scale-[110%] hover:bg-white rounded hover:text-purple-300 pl-5">Los 80</div>
              <div role="button" onClick={time } className="py-5 w-full hover:scale-[110%]  hover:bg-white rounded hover:text-purple-300 pl-5">Todo el tiempo</div>
            </div>
          </div>

        </div> : <button onClick={abrir} className="bg-black absolute top-0 left-0 text-white p-3"><CgDetailsMore size={30}/></button>
        }

      </>
    )
}

export default Sidebar