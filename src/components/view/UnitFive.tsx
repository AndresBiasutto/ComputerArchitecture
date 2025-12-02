import { useState } from "react";
import Main from "../atom/Main";
import Tabs from "../organism/Tabs";
import VonNewmann from "../molecule/SVG/VonNewmann";
import Cpu from "../molecule/SVG/CPU";
import UC from "../molecule/SVG/UC";
import UAL from "../molecule/SVG/UAL";
import Registers from "../molecule/SVG/Registers";

const UnitFive = () => {
const CpuData = [
  {
    title: "Funcionamiento básico de la Unidad Central de Proceso",
    content:
      "La UCP es el corazón del sistema de cómputo. Ejecuta instrucciones almacenadas en memoria, controla el flujo de datos y realiza operaciones aritméticas y lógicas. Funciona según el modelo de Von Neumann, procesando instrucciones de forma secuencial salvo cuando ocurren saltos o interrupciones.",
    list: [
      {
        subTitle: "Componentes principales:",
        text:
          "Unidad de Control, Unidad Aritmético-Lógica y registros internos que permiten operar con alta velocidad."
      },
      {
        subTitle: "Rol general:",
        text:
          "Extrae instrucciones desde memoria, las interpreta, obtiene los datos necesarios y ejecuta las operaciones requeridas."
      },
      {
        subTitle: "Ejecución secuencial:",
        text:
          "La CPU ejecuta instrucciones en orden, salvo saltos condicionales, llamadas a rutinas o interrupciones."
      }
    ]
  },

  {
    title: "Modelo de Von Neumann",
    content:
      "Modelo arquitectónico clásico donde datos e instrucciones comparten la misma memoria y se acceden a través de un bus en común. El procesamiento es secuencial, guiado por la dirección almacenada en el contador de programa.",
    list: [
      { subTitle: "Memoria única:", text: "Instrucciones y datos se almacenan en el mismo espacio físico." },
      { subTitle: "Ejecución secuencial:", text: "Una instrucción por vez, salvo saltos y excepciones." },
      { subTitle: "Buses compartidos:", text: "Utiliza un único bus para llevar tanto instrucciones como datos." }
    ]
  },

  {
    title: "Unidad de Control (UC)",
    content:
      "La UC dirige el funcionamiento de todo el procesador. Interpreta instrucciones, gestiona la secuencia de ejecución y emite señales de control hacia la memoria, la UAL, los registros y los buses.",
    list: [
      { subTitle: "Decodificación:", text: "Analiza el código de operación almacenado en el registro RI." },
      {
        subTitle: "Secuenciamiento:",
        text:
          "Determina los pasos a seguir para ejecutar cada instrucción según su tipo."
      },
      {
        subTitle: "Señales de control:",
        text: "Activa, desactiva o habilita operaciones internas del procesador."
      }
    ]
  },

  {
    title: "Unidad Aritmético-Lógica (UAL)",
    content:
      "Es la encargada de realizar operaciones aritméticas y lógicas. Opera bajo las órdenes de la Unidad de Control y trabaja principalmente con registros internos.",
    list: [
      { subTitle: "Operaciones aritméticas:", text: "Suma, resta, multiplicación, división, desplazamientos." },
      { subTitle: "Operaciones lógicas:", text: "AND, OR, XOR, NOT, comparaciones." },
      { subTitle: "Uso de registros:", text: "Opera sobre valores almacenados en registros de alta velocidad." }
    ]
  },

  {
    title: "Registros de la UCP",
    content:
      "Pequeñas memorias ultrarrápidas que almacenan datos temporales, direcciones, estados e instrucciones durante el procesamiento.",
    list: [
      { subTitle: "AX (Acumulador):", text: "Almacena datos y resultados de operaciones." },
      { subTitle: "RI (Registro de Instrucción):", text: "Guarda la instrucción actualmente en ejecución." },
      { subTitle: "CP / IP:", text: "Contiene la dirección de la próxima instrucción a ejecutar." },
      { subTitle: "RE (Registro de Estado):", text: "Almacena flags: cero, signo, acarreo, overflow, etc." },
      { subTitle: "SP (Stack Pointer):", text: "Apunta al tope de la pila del sistema." },
      {
        subTitle: "RDA y RDM:",
        text: "Registros que intercambian datos y direcciones con la memoria principal durante operaciones de lectura o escritura."
      }
    ]
  },

  {
    title: "El procesamiento de instrucciones",
    content:
      "Describe el flujo general mediante el cual la CPU interpreta y ejecuta un programa, coordinando la interacción entre registros, buses y módulos internos.",
    list: [
      {
        subTitle: "Secuencia controlada:",
        text: "La Unidad de Control establece los pasos necesarios para cada instrucción."
      },
      {
        subTitle: "Transferencias internas:",
        text: "El procesamiento requiere mover datos entre registros, memoria y buses de forma precisa."
      }
    ]
  },

  {
    title: "Ciclo de una instrucción",
    content:
      "Todos los procesadores siguen un conjunto de etapas para ejecutar instrucciones, independientemente de su tipo. Estas etapas garantizan un funcionamiento ordenado y repetible.",
    list: [
      { subTitle: "1. Obtener instrucción:", text: "La CPU lee desde memoria la instrucción señalada por el CP." },
      { subTitle: "2. Decodificar:", text: "La UC interpreta el código de operación y operandos." },
      { subTitle: "3. Obtener datos:", text: "Si la instrucción lo requiere, se buscan sus datos en memoria o registros." },
      { subTitle: "4. Ejecutar:", text: "La UAL o la UC realizan la acción indicada." },
      { subTitle: "5. Actualizar CP:", text: "Se calcula la dirección de la instrucción siguiente." }
    ]
  },

  {
    title: "La función del reloj",
    content:
      "El reloj es el sincronizador del sistema. Emite pulsos eléctricos constantes que determinan el ritmo al que se ejecutan las operaciones internas.",
    list: [
      { subTitle: "Sincronización:", text: "Todas las operaciones de la CPU están regidas por el reloj." },
      {
        subTitle: "Frecuencia:",
        text: "Medida en Hz. Representa cuántos ciclos por segundo puede ejecutar el procesador."
      },
      {
        subTitle: "Múltiples pulsos:",
        text: "Una instrucción puede requerir varios pulsos para completarse."
      }
    ]
  },

  {
    title: "Modelo de Von Neumann con solapamiento de procesos",
    content:
      "Introduce el pipeline o segmentación de instrucciones. Permite ejecutar simultáneamente diferentes etapas de múltiples instrucciones, aumentando el rendimiento.",
    list: [
      { subTitle: "Paralelismo interno:", text: "Ejecución solapada de varias instrucciones." },
      { subTitle: "Buffers:", text: "Separan etapas del pipeline y almacenan información temporal." },
      { subTitle: "Mayor rendimiento:", text: "Reduce el tiempo promedio entre instrucciones." }
    ]
  },

  {
    title: "Arquitecturas CISC y RISC",
    content:
      "Existen dos grandes filosofías de diseño de procesadores: CISC (instrucciones complejas) y RISC (instrucciones simples). Cada una optimiza de forma diferente el rendimiento, complejidad y la relación hardware–software.",
    list: [
      {
        subTitle: "Procesadores CISC:",
        text:
          "Gran cantidad de instrucciones, muchas de ellas complejas. Usan microprogramación y longitudes de instrucción variables. Menor dependencia de la compilación."
      },
      {
        subTitle: "Procesadores RISC:",
        text:
          "Pocas instrucciones, todas simples y de tamaño fijo. Gran cantidad de registros y pipeline optimizado para ejecutar una instrucción por ciclo."
      },
      {
        subTitle: "Diferencias clave:",
        text:
          "CISC: instrucciones complejas, ejecución más lenta pero más expresivas. RISC: instrucciones simples, alta velocidad y eficiencia en pipelines."
      }
    ]
  },

  {
    title: "Multiprocesamiento o procesamiento en paralelo",
    content:
      "Consiste en utilizar dos o más procesadores para dividir el trabajo y acelerar el procesamiento real. Se diferencia de la multitarea en que aquí las operaciones ocurren verdaderamente al mismo tiempo.",
    list: [
      { subTitle: "Aumento de rendimiento:", text: "Permite ejecutar múltiples instrucciones en paralelo real." },
      { subTitle: "Límite físico:", text: "Supera límites de miniaturización y frecuencia del reloj." },
      { subTitle: "Diferencia con multitarea:", text: "La multitarea alterna; el multiprocesamiento ejecuta simultáneamente." }
    ]
  },

  {
    title: "Modos de direccionamiento",
    content:
      "Determinan cómo una instrucción obtiene los operandos que necesita para funcionar. Cada modo ofrece formas distintas de acceder a memoria o registros.",
    list: [
      { subTitle: "Inmediato:", text: "El operando está dentro de la misma instrucción." },
      { subTitle: "Directo:", text: "La instrucción indica directamente la dirección del operando." },
      { subTitle: "Indirecto:", text: "La dirección especificada contiene otra dirección donde está el operando real." },
      { subTitle: "Por registros:", text: "El operando está almacenado en un registro interno de la CPU." }
    ]
  }
];



  const [mensajeDelHijo, setMensajeDelHijo] = useState(0);

  const recibirMensaje = (msg: number) => {
    setMensajeDelHijo(msg);
  };
  const componentsByIndex = [

    <Cpu key="rd" />,
    <VonNewmann key="rd" />,
    <UC key="rd" />,
    <UAL key="rd" />,
    <Registers key="rd" />,
    <Cpu key="rd" />,

  ];
  return (
    <Main title="Unidad Central de procesamiento (CPU)" gridCols="2">
      <Tabs data={CpuData}  onEnviarMensaje={recibirMensaje} />
        <div className=" h-full flex items-start justify-center p-10">
          {componentsByIndex[mensajeDelHijo] ?? null}
        </div>
    </Main>
  );
};

export default UnitFive;
