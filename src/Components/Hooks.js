import { useRef } from "react"

export function useOnDraw() {
  const canvasRef = useRef(null)

  function setCanvasRef(ref) {
    if (!ref) return
    canvasRef.current = ref
    initMouseMoveListener()
  }

  function initMouseMoveListener() {
    const mouseMoveListener = e => {
      console.log({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", mouseMoveListener)
  }

  function computePointInCanvas(clientX, clientY) {
    if (canvasRef.current) {
      const boundingRect = canvasRef.current.getBoundingClientRect()
      return {
        x: clientX - boundingRect.left,
        y: clientY - boundingRect.top,
      }
    } else {
      return null
    }
  }

  return setCanvasRef
}
