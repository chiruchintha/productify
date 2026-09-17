import express from "express"

import type { Request, Response } from "express"

import {ENV} from "./config/env.js"
import { clerkMiddleware } from "@clerk/express"


const app = express()

app.use(clerkMiddleware())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req: Request, res: Response) => {
    res.json({message:"jai shree ram"})
})

app.listen(ENV.port, () => {
    console.log("you are listening to the port 3000")
})