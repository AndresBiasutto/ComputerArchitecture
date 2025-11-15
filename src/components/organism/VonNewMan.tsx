import { useEffect, useState } from "react";
// import MMemCell from "../molecule/MMemCell";
// import Register from "../molecule/Register";
import Register from "../molecule/Register";
import { FaPlus } from "react-icons/fa";
import AH3 from "../atom/AH3";

const registers = ["CP", "RDM", "MP", "RDA", "RI", "UAL","ru", "ro","ra"];

export default function VonNeumannDiagram() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % registers.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white font-mono">
      <div className="h-full w-full flex items-start justify-center gap-4">
        <div className=" min-w-96 m-2 bg-gray-800 rounded overflow-hidden">
          <div className=" grid grid-cols-[1fr_0.5fr_1fr] p-2  border-2 border-cyan-200 rounded">
            <div className=" col-span-3  ">
              <AH3 text="Unidad Aritmético lógica" />
            </div>
            <div className="  flex justify-end items-center">
              {" "}
              <Register
                i={6}
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
                i={5}
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
                i={4}
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
                i={3}
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
        <div className=" w-52 h-52  bg-red-50 " >hola</div>
      </div>
      {/*
          <div className="grid grid-cols-3 gap-2 p-2  border-2 border-cyan-200">
            <div className=" col-span-3">
              <AH3 text="Unidad de control" />
            </div>
            <div className="">
              <Register
                i={4}
                activeIndex={activeIndex}
                r={"RI"}
                text={"Registro de Instrucciones"}
                bits={4}
              />
            </div>
            <div className="flex items-center justify-center">bus</div>
            <div className=" row-span-2 flex justify-center items-center">
              <FaPlus />
            </div>
            <div className="">
              <Register
                i={1}
                activeIndex={activeIndex}
                r={"RD"}
                text={"Registro de datos"}
                bits={8}
              />
            </div>
            <div className="flex items-center justify-center">bus</div>
            <div className="">
              <Register
                i={1}
                activeIndex={activeIndex}
                r={"RDA"}
                text={"Registro de Direcciones"}
                bits={4}
              />
            </div>
            <div className="flex items-center justify-center">bus</div>
            <div className="flex justify-end">
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
      </div> */}

      <div className="mt-8 text-gray-400 text-sm">
        Pulso: <span className="text-yellow-400">{activeIndex + 1}</span>
      </div>
    </div>
  );
}
{
  /* <div
          className={`absolute h-100 w-100 top-0 left-80  border-2 border-cyan-200 `}
        >
          <div className=" w-full h-full relative bg-green-600">
            <div className="absolute bottom-4 right-4 ">
              <Register
                i={1}
                activeIndex={activeIndex}
                r={"CP"}
                text={"Registro contador de programa"}
                bits={4}
              />
            </div>
            <div className="absolute bottom-4 left-4 ">
              <Register
                i={2}
                activeIndex={activeIndex}
                r={"RD"}
                text={"Registro de direcciones"}
                bits={4}
              />
            </div>
            <div className="absolute bottom-20 left-4 ">
              <Register
                i={3}
                activeIndex={activeIndex}
                r={"RDA"}
                text={"Registro de datos"}
                bits={8}
              />
            </div>
            <div className="absolute bottom-40 left-4 ">
              <Register
                i={4}
                activeIndex={activeIndex}
                r={"RI"}
                text={"Registro de instrucciones"}
                bits={4}
              />
            </div>
          </div>
        </div> */
}
{
  /* <div
          className={`absolute h-20 w-20 top-20 left-0 ${
            activeIndex === 5 ? "bg-blue-300" : "bg-red-300"
          }`}
        ></div> */
}
{
  /* <div
          className={`absolute h-20 w-20 top-40 left-0 ${
            activeIndex === 4 ? "bg-blue-300" : "bg-red-300"
          }`}
        ></div>
        <div
          className={`absolute h-20 w-20 top-60 left-0 ${
            activeIndex === 2 ? "bg-blue-300" : "bg-red-300"
          }`}
        ></div>
        <div
          className={`absolute h-20 w-20 top-80 left-0 ${
            activeIndex === 3 ? "bg-blue-300" : "bg-red-300"
          }`}
        ></div>
        <div
          className={`absolute h-fit w-fit top-80 left-0 ${
            activeIndex === 3 ? "bg-blue-300" : "bg-red-300"
          }`}
        >
          <div className={`w-full h-full relative`}>
            <MMemCell />
          </div>
        </div> */
}

{
  /* {registers.map((r, i) => (
          <div key={r} className="flex items-center">
            <Register i={i} activeIndex={activeIndex} r={r} />

            {i < registers.length - 1 && (
              <div className="relative w-16 h-1 bg-gray-700 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-yellow-400 transition-all duration-200 ${
                    i === activeIndex ? "animate-flow" : "opacity-0"
                  }`}
                />
              </div>
            )}
          </div>
        ))} */
}
