import { Request, RequestHandler, Response } from "express";
import bcrypt from "bcryptjs";

import prisma from "../db/prisma.js";
import generateToken from "../utils/generateToken.js";


export const signup = async(req: Request, res: Response) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if(!fullName || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({error: "All fields are required"})
        };

        if(password !== confirmPassword){
            return res.status(400).json({error: "Password must be matched"})
        };

        const user = await prisma.user.findUnique({where: {username}});
        if(user){
            res.status(400).json({error: "Username already exists"});
        };

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //generate profile image
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = await prisma.user.create({
            data: {
                fullName,
                username,
                password: hashedPassword,
                gender,
                profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
            }
        });

        if(newUser){
            generateToken(newUser.id, res);

            return res.status(201).json({
                id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });

        } else {
            return res.status(400).json({error: "Invalid user data"})
        };
    } catch (error: any) {
        console.log("Error in signup controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    };
};

export const login = async(req: Request, res: Response) => {
    try {
        const {username, password} = req.body;

        const user = await prisma.user.findUnique({where: {username}});
        if(!user){
            return res.status(400).json({error: "Invalid credentials"})
        };

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({error: "Invalid credentails"})
        };

        generateToken(user.id, res);

        return res.status(200).json({
            id: user.id,
            username: user.username,
            fullName: user.fullName,
            profilePic: user.profilePic
        });

    } catch (error: any) {
        console.log("Error in login controller: ", error.message);
        res.status(500).json({error: "Internal server error"})
    };
};

export const logout = async(req: Request, res: Response) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});

        return res.status(200).json({message: "Logged out successfully"});
    } catch (error: any) {
        console.log("Error in logout controller: ", error.message);
        res.status(500).json({error: "Internal server error"})
    }
};

export const getMe = async(req: Request, res: Response) => {
    try {
        const userId = req.user.id;

        const user = await prisma.user.findUnique({where: {id: userId}});
        if(!user){
            return res.status(404).json({error: "User not found"})
        };

        return res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });
    } catch (error: any) {
        console.log("Error in getMe controller: ", error.message);
        res.status(500).json({error: 'Internal server error'})
    };
};