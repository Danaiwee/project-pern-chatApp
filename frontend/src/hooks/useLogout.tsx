import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversation";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const {setSelectedConversation} = useConversation();

    const logout = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/auth/", {
                method: "POST"
            });

            const data = await res.json();
            if(!res.ok) throw new Error(data.error);

            setAuthUser(null);
            setSelectedConversation(null);
            toast.success("Logged out successfully");

        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);

        } finally {
            setLoading(false)
        }
    };

    return {logout, loading}
};

export default useLogout;