import H1 from "../atom/AH1";
import NavBar from "../organism/NavBar";

const Header = () => {
  return (
    <header className=" md:static h-full w-full flex flex-row justify-between items-center bg-gray-950">
      <H1 text="Arquitectura del computador" />{" "}
      <NavBar />
      {/* <AButton
        btnName="botonaso"
        action={() => alert("hola")}
        icon={<BsCpu />}
        bgColor="bg-amber-900"
      /> */}
    </header>
  );
};

export default Header;
