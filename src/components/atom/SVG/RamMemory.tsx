import type { SVGProps } from "react";

interface RamMemorySvgProps extends SVGProps<SVGSVGElement> {
  cellComponents?: {
    mw1?: React.ReactNode;
    dm1?: React.ReactNode;
    mw2?: React.ReactNode;
    dm2?: React.ReactNode;
    mw3?: React.ReactNode;
    dm3?: React.ReactNode;
  };
}

const RamMemorySvg = ({ cellComponents = {}, ...props }: RamMemorySvgProps) => (
  <svg
    viewBox="0 0 169 542"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Ram">
      <g id="memCell">
        <rect
          id="Rectangle 1"
          x={3}
          y={16}
          width={163}
          height={31}
          fill="#023423"
        />
        <g id="MW">
          <rect
            id="cell"
            x={63}
            y={19}
            width={100}
            height={25.6669}
            rx={2}
            fill="#03412B"
          />
          <foreignObject x={63} y={19} width={100} height={25.6669}>
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#F4FFE2'
              }}
            >
              {cellComponents.mw1 || <span style={{ fontFamily: 'monospace', fontSize: '8px' }}>10101010</span>}
            </div>
          </foreignObject>
        </g>
        <g id="DM">
          <rect
            id="cell_2"
            x={6}
            y={19}
            width={50}
            height={25.6669}
            rx={2}
            fill="#03412B"
          />
          <foreignObject x={6} y={19} width={50} height={25.6669}>
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white'
              }}
            >
              {cellComponents.dm1 || <span style={{ fontFamily: 'monospace', fontSize: '8px' }}>11001100</span>}
            </div>
          </foreignObject>
        </g>
      </g>
      <g id="memCell_2">
        <rect
          id="Rectangle 1_2"
          x={3}
          y={49}
          width={163}
          height={31}
          fill="#023423"
        />
        <g id="MW_2">
          <rect
            id="cell_3"
            x={63}
            y={52}
            width={100}
            height={25.6669}
            rx={2}
            fill="#03412B"
          />
          <foreignObject x={63} y={52} width={100} height={25.6669}>
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#F4FFE2'
              }}
            >
              {cellComponents.mw2 || <span style={{ fontFamily: 'monospace', fontSize: '8px' }}>00110011</span>}
            </div>
          </foreignObject>
        </g>
        <g id="DM_2">
          <rect
            id="cell_4"
            x={6}
            y={52}
            width={50}
            height={25.6669}
            rx={2}
            fill="#03412B"
          />
          <foreignObject x={6} y={52} width={50} height={25.6669}>
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white'
              }}
            >
              {cellComponents.dm2 || <span style={{ fontFamily: 'monospace', fontSize: '8px' }}>01010101</span>}
            </div>
          </foreignObject>
        </g>
      </g>
      <g id="memCell_3">
        <rect
          id="Rectangle 1_3"
          x={3}
          y={82}
          width={163}
          height={31}
          fill="#023423"
        />
        <g id="MW_3">
          <rect
            id="cell_5"
            x={63}
            y={85}
            width={100}
            height={25.6669}
            rx={2}
            fill="#03412B"
          />
          <foreignObject x={63} y={85} width={100} height={25.6669}>
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#F4FFE2'
              }}
            >
              {cellComponents.mw3 || <span style={{ fontFamily: 'monospace', fontSize: '8px' }}>11110000</span>}
            </div>
          </foreignObject>
        </g>
        <g id="DM_3">
          <rect
            id="cell_6"
            x={6}
            y={85}
            width={50}
            height={25.6669}
            rx={2}
            fill="#03412B"
          />
          <foreignObject x={6} y={85} width={50} height={25.6669}>
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white'
              }}
            >
              {cellComponents.dm3 || <span style={{ fontFamily: 'monospace', fontSize: '8px' }}>00001111</span>}
            </div>
          </foreignObject>
        </g>
      </g>
    </g>
  </svg>
);

export default RamMemorySvg;