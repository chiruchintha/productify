import dotenv from "dotenv"

dotenv.config()

export const ENV = {
    port: process.env.PORT,
    dbUrl: process.env.DB_URL,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY:process.env.CLERK_SECRET_KEY
} 