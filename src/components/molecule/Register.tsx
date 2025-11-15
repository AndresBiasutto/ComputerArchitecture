import type { IRegisterProps } from "../../interfaces/IRegisterProps";
import ABit from "../atom/ABit";
import ASpan from "../atom/ASpan";

const Register: React.FC<IRegisterProps> = ({
  i,
  activeIndex,
  r,
  text,
  bits,
}) => {
  return (
    <div
      key={i}
      className={`relative w-fit group p-1 flex flex-row justify-end items-center  hover:bg-amber-300 rounded border border-white flow transition-all duration-500 ${
        i === activeIndex
          ? "border-yellow-400 bg-yellow-500/20 shadow-[0_0_20px_rgba(255,255,0,0.5)]"
          : "border-gray-600 bg-gray-800"
      } `}
    >
      <p className=" text-sm text-gray-100 pr-1">
        {r}{" "}
      </p>
      {Array.from({ length: bits }).map((_, index) => (
        <ABit key={index} bit={false} />
      ))}
      <div className="w-auto absolute overflow-visible bottom-5 left-5 bg-blue-900/60 bg-opacity-50 p-2 text-white invisible group-hover:visible transition-all duration-100">
        <ASpan text={text} />
      </div>
    </div>
  );
};

export default Register;
