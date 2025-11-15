import ABit from "../atom/ABit";
import ASpan from "../atom/ASpan";

const MDir = () => {
  return (
    <div className="relative w-full group p-1 border-2 border-black flex flex-row justify-end items-center gap-2 hover:bg-amber-300">
      <p className=" text-blue-500">MD</p>
      <ABit bit={false} />
      <ABit bit={false} />
      <ABit bit={true} />
      <ABit bit={true} />
      <div className="w-full absolute bottom-5 left-5 bg-blue-900/60 bg-opacity-50 p-2 text-white invisible group-hover:visible transition-all duration-100">
        <ASpan text="dirección de memoria" />
      </div>
    </div>
  );
};

export default MDir;
