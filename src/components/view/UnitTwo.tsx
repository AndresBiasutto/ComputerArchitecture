import ASection from "../molecule/ASection";
// import StepAnimation from "../organism/StepAnimation";
import VonNeumannDiagram from "../organism/VonNewMan";
import Main from "../template/Main";

const UnitTwo = () => {
  return (
    <Main title="Unidad 2" gridCols="1">
      {/* <ASection title="animación" text="Esta es una animación de prueba">
        <StepAnimation />
      </ASection> */}
      <ASection title="animación" text="Esta es una animación de VonNewman">
        <VonNeumannDiagram />
      </ASection>
    </Main>
  );
};

export default UnitTwo;
