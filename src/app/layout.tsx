
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";
import { NavbarSecundaria } from "./components/navbar/NavbarSecundaria";
import { Carousel } from "./components";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


export const metadata: Metadata = {
  title: "Sigma",
  description: "Menu principal Sigma",
};

{/*Para el carrusel de fotos*/}
const slides = [
  { src: "/images/carousel/Oftalmologia.jpg", alt: "Oftalmología", caption: "Servicio de Oftalmología" },
  { src: "/images/carousel/Dermatologia.jpg", alt: "Dermatología", caption: "Servicio de Dermatología" },
  { src: "/images/carousel/Fisioterapia.jpg", alt: "Fisioterapia", caption: "Servicio de Fisioterapia" },
  { src: "/images/carousel/Psicologia.jpg", alt: "Psicología", caption: "Servicio de Psicología" },
  { src: "/images/carousel/Responsabilidad.jpg", alt: "Responsabilidad", caption: "Compromiso por la Responsabilidad Social" },
  { src: "/images/carousel/Salud.jpg", alt: "Salud", caption: "26 Años al Servicio de tu Salud" },
  { src: "/images/carousel/Pacientes.jpg", alt: "Pacientes", caption: "8.500.000 Pacientes Afiliados" },
  { src: "/images/carousel/Medicos.jpg", alt: "Medicos", caption: "2.500 Profesionales Incluidos a la Red de Servicios" },
  { src: "/images/carousel/Implementos.jpg", alt: "Implementos", caption: "Distribución Exclusiva y Suministro del Material Sanitario Para los Profesionales de la Red" },
  { src: "/images/carousel/Disponibilidad.jpg", alt: "Disponibilidad", caption: "Garantizamos Disponibilidad Operativa con la Replica de Toda Nuestra Informacion en el Centro de Datos NAP" },
  { src: "/images/carousel/Autogestion.jpg", alt: "Autogestion", caption: "Nube de Autogestión: Servicio Online Para Pacientes, Profesionales y Clientes Comerciales" },
  { src: "/images/carousel/Atencion.jpg", alt: "Atencion", caption: "Servicio de atención al cliente" },

];


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-bold">
        <Navbar />
        <NavbarSecundaria />

        <div className="relative z-0 border-t-30 overflow-hidden">
          <Carousel slides={slides} autoPlay autoPlayInterval={5000} />
          <div className="absolute inset-0 bg-green-400"></div>
          <div className="absolute inset-0 bg-blue-300 transform skew-y-6 origin-top-left -translate-y-8"></div>
        </div>

        <main className="bg-white text-gray-900 h-[100px] flex-1">
          {children}
        </main>

        {/*footer */}

        <div className="bg-gray-200 font-normal">
          <footer className="bg-gray-900 text-white flex py-2 mt-15">
            <span className="ml-10 text-[13px]">© 2023 Sigma Domus C.A - J304985185</span>
            <div className="mr-4 ml-auto flex gap-6">
              <a href="https://www.youtube.com/user/SigmaDentalVzla1"><FaYoutube /></a>
              <a href="https://twitter.com/Sigma_Dental"><FaTwitter /></a>
              <a href="https://www.instagram.com/sigmadental"><FaInstagram /></a>
              <a href="https://www.facebook.com/SigmaDentalVE"><FaFacebookSquare /></a>
            </div>
          </footer>
        </div>

        


      </body>
    </html>
  );
}

