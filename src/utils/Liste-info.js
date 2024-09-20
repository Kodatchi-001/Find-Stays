import { createContext, useState } from "react";

export const Listeinfo = createContext();
export function ListeProvider({ children }) {
    const [liste, setliste] = useState([]);
    const [listeindex, setlisteindex] = useState([]);
    const [Cardsindex, setCardsindex] = useState([]);

    return <>
        <Listeinfo.Provider value={{ liste, setliste, listeindex, setlisteindex, Cardsindex, setCardsindex }}>
            {children}
        </Listeinfo.Provider>
    </>
}