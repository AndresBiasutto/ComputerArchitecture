import { useEffect, useState } from "react";
// import MMemCell from "../molecule/MMemCell";
// import Register from "../molecule/Register";
import Register from "../molecule/Register";
import { FaPlus } from "react-icons/fa";
import AH3 from "../atom/AH3";

const registers = ["CP", "RDM", "MP", "RDA", "RI"];

export default function VonNeumannDiagram() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % registers.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-fit bg-gray-900 text-white font-mono rounded-2xl">
      <div className="h-full w-full flex items-start justify-center gap-4">
        <div className=" min-w-72 m-2 bg-green-900 rounded overflow-hidden">
          <div className=" grid grid-cols-2 p-2  border-2 border-cyan-200 rounded">
            <div className=" col-span-2 flex items-center justify-center ">
              <AH3 text="Memoria" />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={3}
                activeIndex={activeIndex}
                r={"DM"}
                text={"Direccion de memoria"}
                bits={4}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={3}
                activeIndex={activeIndex}
                r={"MEM"}
                text={"Palabra De Memoria"}
                bits={8}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={6}
                activeIndex={activeIndex}
                r={"DM"}
                text={"Direccion de memoria"}
                bits={4}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={7}
                activeIndex={activeIndex}
                r={"MEM"}
                text={"Palabra De Memoria"}
                bits={8}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={6}
                activeIndex={activeIndex}
                r={"DM"}
                text={"Direccion de memoria"}
                bits={4}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={7}
                activeIndex={activeIndex}
                r={"MEM"}
                text={"Palabra De Memoria"}
                bits={8}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={6}
                activeIndex={activeIndex}
                r={"DM"}
                text={"Direccion de memoria"}
                bits={4}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={7}
                activeIndex={activeIndex}
                r={"MEM"}
                text={"Palabra De Memoria"}
                bits={8}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={6}
                activeIndex={activeIndex}
                r={"DM"}
                text={"Direccion de memoria"}
                bits={4}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={7}
                activeIndex={activeIndex}
                r={"MEM"}
                text={"Palabra De Memoria"}
                bits={8}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={6}
                activeIndex={activeIndex}
                r={"DM"}
                text={"Direccion de memoria"}
                bits={4}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={7}
                activeIndex={activeIndex}
                r={"MEM"}
                text={"Palabra De Memoria"}
                bits={8}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={6}
                activeIndex={activeIndex}
                r={"DM"}
                text={"Direccion de memoria"}
                bits={4}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={7}
                activeIndex={activeIndex}
                r={"MEM"}
                text={"Palabra De Memoria"}
                bits={8}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={6}
                activeIndex={activeIndex}
                r={"DM"}
                text={"Direccion de memoria"}
                bits={4}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={7}
                activeIndex={activeIndex}
                r={"MEM"}
                text={"Palabra De Memoria"}
                bits={8}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={6}
                activeIndex={activeIndex}
                r={"DM"}
                text={"Direccion de memoria"}
                bits={4}
              />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={7}
                activeIndex={activeIndex}
                r={"MEM"}
                text={"Palabra De Memoria"}
                bits={8}
              />
            </div>
          </div>
        </div>

        <div className=" min-w-96 m-2 bg-gray-600 rounded overflow-hidden">
          <div className=" grid grid-cols-[1fr_0.5fr_1fr] p-2  border-2 border-cyan-200 rounded">
            <div className=" col-span-3 flex items-center justify-center ">
              <AH3 text="Unidad Aritmético lógica" />
            </div>
            <div className="  flex justify-end items-center">
              {" "}
              <Register
                i={0}
                activeIndex={activeIndex}
                r={"RA"}
                text={"Registro acumulador"}
                bits={8}
              />
            </div>
            <div className="  flex justify-center items-center">
              <div className="flex items-center justify-center">bus</div>
            </div>
            <div className="  flex justify-center items-center row-span-3">
              <FaPlus />
            </div>
            <div className="flex justify-center items-center">
              <div className="flex items-center justify-center ">bus</div>
            </div>
            <div className="w-fit"></div>
            <div className="  flex justify-end items-center">
              <Register
                i={0}
                activeIndex={activeIndex}
                r={"RT"}
                text={"Registro temporal"}
                bits={8}
              />
            </div>
            <div className="  flex justify-center items-center">
              <div className="flex items-center justify-center">bus</div>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_0.5fr_1fr] p-2  border-2 border-cyan-200">
            <div className=" col-span-3  ">
              <AH3 text="Unidad de control" />
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={5}
                activeIndex={activeIndex}
                r={"RI"}
                text={"Registro de instrucciones"}
                bits={4}
              />
            </div>
            <div className="  flex justify-center items-center">
              <div className="flex items-center justify-center">bus</div>
            </div>
            <div className="  flex justify-center items-center row-span-3">
              <FaPlus />
            </div>
            <div className=" flex justify-center items-center">
              <div className="flex items-center justify-center">bus</div>
            </div>
            <div className="w-fit"></div>
            <div className="  flex justify-end items-center">
              <Register
                i={4}
                activeIndex={activeIndex}
                r={"RDA"}
                text={"Registro registro de datos"}
                bits={8}
              />
            </div>
            <div className="  flex justify-center items-center"></div>
            <div className="  flex justify-center items-center">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">bus</div>
              </div>
            </div>
            <div className="  flex justify-center items-center">
              <div className="flex items-center justify-center"></div>
            </div>
            <div className="  flex justify-center items-center">
              <div className="flex items-center justify-center"></div>
            </div>
            <div className="  flex justify-end items-center">
              <Register
                i={2}
                activeIndex={activeIndex}
                r={"RD"}
                text={"Registro registro de direcciones"}
                bits={4}
              />
            </div>
            <div className="  flex justify-center items-center">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">bus</div>
              </div>
            </div>
            <div className="  flex justify-start items-center">
              <div className="flex items-center justify-center">
                <Register
                  i={1}
                  activeIndex={activeIndex}
                  r={"CP"}
                  text={"Contador de programa"}
                  bits={4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-gray-400 text-sm">
        Pulso: <span className="text-yellow-400">{activeIndex + 1}</span>
      </div>
    </div>
  );
}

