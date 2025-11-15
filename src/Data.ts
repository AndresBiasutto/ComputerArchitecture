const dataBase = {
  CompArchitecture: [
    {
      id: 1,
      unit: "Sistemas de Numeración",
      content: [
        {
          title: "Representación interna y externa de los datos",
          content:
            "Los datos que usamos diariamente (números, letras, sonidos, imágenes, etc.) pueden representarse de dos formas diferentes:",
          details: [
            {
              subTitle: "Representación externa",
              info: "la que los humanos entendemos (números, letras, sonidos, imágenes).",
            },
            {
              subTitle: "Representación interna",
              info: "Es la forma en que la computadora interpreta y almacena la información. Todo se convierte en ceros (0) y unos (1), conocidos como sistema binario. Este sistema se basa en señales eléctricas: 1: cuando hay corriente o voltaje. 0: cuando no hay corriente.",
            },
          ],
        },
        {
          title: "Clasificación de los datos",
          content:
            "Como la computadora solo entiende el sistema binario, cada uno de estos tipos debe codificarse (convertirse a ceros y unos) para que el procesador pueda interpretarlo correctamente. Dentro de una computadora, los datos pueden clasificarse según su naturaleza o tipo:",
          details: [
            {
              subTitle: "Numéricos:",
              info: "representan valores de cantidad (por ejemplo, 45, -8, 3.14).",
            },
            {
              subTitle: "Lógicos:",
              info: "representan valores de verdad, como verdadero/falso o 1/0.",
            },
            {
              subTitle: "Imágenes:",
              info: "son conjuntos de puntos (píxeles) que se codifican en binario según su color o intensidad.",
            },
            {
              subTitle: "Sonidos:",
              info: "se almacenan como ondas digitales convertidas en números binarios.",
            },
          ],
        },
        {
          title: "Sistemas de numeración",
          content:
            "Un sistema de numeración es un conjunto de símbolos y reglas que permiten representar cantidades o valores numéricos.Cada sistema tiene una base, que indica la cantidad de símbolos distintos que utiliza y determina el valor de cada posición de las cifras.",
          details: [
            {
              subTitle: "Características principales:",
              info: "Base: número de símbolos que utiliza el sistema. Valor posicional: el valor de cada cifra depende tanto del símbolo como de su posición dentro del número. Por ejemplo, en el sistema decimal, el número 345 significa: (3 × 100) + (4 × 10) + (5 × 1).",
            },
            {
              subTitle: "Tipos de sistemas numéricos:",
              info: "BINARIO (base 2): utiliza dos símbolos (0 y 1). Es el sistema nativo de las computadoras. OCTAL (base 8): utiliza ocho símbolos (0 a 7). HEXADECIMAL (base 16): utiliza dieciséis símbolos (0 a 9 y A a F). DECIMAL (base 10): utiliza diez símbolos (0 a 9). Es el sistema más comúnmente usado por los humanos.",
            },
          ],
        },
        {
          title: "Representación de valores alfanuméricos",
          content:
            "Los caracteres alfanuméricos (letras, números, símbolos) se dividen en dos grupos principales:",
          details: [
            {
              subTitle: "Caracteres imprimibles:",
              info: "Son aquellos que pueden mostrarse en pantalla o imprimirse (por ejemplo, letras, números, signos de puntuación, espacios).",
            },
            {
              subTitle: "Caracteres no imprimibles:",
              info: "No producen una imagen visible, pero tienen funciones de control: De impresión: controlan la disposición del texto (salto de línea, espacio, tabulación).De comunicación: regulan procesos de transmisión de datos, como inicio o fin de texto, confirmación de recepción, etc.",
            },
          ],
        },
        {
          title: "Códigos de representación interna",
          content:
            "Para que las computadoras puedan almacenar y transmitir letras y símbolos, existen códigos binarios estandarizados. Los más conocidos son:",
          details: [
            {
              subTitle: "Código ASCII (American Standard Code for Information Interchange)",
              info: " : utiliza 7 bits para representar caracteres imprimibles y de control. Permite codificar 128 caracteres diferentes, incluyendo letras mayúsculas y minúsculas, números, signos de puntuación y caracteres especiales.",
            },
            {
              subTitle: "Código EBCDIC (Extended Binary Coded Decimal Interchange Code)",
              info: "Código EBCDIC (Extended Binary Coded Decimal Interchange Code): utiliza 8 bits y es común en sistemas IBM. Permite representar 256 caracteres, incluyendo un conjunto más amplio de símbolos y caracteres especiales.",
            },
          ],
        },
      ],
    },
  ],
};
export default dataBase;
