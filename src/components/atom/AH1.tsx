import type { ItextProps } from "../../interfaces/ItextProps"
import { BsCpu } from "react-icons/bs";

const AH1: React.FC<ItextProps> = ({text}) => {
  return (
    <h1 className="flex flex-row gap-2 justify-center items-center font-bold font-pixelify p-2 md:text-2xl text-gray-50"> <BsCpu />  {text}</h1>
  )
}

export default AH1