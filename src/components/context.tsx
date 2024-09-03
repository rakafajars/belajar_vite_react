import React, { createContext } from "react";


interface IUserContext {
    user: IUser;
}

export const UserContext = createContext<IUserContext>({
    user: {
        id: "",
        name: "",
        email: "",

    }
});

interface UserProviderProps {
    children: React.ReactNode
}

interface IUser {
    id: string;
    name: string;
    email: string
}



export const UserProvider = ({ children }: UserProviderProps) => {
    const user = {
        id: "blablabla123",
        name: "Raka",
        email: "raka@gmail.com"
    }
    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}