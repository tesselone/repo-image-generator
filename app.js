import nodeCanvas from "node-canvas"
import fs from "fs"

const { createCanvas } = nodeCanvas

const canvas = createCanvas(512, 512)
const ctx = canvas.getContext("2d")

ctx.fillStyle = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "white"
ctx.font = "700 350px Gotham"
ctx.textAlign = "center"
ctx.textBaseline = "middle"
ctx.fillText((process.argv[2]?.toUpperCase() ?? "?")[0], canvas.width / 2, canvas.height / 2)

fs.writeFileSync("output.png", canvas.toBuffer())