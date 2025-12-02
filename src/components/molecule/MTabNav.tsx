import type { ITab } from "../../interfaces/ITab";
import AButton from "../atom/AButton";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const MTabNav: React.FC<ITab> = ({ active, setActive, tabs }) => {
  return (
    <div className="flex gap-4 justify-center border-t p-4">
      {active > 0 && (
        <AButton
          btnName="Anterior"
          action={() => setActive(active - 1)}
          icon={<MdOutlineNavigateBefore />}
          bgColor="text-blue-600"
        />
        // <button
        //   className="py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow"
        //   onClick={() => setActive(active - 1)}
        // >
        //   Back
        // </button>
      )}
      {active < tabs.length - 1 && (
        <AButton
          btnName="Siguiente"
          action={() => setActive(active + 1)}
          icon={<MdOutlineNavigateNext />}
          bgColor="text-blue-600"
        />
        // <button
        //   className="py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow"
        //   onClick={() => setActive(active + 1)}
        // >
        //   Next
        // </button>
      )}
    </div>
  );
};

export default MTabNav;
