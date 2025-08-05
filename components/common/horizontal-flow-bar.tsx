"use client"

import { useEffect, useRef, useCallback } from "react"

interface HorizontalFlowBarsProps {
  backgroundColor?: string
  lineColor?: string
  barColor?: string
  lineWidth?: number
  animationSpeed?: number
}

const HorizontalFlowBars = ({
    backgroundColor = "#111111",
    lineColor = "#444",
    barColor = "#20232b",
  lineWidth = 1,
  animationSpeed = 0.0005,
}: HorizontalFlowBarsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const timeRef = useRef<number>(0)
  const animationFrameId = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0, isDown: false })
  const ripples = useRef<Array<{ x: number; y: number; time: number; intensity: number }>>([])

  // Helper function to convert hex color to RGB values
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 }
  }

  const noise = (x: number, y: number, t: number): number => {
    const n = Math.sin(x * 0.01 + t) * Math.cos(y * 0.01 + t) + Math.sin(x * 0.015 - t) * Math.cos(y * 0.005 + t)
    return (n + 1) / 2
  }

  const getMouseInfluence = (x: number, y: number): number => {
    const dx = x - mouseRef.current.x
    const dy = y - mouseRef.current.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const maxDistance = 200
    return Math.max(0, 1 - distance / maxDistance)
  }

  const getRippleInfluence = (x: number, y: number, currentTime: number): number => {
    let totalInfluence = 0

    ripples.current.forEach((ripple) => {
      const age = currentTime - ripple.time
      const maxAge = 2000

      if (age < maxAge) {
        const dx = x - ripple.x
        const dy = y - ripple.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const rippleRadius = (age / maxAge) * 300
        const rippleWidth = 50

        if (Math.abs(distance - rippleRadius) < rippleWidth) {
          const rippleStrength = (1 - age / maxAge) * ripple.intensity
          const proximityToRipple = 1 - Math.abs(distance - rippleRadius) / rippleWidth
          totalInfluence += rippleStrength * proximityToRipple
        }
      }
    })

    return Math.min(totalInfluence, 2)
  }

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    mouseRef.current.x = e.clientX - rect.left
    mouseRef.current.y = e.clientY - rect.top
  }, [])

  const handleMouseDown = useCallback((e: MouseEvent) => {
    mouseRef.current.isDown = true

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ripples.current.push({
      x,
      y,
      time: Date.now(),
      intensity: 1.5,
    })

    const now = Date.now()
    ripples.current = ripples.current.filter((ripple) => now - ripple.time < 2000)
  }, [])

  const handleMouseUp = useCallback(() => {
    mouseRef.current.isDown = false
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    timeRef.current += animationSpeed
    const currentTime = Date.now()

    const numLines = Math.floor(canvas.width / 15)
    const lineSpacing = canvas.width / numLines

    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Convert colors to RGB for rgba usage
    const lineRgb = hexToRgb(lineColor)
    const barRgb = hexToRgb(barColor)

    for (let i = 0; i < numLines; i++) {
      const x = i * lineSpacing + lineSpacing / 2

      // Draw vertical line with mouse influence - NOW USES lineColor prop
      const mouseInfluence = getMouseInfluence(x, canvas.height / 2)
      const lineAlpha = 0.3 + mouseInfluence * 0.7

      ctx.beginPath()
      ctx.strokeStyle = `rgba(${lineRgb.r}, ${lineRgb.g}, ${lineRgb.b}, ${lineAlpha})`
      ctx.lineWidth = lineWidth + mouseInfluence * 2
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()

      for (let y = 0; y < canvas.height; y += 8) {
        const noiseVal = noise(x, y, timeRef.current)
        const mouseInfl = getMouseInfluence(x, y)
        const rippleInfl = getRippleInfluence(x, y, currentTime)

        const totalInfluence = mouseInfl + rippleInfl
        const threshold = 0.5 - totalInfluence * 0.3

        if (noiseVal > threshold) {
          const barWidth = 2 + noiseVal * 3 + totalInfluence * 3
          const barHeight = 3 + noiseVal * 10 + totalInfluence * 5

          const baseAnimation = Math.sin(timeRef.current + x * 0.0375) * 20 * noiseVal
          const mouseAnimation = mouseRef.current.isDown ? Math.sin(timeRef.current * 3 + y * 0.01) * 10 * mouseInfl : 0
          const rippleAnimation = rippleInfl * Math.sin(timeRef.current * 2 + y * 0.02) * 15

          const animatedY = y + baseAnimation + mouseAnimation + rippleAnimation

          // Color intensity based on influence - NOW USES barColor prop
          const intensity = Math.min(1, 0.7 + totalInfluence * 0.3)
          ctx.fillStyle = `rgba(${barRgb.r}, ${barRgb.g}, ${barRgb.b}, ${intensity})`
          ctx.fillRect(x - barWidth / 2, animatedY - barHeight / 2, barWidth, barHeight)
        }
      }
    }

    // Draw ripple effects
    // ripples.current.forEach((ripple) => {
    //   const age = currentTime - ripple.time
    //   const maxAge = 2000

    //   if (age < maxAge) {
    //     const progress = age / maxAge
    //     const radius = progress * 300
    //     const alpha = (1 - progress) * 0.3 * ripple.intensity

    //     ctx.beginPath()
    //     ctx.strokeStyle = `rgba(100, 100, 100, ${alpha})`
    //     ctx.lineWidth = 2
    //     ctx.arc(ripple.x, ripple.y, radius, 0, 2 * Math.PI)
    //     ctx.stroke()
    //   }
    // })

    animationFrameId.current = requestAnimationFrame(animate)
  }, [backgroundColor, lineColor, barColor, lineWidth, animationSpeed])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    resizeCanvas()

    const handleResize = () => resizeCanvas()
    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("mouseup", handleMouseUp)

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("mouseup", handleMouseUp)

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
        animationFrameId.current = null
      }
      timeRef.current = 0
      ripples.current = []
    }
  }, [animate, resizeCanvas, handleMouseMove, handleMouseDown, handleMouseUp])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ backgroundColor }}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}

export default HorizontalFlowBars