import { useEffect } from "react";
import Section_1 from "../../Components/Search/Section-1";

export default function Search() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return <>
        <Section_1 />
    </>
}