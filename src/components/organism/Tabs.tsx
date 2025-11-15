import { useState } from "react";
import ASection from "../molecule/ASection";

const Tabs = () => {
  const tabs = ["Tab No.1", "Tab No.2", "Tab No.3", "Tab No.4"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex justify-center items-start h-screen bg-blue-950">
      <div className="text-center">
        {/* Tabs superiores */}
        <ul className="w-full flex justify-center items-center m-2">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={` font-pixelify cursor-pointer px-4 text-gray-500 border-b-8 transition-colors duration-200 ${
                activeTab === index
                  ? "text-green-500 border-blue-500"
                  : "border-transparent"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Contenido */}
        <div className="w-full mx-auto">
          {activeTab === 0 && (
            <ASection
              title="Representación interna y externa de los datos"
              text="Representación externa: la que los humanos entendemos (números, letras, sonidos, imágenes).Representación interna: la que entiende la computadora (solo ceros y unos, es decir, sistema binario).El sistema interpreta los datos en forma de señales eléctricas (corriente = 1, sin corriente = 0).">
              Content 1
            </ASection>
          )}
          {activeTab === 1 && <div>Content 2</div>}
          {activeTab === 2 && <div>Content 3</div>}
          {activeTab === 3 && <div>Content 4</div>}
        </div>

        {/* Tabs inferiores */}
        <ul className="flex justify-center items-center my-4">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`cursor-pointer py-3 px-4 rounded transition-colors duration-200 ${
                activeTab === index
                  ? "bg-green-500 text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Botones de navegación */}
        <div className="flex gap-4 justify-center border-t p-4">
          {activeTab > 0 && (
            <button
              className="py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow"
              onClick={() => setActiveTab(activeTab - 1)}
            >
              Back
            </button>
          )}
          {activeTab < tabs.length - 1 && (
            <button
              className="py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow"
              onClick={() => setActiveTab(activeTab + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
