import { Request, Response } from "express";

import prisma from "../db/prisma.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async(req: Request, res: Response) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const userId = req.user.id;

        let conversation = await prisma.conversation.findFirst({
            where: {
                participantIds: {
                    hasEvery: [userId, receiverId]
                }
            }
        });

        if(!conversation){
            conversation = await prisma.conversation.create({
                data: {
                    participantIds: {
                        set: [userId, receiverId]
                    }
                }
            })
        };

        const newMessage = await prisma.message.create({
            data: {
                conversationId: conversation.id,
                senderId: userId,
                body: message,
            }
        });

        if(newMessage){
            conversation = await prisma.conversation.update({
                where: {
                    id: conversation.id
                },
                data: {
                    messages: {
                        connect: {
                            id: newMessage.id
                        }
                    }
                }
            })
        };

        //For update message immediate by socket
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        };

        res.status(201).json(newMessage);
    } catch (error: any) {
        console.log("Error in sendMessage: ", error.message);
        res.status(500).json({error: "Internal server error"})
    };
};

export const getMessages = async(req: Request, res: Response) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user.id;

        const conversation = await prisma.conversation.findFirst({
            where: {
                participantIds: {
                    hasEvery: [senderId, userToChatId]
                }
            },
            include:{
                messages: {
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            }
        });

        if(!conversation){
            res.status(200).json([]);
            return
        };

        res.status(200).json(conversation.messages);
    } catch (error: any) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({error: "Internal server error"})
    }
};

export const getUserForSidebar = async(req: Request, res: Response) => {
    try {
        const userId = req.user.id;

        const users = await prisma.user.findMany({
            where: {
                id: {
                    not: userId
                }
            },
            select: {
                id: true,
                fullName: true,
                profilePic: true
            }
        });

        res.status(200).json(users);
    } catch (error: any) {
        console.log("Error in getUserForSidebar: ", error.message);
        res.status(500).json({error: "Internal server error"})
    }
};