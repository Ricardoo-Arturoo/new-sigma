import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";


export const NavbarSecundaria = () => {
    return (
        <div className="flex justify-end bg-green-500 h-10 items-center z-1">

            <img src="/images/SigmaDomus.png" alt="SigmaDomus" className="w-70 h-auto absolute left-0.5 top--10" />
            <FaPhoneAlt className="mr-2" />
            <span className="mr-10 text-white">Urgencias: (0800) SIGMADE / 7446233 </span>
            {/* Pacientes */}
            <div className="relative group inline-block divide-y divide-green-300">
                <button className="relative cursor-pointer overflow-hidden bg-green-500 text-white px-6 py-2 group">
                    <span className="relative z-10 flex">
                        <IoMdPerson className="mr-2 mt-0.5 h-5 w-5" /> Pacientes ▾
                    </span>
                    <span className="absolute inset-0 bg-green-600 scale-y-0 origin-top transition-transform duration-200 ease-out group-hover:scale-y-100"></span>
                </button>
                <div className="absolute w-42.5 items-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 delay-100 bg-green-600 shadow-md z-10">
                    <ul className="py-2 text-center divide-y divide-green-300">
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Odontología</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Oftalmología</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Fisioterapia</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Psicología</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Dermatología</li>
                    </ul>
                </div>
            </div>

            {/* Profesionales */}
            <div className="relative group inline-block divide-y divide-green-300">
                <button className="relative cursor-pointer overflow-hidden bg-green-500 text-white px-6 py-2 group">
                    <span className="relative z-10 flex">
                        <FaUserDoctor className="mr-2 mt-1" /> Profesionales ▾
                    </span>
                    <span className="absolute inset-0 bg-green-600 scale-y-0 origin-top transition-transform duration-200 ease-out group-hover:scale-y-100"></span>
                </button>

                <div className="absolute items-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 delay-100 bg-green-600 shadow-md z-10">
                    <ul className="py-2 text-center divide-y divide-green-300">
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Oficina Del Odontología</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Oficina Del Oftalmología</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Oficina Del Fisioterapia</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Oficina Del Psicología</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Oficina Del Dermatología</li>
                    </ul>
                </div>
            </div>

            {/* Clientes Comerciales */}
            <div className="relative group inline-block divide-y divide-green-300">
                <button className="relative cursor-pointer overflow-hidden bg-green-500 text-white px-6 py-2 group">
                    <span className="relative z-10 flex">
                        <FaUserTie className="mr-2 mt-1 h-4 w-4" /> Clientes Comerciales ▾
                    </span>
                    <span className="absolute inset-0 bg-green-600 scale-y-0 origin-top transition-transform duration-200 ease-out group-hover:scale-y-100"></span>
                </button>
                <div className="absolute items-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 delay-100 bg-green-600 shadow-md z-10">
                    <ul className="py-2 text-center divide-y divide-green-300">
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Actualización de Data</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Informe de Servicios</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Reembolso de Monturas y Lentes</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Reembolsos</li>
                        <li className="px-4 py-2 hover:underline hover:bg-green-500 cursor-pointer scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100">Odontología</li>
                    </ul>
                </div>
            </div>

            {/* Alianzas */}
            <div className="relative group inline-block divide-y divide-green-300">
                <button className="relative hover:underline cursor-pointer overflow-hidden bg-green-500 text-white px-6 py-2 group">
                    <span className="relative z-10 hover:underline">Alianzas</span>
                    <span className="absolute inset-0 bg-green-600 scale-y-0 origin-top transition-transform duration-200 ease-out group-hover:scale-y-100"></span>
                </button>
            </div>
        </div>

    )
}
