import Footer from "./components/template/Footer";
import Header from "./components/template/Header";
import { Route, Routes } from "react-router-dom"; //, useLocation, useNavigate
import Landing from "./components/view/Landing";
import UnitOne from "./components/view/UnitOne";
import UnitTwo from "./components/view/UnitTwo";


function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-black">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/unitone" element={<UnitOne />} />
        <Route path="/unittwo" element={<UnitTwo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
