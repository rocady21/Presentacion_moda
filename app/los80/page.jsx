"use client"
import react, { useState } from "react";
import { Moda, Musica, juegos, libros, peliculas } from "../utils/moda";
import CardInfo from "../components/CardInfo";
import { IoIosArrowForward } from "react-icons/io";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Image from "next/image";

const LosOchenta = () => {

    const [selectedToModal, setSelectedToModal] = useState(null)
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [state, setState] = useState("Vestimenta")
    return (
        <div className="w-full flex flex-row justify-around">
            <div className="DatosAdicionalesButtons mt-[100px]  text-gray-200 buttons  m-auto  flex flex-col items-center">
                <button onClick={() => setState("Contexto Historico")} className={`uppercase w-full my-2 text-light flex flex-row items-center justify-between p-3 rounded ${state === "Contexto Historico" ? "bg-white text-purple-600 " : ""}`}>
                    Contexto Hist.
                    <IoIosArrowForward className="color-white" />
                </button>

                <button onClick={() => setState("Vestimenta")} className={`uppercase w-full my-2 text-light flex flex-row items-center justify-between p-3 rounded ${state === "Vestimenta" ? "bg-white text-purple-600 " : ""}`}>
                    Vestimenta
                    <IoIosArrowForward className="color-white" />
                </button>

                <button onClick={() => setState("Accesorios")} className={`uppercase w-full my-2 text-light flex flex-row items-center justify-between p-3 rounded ${state === "Accesorios" ? "bg-white text-purple-600" : ""}`}>
                    Accesorios
                    <IoIosArrowForward className="color-white" />
                </button>

                <button onClick={() => setState("Calzados")} className={`uppercase w-full my-2 text-light flex flex-row items-center justify-between p-3 rounded ${state === "Calzados" ? "bg-white text-purple-600" : ""}`}>
                    Calzados
                    <IoIosArrowForward className="color-white" />
                </button>

                <button onClick={() => setState("Maquillaje")} className={`uppercase w-full my-2 text-light flex flex-row items-center justify-between p-3 rounded ${state === "Maquillaje" ? "bg-white text-purple-600" : ""}`}>
                    Maquillaje
                    <IoIosArrowForward className="color-white" />
                </button>

                <button onClick={() => setState("Peinados")} className={`uppercase w-full my-2 text-light flex flex-row items-center justify-between p-3 rounded ${state === "Peinados" ? "bg-white text-purple-600" : ""}`}>
                    Peinados
                    <IoIosArrowForward className="color-white" />
                </button>

                <button onClick={() => setState("Manicurismo")} className={`uppercase w-full my-2 text-light flex flex-row items-center justify-between p-3 rounded ${state === "Manicurismo" ? "bg-white text-purple-600" : ""}`}>
                    Manicurismo
                    <IoIosArrowForward className="color-white" />
                </button>

                <button onClick={() => setState("Literatura")} className={`uppercase w-full my-2 text-light flex flex-row items-center justify-between p-3 rounded ${state === "Literatura" ? "bg-white text-purple-600" : ""}`}>
                    Literatura
                    <IoIosArrowForward className="color-white" />
                </button>

                <button onClick={() => setState("Películas")} className={`uppercase w-full my-2 text-light flex flex-row items-center justify-between p-3 rounded ${state === "Películas" ? "bg-white text-purple-600" : ""}`}>
                    Películas
                    <IoIosArrowForward className="color-white" />
                </button>

                <button onClick={() => setState("Videojuegos")} className={`uppercase w-full my-2 text-light flex flex-row items-center justify-between p-3 rounded ${state === "Videojuegos" ? "bg-white text-purple-600" : ""}`}>
                    Videojuegos
                    <IoIosArrowForward className="color-white" />
                </button>

                <button onClick={() => setState("Artistas")} className={`uppercase w-full my-2 text-light flex flex-row items-center justify-between p-3 rounded ${state === "Artistas" ? "bg-white text-purple-600" : ""}`}>
                    Artistas
                    <IoIosArrowForward className="color-white" />
                </button>
                <button onClick={() => setState("Webgrafía")} className={`uppercase my-2 w-full text-light flex flex-row items-center justify-between p-3 rounded ${state === "Webgrafía" ? "bg-white text-purple-600" : ""}`}>
                    Webgrafía
                    <IoIosArrowForward className="color-white" />
                </button>
            </div>
            <div className="flex w-[80%] flex-col px-[100px] w-full">

                {state === "Vestimenta" ? <div className=" my-5 flex flex-col bg-white items-center">
                    <h1 className="text-black font-bold uppercase">Vestimenta</h1>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-2">
                        {
                            Moda.Vestimenta.map((vesti) => {
                                return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={vesti} />
                            })
                        }
                    </div>

                </div> : state === "Calzados" ? <div className="my-5 bg-white flex flex-col items-center">
                    <h1 className="text-black font-bold uppercase">Calzados</h1>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                        {
                            Moda.Calzados.map((vesti) => {
                                return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={vesti} />
                            })
                        }
                    </div>
                </div> : state === "Maquillaje" ? <div className="w-[90%] mt-5 bg-white m-auto">
                    <h1 className="text-white text-center  uppercase">Maquillaje</h1>
                    <div className="info px-[50px] py-[20px] bg-white ">

                        <div className="w-full flex flex-row justify-between">
                            <div className="text w-[60%]">
                                <p>Los años 80 fueron una etapa de gran expansión económica y aumentó considerablemente la
                                    preocupación por el cuerpo, por la apariencia y el estilo.
                                    Sus características principales fueron el uso de sombras de colores oscuros, el delineado del
                                    ojo por dentro y por fuera para darle un toque agresivo y de
                                    rasgos marcados. Ambos elementos, combinados con un atuendo
                                    triangular o cuadrado, se convirtieron en expresión de rebeldía.
                                    El resultado de la combinación de la feminidad natural de la mujer con
                                    este estilo liberal y masculino fue una propuesta que se consideró
                                    andrógina. No dejaba atrás el toque femenino, pero sí lo dotaba de
                                    suficiente fuerza y agresividad como para convertirlo en un look
                                    imponente.
                                    <hr />
                                     El rubor era un aliado indiscutible y hasta podemos decir que
                                    protagonizó muchos eventos y presentaciones.
                                    Se utilizaba sin escatimar nada, en la parte alta de las mejillas y, muchas
                                    veces, extendido hacia arriba. Y, cuando decimos que no se escatimaba
                                    su uso, lo decimos en serio: se aplicaba en grandes proporciones, incluso
                                    en el día a día.
                                    La técnica de uso de rubor vigente en estos años se conoce como draping. Consiste en logar un
                                    efecto de crecimiento del color, por lo que se usaba el rubor en las mejillas y se mezclaba en otras
                                    partes, para afilar y elevar la intensidad de los pómulos.</p>
                            </div>
                            <div style={{ position: "relative", width: "38%", height: "450px" }} className="image bg-black">
                                <Image
                                    src="https://debulevar.files.wordpress.com/2019/06/harper-s-bazaar-spain-april-daphne-groeneveld-amp-lt-e27705419d48bd41449aad7ec0d27a20a.jpg?w=940"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="texto2 py-5">
                            <p>Al igual que con el rubor, el maquillaje, en general, se utilizaba en grandes cantidades. Nada difuminado ni aclarado: todo intenso, con notoriedad. Solo cuando se buscaba un aspecto natural, por alguna razón, se actuaba de forma distinta. Como la intención era expresar una personalidad alocada, se empleaban potentes sombras de ojos, extendidas por toda el área, así como labiales de tonos cargados e intensos. Y lo más importante: los tonos neón eran tan comunes que los veías a diario.</p>
                            <div style={{ position: "relative", width: "100%", height: "350px" }} className="image bg-black py-2">
                                <Image
                                    src="https://www.druni.es/blog/wp-content/uploads/2022/03/01-31-800x427.jpg"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="texto3 py-5">
                            <p>La mandíbula se marcaba y se difuminaba
hasta la sien. La nariz adquiría un matiz
rígido gracias al sombreado del tabique nasal.
 <hr />
 Los pómulos se maquillaban con bases mate
y también se perfilaban de manera afilada
para darle un aspecto cuadrado a la cara.
 Para los ojos se utilizaba el lápiz khol y se
delineaban de forma rasgada (tanto dentro
como fuera del ojo). Posteriormente, se
aplicaban sombras de colores contrastantes
(muy fuertes, tonos puros y llamativos), especialmente, en la noche.
 También se empleaban constantemente las pestañas postizas.
</p>
                            <div style={{ position: "relative", width: "100%", height: "350px" }} className="image bg-black py-2">
                                <Image
                                    src="https://escuelademaquillajemadrid.com/wp-content/uploads/2023/03/Maquillaje-de-los-80-Madonna-Cindy-Lauper.jpg"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        

                        </div>
                    </div>

                </div> : state === "Peinados" ? <div className="my-5 bg-white  flex flex-col items-center">
                    <h1 className="text-black font-bold uppercase">Peinados</h1>
                    <div className="grid grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                        {
                            Moda.Peinados.map((peinados) => {
                                return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={peinados} />
                            })
                        }
                    </div>
                </div> : state === "Manicurismo" ? <div className="w-[90%] mt-5 m-auto">
                    <h1 className="text-white text-center  uppercase">Manicurismo</h1>
                    <div className="info px-[50px] py-[20px] bg-white flex flex-col ">

                        <div className="w-full flex flex-row justify-between">

                            <div style={{ position: "relative", width: "30%", height: "450px" }} className="image bg-gray-200">
                                <Image
                                    src="https://www.soycarmin.com/export/sites/debate/img/2021/10/19/unxas_historia_2.jpg_686523296.jpg"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div style={{ position: "relative", width: "30%", height: "450px" }} className="image bg-gray-200">
                                <Image
                                    src="https://i.pinimg.com/originals/6e/74/13/6e74138859c63665e2eb28c3ccfe2436.jpg"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div style={{ position: "relative", width: "30%", height: "450px" }} className="image bg-gray-200">
                                <Image
                                    src="https://phantom-telva.unidadeditorial.es/a593dbcf73375bf617e93ecc84d0e1f3/crop/0x0/2047x3067/assets/multimedia/imagenes/2020/01/30/15804100127050.jpg"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="texto2">
                            <p>Durante la década de los 80 y 90 la gente empezó a experimentar con colores, formas y estampados
                                en sus uñas. Las mujeres apostaban por lucir sus uñas más largas y más cuadradas, siendo esto una
                                evolución natural de la manicura francesa. Durante la Era grunge, tanto las mujeres como los
                                hombres se pintaban las uñas con tonos oscuros, mayormente de negro.</p>
                        </div>

                    </div>

                </div>
                    : state === "Música" ? <div>

                    </div>
                        : state === "Literatura" ? <div className="w-[90%] m-auto flex flex-col items-center p-5">
                            <div className="info p-5 bg-white">
                                <h1 className="uppercase text-black my-2 text-center font-bold text-[20px]">Literatura</h1>
                                <p> La literatura es también crucial para describir una época, tanto que muchas novelas la han llegado a
                                    marcar. Desde Status escogemos ocho libros y sus respectivos autores que marcaron los ochenta.</p>
                                <div className="examples grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                                    {
                                        libros.map((libro) => {
                                            return <CardInfo peli={true} openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={libro} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                            : state === "Películas" ? <div className="w-[90%] bg-white p-5 m-auto mt-2">
                                <div className="info p-5 bg-white">
                                    <h1 className="uppercase text-black my-2 text-center font-bold text-[20px]">Peliculas</h1>
                                    <div className="examples grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                                        {
                                            peliculas.map((peli) => {
                                                return <CardInfo peli={true} openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={peli} />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                                : state === "Videojuegos" ? <div className="my-5 bg-white flex flex-col items-center">
                                    <h1 className="text-black font-bold uppercase">Juegos</h1>
                                    <p className="py-2 text-center">En los 80 nacieron los eSports y los shooters en primera persona. Estos son algunos ejemplos:</p>
                                    <div className="grid xl:grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-2">
                                        {
                                            juegos.map((juego) => {
                                                return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={juego} />
                                            })
                                        }
                                    </div>
                                </div>
                                    : state === "Accesorios" ? <div className="my-5 bg-white flex flex-col items-center">
                                        <h1 className="text-black font-bold uppercase">Accesorios</h1>
                                        <div className="grid grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                                            {
                                                Moda.Accesorios.map((Accesorios) => {
                                                    return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={Accesorios} />
                                                })
                                            }
                                        </div>
                                    </div> : state === "Contexto Historico" ? <div className="bg-white px-5 py-2 w-[80%] m-auto mt-[50px]">
                                    <h1 className="text-black font-bold uppercase">Contexto Historico</h1>
                                        <p className="px-2 py-3">La década de los 80 fue bastante turbulenta y disruptiva en varios aspectos a nivel mundial. Justo un
                                            año antes de comenzarla, las tensiones por causa de la Guerra Fría se activaron de nuevo. La
                                            existencia del sida se hacia publica en 1981, en 1986 estallaba la central nuclear de Chernóbil, la
                                            Guerra de las Malvinas, la guerra entre Irán e Irak, en 1989 la caída del muro de Berlín.
                                            El auge de los videojuegos como la GameBoy, el desarrollo de las páginas web (World Wide Web),
                                            el inolvidable concierto Live Aid considerado como el mayor evento musical a día de hoy, el disco
                                            Thriller de Michael Jackson se convertía en el más vendido de la historia, la CNN es fundada, la
                                            primera edición de los Premios Príncipe de Asturias, Madonna, Windows 1.0.
                                        </p>

                                    </div> : state === "Webgrafía"? <div className="bg-white p-5 text-center mt-[30%] m-auto">
                                            <a className="outline-none" target="_blank" href="https://drive.google.com/file/d/1GGzD8T4fOs2VxMN5WBUPO0vyw1Rvm6v9/view?usp=drivesdk">Webigrafia aqui</a>
                                    </div> : <div className="px-2 bg-white w-[90%] mt-5 flex flex-col items-center">
                                        <h1 className="text-black font-bold uppercase">Artistas</h1>
                                        <p className="my-1 mx-2 text-center">Los años 80 fueron una gran época para la música, pues fue el inicio de una generación de nuevos
cantantes y un nuevo estilo de música</p>
                                        <div className="w-full grid grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                                            {
                                                Musica.map((music) => {
                                                    return <CardInfo openModal={onOpenModal} updateModal={(data) => setSelectedToModal(data)} data={music} />
                                                })
                                            }
                                        </div>
                                        
                                    </div>}

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

    )
}

export default LosOchenta