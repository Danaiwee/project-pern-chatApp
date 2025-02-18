import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "../context/AuthContext";

interface LoginInputTypes {
    username: string
    password: string
}

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async(inputs: LoginInputTypes) => {
        try {
            setLoading(true);
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputs)
            });

            const data = await res.json();

            if(!res.ok) throw new Error(data.error);

            setAuthUser(data);
            toast.success("Welcome! "+ data.fullName);

        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);

        } finally {
            setLoading(false);
        };
    };

    return {login, loading}
};

export default useLogin;