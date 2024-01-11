import express from "express";
import { config } from "dotenv";
config();
import morgan from 'morgan';
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/api", appRouter);
export default app;
//# sourceMappingURL=app.js.map