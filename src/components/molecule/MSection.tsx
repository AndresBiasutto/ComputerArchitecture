import type { ISection } from "../../interfaces/ISection";
import AH3 from "../atom/AH3";
import AP from "../atom/AP";

const MSection: React.FC<ISection> = ({ title, text, children }) => {
  return (
    <div className=" overflow-hidden rounded-2xl p-2 border bg-gray-900">
      <AH3 text={title} />
      <AP text={text} />
      {children}
    </div>
  );
};

export default MSection;
