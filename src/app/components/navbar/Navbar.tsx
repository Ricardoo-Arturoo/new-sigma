"use client";
import SubMenu from "../sub-menu/SubMenu";
import { useState, useRef } from 'react';
import Modal from '../modal/Modal'; // ajusta la ruta
import { FaYoutube } from 'react-icons/fa';



export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="flex justify-center bg-blue-400 h-25 items-center ">

      {/*Activar pop-up*/}
      <button
        type="button"
        ref={triggerRef}
        onClick={() => setOpen(true)}
        className="relative inline-block z-20" // el botón solo sirve de contenedor
      >
        <img
          src="/images/LogoSigma-Domus.png"
          alt="LogoSigma-Domus"
          className="cursor-pointer mt-6 mr-0 w-28 h-28 object-contain"
        />
      </button>



      {/*Sigma Domus bar*/}
      <div className="relative group inline-block divide-y divide-blue-300 ml-20">
        <button className="hover:underline relative h-25 cursor-pointer overflow-hidden bg-blue-400 text-white px-6 py-2 group">
          <span className="relative z-10 ">Sigma Domus ▾</span>
          <span className="absolute inset-0 bg-blue-500 scale-y-0 origin-top transition-transform duration-200 ease-out group-hover:scale-y-100"></span>
        </button>
        <div className="absolute w-43.5 items-center cursor-pointer opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-opacity duration-300 delay-100 bg-blue-500 shadow-md z-10 ">
          <ul className="py-2 text-left min-w-[165px] divide-y divide-blue-300 ">
            <li className="px-4 py-2 hover:underline hover:bg-blue-400 text-center">Quiénes somos?</li>
            <li className="px-4 py-2 hover:underline hover:bg-blue-400 text-center">Clientes</li>
            <li className="px-4 py-2 hover:underline hover:bg-blue-400 text-center">Fundación</li>
            <SubMenu
              className=" px-4 py-2 hover:bg-blue-400 hover:underline text-center "
              title=" MundoSigma ▸"
              items={[
                { key: "ms", label: "Mundo Sigma", onClick: () => console.log("Mundo Sigma") },
                { key: "intra", label: "Intranet", onClick: () => console.log("Intranet") },
              ]}
            />



          </ul>
        </div>

      </div>
      {/*Servicios bar*/}
      <div className="relative group inline-block divide-y divide-blue-300">
        <button className="relative hover:underline h-25 w-40 cursor-pointer overflow-hidden bg-blue-400 text-white px-6 py-2 group">
          <span className="relative z-10 hover:underline">Servicios ▾</span>
          <span className="absolute inset-0 bg-blue-500 scale-y-0 origin-top transition-transform duration-200 ease-out group-hover:scale-y-100"></span>
        </button>
        <div className="absolute  items-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 delay-100 bg-blue-500 shadow-md z-10">
          <ul className="py-2 text-center w-40 divide-y divide-gray-300">
            <SubMenu
              className="px-4 py-2 hover:bg-blue-400 hover:underline text-center cursor-pointer"
              title=" Odontología ▸"
              items={[
                { key: "plan", label: "Planes", onClick: () => console.log("Planes") },
                { key: "norm", label: "Normativas", onClick: () => console.log("Normativas") },
                { key: "usos", label: "Usos del Servicio", onClick: () => console.log("Usos del Servicio") },
              ]}
            />
            <SubMenu
              className="px-4 py-2 hover:bg-blue-400 hover:underline text-center cursor-pointer"
              title=" Oftalmología ▸"
              items={[
                { key: "plan", label: "Planes", onClick: () => console.log("Planes") },
                { key: "norm", label: "Normativas", onClick: () => console.log("Normativas") },
                { key: "usos", label: "Usos del Servicio", onClick: () => console.log("Usos del Servicio") },
              ]}
            />
            <SubMenu
              className="px-4 py-2 hover:bg-blue-400 hover:underline text-center cursor-pointer"
              title=" Fisioterapia ▸"
              items={[
                { key: "plan", label: "Planes", onClick: () => console.log("Planes") },
                { key: "norm", label: "Normativas", onClick: () => console.log("Normativas") },
                { key: "usos", label: "Usos del Servicio", onClick: () => console.log("Usos del Servicio") },
              ]}
            />
            <SubMenu
              className="px-4 py-2 hover:bg-blue-400 hover:underline text-center cursor-pointer"
              title=" Psicología ▸"
              items={[
                { key: "plan", label: "Planes", onClick: () => console.log("Planes") },
                { key: "norm", label: "Normativas", onClick: () => console.log("Normativas") },
                { key: "usos", label: "Usos del Servicio", onClick: () => console.log("Usos del Servicio") },
              ]}
            />
            <SubMenu
              className="px-4 py-2 hover:bg-blue-400 hover:underline text-center cursor-pointer"
              title=" Dermatología ▸"
              items={[
                { key: "plan", label: "Planes", onClick: () => console.log("Planes") },
                { key: "norm", label: "Normativas", onClick: () => console.log("Normativas") },
                { key: "usos", label: "Usos del Servicio", onClick: () => console.log("Usos del Servicio") },
              ]}
            />

          </ul>
        </div>
      </div>
      {/*Directorio Personal bar*/}
      <div className="relative group inline-block ">
        <button className="relative hover:underline h-25 cursor-pointer overflow-hidden bg-blue-400 text-white px-6 py-2 group">
          <span className="relative z-10">Directorio Profesional</span>
          <span className="absolute inset-0 bg-blue-500 scale-y-0 origin-top transition-transform duration-200 ease-out group-hover:scale-y-100"></span>
        </button>
      </div>
      {/*Contacto bar*/}
      <div className="relative group inline-block">
        <button className="relative hover:underline h-25 cursor-pointer overflow-hidden bg-blue-400 text-white px-6 py-2 group">
          <span className="relative z-10">Contacto</span>
          <span className="absolute inset-0 bg-blue-500 scale-y-0 origin-top transition-transform duration-200 ease-out group-hover:scale-y-100"></span>
        </button>
      </div>
      {/*Insumo medico bar*/}
      <div className="relative group inline-block ">
        <button className="relative h-25 hover:underline cursor-pointer overflow-hidden bg-blue-400 text-white px-6 py-2 group">
          <span className="relative z-10">Insumo Médico</span>
          <span className="absolute inset-0 bg-blue-500 scale-y-0 origin-top transition-transform duration-200 ease-out group-hover:scale-y-100"></span>
        </button>
        <div className="absolute items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 bg-blue-400 shadow-md mt-1 z-10">
        </div>
      </div>
      <a className="relative group inline-block p-2 mt-18 hover:underline text-[12px] hover:text-cyan-700" href="/">
        Iniciar Sesión
      </a>
      <p className="mt-18">|</p>
      <a className="relative group inline-block p-2 mt-18 hover:underline text-[12px] hover:text-cyan-700" href="/">
        Resgistrarse
      </a>

      {/*pop-up*/}
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        ariaLabel="Información importante"
      >
        {/*Contenido del pop-up */}
        <img src="/images/Comunicado.jpg" alt="Logo-Cashea" className="rounded w-auto h-auto " draggable="false" />
        <div className="flex justify-end gap-2">
        </div>
      </Modal>

    </div>

  )
}
