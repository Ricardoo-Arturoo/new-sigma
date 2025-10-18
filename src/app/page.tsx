import { Carousel } from "./components";

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

export default function Home() {
  return (
    <main className="bg-white ">
      <div className="relative z-0 border-t-30 overflow-hidden">
          <Carousel slides={slides} autoPlay autoPlayInterval={5000} />
          <div className="absolute inset-0 bg-green-400"></div>
          <div className="absolute inset-0 bg-blue-300 transform skew-y-6 origin-top-left -translate-y-8"></div>
        </div>
    </main>
  );
}
