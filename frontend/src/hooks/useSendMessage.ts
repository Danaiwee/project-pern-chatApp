import { useState } from "react";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    const sendMessage = async (message: string) => {
        if(!selectedConversation) return
        try {
            setLoading(true);

            const res = await fetch(`/api/messages/send/${selectedConversation.id}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({message})
            });
            const data = await res.json();

            if(!res.ok) throw new Error(data.error);

            setMessages([...messages, data])

        } catch (error: any) {
            console.log(error.message);

        } finally {
            setLoading(false)
        }
    };

    return {sendMessage, loading}
};

export default useSendMessage;