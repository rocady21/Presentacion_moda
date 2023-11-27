
import Image from "next/image";
import 'animate.css';

const CardInfo = ({ data,updateModal,openModal,peli }) => {
  const { title, info, img } = data;

    const verMas = ()=> {
        updateModal(data)
        openModal()
    }


  return (
<div className="w-[90%] animate__animated animate__slideInUp shadow-xl shadow-black/30 m-auto bg-gray-200 my-[25px] overflow-hidden flex flex-col justify-between">
  <div style={{ position: "relative", width: "100%", height: "250px" }} className="image bg-gray-200 overflow-hidden">
    <Image
      src={img}
      alt={title}
      layout="fill"
      objectFit="contain"
      className="hover:scale-125 ease-in duration-300"
    />
  </div>
  <div className={`overflow-hidden flex flex-col justify-around max-h-[200px] p-3`}>
    <div className="flex flex-col">
      <h1 className="title font-bold ">{title}:</h1>
      <p className="truncate ...">{info ? info : null}</p>
      <button onClick={verMas} className="w-[90%] self-center justify-self-end mt-2 px-2 py-1 bg-gray-900 text-gray-200 font-light uppercase shadow-black/10 shadow-md">Ver mas</button>
    </div>
  </div>
</div>
  );
};

export default CardInfo