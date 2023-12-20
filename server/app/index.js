import express from "express";
import cors from "cors"
import nowPlayingHandler from "./routes/nowplaying.js"

const app = express()

app.use(cors())
app.use(express.json())
app.get("/nowplaying", nowPlayingHandler);

export default app