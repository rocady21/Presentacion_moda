"use client"

import { useState } from "react";
import CardInfo from "./components/CardInfo"
import { todo_el_tiempo } from "./utils/moda"
import { useRouter } from "next/navigation";
import 'animate.css';

export default function Home() {
  const router = useRouter()
  
  const nav1 = ()=> {
    router.push("/los80")
  }
  const nav2 = ()=> {
    router.push("/todo_el_tiempo")
  }
  return (
    <div className="home h-screen w-full flex flex-col relative ">
      <div className="flex flex-row justify-between ">
        <div className="title">
          <h1 className="text-[35px] shadow-black/10 shadow-lg  text-white mx-[100px]">80<span className="uppercase text-red-600 font-bold">Modas</span></h1>
        </div>
        <div className="buttons self-end mx-[25px] my-[15px] animate__animated animate__bounceInRight ">
          <button onClick={nav1} className="bg-red-600 shadow-black/30 shadow-lg  mx-5 text-[18px] px-4 py-1 rounded text-white font-bold " >Los 80's</button>
          <button onClick={nav2} className="bg-red-600 shadow-black/30 shadow-lg  text-[18px] px-4 py-1 rounded text-white font-bold " >Moda general</button>


        </div>

      </div>
      <div className="w-full animate__animated animate__bounceInLeft text-center text-white font-bold texto absolute top-[35%] left-auto right-auto">
        <h2 className="text-[45px]">Parcial de moda de los 80's</h2>
        <h3 className="text-[30px]" >Dámaris Bizoso, 5to AE</h3>
        <h4 className="text-[25px]" >Derechos reservados a Rodrigo Olivera</h4>
      </div>
    </div>
  )
}
