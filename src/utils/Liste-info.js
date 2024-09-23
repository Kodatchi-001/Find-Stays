import { createContext, useEffect, useState } from "react";

export const Listeinfo = createContext();

export function ListeProvider({ children }) {
    const [liste, setliste] = useState([]);
    const [listeindex, setlisteindex] = useState([]);
    const [Cardsindex, setCardsindex] = useState([]);
    /*-------------------------------------------------*/
    const contextValues = {
        liste, setliste,
        listeindex, setlisteindex,
        Cardsindex, setCardsindex,
    };
    /*-------------------------------------------------*/
    return (
        <Listeinfo.Provider value={contextValues}>
            {children}
        </Listeinfo.Provider>
    );
}
