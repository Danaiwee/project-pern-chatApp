import { useEffect, useState } from "react";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState<ConversationType[]>([])

    useEffect(() => {
        const getConversation = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/messages/conversations");
                const data = await res.json();

                if(!res.ok) throw new Error(data.error);

                setConversations(data);
            } catch (error: any) {
                console.log(error.message);
            } finally {
                setLoading(false)
            }
        };

        getConversation();
    }, []);

    return {loading, conversations}
};

export default useGetConversations;