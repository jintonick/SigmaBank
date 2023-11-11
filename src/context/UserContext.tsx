import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface UserContextType {
    userType: string | null;
    setUserType: (userType: string) => void;
}

interface UserProviderProps {
    children: ReactNode;
}


const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [userType, setUserType] = useState<string | null>(null);

    return (
        <UserContext.Provider value={{ userType, setUserType }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === null) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
