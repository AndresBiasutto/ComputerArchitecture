import type { ItextProps } from "../../interfaces/ItextProps";

const AP: React.FC<ItextProps> = ({ text }) => {
  return <p className="w-full font-sharetech text-wrap text-start text-gray-50 p-2" >{text} </p>;
};

export default AP;
