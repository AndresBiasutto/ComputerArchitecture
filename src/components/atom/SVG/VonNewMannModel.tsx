import type { SVGProps } from "react";
import { useState } from "react";

const VonNewmmannModel = (props: SVGProps<SVGSVGElement>) => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent<SVGGElement | SVGPathElement>, id: string) => {
    setHoveredComponent(id);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<SVGGElement | SVGPathElement>) => {
    if (hoveredComponent) {
      setTooltipPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredComponent(null);
  };

  // Función para obtener la descripción basada en el ID
  const getDescription = (id: string): string => {
    const descriptions: Record<string, string> = {
      IntegratedGPU: "Integrated GPU: A graphics processing unit built into the CPU or chipset for handling visual output without a dedicated graphics card.",
      PuenteNorte: "Puente Norte (North Bridge): Part of the chipset that connects the CPU to high-speed components like RAM and graphics cards.",
      GenReloj: "Generador de Reloj (Clock Generator): Provides timing signals to synchronize the operations of the computer's components.",
      PuenteSUr: "Puente Sur (South Bridge): Handles lower-speed peripherals and I/O operations like USB, audio, and storage.",
      I_OSelector: "I/O Selector: Manages input/output operations and device selection in the system.",
      RanuraGrafics: "Ranura Gráfica (Graphics Slot): PCIe slot for installing a dedicated graphics card.",
      RanurasPCI: "Ranuras PCI: Expansion slots for adding peripheral cards like network cards or sound cards.",
      RanurasRAM: "Ranuras RAM: Slots for installing random access memory modules, used for temporary data storage.",
      BIOS: "BIOS: Basic Input/Output System chip that initializes hardware during boot and provides runtime services.",
      CPU: "CPU: Central Processing Unit, the brain of the computer that executes instructions.",
      Cables: "Cables: Connections representing data and power pathways between components.",
      BusLCP: "Bus LCP: Low Pin Count bus for connecting low-speed peripherals.",
      BusPCI: "Bus PCI: Peripheral Component Interconnect bus for expansion cards.",
      BusPCI_2: "Bus PCI (Secondary): Additional PCI bus connection.",
      BusRAM: "Bus RAM: Connection between CPU and RAM for data transfer.",
      BusGPU: "Bus GPU: Connection to the graphics processing unit.",
      BusInterno: "Bus Interno: Internal bus connecting north and south bridges.",
      BusDelantero: "Bus Delantero (Front Side Bus): High-speed bus connecting CPU to north bridge."
    };
    
    return descriptions[id] || "Descripción no disponible";
  };

  return (
    <div style={{ position: "relative" }}>
      <svg
        width={500}
        height={500}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g id="VonNewmannModel">
          {/* Integrated GPU */}
          <g 
            id="IntegratedGPU"
            onMouseEnter={(e) => handleMouseEnter(e, "IntegratedGPU")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <rect
              id="Rectangle 36"
              x={440.5}
              y={314.5}
              width={54}
              height={54}
              rx={1.5}
              fill="#03412B"
              stroke="#1E1E1E"
            />
            <rect
              id="Rectangle 37"
              x={447.375}
              y={320.688}
              width={40.25}
              height={40.9375}
              rx={2.5}
              fill="#5A5656"
              stroke="#414141"
            />
            <g id="details">
              <circle
                id="Ellipse 14"
                cx={491.759}
                cy={340.321}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 15"
                cx={491.759}
                cy={342.384}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 16"
                cx={491.759}
                cy={344.446}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 17"
                cx={491.759}
                cy={338.259}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 18"
                cx={468.384}
                cy={316.946}
                r={0.5}
                transform="rotate(90 468.384 316.946)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 19"
                cx={466.321}
                cy={316.946}
                r={0.5}
                transform="rotate(90 466.321 316.946)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 20"
                cx={464.259}
                cy={316.946}
                r={0.5}
                transform="rotate(90 464.259 316.946)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 21"
                cx={470.446}
                cy={316.946}
                r={0.5}
                transform="rotate(90 470.446 316.946)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 22"
                cx={468.384}
                cy={365.071}
                r={0.5}
                transform="rotate(90 468.384 365.071)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 23"
                cx={466.321}
                cy={365.071}
                r={0.5}
                transform="rotate(90 466.321 365.071)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 24"
                cx={464.259}
                cy={365.071}
                r={0.5}
                transform="rotate(90 464.259 365.071)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 25"
                cx={470.446}
                cy={365.071}
                r={0.5}
                transform="rotate(90 470.446 365.071)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 10"
                cx={442.946}
                cy={340.321}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 12"
                cx={442.946}
                cy={342.384}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 13"
                cx={442.946}
                cy={344.446}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 11"
                cx={442.946}
                cy={338.259}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
            </g>
          </g>

          {/* Puente Norte */}
          <g 
            id="PuenteNorte"
            onMouseEnter={(e) => handleMouseEnter(e, "PuenteNorte")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <g id="Rectangle 38">
              <mask id="path-20-inside-1_31_410" fill="white">
                <rect x={227} y={146} width={60} height={61} rx={3} />
              </mask>
              <rect
                x={227}
                y={146}
                width={60}
                height={61}
                rx={3}
                fill="#1E1E1E"
                stroke="#816A57"
                strokeWidth={8}
                mask="url(#path-20-inside-1_31_410)"
              />
            </g>
          </g>

          {/* Generador de Reloj */}
          <g 
            id="GenReloj"
            onMouseEnter={(e) => handleMouseEnter(e, "GenReloj")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <g id="Rectangle 39">
              <mask id="path-21-inside-2_31_410" fill="white">
                <rect x={143} y={101} width={54} height={55} rx={3} />
              </mask>
              <rect
                x={143}
                y={101}
                width={54}
                height={55}
                rx={3}
                fill="#1E1E1E"
                stroke="#023423"
                strokeWidth={8}
                mask="url(#path-21-inside-2_31_410)"
              />
            </g>
          </g>

          {/* Puente Sur */}
          <g 
            id="PuenteSUr"
            onMouseEnter={(e) => handleMouseEnter(e, "PuenteSUr")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <g id="Rectangle 39_2">
              <mask id="path-22-inside-3_31_410" fill="white">
                <rect x={229} y={311} width={60} height={61} rx={3} />
              </mask>
              <rect
                x={229}
                y={311}
                width={60}
                height={61}
                rx={3}
                fill="#1E1E1E"
                stroke="#816A57"
                strokeWidth={8}
                mask="url(#path-22-inside-3_31_410)"
              />
            </g>
          </g>

          {/* I/O Selector */}
          <g 
            id="I/OSelector"
            onMouseEnter={(e) => handleMouseEnter(e, "I_OSelector")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <g id="Rectangle 39_3">
              <mask id="path-23-inside-4_31_410" fill="white">
                <rect x={318} y={388} width={60} height={61} rx={3} />
              </mask>
              <rect
                x={318}
                y={388}
                width={60}
                height={61}
                rx={3}
                fill="#1E1E1E"
                stroke="#816A57"
                strokeWidth={8}
                mask="url(#path-23-inside-4_31_410)"
              />
            </g>
          </g>

          {/* Ranura Gráfica */}
          <g 
            id="RanuraGrafics"
            onMouseEnter={(e) => handleMouseEnter(e, "RanuraGrafics")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <rect
              id="Rectangle 40"
              x={5}
              y={93}
              width={24}
              height={160}
              rx={1}
              fill="#17329D"
              stroke="#131F4E"
              strokeWidth={2}
            />
            <g id="details_2">
              <path
                id="Rectangle 35"
                d="M6 97H13C14.1046 97 15 97.8954 15 99V99.7143C15 100.819 14.1046 101.714 13 101.714H6V97Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 41"
                d="M28 97H21C19.8954 97 19 97.8954 19 99V99.7143C19 100.819 19.8954 101.714 21 101.714H28V97Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 42"
                d="M6 104H13C14.1046 104 15 104.895 15 106V106.714C15 107.819 14.1046 108.714 13 108.714H6V104Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 43"
                d="M28 104H21C19.8954 104 19 104.895 19 106V106.714C19 107.819 19.8954 108.714 21 108.714H28V104Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 44"
                d="M6 111H13C14.1046 111 15 111.895 15 113V113.714C15 114.819 14.1046 115.714 13 115.714H6V111Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 45"
                d="M28 111H21C19.8954 111 19 111.895 19 113V113.714C19 114.819 19.8954 115.714 21 115.714H28V111Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 46"
                d="M6 118H13C14.1046 118 15 118.895 15 120V120.714C15 121.819 14.1046 122.714 13 122.714H6V118Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 47"
                d="M28 118H21C19.8954 118 19 118.895 19 120V120.714C19 121.819 19.8954 122.714 21 122.714H28V118Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 48"
                d="M6 125H13C14.1046 125 15 125.895 15 127V127.714C15 128.819 14.1046 129.714 13 129.714H6V125Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 49"
                d="M28 125H21C19.8954 125 19 125.895 19 127V127.714C19 128.819 19.8954 129.714 21 129.714H28V125Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 50"
                d="M6 132H13C14.1046 132 15 132.895 15 134V134.714C15 135.819 14.1046 136.714 13 136.714H6V132Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 51"
                d="M28 132H21C19.8954 132 19 132.895 19 134V134.714C19 135.819 19.8954 136.714 21 136.714H28V132Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 52"
                d="M6 139H13C14.1046 139 15 139.895 15 141V141.714C15 142.819 14.1046 143.714 13 143.714H6V139Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 53"
                d="M28 139H21C19.8954 139 19 139.895 19 141V141.714C19 142.819 19.8954 143.714 21 143.714H28V139Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 54"
                d="M6 146H13C14.1046 146 15 146.895 15 148V148.714C15 149.819 14.1046 150.714 13 150.714H6V146Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 55"
                d="M28 146H21C19.8954 146 19 146.895 19 148V148.714C19 149.819 19.8954 150.714 21 150.714H28V146Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 56"
                d="M6 153H13C14.1046 153 15 153.895 15 155V155.714C15 156.819 14.1046 157.714 13 157.714H6V153Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 57"
                d="M28 153H21C19.8954 153 19 153.895 19 155V155.714C19 156.819 19.8954 157.714 21 157.714H28V153Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 58"
                d="M6 160H13C14.1046 160 15 160.895 15 162V162.714C15 163.819 14.1046 164.714 13 164.714H6V160Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 59"
                d="M28 160H21C19.8954 160 19 160.895 19 162V162.714C19 163.819 19.8954 164.714 21 164.714H28V160Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 60"
                d="M6 167H13C14.1046 167 15 167.895 15 169V169.714C15 170.819 14.1046 171.714 13 171.714H6V167Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 61"
                d="M28 167H21C19.8954 167 19 167.895 19 169V169.714C19 170.819 19.8954 171.714 21 171.714H28V167Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 62"
                d="M6 174H13C14.1046 174 15 174.895 15 176V176.714C15 177.819 14.1046 178.714 13 178.714H6V174Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 63"
                d="M28 174H21C19.8954 174 19 174.895 19 176V176.714C19 177.819 19.8954 178.714 21 178.714H28V174Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 64"
                d="M6 181H13C14.1046 181 15 181.895 15 183V183.714C15 184.819 14.1046 185.714 13 185.714H6V181Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 65"
                d="M28 181H21C19.8954 181 19 181.895 19 183V183.714C19 184.819 19.8954 185.714 21 185.714H28V181Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 66"
                d="M6 188H13C14.1046 188 15 188.895 15 190V190.714C15 191.819 14.1046 192.714 13 192.714H6V188Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 67"
                d="M28 188H21C19.8954 188 19 188.895 19 190V190.714C19 191.819 19.8954 192.714 21 192.714H28V188Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 68"
                d="M6 204H13C14.1046 204 15 204.895 15 206V206.714C15 207.819 14.1046 208.714 13 208.714H6V204Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 69"
                d="M28 204H21C19.8954 204 19 204.895 19 206V206.714C19 207.819 19.8954 208.714 21 208.714H28V204Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 70"
                d="M6 211H13C14.1046 211 15 211.895 15 213V213.714C15 214.819 14.1046 215.714 13 215.714H6V211Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 71"
                d="M28 211H21C19.8954 211 19 211.895 19 213V213.714C19 214.819 19.8954 215.714 21 215.714H28V211Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 72"
                d="M6 218H13C14.1046 218 15 218.895 15 220V220.714C15 221.819 14.1046 222.714 13 222.714H6V218Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 73"
                d="M28 218H21C19.8954 218 19 218.895 19 220V220.714C19 221.819 19.8954 222.714 21 222.714H28V218Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 74"
                d="M6 225H13C14.1046 225 15 225.895 15 227V227.714C15 228.819 14.1046 229.714 13 229.714H6V225Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 75"
                d="M28 225H21C19.8954 225 19 225.895 19 227V227.714C19 228.819 19.8954 229.714 21 229.714H28V225Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 76"
                d="M6 232H13C14.1046 232 15 232.895 15 234V234.714C15 235.819 14.1046 236.714 13 236.714H6V232Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 77"
                d="M28 232H21C19.8954 232 19 232.895 19 234V234.714C19 235.819 19.8954 236.714 21 236.714H28V232Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 78"
                d="M6 239H13C14.1046 239 15 239.895 15 241V241.714C15 242.819 14.1046 243.714 13 243.714H6V239Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 79"
                d="M28 239H21C19.8954 239 19 239.895 19 241V241.714C19 242.819 19.8954 243.714 21 243.714H28V239Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 80"
                d="M6 246H13C14.1046 246 15 246.895 15 248V248.714C15 249.819 14.1046 250.714 13 250.714H6V246Z"
                fill="#816A57"
              />
              <path
                id="Rectangle 81"
                d="M28 246H21C19.8954 246 19 246.895 19 248V248.714C19 249.819 19.8954 250.714 21 250.714H28V246Z"
                fill="#816A57"
              />
            </g>
          </g>

          {/* Ranuras PCI */}
          <g 
            id="RanurasPCI"
            onMouseEnter={(e) => handleMouseEnter(e, "RanurasPCI")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <g id="RanuraPCI">
              <rect
                id="Rectangle 40_2"
                x={5}
                y={281}
                width={14.7742}
                height={137}
                rx={1}
                fill="#F4FFE2"
                stroke="#D9D9D9"
                strokeWidth={2}
              />
              <g id="details_3">
                <path
                  id="Rectangle 35_2"
                  d="M5.29034 284.29H9.0968C10.2014 284.29 11.0968 285.186 11.0968 286.29V286.335C11.0968 287.44 10.2014 288.335 9.0968 288.335H5.29034V284.29Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 41_2"
                  d="M19.4839 284.29H15.6774C14.5729 284.29 13.6774 285.186 13.6774 286.29V286.335C13.6774 287.44 14.5729 288.335 15.6774 288.335H19.4839V284.29Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 42_2"
                  d="M5.29034 290.296H9.0968C10.2014 290.296 11.0968 291.192 11.0968 292.296V292.341C11.0968 293.446 10.2014 294.341 9.0968 294.341H5.29034V290.296Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 43_2"
                  d="M19.4839 290.296H15.6774C14.5729 290.296 13.6774 291.192 13.6774 292.296V292.341C13.6774 293.446 14.5729 294.341 15.6774 294.341H19.4839V290.296Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 44_2"
                  d="M5.29034 296.302H9.0968C10.2014 296.302 11.0968 297.198 11.0968 298.302V298.347C11.0968 299.452 10.2014 300.347 9.0968 300.347H5.29034V296.302Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 45_2"
                  d="M19.4839 296.302H15.6774C14.5729 296.302 13.6774 297.198 13.6774 298.302V298.347C13.6774 299.452 14.5729 300.347 15.6774 300.347H19.4839V296.302Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 46_2"
                  d="M5.29034 302.309H9.0968C10.2014 302.309 11.0968 303.204 11.0968 304.309V304.354C11.0968 305.458 10.2014 306.354 9.0968 306.354H5.29034V302.309Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 47_2"
                  d="M19.4839 302.309H15.6774C14.5729 302.309 13.6774 303.204 13.6774 304.309V304.354C13.6774 305.458 14.5729 306.354 15.6774 306.354H19.4839V302.309Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 48_2"
                  d="M5.29034 308.315H9.0968C10.2014 308.315 11.0968 309.21 11.0968 310.315V310.36C11.0968 311.464 10.2014 312.36 9.0968 312.36H5.29034V308.315Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 49_2"
                  d="M19.4839 308.315H15.6774C14.5729 308.315 13.6774 309.21 13.6774 310.315V310.36C13.6774 311.464 14.5729 312.36 15.6774 312.36H19.4839V308.315Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 50_2"
                  d="M5.29034 314.321H9.0968C10.2014 314.321 11.0968 315.216 11.0968 316.321V316.366C11.0968 317.471 10.2014 318.366 9.0968 318.366H5.29034V314.321Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 51_2"
                  d="M19.4839 314.321H15.6774C14.5729 314.321 13.6774 315.216 13.6774 316.321V316.366C13.6774 317.471 14.5729 318.366 15.6774 318.366H19.4839V314.321Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 52_2"
                  d="M5.29034 320.327H9.0968C10.2014 320.327 11.0968 321.223 11.0968 322.327V322.372C11.0968 323.477 10.2014 324.372 9.0968 324.372H5.29034V320.327Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 53_2"
                  d="M19.4839 320.327H15.6774C14.5729 320.327 13.6774 321.223 13.6774 322.327V322.372C13.6774 323.477 14.5729 324.372 15.6774 324.372H19.4839V320.327Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 54_2"
                  d="M5.29034 326.333H9.0968C10.2014 326.333 11.0968 327.229 11.0968 328.333V328.378C11.0968 329.483 10.2014 330.378 9.0968 330.378H5.29034V326.333Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 55_2"
                  d="M19.4839 326.333H15.6774C14.5729 326.333 13.6774 327.229 13.6774 328.333V328.378C13.6774 329.483 14.5729 330.378 15.6774 330.378H19.4839V326.333Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 56_2"
                  d="M5.29034 332.34H9.0968C10.2014 332.34 11.0968 333.235 11.0968 334.34V334.384C11.0968 335.489 10.2014 336.384 9.0968 336.384H5.29034V332.34Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 57_2"
                  d="M19.4839 332.34H15.6774C14.5729 332.34 13.6774 333.235 13.6774 334.34V334.384C13.6774 335.489 14.5729 336.384 15.6774 336.384H19.4839V332.34Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 58_2"
                  d="M5.29034 338.346H9.0968C10.2014 338.346 11.0968 339.241 11.0968 340.346V340.391C11.0968 341.495 10.2014 342.391 9.0968 342.391H5.29034V338.346Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 59_2"
                  d="M19.4839 338.346H15.6774C14.5729 338.346 13.6774 339.241 13.6774 340.346V340.391C13.6774 341.495 14.5729 342.391 15.6774 342.391H19.4839V338.346Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 60_2"
                  d="M5.29034 344.352H9.0968C10.2014 344.352 11.0968 345.247 11.0968 346.352V346.397C11.0968 347.501 10.2014 348.397 9.0968 348.397H5.29034V344.352Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 61_2"
                  d="M19.4839 344.352H15.6774C14.5729 344.352 13.6774 345.247 13.6774 346.352V346.397C13.6774 347.501 14.5729 348.397 15.6774 348.397H19.4839V344.352Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 62_2"
                  d="M5.29034 350.358H9.0968C10.2014 350.358 11.0968 351.253 11.0968 352.358V352.403C11.0968 353.508 10.2014 354.403 9.0968 354.403H5.29034V350.358Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 63_2"
                  d="M19.4839 350.358H15.6774C14.5729 350.358 13.6774 351.253 13.6774 352.358V352.403C13.6774 353.508 14.5729 354.403 15.6774 354.403H19.4839V350.358Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 64_2"
                  d="M5.29034 356.364H9.0968C10.2014 356.364 11.0968 357.26 11.0968 358.364V358.409C11.0968 359.514 10.2014 360.409 9.0968 360.409H5.29034V356.364Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 65_2"
                  d="M19.4839 356.364H15.6774C14.5729 356.364 13.6774 357.26 13.6774 358.364V358.409C13.6774 359.514 14.5729 360.409 15.6774 360.409H19.4839V356.364Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 66_2"
                  d="M5.29034 362.37H9.0968C10.2014 362.37 11.0968 363.266 11.0968 364.37V364.415C11.0968 365.52 10.2014 366.415 9.0968 366.415H5.29034V362.37Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 67_2"
                  d="M19.4839 362.37H15.6774C14.5729 362.37 13.6774 363.266 13.6774 364.37V364.415C13.6774 365.52 14.5729 366.415 15.6774 366.415H19.4839V362.37Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 68_2"
                  d="M5.29034 376.099H9.0968C10.2014 376.099 11.0968 376.994 11.0968 378.099V378.144C11.0968 379.248 10.2014 380.144 9.0968 380.144H5.29034V376.099Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 69_2"
                  d="M19.4839 376.099H15.6774C14.5729 376.099 13.6774 376.994 13.6774 378.099V378.144C13.6774 379.248 14.5729 380.144 15.6774 380.144H19.4839V376.099Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 70_2"
                  d="M5.29034 382.105H9.0968C10.2014 382.105 11.0968 383 11.0968 384.105V384.15C11.0968 385.254 10.2014 386.15 9.0968 386.15H5.29034V382.105Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 71_2"
                  d="M19.4839 382.105H15.6774C14.5729 382.105 13.6774 383 13.6774 384.105V384.15C13.6774 385.254 14.5729 386.15 15.6774 386.15H19.4839V382.105Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 72_2"
                  d="M5.29034 388.111H9.0968C10.2014 388.111 11.0968 389.007 11.0968 390.111V390.156C11.0968 391.261 10.2014 392.156 9.0968 392.156H5.29034V388.111Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 73_2"
                  d="M19.4839 388.111H15.6774C14.5729 388.111 13.6774 389.007 13.6774 390.111V390.156C13.6774 391.261 14.5729 392.156 15.6774 392.156H19.4839V388.111Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 74_2"
                  d="M5.29034 394.117H9.0968C10.2014 394.117 11.0968 395.013 11.0968 396.117V396.162C11.0968 397.267 10.2014 398.162 9.0968 398.162H5.29034V394.117Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 75_2"
                  d="M19.4839 394.117H15.6774C14.5729 394.117 13.6774 395.013 13.6774 396.117V396.162C13.6774 397.267 14.5729 398.162 15.6774 398.162H19.4839V394.117Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 76_2"
                  d="M5.29034 400.123H9.0968C10.2014 400.123 11.0968 401.019 11.0968 402.123V402.168C11.0968 403.273 10.2014 404.168 9.0968 404.168H5.29034V400.123Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 77_2"
                  d="M19.4839 400.123H15.6774C14.5729 400.123 13.6774 401.019 13.6774 402.123V402.168C13.6774 403.273 14.5729 404.168 15.6774 404.168H19.4839V400.123Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 78_2"
                  d="M5.29034 406.13H9.0968C10.2014 406.13 11.0968 407.025 11.0968 408.13V408.175C11.0968 409.279 10.2014 410.175 9.0968 410.175H5.29034V406.13Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 79_2"
                  d="M19.4839 406.13H15.6774C14.5729 406.13 13.6774 407.025 13.6774 408.13V408.175C13.6774 409.279 14.5729 410.175 15.6774 410.175H19.4839V406.13Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 80_2"
                  d="M5.29034 412.136H9.0968C10.2014 412.136 11.0968 413.031 11.0968 414.136V414.181C11.0968 415.285 10.2014 416.181 9.0968 416.181H5.29034V412.136Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 81_2"
                  d="M19.4839 412.136H15.6774C14.5729 412.136 13.6774 413.031 13.6774 414.136V414.181C13.6774 415.285 14.5729 416.181 15.6774 416.181H19.4839V412.136Z"
                  fill="#816A57"
                />
              </g>
            </g>
            <g id="RanuraPCI_2">
              <rect
                id="Rectangle 40_3"
                x={28.2258}
                y={281}
                width={14.7742}
                height={137}
                rx={1}
                fill="#F4FFE2"
                stroke="#D9D9D9"
                strokeWidth={2}
              />
              <g id="details_4">
                <path
                  id="Rectangle 35_3"
                  d="M28.5161 284.29H32.3226C33.4271 284.29 34.3226 285.186 34.3226 286.29V286.335C34.3226 287.44 33.4271 288.335 32.3226 288.335H28.5161V284.29Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 41_3"
                  d="M42.7097 284.29H38.9032C37.7986 284.29 36.9032 285.186 36.9032 286.29V286.335C36.9032 287.44 37.7986 288.335 38.9032 288.335H42.7097V284.29Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 42_3"
                  d="M28.5161 290.296H32.3226C33.4271 290.296 34.3226 291.192 34.3226 292.296V292.341C34.3226 293.446 33.4271 294.341 32.3226 294.341H28.5161V290.296Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 43_3"
                  d="M42.7097 290.296H38.9032C37.7986 290.296 36.9032 291.192 36.9032 292.296V292.341C36.9032 293.446 37.7986 294.341 38.9032 294.341H42.7097V290.296Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 44_3"
                  d="M28.5161 296.302H32.3226C33.4271 296.302 34.3226 297.198 34.3226 298.302V298.347C34.3226 299.452 33.4271 300.347 32.3226 300.347H28.5161V296.302Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 45_3"
                  d="M42.7097 296.302H38.9032C37.7986 296.302 36.9032 297.198 36.9032 298.302V298.347C36.9032 299.452 37.7986 300.347 38.9032 300.347H42.7097V296.302Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 46_3"
                  d="M28.5161 302.309H32.3226C33.4271 302.309 34.3226 303.204 34.3226 304.309V304.354C34.3226 305.458 33.4271 306.354 32.3226 306.354H28.5161V302.309Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 47_3"
                  d="M42.7097 302.309H38.9032C37.7986 302.309 36.9032 303.204 36.9032 304.309V304.354C36.9032 305.458 37.7986 306.354 38.9032 306.354H42.7097V302.309Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 48_3"
                  d="M28.5161 308.315H32.3226C33.4271 308.315 34.3226 309.21 34.3226 310.315V310.36C34.3226 311.464 33.4271 312.36 32.3226 312.36H28.5161V308.315Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 49_3"
                  d="M42.7097 308.315H38.9032C37.7986 308.315 36.9032 309.21 36.9032 310.315V310.36C36.9032 311.464 37.7986 312.36 38.9032 312.36H42.7097V308.315Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 50_3"
                  d="M28.5161 314.321H32.3226C33.4271 314.321 34.3226 315.216 34.3226 316.321V316.366C34.3226 317.471 33.4271 318.366 32.3226 318.366H28.5161V314.321Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 51_3"
                  d="M42.7097 314.321H38.9032C37.7986 314.321 36.9032 315.216 36.9032 316.321V316.366C36.9032 317.471 37.7986 318.366 38.9032 318.366H42.7097V314.321Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 52_3"
                  d="M28.5161 320.327H32.3226C33.4271 320.327 34.3226 321.223 34.3226 322.327V322.372C34.3226 323.477 33.4271 324.372 32.3226 324.372H28.5161V320.327Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 53_3"
                  d="M42.7097 320.327H38.9032C37.7986 320.327 36.9032 321.223 36.9032 322.327V322.372C36.9032 323.477 37.7986 324.372 38.9032 324.372H42.7097V320.327Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 54_3"
                  d="M28.5161 326.333H32.3226C33.4271 326.333 34.3226 327.229 34.3226 328.333V328.378C34.3226 329.483 33.4271 330.378 32.3226 330.378H28.5161V326.333Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 55_3"
                  d="M42.7097 326.333H38.9032C37.7986 326.333 36.9032 327.229 36.9032 328.333V328.378C36.9032 329.483 37.7986 330.378 38.9032 330.378H42.7097V326.333Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 56_3"
                  d="M28.5161 332.34H32.3226C33.4271 332.34 34.3226 333.235 34.3226 334.34V334.384C34.3226 335.489 33.4271 336.384 32.3226 336.384H28.5161V332.34Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 57_3"
                  d="M42.7097 332.34H38.9032C37.7986 332.34 36.9032 333.235 36.9032 334.34V334.384C36.9032 335.489 37.7986 336.384 38.9032 336.384H42.7097V332.34Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 58_3"
                  d="M28.5161 338.346H32.3226C33.4271 338.346 34.3226 339.241 34.3226 340.346V340.391C34.3226 341.495 33.4271 342.391 32.3226 342.391H28.5161V338.346Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 59_3"
                  d="M42.7097 338.346H38.9032C37.7986 338.346 36.9032 339.241 36.9032 340.346V340.391C36.9032 341.495 37.7986 342.391 38.9032 342.391H42.7097V338.346Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 60_3"
                  d="M28.5161 344.352H32.3226C33.4271 344.352 34.3226 345.247 34.3226 346.352V346.397C34.3226 347.501 33.4271 348.397 32.3226 348.397H28.5161V344.352Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 61_3"
                  d="M42.7097 344.352H38.9032C37.7986 344.352 36.9032 345.247 36.9032 346.352V346.397C36.9032 347.501 37.7986 348.397 38.9032 348.397H42.7097V344.352Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 62_3"
                  d="M28.5161 350.358H32.3226C33.4271 350.358 34.3226 351.253 34.3226 352.358V352.403C34.3226 353.508 33.4271 354.403 32.3226 354.403H28.5161V350.358Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 63_3"
                  d="M42.7097 350.358H38.9032C37.7986 350.358 36.9032 351.253 36.9032 352.358V352.403C36.9032 353.508 37.7986 354.403 38.9032 354.403H42.7097V350.358Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 64_3"
                  d="M28.5161 356.364H32.3226C33.4271 356.364 34.3226 357.26 34.3226 358.364V358.409C34.3226 359.514 33.4271 360.409 32.3226 360.409H28.5161V356.364Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 65_3"
                  d="M42.7097 356.364H38.9032C37.7986 356.364 36.9032 357.26 36.9032 358.364V358.409C36.9032 359.514 37.7986 360.409 38.9032 360.409H42.7097V356.364Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 66_3"
                  d="M28.5161 362.37H32.3226C33.4271 362.37 34.3226 363.266 34.3226 364.37V364.415C34.3226 365.52 33.4271 366.415 32.3226 366.415H28.5161V362.37Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 67_3"
                  d="M42.7097 362.37H38.9032C37.7986 362.37 36.9032 363.266 36.9032 364.37V364.415C36.9032 365.52 37.7986 366.415 38.9032 366.415H42.7097V362.37Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 68_3"
                  d="M28.5161 376.099H32.3226C33.4271 376.099 34.3226 376.994 34.3226 378.099V378.144C34.3226 379.248 33.4271 380.144 32.3226 380.144H28.5161V376.099Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 69_3"
                  d="M42.7097 376.099H38.9032C37.7986 376.099 36.9032 376.994 36.9032 378.099V378.144C36.9032 379.248 37.7986 380.144 38.9032 380.144H42.7097V376.099Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 70_3"
                  d="M28.5161 382.105H32.3226C33.4271 382.105 34.3226 383 34.3226 384.105V384.15C34.3226 385.254 33.4271 386.15 32.3226 386.15H28.5161V382.105Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 71_3"
                  d="M42.7097 382.105H38.9032C37.7986 382.105 36.9032 383 36.9032 384.105V384.15C36.9032 385.254 37.7986 386.15 38.9032 386.15H42.7097V382.105Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 72_3"
                  d="M28.5161 388.111H32.3226C33.4271 388.111 34.3226 389.007 34.3226 390.111V390.156C34.3226 391.261 33.4271 392.156 32.3226 392.156H28.5161V388.111Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 73_3"
                  d="M42.7097 388.111H38.9032C37.7986 388.111 36.9032 389.007 36.9032 390.111V390.156C36.9032 391.261 37.7986 392.156 38.9032 392.156H42.7097V388.111Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 74_3"
                  d="M28.5161 394.117H32.3226C33.4271 394.117 34.3226 395.013 34.3226 396.117V396.162C34.3226 397.267 33.4271 398.162 32.3226 398.162H28.5161V394.117Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 75_3"
                  d="M42.7097 394.117H38.9032C37.7986 394.117 36.9032 395.013 36.9032 396.117V396.162C36.9032 397.267 37.7986 398.162 38.9032 398.162H42.7097V394.117Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 76_3"
                  d="M28.5161 400.123H32.3226C33.4271 400.123 34.3226 401.019 34.3226 402.123V402.168C34.3226 403.273 33.4271 404.168 32.3226 404.168H28.5161V400.123Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 77_3"
                  d="M42.7097 400.123H38.9032C37.7986 400.123 36.9032 401.019 36.9032 402.123V402.168C36.9032 403.273 37.7986 404.168 38.9032 404.168H42.7097V400.123Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 78_3"
                  d="M28.5161 406.13H32.3226C33.4271 406.13 34.3226 407.025 34.3226 408.13V408.175C34.3226 409.279 33.4271 410.175 32.3226 410.175H28.5161V406.13Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 79_3"
                  d="M42.7097 406.13H38.9032C37.7986 406.13 36.9032 407.025 36.9032 408.13V408.175C36.9032 409.279 37.7986 410.175 38.9032 410.175H42.7097V406.13Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 80_3"
                  d="M28.5161 412.136H32.3226C33.4271 412.136 34.3226 413.031 34.3226 414.136V414.181C34.3226 415.285 33.4271 416.181 32.3226 416.181H28.5161V412.136Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 81_3"
                  d="M42.7097 412.136H38.9032C37.7986 412.136 36.9032 413.031 36.9032 414.136V414.181C36.9032 415.285 37.7986 416.181 38.9032 416.181H42.7097V412.136Z"
                  fill="#816A57"
                />
              </g>
            </g>
          </g>

          {/* Ranuras RAM */}
          <g 
            id="RanurasRAM"
            onMouseEnter={(e) => handleMouseEnter(e, "RanurasRAM")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <g id="RanuraRam">
              <rect
                id="Rectangle 40_4"
                x={481.7}
                y={99}
                width={12.3}
                height={160}
                rx={1}
                fill="#03412B"
                stroke="#023423"
                strokeWidth={2}
              />
              <g id="details_5">
                <path
                  id="Rectangle 35_4"
                  d="M481.8 103H484.75C485.854 103 486.75 103.895 486.75 105V105.714C486.75 106.819 485.854 107.714 484.75 107.714H481.8V103Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 41_4"
                  d="M493.9 103H490.95C489.845 103 488.95 103.895 488.95 105V105.714C488.95 106.819 489.845 107.714 490.95 107.714H493.9V103Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 42_4"
                  d="M481.8 110H484.75C485.854 110 486.75 110.895 486.75 112V112.714C486.75 113.819 485.854 114.714 484.75 114.714H481.8V110Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 43_4"
                  d="M493.9 110H490.95C489.845 110 488.95 110.895 488.95 112V112.714C488.95 113.819 489.845 114.714 490.95 114.714H493.9V110Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 44_4"
                  d="M481.8 117H484.75C485.854 117 486.75 117.895 486.75 119V119.714C486.75 120.819 485.854 121.714 484.75 121.714H481.8V117Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 45_4"
                  d="M493.9 117H490.95C489.845 117 488.95 117.895 488.95 119V119.714C488.95 120.819 489.845 121.714 490.95 121.714H493.9V117Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 46_4"
                  d="M481.8 124H484.75C485.854 124 486.75 124.895 486.75 126V126.714C486.75 127.819 485.854 128.714 484.75 128.714H481.8V124Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 47_4"
                  d="M493.9 124H490.95C489.845 124 488.95 124.895 488.95 126V126.714C488.95 127.819 489.845 128.714 490.95 128.714H493.9V124Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 48_4"
                  d="M481.8 131H484.75C485.854 131 486.75 131.895 486.75 133V133.714C486.75 134.819 485.854 135.714 484.75 135.714H481.8V131Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 49_4"
                  d="M493.9 131H490.95C489.845 131 488.95 131.895 488.95 133V133.714C488.95 134.819 489.845 135.714 490.95 135.714H493.9V131Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 50_4"
                  d="M481.8 138H484.75C485.854 138 486.75 138.895 486.75 140V140.714C486.75 141.819 485.854 142.714 484.75 142.714H481.8V138Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 51_4"
                  d="M493.9 138H490.95C489.845 138 488.95 138.895 488.95 140V140.714C488.95 141.819 489.845 142.714 490.95 142.714H493.9V138Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 52_4"
                  d="M481.8 145H484.75C485.854 145 486.75 145.895 486.75 147V147.714C486.75 148.819 485.854 149.714 484.75 149.714H481.8V145Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 53_4"
                  d="M493.9 145H490.95C489.845 145 488.95 145.895 488.95 147V147.714C488.95 148.819 489.845 149.714 490.95 149.714H493.9V145Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 54_4"
                  d="M481.8 152H484.75C485.854 152 486.75 152.895 486.75 154V154.714C486.75 155.819 485.854 156.714 484.75 156.714H481.8V152Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 55_4"
                  d="M493.9 152H490.95C489.845 152 488.95 152.895 488.95 154V154.714C488.95 155.819 489.845 156.714 490.95 156.714H493.9V152Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 56_4"
                  d="M481.8 159H484.75C485.854 159 486.75 159.895 486.75 161V161.714C486.75 162.819 485.854 163.714 484.75 163.714H481.8V159Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 57_4"
                  d="M493.9 159H490.95C489.845 159 488.95 159.895 488.95 161V161.714C488.95 162.819 489.845 163.714 490.95 163.714H493.9V159Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 58_4"
                  d="M481.8 166H484.75C485.854 166 486.75 166.895 486.75 168V168.714C486.75 169.819 485.854 170.714 484.75 170.714H481.8V166Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 59_4"
                  d="M493.9 166H490.95C489.845 166 488.95 166.895 488.95 168V168.714C488.95 169.819 489.845 170.714 490.95 170.714H493.9V166Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 60_4"
                  d="M481.8 173H484.75C485.854 173 486.75 173.895 486.75 175V175.714C486.75 176.819 485.854 177.714 484.75 177.714H481.8V173Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 61_4"
                  d="M493.9 173H490.95C489.845 173 488.95 173.895 488.95 175V175.714C488.95 176.819 489.845 177.714 490.95 177.714H493.9V173Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 62_4"
                  d="M481.8 180H484.75C485.854 180 486.75 180.895 486.75 182V182.714C486.75 183.819 485.854 184.714 484.75 184.714H481.8V180Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 63_4"
                  d="M493.9 180H490.95C489.845 180 488.95 180.895 488.95 182V182.714C488.95 183.819 489.845 184.714 490.95 184.714H493.9V180Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 64_4"
                  d="M481.8 187H484.75C485.854 187 486.75 187.895 486.75 189V189.714C486.75 190.819 485.854 191.714 484.75 191.714H481.8V187Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 65_4"
                  d="M493.9 187H490.95C489.845 187 488.95 187.895 488.95 189V189.714C488.95 190.819 489.845 191.714 490.95 191.714H493.9V187Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 66_4"
                  d="M481.8 194H484.75C485.854 194 486.75 194.895 486.75 196V196.714C486.75 197.819 485.854 198.714 484.75 198.714H481.8V194Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 67_4"
                  d="M493.9 194H490.95C489.845 194 488.95 194.895 488.95 196V196.714C488.95 197.819 489.845 198.714 490.95 198.714H493.9V194Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 68_4"
                  d="M481.8 210H484.75C485.854 210 486.75 210.895 486.75 212V212.714C486.75 213.819 485.854 214.714 484.75 214.714H481.8V210Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 69_4"
                  d="M493.9 210H490.95C489.845 210 488.95 210.895 488.95 212V212.714C488.95 213.819 489.845 214.714 490.95 214.714H493.9V210Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 70_4"
                  d="M481.8 217H484.75C485.854 217 486.75 217.895 486.75 219V219.714C486.75 220.819 485.854 221.714 484.75 221.714H481.8V217Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 71_4"
                  d="M493.9 217H490.95C489.845 217 488.95 217.895 488.95 219V219.714C488.95 220.819 489.845 221.714 490.95 221.714H493.9V217Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 72_4"
                  d="M481.8 224H484.75C485.854 224 486.75 224.895 486.75 226V226.714C486.75 227.819 485.854 228.714 484.75 228.714H481.8V224Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 73_4"
                  d="M493.9 224H490.95C489.845 224 488.95 224.895 488.95 226V226.714C488.95 227.819 489.845 228.714 490.95 228.714H493.9V224Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 74_4"
                  d="M481.8 231H484.75C485.854 231 486.75 231.895 486.75 233V233.714C486.75 234.819 485.854 235.714 484.75 235.714H481.8V231Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 75_4"
                  d="M493.9 231H490.95C489.845 231 488.95 231.895 488.95 233V233.714C488.95 234.819 489.845 235.714 490.95 235.714H493.9V231Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 76_4"
                  d="M481.8 238H484.75C485.854 238 486.75 238.895 486.75 240V240.714C486.75 241.819 485.854 242.714 484.75 242.714H481.8V238Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 77_4"
                  d="M493.9 238H490.95C489.845 238 488.95 238.895 488.95 240V240.714C488.95 241.819 489.845 242.714 490.95 242.714H493.9V238Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 78_4"
                  d="M481.8 245H484.75C485.854 245 486.75 245.895 486.75 247V247.714C486.75 248.819 485.854 249.714 484.75 249.714H481.8V245Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 79_4"
                  d="M493.9 245H490.95C489.845 245 488.95 245.895 488.95 247V247.714C488.95 248.819 489.845 249.714 490.95 249.714H493.9V245Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 80_4"
                  d="M481.8 252H484.75C485.854 252 486.75 252.895 486.75 254V254.714C486.75 255.819 485.854 256.714 484.75 256.714H481.8V252Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 81_4"
                  d="M493.9 252H490.95C489.845 252 488.95 252.895 488.95 254V254.714C488.95 255.819 489.845 256.714 490.95 256.714H493.9V252Z"
                  fill="#816A57"
                />
              </g>
            </g>
            <g id="RanuraRam_2">
              <rect
                id="Rectangle 40_5"
                x={463}
                y={99}
                width={12.3}
                height={160}
                rx={1}
                fill="#03412B"
                stroke="#023423"
                strokeWidth={2}
              />
              <g id="details_6">
                <path
                  id="Rectangle 35_5"
                  d="M463.1 103H466.05C467.155 103 468.05 103.895 468.05 105V105.714C468.05 106.819 467.155 107.714 466.05 107.714H463.1V103Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 41_5"
                  d="M475.2 103H472.25C471.146 103 470.25 103.895 470.25 105V105.714C470.25 106.819 471.146 107.714 472.25 107.714H475.2V103Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 42_5"
                  d="M463.1 110H466.05C467.155 110 468.05 110.895 468.05 112V112.714C468.05 113.819 467.155 114.714 466.05 114.714H463.1V110Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 43_5"
                  d="M475.2 110H472.25C471.146 110 470.25 110.895 470.25 112V112.714C470.25 113.819 471.146 114.714 472.25 114.714H475.2V110Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 44_5"
                  d="M463.1 117H466.05C467.155 117 468.05 117.895 468.05 119V119.714C468.05 120.819 467.155 121.714 466.05 121.714H463.1V117Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 45_5"
                  d="M475.2 117H472.25C471.146 117 470.25 117.895 470.25 119V119.714C470.25 120.819 471.146 121.714 472.25 121.714H475.2V117Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 46_5"
                  d="M463.1 124H466.05C467.155 124 468.05 124.895 468.05 126V126.714C468.05 127.819 467.155 128.714 466.05 128.714H463.1V124Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 47_5"
                  d="M475.2 124H472.25C471.146 124 470.25 124.895 470.25 126V126.714C470.25 127.819 471.146 128.714 472.25 128.714H475.2V124Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 48_5"
                  d="M463.1 131H466.05C467.155 131 468.05 131.895 468.05 133V133.714C468.05 134.819 467.155 135.714 466.05 135.714H463.1V131Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 49_5"
                  d="M475.2 131H472.25C471.146 131 470.25 131.895 470.25 133V133.714C470.25 134.819 471.146 135.714 472.25 135.714H475.2V131Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 50_5"
                  d="M463.1 138H466.05C467.155 138 468.05 138.895 468.05 140V140.714C468.05 141.819 467.155 142.714 466.05 142.714H463.1V138Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 51_5"
                  d="M475.2 138H472.25C471.146 138 470.25 138.895 470.25 140V140.714C470.25 141.819 471.146 142.714 472.25 142.714H475.2V138Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 52_5"
                  d="M463.1 145H466.05C467.155 145 468.05 145.895 468.05 147V147.714C468.05 148.819 467.155 149.714 466.05 149.714H463.1V145Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 53_5"
                  d="M475.2 145H472.25C471.146 145 470.25 145.895 470.25 147V147.714C470.25 148.819 471.146 149.714 472.25 149.714H475.2V145Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 54_5"
                  d="M463.1 152H466.05C467.155 152 468.05 152.895 468.05 154V154.714C468.05 155.819 467.155 156.714 466.05 156.714H463.1V152Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 55_5"
                  d="M475.2 152H472.25C471.146 152 470.25 152.895 470.25 154V154.714C470.25 155.819 471.146 156.714 472.25 156.714H475.2V152Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 56_5"
                  d="M463.1 159H466.05C467.155 159 468.05 159.895 468.05 161V161.714C468.05 162.819 467.155 163.714 466.05 163.714H463.1V159Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 57_5"
                  d="M475.2 159H472.25C471.146 159 470.25 159.895 470.25 161V161.714C470.25 162.819 471.146 163.714 472.25 163.714H475.2V159Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 58_5"
                  d="M463.1 166H466.05C467.155 166 468.05 166.895 468.05 168V168.714C468.05 169.819 467.155 170.714 466.05 170.714H463.1V166Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 59_5"
                  d="M475.2 166H472.25C471.146 166 470.25 166.895 470.25 168V168.714C470.25 169.819 471.146 170.714 472.25 170.714H475.2V166Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 60_5"
                  d="M463.1 173H466.05C467.155 173 468.05 173.895 468.05 175V175.714C468.05 176.819 467.155 177.714 466.05 177.714H463.1V173Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 61_5"
                  d="M475.2 173H472.25C471.146 173 470.25 173.895 470.25 175V175.714C470.25 176.819 471.146 177.714 472.25 177.714H475.2V173Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 62_5"
                  d="M463.1 180H466.05C467.155 180 468.05 180.895 468.05 182V182.714C468.05 183.819 467.155 184.714 466.05 184.714H463.1V180Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 63_5"
                  d="M475.2 180H472.25C471.146 180 470.25 180.895 470.25 182V182.714C470.25 183.819 471.146 184.714 472.25 184.714H475.2V180Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 64_5"
                  d="M463.1 187H466.05C467.155 187 468.05 187.895 468.05 189V189.714C468.05 190.819 467.155 191.714 466.05 191.714H463.1V187Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 65_5"
                  d="M475.2 187H472.25C471.146 187 470.25 187.895 470.25 189V189.714C470.25 190.819 471.146 191.714 472.25 191.714H475.2V187Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 66_5"
                  d="M463.1 194H466.05C467.155 194 468.05 194.895 468.05 196V196.714C468.05 197.819 467.155 198.714 466.05 198.714H463.1V194Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 67_5"
                  d="M475.2 194H472.25C471.146 194 470.25 194.895 470.25 196V196.714C470.25 197.819 471.146 198.714 472.25 198.714H475.2V194Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 68_5"
                  d="M463.1 210H466.05C467.155 210 468.05 210.895 468.05 212V212.714C468.05 213.819 467.155 214.714 466.05 214.714H463.1V210Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 69_5"
                  d="M475.2 210H472.25C471.146 210 470.25 210.895 470.25 212V212.714C470.25 213.819 471.146 214.714 472.25 214.714H475.2V210Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 70_5"
                  d="M463.1 217H466.05C467.155 217 468.05 217.895 468.05 219V219.714C468.05 220.819 467.155 221.714 466.05 221.714H463.1V217Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 71_5"
                  d="M475.2 217H472.25C471.146 217 470.25 217.895 470.25 219V219.714C470.25 220.819 471.146 221.714 472.25 221.714H475.2V217Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 72_5"
                  d="M463.1 224H466.05C467.155 224 468.05 224.895 468.05 226V226.714C468.05 227.819 467.155 228.714 466.05 228.714H463.1V224Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 73_5"
                  d="M475.2 224H472.25C471.146 224 470.25 224.895 470.25 226V226.714C470.25 227.819 471.146 228.714 472.25 228.714H475.2V224Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 74_5"
                  d="M463.1 231H466.05C467.155 231 468.05 231.895 468.05 233V233.714C468.05 234.819 467.155 235.714 466.05 235.714H463.1V231Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 75_5"
                  d="M475.2 231H472.25C471.146 231 470.25 231.895 470.25 233V233.714C470.25 234.819 471.146 235.714 472.25 235.714H475.2V231Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 76_5"
                  d="M463.1 238H466.05C467.155 238 468.05 238.895 468.05 240V240.714C468.05 241.819 467.155 242.714 466.05 242.714H463.1V238Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 77_5"
                  d="M475.2 238H472.25C471.146 238 470.25 238.895 470.25 240V240.714C470.25 241.819 471.146 242.714 472.25 242.714H475.2V238Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 78_5"
                  d="M463.1 245H466.05C467.155 245 468.05 245.895 468.05 247V247.714C468.05 248.819 467.155 249.714 466.05 249.714H463.1V245Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 79_5"
                  d="M475.2 245H472.25C471.146 245 470.25 245.895 470.25 247V247.714C470.25 248.819 471.146 249.714 472.25 249.714H475.2V245Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 80_5"
                  d="M463.1 252H466.05C467.155 252 468.05 252.895 468.05 254V254.714C468.05 255.819 467.155 256.714 466.05 256.714H463.1V252Z"
                  fill="#816A57"
                />
                <path
                  id="Rectangle 81_5"
                  d="M475.2 252H472.25C471.146 252 470.25 252.895 470.25 254V254.714C470.25 255.819 471.146 256.714 472.25 256.714H475.2V252Z"
                  fill="#816A57"
                />
              </g>
            </g>
          </g>

          {/* BIOS */}
          <g 
            id="BIOS"
            onMouseEnter={(e) => handleMouseEnter(e, "BIOS")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <rect
              id="Rectangle 36_2"
              x={148.5}
              y={441.5}
              width={54}
              height={54}
              rx={1.5}
              fill="#03412B"
              stroke="#1E1E1E"
            />
            <rect
              id="Rectangle 37_2"
              x={155.375}
              y={447.688}
              width={40.25}
              height={40.9375}
              rx={2.5}
              fill="#1E1E1E"
              stroke="#414141"
            />
            <g id="details_7">
              <circle
                id="Ellipse 14_2"
                cx={199.759}
                cy={467.321}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 15_2"
                cx={199.759}
                cy={469.384}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 16_2"
                cx={199.759}
                cy={471.446}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 17_2"
                cx={199.759}
                cy={465.259}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 18_2"
                cx={176.384}
                cy={443.946}
                r={0.5}
                transform="rotate(90 176.384 443.946)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 19_2"
                cx={174.321}
                cy={443.946}
                r={0.5}
                transform="rotate(90 174.321 443.946)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 20_2"
                cx={172.259}
                cy={443.946}
                r={0.5}
                transform="rotate(90 172.259 443.946)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 21_2"
                cx={178.446}
                cy={443.946}
                r={0.5}
                transform="rotate(90 178.446 443.946)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 22_2"
                cx={176.384}
                cy={492.071}
                r={0.5}
                transform="rotate(90 176.384 492.071)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 23_2"
                cx={174.321}
                cy={492.071}
                r={0.5}
                transform="rotate(90 174.321 492.071)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 24_2"
                cx={172.259}
                cy={492.071}
                r={0.5}
                transform="rotate(90 172.259 492.071)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 25_2"
                cx={178.446}
                cy={492.071}
                r={0.5}
                transform="rotate(90 178.446 492.071)"
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 10_2"
                cx={150.946}
                cy={467.321}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 12_2"
                cx={150.946}
                cy={469.384}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 13_2"
                cx={150.946}
                cy={471.446}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
              <circle
                id="Ellipse 11_2"
                cx={150.946}
                cy={465.259}
                r={0.5}
                stroke="#816A57"
                strokeWidth={0.767857}
              />
            </g>
          </g>

          {/* CPU */}
          <g 
            id="CPU"
            onMouseEnter={(e) => handleMouseEnter(e, "CPU")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <rect
              id="Rectangle 36_3"
              x={217.5}
              y={25.5}
              width={79}
              height={79}
              rx={1.5}
              fill="#03412B"
              stroke="#1E1E1E"
            />
            <rect
              id="Rectangle 37_3"
              x={227.5}
              y={34.5}
              width={59}
              height={60}
              rx={2.5}
              fill="#5A5656"
              stroke="#414141"
            />
            <text
              x={256}
              y={68}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize={40}
              fontFamily="VT323"
            >
              {" "}
              CPU{" "}
            </text>
            <g id="Details">
              <circle
                id="Ellipse 14_3"
                cx={292.286}
                cy={63.2857}
                r={0.785714}
                stroke="#816A57"
              />
              <circle
                id="Ellipse 15_3"
                cx={292.286}
                cy={66.2857}
                r={0.785714}
                stroke="#816A57"
              />
              <circle
                id="Ellipse 16_3"
                cx={292.286}
                cy={69.2857}
                r={0.785714}
                stroke="#816A57"
              />
              <circle
                id="Ellipse 17_3"
                cx={292.286}
                cy={60.2857}
                r={0.785714}
                stroke="#816A57"
              />
              <circle
                id="Ellipse 18_3"
                cx={258.286}
                cy={29.2857}
                r={0.785714}
                transform="rotate(90 258.286 29.2857)"
                stroke="#816A57"
              />
              <circle
                id="Ellipse 19_3"
                cx={255.286}
                cy={29.2857}
                r={0.785714}
                transform="rotate(90 255.286 29.2857)"
                stroke="#816A57"
              />
              <circle
                id="Ellipse 20_3"
                cx={252.286}
                cy={29.2857}
                r={0.785714}
                transform="rotate(90 252.286 29.2857)"
                stroke="#816A57"
              />
              <circle
                id="Ellipse 21_3"
                cx={261.286}
                cy={29.2857}
                r={0.785714}
                transform="rotate(90 261.286 29.2857)"
                stroke="#816A57"
              />
              <circle
                id="Ellipse 22_3"
                cx={258.286}
                cy={99.2857}
                r={0.785714}
                transform="rotate(90 258.286 99.2857)"
                stroke="#816A57"
              />
              <circle
                id="Ellipse 23_3"
                cx={255.286}
                cy={99.2857}
                r={0.785714}
                transform="rotate(90 255.286 99.2857)"
                stroke="#816A57"
              />
              <circle
                id="Ellipse 24_3"
                cx={252.286}
                cy={99.2857}
                r={0.785714}
                transform="rotate(90 252.286 99.2857)"
                stroke="#816A57"
              />
              <circle
                id="Ellipse 25_3"
                cx={261.286}
                cy={99.2857}
                r={0.785714}
                transform="rotate(90 261.286 99.2857)"
                stroke="#816A57"
              />
              <circle
                id="Ellipse 10_3"
                cx={221.286}
                cy={63.2857}
                r={0.785714}
                stroke="#816A57"
              />
              <circle
                id="Ellipse 12_3"
                cx={221.286}
                cy={66.2857}
                r={0.785714}
                stroke="#816A57"
              />
              <circle
                id="Ellipse 13_3"
                cx={221.286}
                cy={69.2857}
                r={0.785714}
                stroke="#816A57"
              />
              <circle
                id="Ellipse 11_3"
                cx={221.286}
                cy={60.2857}
                r={0.785714}
                stroke="#816A57"
              />
            </g>
          </g>

          {/* Cables */}
          <g 
            id="Cables"
            onMouseEnter={(e) => handleMouseEnter(e, "Cables")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          >
            <path id="Vector 14" d="M289 364H388.5V395V426H441" stroke="#816A57" />
            <path
              id="Vector 15"
              d="M289 362H390.5V393V424H441M467.5 368.5V395.5M377 446H441M377 444H441M377 442H441M377 440H441"
              stroke="#816A57"
            />
            <path
              id="Vector 16"
              d="M289 360H393.185V391V422H441"
              stroke="#816A57"
            />
            <path id="Vector 17" d="M289 358H395V389V420H441" stroke="#816A57" />
          </g>

          {/* Buses - cada uno con su propio handler */}
          <path
            id="BusLCP"
            d="M258 370V417.5M203 468.5H235L258 443.5V417.5M258 417.5H318"
            stroke="#816A57"
            strokeWidth={4}
            onMouseEnter={(e) => handleMouseEnter(e, "BusLCP")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          />

          <path
            id="BusPCI"
            d="M289 342.5H353.5L441.5 286.5H467V315"
            stroke="#816A57"
            strokeWidth={4}
            onMouseEnter={(e) => handleMouseEnter(e, "BusPCI")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          />

          <path
            id="BusPCI_2"
            d="M12.5 419V456H65.5L216.5 352H231V338H216.5L65.5 442H35.5V419"
            stroke="#816A57"
            strokeWidth={4}
            onMouseEnter={(e) => handleMouseEnter(e, "BusPCI_2")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          />

          <path
            id="BusRAM"
            d="M488.5 98V72H419.916L334.211 169.5H285V187H334.211L419.916 90.5H470V98"
            stroke="#816A57"
            strokeWidth={4}
            onMouseEnter={(e) => handleMouseEnter(e, "BusRAM")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          />

          <path
            id="BusGPU"
            d="M227 177H88.5L69 157V91L54 71.5H18.5V91"
            stroke="#816A57"
            strokeWidth={4}
            onMouseEnter={(e) => handleMouseEnter(e, "BusGPU")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          />

          <path 
            id="BusInterno" 
            d="M257 207V311" 
            stroke="#816A57" 
            strokeWidth={4}
            onMouseEnter={(e) => handleMouseEnter(e, "BusInterno")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          />

          <path 
            id="BusDelantero" 
            d="M257.5 146.5V104.5" 
            stroke="#816A57" 
            strokeWidth={4}
            onMouseEnter={(e) => handleMouseEnter(e, "BusDelantero")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "pointer" }}
          />
        </g>
      </svg>

      {/* Tooltip que muestra la descripción */}
      {hoveredComponent && (
        <div
          style={{
            position: "fixed",
            left: tooltipPosition.x + 15,
            top: tooltipPosition.y + 15,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "8px 12px",
            borderRadius: "4px",
            fontSize: "14px",
            maxWidth: "300px",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          {getDescription(hoveredComponent)}
        </div>
      )}
    </div>
  );
};

export default VonNewmmannModel;