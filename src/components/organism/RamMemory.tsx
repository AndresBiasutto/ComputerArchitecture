import AH2 from "../atom/AH2";
import MMemCell from "../molecule/MMemCell";

const RamMemory = () => {
  return (
    <div className=" w-fit h-fit bg-amber-300 flex flex-col rounded-lg p-2 gap-2 border-2 border-red-50">
      <AH2 text="Memoria Ram" />
      <MMemCell />
      <MMemCell />
      <MMemCell />
      <MMemCell />
      <MMemCell />
      <MMemCell />
      <MMemCell />
      <MMemCell />
      <MMemCell />
    </div>
  );
};

export default RamMemory;
