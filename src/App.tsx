import Footer from "./components/template/Footer";
import Header from "./components/template/Header";
import { Route, Routes } from "react-router-dom"; //, useLocation, useNavigate
import Landing from "./components/view/Landing";
import UnitOne from "./components/view/UnitOne";
import UnitTwo from "./components/view/UnitTwo";
import UnitFive from "./components/view/UnitFive";
import UnitFour from "./components/view/UnitFour";
import UnitThree from "./components/view/UnitThree";


function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-black">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/unitone" element={<UnitOne />} />
        <Route path="/unittwo" element={<UnitTwo />} />
        <Route path="/unitthree" element={<UnitThree />} />
        <Route path="/unitfour" element={<UnitFour />} />
        <Route path="/unitfive" element={<UnitFive />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
