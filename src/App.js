
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes,Route,Navigate,
} from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/Checkout"
            element={[<Header />,<Checkout/>]}
          />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
