import { Router } from "express";
import { getAllUsers, userLogin, userSignup, verifyUser } from "../controllers/user-controller.js";
import { loginValidator, signupValidator, validate } from "../middleware/validator.js";
import { verifyToken } from "../middleware/token-managers.js";


const userRoutes = Router()

userRoutes.get("/",getAllUsers)
userRoutes.post("/signup",validate(signupValidator),userSignup)
userRoutes.post("/login",validate(loginValidator), userLogin)
userRoutes.get("/auth-status", verifyToken,  verifyUser )


export default userRoutes