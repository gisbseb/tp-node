import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

await mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
})

console.log('Connected to DB!')

export { mongoose };