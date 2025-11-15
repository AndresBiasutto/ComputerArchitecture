import type { ItextProps } from "../../interfaces/ItextProps"
const AH2: React.FC<ItextProps> = ({text}) => {
  return (
    <h1 className=" font-bold font-pixelify text-gray-50">{text}</h1>
  )
}

export default AH2