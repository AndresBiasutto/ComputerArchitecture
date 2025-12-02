import type { ITab } from "../../interfaces/ITab";

const MTopTabs: React.FC<ITab> = ({ active, setActive, tabs }) => {
  return (
    <ul className="w-full flex justify-center items-center m-2">
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={` font-pixelify cursor-pointer px-4 text-gray-500 border-b-8 transition-colors duration-200 ${
            active === index
              ? "text-green-500 border-blue-500"
              : "border-transparent"
          }`}
          onClick={() => setActive(index)}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default MTopTabs;
