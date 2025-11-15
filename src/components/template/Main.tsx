import type { IBox } from "../../interfaces/IBox";
import AH2 from "../atom/AH2";

const Main: React.FC<IBox> = ({ title, children, gridCols = "3" }) => {
  const gridClassMap: Record<string, string> = {
    "1": "md:grid-cols-1",
    "2": "md:grid-cols-2",
    "3": "md:grid-cols-3",
    "4": "md:grid-cols-4",
    "5": "md:grid-cols-5",
  };

  // Si no existe el valor, por defecto usa 3 columnas
  const gridClass = gridClassMap[gridCols] || "md:grid-cols-3";
  return (
    <main className={`w-full p-2 transition-all duration-300 bg-blue-950`}>
      {" "}
      {title && <AH2 text={title} />}
      <div
        className={`min-h-screen w-full grid gap-2 sm:grid-cols-1 ${gridClass}`}
      >
        {children}
      </div>
    </main>
  );
};

export default Main;
