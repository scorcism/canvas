import Body from "./components/Body";
import Header from "./components/Header";
import './App.css'
import { useState } from "react";


function App() {

  const { clearScreen, setClearscreen } = useState(false);


  return (
    <>
      <Header setClearscreen={setClearscreen} />
      <Body setClearscreen={setClearscreen} clearScreen={clearScreen} />
    </>
  );
}

export default App;
