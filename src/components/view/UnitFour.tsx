import Main from "../atom/Main";
import Tabs from "../organism/Tabs";
import RamDraw from "../molecule/SVG/RamDraw";
import { useState } from "react";
import Ram from "../molecule/SVG/Ram";
import MemSize from "../molecule/SVG/MemSize";
import CPUWord from "../molecule/SVG/CPUWord";
import MemoryDirection from "../molecule/SVG/MemoryDirection";
import MemHierarchy from "../molecule/SVG/MemHierarchy";

const UnitFour = () => {
const MemData = [
  {
    title: "Memoria Principal",
    content:
      "Es el área donde se almacenan programas, datos y resultados temporales. Forma parte del modelo de Von Neumann y permite a la CPU leer y escribir información. Está compuesta por celdas independientes, cada una almacenando 1 byte y con una dirección única e inalterable expresada en binario.",
    list: [
      {
        subTitle: "Dirección fija:",
        text: "Cada celda tiene un número binario único. No se puede modificar."
      },
      {
        subTitle: "Contenido de celda:",
        text: "Cada celda almacena 8 bits, es decir, 1 byte."
      },
      {
        subTitle: "Acceso por byte:",
        text: "Las direcciones apuntan a bytes individuales. La CPU puede leer palabras de varios bytes, pero siempre desde direcciones que apuntan al primer byte."
      }
    ]
  },

  {
    title: "Tamaño de la Memoria",
    content:
      "Depende de la cantidad de bits de la dirección. Cuantos más bits tenga una dirección, mayor cantidad de celdas únicas pueden representarse. El tamaño total siempre es una potencia de 2.",
    list: [
      {
        subTitle: "Celdas direccionables:",
        text: "Si una dirección tiene m bits, existen 2^m direcciones posibles."
      },
      {
        subTitle: "Ejemplo:",
        text: "Una memoria de 2 MB son 2^21 bytes totales. Una memoria de 256 celdas usa 8 bits de dirección (2^8)."
      }
    ]
  },

  {
    title: "Palabra de Memoria y CPU",
    content:
      "La palabra de memoria es la cantidad de bytes que la CPU puede leer o escribir en un ciclo. Las arquitecturas modernas manejan palabras de 1, 2, 4 u 8 bytes según si el procesador es de 8, 16, 32 o 64 bits.",
    list: [
      {
        subTitle: "Palabra de CPU:",
        text: "Es la cantidad de información procesada simultáneamente por el procesador."
      },
      {
        subTitle: "Relación con el bus:",
        text: "El bus de datos debe tener tantas líneas como bits se leen por ciclo."
      },
      {
        subTitle: "Procesadores:",
        text: "A mayor cantidad de bits, mayor velocidad y capacidad para manipular datos."
      }
    ]
  },

  {
    title: "Direccionamiento de Memoria",
    content:
      "Para leer o escribir datos, la CPU utiliza distintos registros y un decodificador que selecciona la celda correspondiente.",
    list: [
      {
        subTitle: "RDM (Registro Dirección de Memoria):",
        text: "Contiene la dirección exacta de la celda a acceder."
      },
      {
        subTitle: "RDA (Registro de Datos):",
        text: "Recibe los datos leídos o almacena los que se enviarán para escritura."
      },
      {
        subTitle: "Selector de Memoria (SM):",
        text: "Activa la celda correspondiente a la dirección almacenada en el RDM."
      }
    ]
  },

  {
    title: "Acceso a Memoria – Ciclo",
    content:
      "Es la secuencia completa para leer o escribir entre la CPU y la Memoria Principal.",
    list: [
      {
        subTitle: "Lectura:",
        text: "La CPU coloca la dirección en el RDM, activa el modo lectura y recibe los datos en el RDA."
      },
      {
        subTitle: "Escritura:",
        text: "La CPU envía los datos al RDA, coloca la dirección y activa el modo escritura. La escritura es destructiva (sobrescribe el contenido previo)."
      }
    ]
  },

  {
    title: "Tiempo de Acceso",
    content:
      "Es el tiempo que transcurre desde que la CPU coloca una dirección hasta que obtiene los datos en el bus. La memoria principal es de acceso aleatorio, por lo que todas las celdas tardan lo mismo en ser leídas.",
    list: [
      {
        subTitle: "Acceso random:",
        text: "El tiempo es uniforme para todas las direcciones."
      },
      {
        subTitle: "Identificación en chips:",
        text: "Los chips indican su tiempo de acceso en su código impreso."
      }
    ]
  },

  {
    title: "Tipos de Memoria RAM (SRAM, DRAM y VRAM)",
    content:
      "Las memorias RAM se clasifican según su construcción y velocidad. Cada tipo cumple un rol específico dentro del sistema y afecta directamente el rendimiento global.",
    list: [
      {
        subTitle: "SRAM (Static RAM):",
        text: "Construida con flip-flops. Es extremadamente rápida y no necesita ciclos de refresco. Se utiliza como memoria caché debido a su velocidad, pero es costosa y ocupa más espacio por bit."
      },
      {
        subTitle: "DRAM (Dynamic RAM):",
        text: "Almacena cada bit con un capacitor + transistor. Es más económica y densa, pero requiere refresco continuo porque los capacitores pierden carga. Es la memoria principal de las computadoras."
      },
      {
        subTitle: "VRAM (Video RAM):",
        text: "Memoria especializada para placas de video. Permite lectura y escritura simultáneas y es capaz de manejar grandes volúmenes de datos gráficos. Posee más pines que la RAM común."
      }
    ]
  },

  {
    title: "Buffers",
    content:
      "Un buffer es un área de memoria utilizada para almacenar datos temporalmente mientras se trasladan entre dispositivos o procesos con velocidades diferentes. Su función principal es evitar pérdidas de información y mejorar el rendimiento en operaciones de entrada/salida.",
    list: [
      {
        subTitle: "Sincronización:",
        text: "Compensa diferencias de velocidad entre CPU, memoria y periféricos."
      },
      {
        subTitle: "Almacenamiento temporal:",
        text: "Los datos se guardan mientras se procesan o mientras otro dispositivo está listo para recibirlos."
      },
      {
        subTitle: "Ejemplos:",
        text: "Buffer de teclado, buffer de disco, buffer de reproducción de audio o video."
      }
    ]
  },

  {
    title: "Jerarquía de Memoria",
    content:
      "La memoria del sistema está organizada en niveles con diferentes velocidades, tamaños y costos. La jerarquía permite equilibrar rendimiento y precio, haciendo que los datos más utilizados estén siempre en los niveles más rápidos.",
    list: [
      {
        subTitle: "Registros:",
        text: "Los más rápidos y costosos. Dentro de la CPU."
      },
      {
        subTitle: "Caches (L1, L2, L3):",
        text: "Memorias SRAM muy rápidas que almacenan datos usados frecuentemente."
      },
      {
        subTitle: "Memoria Principal (RAM):",
        text: "Mayor capacidad, menor velocidad que la caché. DRAM."
      },
      {
        subTitle: "Almacenamiento Secundario:",
        text: "SSD, HDD. Mucho más lento, pero con gran capacidad."
      },
      {
        subTitle: "Almacenamiento Terciario:",
        text: "Cintas, almacenamiento en la nube. Muy lento pero barato."
      }
    ]
  },

  {
    title: "Buses",
    content:
      "Los buses son los canales de comunicación que permiten que la CPU, la memoria y los periféricos intercambien información. Están formados por líneas eléctricas que transportan datos, direcciones y señales de control.",
    list: [
      {
        subTitle: "Bus de Datos:",
        text: "Transporta la información que viaja entre CPU, memoria y dispositivos. Su ancho (8, 16, 32, 64 bits) determina cuántos bits se envían en cada ciclo."
      },
      {
        subTitle: "Bus de Direcciones:",
        text: "Es utilizado por la CPU para indicar la dirección exacta de memoria que desea leer o escribir. El tamaño del bus marca la memoria direccionable."
      },
      {
        subTitle: "Bus de Control:",
        text: "Coordina todas las operaciones del sistema. Incluye señales como lectura, escritura, interrupciones, reloj y habilitación de dispositivos."
      }
    ]
  }
];



  const [mensajeDelHijo, setMensajeDelHijo] = useState(0);

  const recibirMensaje = (msg: number) => {
    setMensajeDelHijo(msg);
  };
  const componentsByIndex = [
    <Ram key="ram" />,
    <MemSize key="ms" />,
    <CPUWord key="cw" />,
    <MemoryDirection key="md" />,
    <RamDraw key="rd" />,
    <RamDraw key="rd" />,
    <RamDraw key="rd" />,
    <RamDraw key="rd" />,
    <MemHierarchy key="mh" />,
  ];
  return (
    <Main title="Memorias" gridCols="1">
      <Tabs data={MemData} onEnviarMensaje={recibirMensaje}>
        <div className=" h-full flex items-start justify-center p-10">
          {componentsByIndex[mensajeDelHijo] ?? null}
        </div>
      </Tabs>
    </Main>
  );
};

export default UnitFour;
