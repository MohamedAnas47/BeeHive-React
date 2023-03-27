import "./style/index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Homepage from "./pages/webpage/home";
import Applypage from "./pages/webpage/apply";
import { Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <div>
      <ul><li><Link to="apply">Apply</Link></li></ul>
      <Routes>
     <Route path="/" element={<Homepage />} />
      <Route path="apply" element={<Applypage />} />
      </Routes>
    </div>
  );
}

export default App;
