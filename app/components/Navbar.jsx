import react from "react";

const Navbar = ()=> {
    return (
        <div className="p-3 text-gray-300 px-[250px] flex flex-row w-full shadow-gray-700/10 shadow-xl">
            
                <div className="title">
                    <h1 className="uppercase ">Moda<span className="text-purple-500 mx-1 font-bold">app</span></h1>
                </div>
                <div className="w-[50%] nav flex flex-row justify-around">
                    <button className="text-gray-400">Inicio</button>
                    <button className="text-gray-400">Los 80</button>
                    <button className="text-gray-400">Actualidad</button>
                </div>


        </div>
    )
}

export default Navbar