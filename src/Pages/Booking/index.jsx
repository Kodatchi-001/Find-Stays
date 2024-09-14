import { useEffect } from "react";
import Section_1 from "../../Components/Booking/Section-1";

export default function Booking() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <>
        <Section_1 />
    </>
}