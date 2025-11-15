import ASection from "../molecule/ASection";
import RamMemory from "../organism/RamMemory";
import Main from "../template/Main";

const Landing = () => {
  return (
    <Main title="Inicio" bgColor="bg-red-500" gridCols="1">
      <ASection
        title="Sección 1"
        text="contenido de la sección... anda o no anda?"
      >
        <RamMemory />
      </ASection>
    </Main>
  );
};

export default Landing;
