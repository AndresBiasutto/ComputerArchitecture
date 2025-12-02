import { useState } from "react";
import Main from "../atom/Main";
import Tabs from "../organism/Tabs";
import LogComp from "../molecule/SVG/LogComp";
import LogicCircuit from "../molecule/SVG/LogicCircuit";

const UnitThree = () => {
  const LogicaData = [
    {
      title: "Compuertas Lógicas",
      content:
        "Circuitos electrónicos formados por transistores que realizan operaciones lógicas binarias (suma, multiplicación). Producen señales de voltaje como salida booleana, pudiendo negar, afirmar, incluir o excluir según sus propiedades. Tienen tablas de verdad que explican su comportamiento en función de los valores de entrada. Se aplican en electrónica, mecánica, hidráulica y neumática.",
      list: [
        {
          subTitle: "Estados de trabajo:",
          text: "Solo operan con dos estados: '1' (5V máximo) o '0' (0V mínimo)",
        },
        {
          subTitle: "Umbral de incertidumbre:",
          text: "Existe un rango entre 0V y 5V donde la salida puede ser impredecible",
        },
      ],
    },
    {
      title: "Tipos de Lógica en Compuertas",
      content:
        "Las compuertas pueden trabajar con lógica positiva o negativa, definiendo cómo interpretan los niveles de voltaje. Esta configuración determina si un voltaje alto representa 1 o 0 binario, afectando el comportamiento del circuito.",
      list: [
        {
          subTitle: "Lógica Positiva:",
          text: "Señal alto = 1 binario (activo), Señal bajo = 0 binario (inactivo)",
        },
        {
          subTitle: "Lógica Negativa:",
          text: "Señal alto = 0 binario (inactivo), Señal bajo = 1 binario (activo)",
        },
      ],
    },
  ];
  const [mensajeDelHijo, setMensajeDelHijo] = useState(0);

  const recibirMensaje = (msg: number) => {
    setMensajeDelHijo(msg);
  };
  const componentsByIndex = [
    <LogComp key="lc" />,
    <LogicCircuit key="cl" />,
  ];
  return (
    <Main title="Compuertas lógicas" gridCols="1">
      <Tabs data={LogicaData} onEnviarMensaje={recibirMensaje}>
        <div className=" h-full flex items-start justify-center p-10">
          {componentsByIndex[mensajeDelHijo] ?? null}
        </div>
      </Tabs>
    </Main>
  );
};

export default UnitThree;
