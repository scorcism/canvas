import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";

const Body = ({ setClearscreen, clearScreen, dark, download, setDownload }) => {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;


    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2)
    context.lineCap = "round"
    context.strokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;

    if (clearScreen) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
    if (dark) {
      console.log("dark")
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = "white"
    }

  }, [clearScreen, dark])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
    setClearscreen(false)
  }

  const endDrawing = () => {

    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  const getDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let time = `${day}/${month}/${year} at ${h}:${m}:${s}`
    return time
  }


  if (download) {
    setDownload(false)
    html2canvas(document.getElementById("canvas"),
      {
        allowTaint: true,
        useCORS: true
      }).then(function (canvas) {
        let anchorTag = document.createElement("a");
        anchorTag.download = `${getDate()}-canvas.png`;
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
      });

  }

  return (
    <>
      <canvas id="canvas"
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </>
  )
}

export default Body