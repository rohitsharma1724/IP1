import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, { useState } from "react"
// import LoginApp from "./components/LoginApp";
// import  from "react/cjs/react.production.min";

function App() {
  const [TryingToLogin, setTryingToLogin] = useState(false);
  return (
    <React.Fragment>
      { 
      <React.Fragment>
      <Navbar />
      <Header  setTryingToLogin = {setTryingToLogin} />
      <Main />
      <Footer />
      </React.Fragment>
      
      }
    </React.Fragment>
  );
}

export default App;
