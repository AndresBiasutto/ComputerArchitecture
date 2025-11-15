import ABit from "../atom/ABit";
import ASpan from "../atom/ASpan";

const MByte = () => {
  return (
    <div className="relative group p-1 w-fit border-2 border-black flex flex-row justify-end items-center gap-2">
      <p className=" text-blue-500">DMA</p>
      <ABit bit={false} />
      <ABit bit={false} />
      <ABit bit={true} />
      <ABit bit={true} />
      <ABit bit={true} />
      <ABit bit={true} />
      <ABit bit={false} />
      <ABit bit={true} />
      <div className="w-full absolute bottom-5 left-5 bg-blue-900/60 bg-opacity-50 p-2 text-white invisible group-hover:visible transition-all duration-100">
        <ASpan text="palabra de memoria" />
      </div>
    </div>
  );
};

export default MByte;
