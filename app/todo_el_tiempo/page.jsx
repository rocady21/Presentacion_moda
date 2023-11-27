"use client"

import { useState } from "react";
import 'react-responsive-modal/styles.css';

import CardInfo from "../components/CardInfo";
import { todo_el_tiempo } from "../utils/moda";
import Modal from "react-responsive-modal";
import Image from "next/image";

export default function Todo_El_Tiempo() {

  const [selectedToModal, setSelectedToModal] = useState(null)
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="text-gray-600">
      <div className="categorias mt-[50px] w-[80%] m-auto relative">
        <div className="flex flex-col my-3 w-full">
          <div className="title my-[25px]">
            <h1 className="text-center text-[30px]">1910's</h1>

          </div>
          <div className="imgs grid grid-cols-3 gap-2 justify-around w-full">
            {
              todo_el_tiempo[1910].map((dat)=> {
                  return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={dat} />
              })
            }

          </div>
        </div>
        <div className="flex flex-col my-3 w-full">
          <div className="title my-[25px]">
            <h1 className="text-center text-[30px]">1920's</h1>

          </div>
          <div className="imgs grid grid-cols-3 gap-2 justify-around w-full">
            {
              todo_el_tiempo[1920].map((dat)=> {
                  return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={dat} />
              })
            }

          </div>
        </div>
        <div className="flex flex-col my-3 w-full">
          <div className="title my-[25px]">
            <h1 className="text-center text-[30px]">1930's</h1>

          </div>
          <div className="imgs grid grid-cols-3 gap-2 justify-around w-full">
            {
              todo_el_tiempo[1930].map((dat)=> {
                  return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={dat} />
              })
            }

          </div>
        </div>
        <div className="flex flex-col my-3 w-full">
          <div className="title my-[25px]">
            <h1 className="text-center text-[30px]">1940's</h1>

          </div>
          <div className="imgs grid grid-cols-3 gap-2 justify-around w-full">
            {
              todo_el_tiempo[1940].map((dat)=> {
                  return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={dat} />
              })
            }

          </div>
        </div>
        <div className="flex flex-col my-3 w-full">
          <div className="title my-[25px]">
            <h1 className="text-center text-[30px]">1950's</h1>

          </div>
          <div className="imgs grid grid-cols-3 gap-2 justify-around w-full">
            {
              todo_el_tiempo[1950].map((dat)=> {
                  return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={dat} />
              })
            }

          </div>
        </div>
        <div className="flex flex-col my-3 w-full">
          <div className="title my-[25px]">
            <h1 className="text-center text-[30px]">1960's</h1>

          </div>
          <div className="imgs grid grid-cols-3 gap-2 justify-around w-full">
            {
              todo_el_tiempo[1960].map((dat)=> {
                  return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={dat} />
              })
            }

          </div>
        </div>
        <div className="flex flex-col my-3 w-full">
          <div className="title my-[25px]">
            <h1 className="text-center text-[30px]">1970's</h1>

          </div>
          <div className="imgs grid grid-cols-3 gap-2 justify-around w-full">
            {
              todo_el_tiempo[1970].map((dat)=> {
                  return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={dat} />
              })
            }

          </div>
        </div>
        <div className="flex flex-col my-3 w-full">
          <div className="title my-[25px]">
            <h1 className="text-center text-[30px]">1990's</h1>

          </div>
          <div className="imgs grid grid-cols-3 gap-2 justify-around w-full">
            {
              todo_el_tiempo[1990].map((dat)=> {
                  return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={dat} />
              })
            }

          </div>
        </div>
        <div className="flex flex-col my-3 w-full">
          <div className="title my-[25px]">
            <h1 className="text-center text-[30px]">2000's</h1>

          </div>
          <div className="imgs grid grid-cols-3 gap-2 justify-around w-full">
            {
              todo_el_tiempo[2000].map((dat)=> {
                  return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={dat} />
              })
            }

          </div>
        </div>
        <Modal open={open} onClose={onCloseModal} center>
                <div className="flex flex-col bg-white p-0">
                    <div style={{ position: "relative", width: "100%", height: "450px" }} className="image bg-black">
                        <Image
                            src={selectedToModal?.img}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="text  overflow-hidden flex flex-col  p-3">
                        <h1 className="title font-bold ">{selectedToModal?.title}:</h1>
                        <p className="">{selectedToModal?.info}</p>
                    </div>
                </div>
        </Modal>
        

      </div>
    </div>
  )
}
