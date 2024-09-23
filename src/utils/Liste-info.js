import { createContext, useEffect, useState } from "react";

export const Listeinfo = createContext();

export function ListeProvider({ children }) {
    const [liste, setliste] = useState([]);
    const [listeindex, setlisteindex] = useState([]);
    const [Cardsindex, setCardsindex] = useState([]);
    const [Register, setRegister] = useState([]);
    const [SaveHotel, setSaveHotel] = useState([]);
    const [LikeHotel, setLikeHotel] = useState([]);
    /*-------------------------------------------------*/
    const contextValues = {
        liste, setliste,
        listeindex, setlisteindex,
        Cardsindex, setCardsindex,
        Register, setRegister,
        SaveHotel, setSaveHotel,
        LikeHotel, setLikeHotel,
    };
    /*-------------------------------------------------*/
    return (
        <Listeinfo.Provider value={contextValues}>
            {children}
        </Listeinfo.Provider>
    );
}
