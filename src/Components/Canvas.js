import React from "react"
import { useOnDraw } from "./Hooks"

const Canvas = ({ width, height }) => {
  const setCanvasRef = useOnDraw()
  return <canvas width={width} height={height} style={canvasStyle} />
}

export default Canvas

const canvasStyle = {
  border: "1px solid black",
}
