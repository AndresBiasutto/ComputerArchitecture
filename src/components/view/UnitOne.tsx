import Tabs from "../organism/Tabs";
import Main from "../atom/Main";
import Hardware from "../molecule/SVG/Hardware";
import { useState } from "react";
import CircuitTransistor from "../molecule/SVG/CircuitTransistor";
import PrincipalPCComponents from "../molecule/SVG/PrincipalPCComponents";
import CPUComponents from "../molecule/SVG/CPUComponents";
import Perifericals from "../molecule/SVG/Perifericals";
import Motherboard from "../molecule/SVG/Motherboard";

const UnitOne = () => {
  const HardwareData = [
    {
      title: "Hardware y Componentes Básicos",
      content:
        "El hardware se refiere a todas las partes físicas de una computadora que se pueden tocar, incluyendo la CPU y los periféricos. La CPU es el centro de procesamiento, mientras que los periféricos permiten la entrada, salida y almacenamiento de datos. Los sistemas informáticos combinan computadora y periféricos para funcionar.",
      list: [
        {
          subTitle: "CPU:",
          text: "Unidad Central de Proceso - realiza el procesamiento real de datos y programas.",
        },
        {
          subTitle: "Periféricos:",
          text: "Dispositivos que permiten introducir datos, obtener información procesada y almacenar datos.",
        },
      ],
    },
    {
      title: "Chips y Circuitos Integrados",
      content:
        "Los chips son circuitos integrados que contienen desde decenas hasta millones de componentes electrónicos. Evolucionaron desde el transistor individual hasta circuitos complejos. La Ley de Moore describe cómo el número de transistores se duplica aproximadamente cada dos años, permitiendo mayor potencia en menor espacio.",
      list: [
        {
          subTitle: "Transistor:",
          text: "Inventado en 1947, reemplazó las válvulas de vacío, permitiendo computadoras más pequeñas y eficientes.",
        },
        {
          subTitle: "Circuito Integrado:",
          text: "Creado a fines de los 50, integra múltiples transistores y resistencias en un solo chip.",
        },
      ],
    },
    {
      title: "Componentes Principales de una PC",
      content:
        "Las PCs tienen diseño modular para facilitar reparaciones y actualizaciones. Los componentes principales incluyen placa madre, fuente de alimentación, unidades de almacenamiento y periféricos. Cada componente tiene función específica y se conecta mediante interfaces estandarizadas.",
      list: [
        {
          subTitle: "Placa Madre (Motherboard):",
          text: "Contiene CPU, memorias, ranuras de expansión y conectores principales.",
        },
        {
          subTitle: "Unidades de Almacenamiento:",
          text: "Discos duros, flexibles y ópticos para guardar datos y programas.",
        },
        {
          subTitle: "Tarjetas Controladoras:",
          text: "Gestionan la comunicación entre periféricos y la CPU.",
        },
      ],
    },
    {
      title: "Periféricos y Dispositivos",
      content:
        "Los periféricos se conectan a la CPU y se clasifican por función: entrada, salida, almacenamiento y comunicación. Cada periférico requiere una plaqueta controladora para su operación.",
      list: [
        {
          subTitle: "Dispositivos de Entrada:",
          text: "Teclado, mouse, scánner - convierten datos a formato que la CPU entiende.",
        },
        {
          subTitle: "Dispositivos de Salida:",
          text: "Monitor, impresora - convierten información procesada a formato comprensible.",
        },
        {
          subTitle: "Dispositivos de Almacenamiento:",
          text: "Discos, cintas - almacenan datos y programas para acceso frecuente.",
        },
        {
          subTitle: "Dispositivos de Comunicación:",
          text: "Módem, tarjetas de red - permiten comunicación con otras computadoras.",
        },
      ],
    },
    {
      title: "Componentes de la CPU",
      content:
        "La CPU controla el flujo de información y ejecuta instrucciones. Sus seis componentes principales trabajan coordinadamente: memoria principal, ALU, unidad de control, bus interno, interfaces y reloj.",
      list: [
        {
          subTitle: "Memoria Principal:",
          text: "Almacena programas, datos y resultados intermedios temporalmente.",
        },
        {
          subTitle: "ALU (Unidad Aritmético-Lógica):",
          text: "Realiza operaciones matemáticas y lógicas con los datos.",
        },
        {
          subTitle: "Unidad de Control:",
          text: "Dirige el flujo electrónico e interpreta instrucciones del programa.",
        },
        {
          subTitle: "Bus Interno:",
          text: "Canal de transmisión para comunicación interna y con periféricos.",
        },
        {
          subTitle: "Interfaces:",
          text: "Conectan periféricos al sistema mediante puertos serie o paralelo.",
        },
        {
          subTitle: "Reloj:",
          text: "Genera pulsos para sincronizar operaciones, medido en MHz o GHz.",
        },
      ],
    },
    {
      title: "Motherboard y sus Componentes",
      content:
        "La placa madre es el circuito principal donde se conectan todos los componentes. Incluye zócalo de CPU, ranuras de memoria, chipset, BIOS, conectores de alimentación y puertos de expansión. El chipset gestiona la comunicación entre componentes.",
      list: [
        {
          subTitle: "Chipset:",
          text: "Northbridge (rápido) y Southbridge (lento) - gestionan comunicación entre CPU y otros componentes.",
        },
        {
          subTitle: "BIOS:",
          text: "Software en memoria no volátil que realiza funciones básicas y testeo de dispositivos.",
        },
        {
          subTitle: "Conectores:",
          text: "USB, VGA, HDMI, audio, red - permiten conexión de periféricos externos.",
        },
        {
          subTitle: "Ranuras de Expansión:",
          text: "ISA, PCI, PCI Express - permiten añadir tarjetas para mejorar capacidades.",
        },
      ],
    },
    {
      title: "Sockets y Procesadores",
      content:
        "Los sockets conectan el procesador a la motherboard. Han evolucionado desde el Socket 7 hasta sockets específicos para AMD e Intel. Los multiprocesadores permiten conectar varios CPUs, operando en modo asimétrico o simétrico (SMP).",
      list: [
        {
          subTitle: "Socket:",
          text: "Receptáculo que conecta el microprocesador con la placa madre.",
        },
        {
          subTitle: "Modo Asimétrico:",
          text: "Cada procesador realiza tareas diferentes sin acelerar el tratamiento.",
        },
        {
          subTitle: "Modo Simétrico (SMP):",
          text: "Las tareas se distribuyen equitativamente entre procesadores para mayor rendimiento.",
        },
      ],
    },
  ];
  const [mensajeDelHijo, setMensajeDelHijo] = useState(0);

  const recibirMensaje = (msg: number) => {
    setMensajeDelHijo(msg);
  };
  const componentsByIndex = [
    <Hardware key="hardware" />,
    <CircuitTransistor key="ct" />,
    <PrincipalPCComponents key="pc" />,
    <Perifericals key="pf" />,
    <CPUComponents key="cpu" />,
    <Motherboard key="cpu" />,
  ];
  return (
    <Main
      title="Descripción de los elementos de arquitectura básica"
      gridCols="1"
    >
      <Tabs data={HardwareData} onEnviarMensaje={recibirMensaje}>
        <div className=" h-full flex items-start justify-center p-10">
          {componentsByIndex[mensajeDelHijo] ?? null}
        </div>
      </Tabs>
    </Main>
  );
};

export default UnitOne;
