import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface AuthUserType {
    id: string
    username: string
    fullName: string
    profilePic: string
    gender: string
}

interface CreateContextType {
    authUser: AuthUserType | null
    setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
    isLoading: boolean
}

const AuthContext = createContext<CreateContextType>({
    authUser: null,
    setAuthUser: () => {},
    isLoading: true
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext)
};

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAuthUser = async () => {
            try {
                const res = await fetch("/api/auth/me");
                const data = await res.json();

                if(!res.ok){
                    throw new Error(data.error)
                }

                setAuthUser(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error(error);
                }

            } finally {
                setIsLoading(false)
            }
        };

        fetchAuthUser();
    }, []);

    return (
        <AuthContext.Provider value={{authUser, isLoading, setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}