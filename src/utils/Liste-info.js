import { createContext, useState } from "react";

export const Listeinfo = createContext();
export function ListeProvider({ children }) {
    const [liste, setliste] = useState([]);

    return <>
        <Listeinfo.Provider value={{ liste, setliste }}>
            {children}
        </Listeinfo.Provider>
    </>
}