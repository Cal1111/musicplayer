import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  Home from "./pages/Home/Home";
import  Hub from "./pages/Hub/Hub";

function RoutesApp(){
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hub" element={<Hub />} />
        </Routes>
      </Router>
    );
  };
  

export default RoutesApp;
