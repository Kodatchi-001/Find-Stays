import { createContext, useState } from "react";

export const Listeinfo = createContext();
export function ListeProvider({ children }) {
    const [liste, setliste] = useState([]);
    const [listeindex, setlisteindex] = useState([])

    return <>
        <Listeinfo.Provider value={{ liste, setliste , listeindex , setlisteindex}}>
            {children}
        </Listeinfo.Provider>
    </>
}