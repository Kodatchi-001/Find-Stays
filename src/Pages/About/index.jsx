import Section_1 from "../../Components/About/Section-1";
import Section_2 from "../../Components/About/Section-2";
import Section_3 from "../../Components/About/Section-3";
import Section_4 from "../../Components/About/Section-4";
import Section_5 from "../../Components/About/Section-5";
import Footer from "../../Components/Footer/Footer";

export default function About() {
    return <>
        <Section_1 />
        <Section_2 />
        <Section_3/>
        <Section_4/>
        <Section_5/>
        <Footer background={'white'} background_2={'black'}/>
    </>
}