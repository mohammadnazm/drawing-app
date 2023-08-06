import React from "react"
import { useOnDraw } from "./Hooks"

const Canvas = ({ width, height }) => {
  const setCanvasRef = useOnDraw()

  function onDraw(ctx, point) {
    ctx.beginPath()
    ctx.art()
  }
  return (
    <canvas
      width={width}
      height={height}
      style={canvasStyle}
      ref={setCanvasRef}
    />
  )
}

export default Canvas

const canvasStyle = {
  border: "1px solid black",
}
