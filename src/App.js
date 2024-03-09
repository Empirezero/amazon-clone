
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Routes,Route,Navigate,
} from "react-router-dom";
import Checkout from "./Checkout";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
function App() {
  const [authUser, dispatch] = useStateValue();
  useEffect(() => {
    //Will only run once te app componets loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

      if (authUser) {
        //The user ust logged in/the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the uset is loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);


  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/Login" element={[<Login />, <h1>login page</h1>]} />
          <Route path="/Checkout" element={[<Header />, <Checkout />]} />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
