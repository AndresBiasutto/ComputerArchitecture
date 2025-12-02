import { useState } from "react";
import Main from "../atom/Main";
import Tabs from "../organism/Tabs";
import SisNum from "../molecule/SVG/SisNum";
import SisNumPos from "../molecule/SVG/SisNumPos";
import AsciiTable from "../molecule/SVG/ASCCITable";

const UnitTwo = () => {
  const NumeracionData = [
    {
      title: "Sistemas de Numeración y Representación de Datos",
      content:
        "Los datos tienen representación externa (comprensible para humanos) e interna (binaria para computadoras). El sistema binario usa solo 0s y 1s porque las computadoras entienden presencia/ausencia de corriente. Los sistemas de numeración son conjuntos de símbolos y reglas para representar cantidades, caracterizados por su base.",
      list: [
        {
          subTitle: "Datos Numéricos:",
          text: "Valores numéricos en diferentes bases",
        },
        {
          subTitle: "Datos Alfanuméricos:",
          text: "Letras, números y símbolos combinados",
        },
        {
          subTitle: "Datos Lógicos:",
          text: "Valores booleanos (verdadero/falso)",
        },
        {
          subTitle: "Imágenes y Sonidos:",
          text: "Datos multimedia codificados digitalmente",
        },
      ],
    },
    {
      title: "Sistemas de Numeración Posicionales",
      content:
        "Los sistemas actuales son posicionales: el valor de cada cifra depende de su valor absoluto y posición. La base determina los símbolos disponibles y el coeficiente para calcular valores posicionales.",
      list: [
        {
          subTitle: "Sistema Binario (Base 2):",
          text: "Símbolos: 0, 1 - Usado internamente por computadoras",
        },
        {
          subTitle: "Sistema Octal (Base 8):",
          text: "Símbolos: 0-7 - Usado como notación compacta",
        },
        {
          subTitle: "Sistema Decimal (Base 10):",
          text: "Símbolos: 0-9 - Sistema usado cotidianamente",
        },
        {
          subTitle: "Sistema Hexadecimal (Base 16):",
          text: "Símbolos: 0-9, A-F - Usado en programación y direcciones de memoria",
        },
      ],
    },
    {
      title: "Representación de Caracteres Alfanuméricos",
      content:
        "Los caracteres alfanuméricos se dividen en imprimibles (producen imagen visible) y no imprimibles (de control). Se usan códigos específicos para representarlos internamente en binario.",
      list: [
        {
          subTitle: "Caracteres Imprimibles:",
          text: "Letras, números, símbolos - producen imagen al enviarse a periféricos",
        },
        {
          subTitle: "Caracteres No Imprimibles:",
          text: "Control de impresión (acciones) y comunicaciones (protocolos)",
        },
      ],
    },
    {
      title: "Código ASCII",
      content:
        "Código estándar ampliamente usado para representar caracteres. Versión estándar usa 7 bits (128 caracteres), versión extendida usa 8 bits (256 caracteres). Incluye letras, números, símbolos y caracteres de control.",
      list: [
        {
          subTitle: "ASCII Estándar:",
          text: "7 bits - 128 caracteres - incluye bit extra para control de errores",
        },
        {
          subTitle: "ASCII Extendido:",
          text: "8 bits - 256 caracteres - incluye caracteres gráficos y vocales acentuadas",
        },
        {
          subTitle: "Caracteres de Control:",
          text: "ENTER, ESPACIO, ACK, BEL - para control de impresión y comunicaciones",
        },
      ],
    },
    {
      title: "Ejemplos de Codificación ASCII",
      content:
        "Cada carácter tiene representación en binario, hexadecimal y decimal. Las letras están ordenadas secuencialmente, permitiendo ordenamientos alfabéticos. La tabla ASCII organiza caracteres por coordenadas hexadecimales.",
      list: [
        {
          subTitle: "Letras Mayúsculas:",
          text: "A = 01000001 = 41H = 65D, B = 01000010 = 42H = 66D, ... Z = 01011010 = 5AH = 90D",
        },
        {
          subTitle: "Letras Minúsculas:",
          text: "a = 01100001 = 61H = 97D, b = 01100010 = 62H = 98D, ... z = 01111010 = 7AH = 122D",
        },
        {
          subTitle: "Números:",
          text: "0 = 00110000 = 30H = 48D, 1 = 00110001 = 31H = 49D, ... 9 = 00111001 = 39H = 57D",
        },
      ],
    },
    {
      title: "Código EBCDIC",
      content:
        "Código alternativo al ASCII, principalmente usado en sistemas mainframe de IBM. Usa 8 bits desde su diseño original, proporcionando 256 combinaciones posibles. Menos común que ASCII en sistemas modernos.",
      list: [],
    },
  ];
  const [mensajeDelHijo, setMensajeDelHijo] = useState(0);

  const recibirMensaje = (msg: number) => {
    setMensajeDelHijo(msg);
  };
  const componentsByIndex = [
    <SisNum key="sn" />,
    <SisNumPos key="snp" />,
    <SisNum key="sn" />,
    <AsciiTable key="at" />,
    <AsciiTable key="at" />,
    <AsciiTable key="at" />,
  ];
  return (
    <Main title="Sistemas de numeración" gridCols="1">
      <Tabs data={NumeracionData} onEnviarMensaje={recibirMensaje}>
        <div className=" h-full flex items-start justify-center p-10">
          {componentsByIndex[mensajeDelHijo] ?? null}
        </div>
      </Tabs>
    </Main>
  );
};

export default UnitTwo;
