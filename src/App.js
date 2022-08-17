import Body from "./components/Body";
import Header from "./components/Header";
import './App.css'
import { useState } from "react";


function App() {

  const [ clearScreen, setClearscreen ] = useState(false);
  const [ dark, setDark ] = useState(false);
  const [ download,setDownload ] = useState(false)

  return (
    <>
      <Header setClearscreen={setClearscreen} dark={dark} setDark={setDark} setDownload={setDownload }/>
      <Body setClearscreen={setClearscreen} clearScreen={clearScreen} dark={dark} download={download} setDownload={setDownload}/>
    </>
  );
}

export default App;
