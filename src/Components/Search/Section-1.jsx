import { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { Listeinfo } from "../../utils/Liste-info";
import { Link } from "react-router-dom";
const HotelCards = [
    { id: 0, name: "Emerald Valley Lodge", img: 'Card-0-Section-2-HomePage.jpeg', location: "New Zealand, Australia", visitors: "7612 Visitors" },
    { id: 1, name: "Golden Horizon Hotel", img: 'Card-1-Section-2-HomePage.jpeg', location: "New York, USA", visitors: "212 Visitors" },
    { id: 2, name: "Whispering Pines Retreat", img: 'Card-2-Section-2-HomePage.jpeg', location: "Malang, Indonesia", visitors: "8127 Visitors" },
    { id: 3, name: "Paradise Cove Retreat", img: 'Card-3-Section-2-HomePage.jpeg', location: "Tokyo, Japan", visitors: "237 Visitors" },
    { id: 4, name: "Sunset Vista Resort", img: 'Card-4-Section-2-HomePage.jpeg', location: "Jakarta, Indonesia", visitors: "493 Visitors" },
    { id: 5, name: "Enchanted Meadows", img: 'Card-5-Section-2-HomePage.jpeg', location: "Kuala Lumpur, Malaysia", visitors: "101 Visitors" },
    { id: 6, name: "Mystic Falls Lodge", img: 'Card-6-Section-2-HomePage.jpeg', location: "Sydney, Australia", visitors: "1234 Visitors" },
    { id: 7, name: "Serenity Bay Hotel", img: 'Card-7-Section-2-HomePage.jpeg', location: "San Francisco, USA", visitors: "789 Visitors" },
    { id: 8, name: "Lakeside Inn", img: 'Card-8-Section-2-HomePage.jpeg', location: "Lake Tahoe, USA", visitors: "320 Visitors" },
    { id: 9, name: "Mountain View Lodge", img: 'Card-9-Section-2-HomePage.jpeg', location: "Aspen, USA", visitors: "450 Visitors" },
    { id: 10, name: "Ocean Breeze Resort", img: 'Card-10-Section-2-HomePage.jpeg', location: "Miami, USA", visitors: "1025 Visitors" },
    { id: 11, name: "Urban Chic Hotel", img: 'Card-11-Section-2-HomePage.jpeg', location: "Paris, France", visitors: "1500 Visitors" }
];
export default function Section_1() {
    const [Inputvalue, setInputvalue] = useState('')
    const [Search, setSearch] = useState('');
    const [Likes, setLikes] = useState([]);
    const [Save, setSave] = useState([]);
    const [NoteFound, setNoteFound] = useState(false);
    const { liste } = useContext(Listeinfo);
    const { listeindex, setlisteindex } = useContext(Listeinfo);
    const [Valide, setValide] = useState(false);
    /*-------------------------------------------------*/
    const HandleChange = e => setInputvalue(e.target.value.toLowerCase());
    const Savevalue = () => setSearch(Inputvalue)
    const SaveLike = index => setLikes(itemsLikes => itemsLikes.includes(index) ? Likes.filter(i => i !== index) : [...itemsLikes, index]);
    const SaveCards = index => setSave(itemsSave => itemsSave.includes(index) ? Save.filter(i => i !== index) : [...itemsSave, index]);
    const FilterCards = () => {
        const LastLocation = liste[liste.length - 1]?.Location.toLowerCase() || '';
        const FilteredBySearch = HotelCards.filter(item => item.location.toLowerCase().includes(Search));
        const FilteredByLocation = LastLocation ? FilteredBySearch.filter(item => item.location.toLowerCase().includes(LastLocation)) : FilteredBySearch;
        return FilteredByLocation;
    };
    const SendIndex = index => setlisteindex([...listeindex, index])
    /*-------------------------------------------------*/
    useEffect(() => {
        const Filtered = FilterCards();
        setNoteFound(Filtered.length > 0);
    }, [Search, liste]);
    useEffect(() => { liste.length > 0 ? setValide(true) : setValide(false) }, [liste]);
    const renderCards = () => {
        const FilteredCards = FilterCards();
        return NoteFound ? (
            FilteredCards.map((item, index) => (
                <div key={index} className="w-full sm:w-[50%] lg:w-[32%] xl:w-[24%] h-[45vh] sm:h-[41vh] lg:mt-1 lg:mb-1 flex flex-col justify-between cursor-pointer Cards-section-2 p-3 lg:p-0">
                    <div className="w-full h-[68%] rounded-2xl cards-homepage-section-2 Background-cards" style={{ backgroundImage: `url(${require(`../../Assets/${item.img}`)})` }}>
                        <div className="w-full h-full p-4">
                            <i className={`bx bx-heart p-2 scale-110 bg-white rounded-full ${Likes.includes(index) ? 'bxs-heart text-red-500' : 'bx-heart text-black'}`} onClick={() => SaveLike(index)}></i>
                        </div>
                    </div>
                    <div className="w-full h-[28%] flex flex-wrap cards-homepage-info overflow-hidden gap-5">
                        <div className="w-full h-full flex flex-col justify-between gap-1 lg:gap-0">
                            <div className="w-full h-2/3 flex flex-col">
                                <h1 className="text-2xl lg:text-xl xl:text-2xl">{item.name}</h1>
                                <h1>{item.location}</h1>
                            </div>
                            <div className="w-full h-1/3 flex items-center gap-2">
                                <div className="flex gap-1 text-yellow-500">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </div>
                                <h1 className="text-sm mt-[0.5vh]">({item.visitors})</h1>
                            </div>
                        </div>
                        <div className="w-full h-[40%] flex justify-between items-center cards-homepage-buttons pr-2 lg:gap-5 xl:gap-0">
                            <Link to="/Booking" onClick={() => SendIndex(item.id)} className="w-[85%] flex justify-center py-2 rounded-full text-lg bg-black text-white hover:bg-green-800 button-link">Book Now</Link>
                            <i className={`bx bx-bookmark ${Save.includes(index) ? 'bxs-bookmark' : 'bx-bookmark'} p-2 scale-125 rounded-full border border-black`} onClick={() => SaveCards(index)}></i>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div className="w-full h-[50vh] lg:h-[40vh] flex justify-center items-center gap-5 flex-col overflow-hidden">
                <i className='bx bx-map-alt text-8xl'></i>
                <h1 className="w-5/6 lg:w-[22%] text-center text-2xl">{`Sorry, This Location Not Found`}</h1>
            </div>
        );
    };
    return (
        <section className="w-full lg:h-screen lg:px-6 xl:px-20">
            <Header color={'Black'} />
            <div className="w-full h-[10vh] lg:hidden"></div>
            <div className="w-full h-full">
                <div className="w-full h-auto flex flex-wrap gap-3 lg:gap-0 py-7 px-5 lg:px-0 lg:border-t border-b">
                    <div className="w-full lg:w-4/6 h-full flex justify-between lg:justify-start items-center flex-wrap gap-2 lg:gap-5">
                        <div className={`w-[45%] lg:w-auto flex flex-col gap-2 ${Valide ? 'flex' : 'hidden'}`}>
                            <h1 className="w-full text-lg">Location</h1>
                            <div className="flex items-center gap-2 lg:gap-1 pl-3 lg:pl-4 pr-14 py-2 rounded-lg bg-gray">
                                <i class='bx bx-map text-lg'></i>
                                {liste.map((info, index) => (
                                    index == liste.length - 1 && <h1 key={index}>{info.Location}</h1>
                                ))}
                            </div>
                        </div>
                        <div className={`w-[45%] lg:w-auto flex flex-col gap-2 ${Valide ? 'flex' : 'hidden'}`}>
                            <h1 className="w-full text-lg">Person</h1>
                            <div className="flex items-center gap-2 lg:gap-1 pl-3 lg:pl-4 pr-14 py-2 rounded-lg bg-gray">
                                <i class='bx bx-user text-lg'></i>
                                {liste.map((info, index) => (
                                    index === liste.length - 1 && <h1 key={index}>{info.Person}</h1>
                                ))}

                            </div>
                        </div>
                        <div className={`w-[45%] lg:w-auto flex flex-col gap-2 ${Valide ? 'flex' : 'hidden'}`}>
                            <h1 className="w-full text-lg">Check-in</h1>
                            <div className="flex items-center gap-2 lg:gap-1 pl-3 lg:pl-4 lg:pr-14 py-2 rounded-lg bg-gray">
                                <i class='bx bx-calendar text-lg'></i>
                                {liste.map((info, index) => (
                                    index === liste.length - 1 && <h1 key={index}>{info.DateIn}</h1>
                                ))}

                            </div>
                        </div>
                        <div className={`w-[45%] lg:w-auto flex flex-col gap-2 ${Valide ? 'flex' : 'hidden'}`}>
                            <h1 className="w-full text-lg">Check-out</h1>
                            <div className="flex items-center gap-2 lg:gap-1 pl-3 lg:pl-4 lg:pr-14 py-2 rounded-lg bg-gray">
                                <i class='bx bx-calendar text-lg'></i>
                                {liste.map((info, index) => (
                                    index === liste.length - 1 && <h1 key={index}>{info.DateOut}</h1>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/6 h-full flex justify-between items-end gap-3 xl:gap-1">
                        <div className="w-[65%] sm:w-[75%] lg:w-[70%] h-full flex flex-col justify-between gap-2">
                            <h1 className="w-full text-lg">Find specific hotel</h1>
                            <div className="w-full relative flex">
                                <input type="text" placeholder="Find Hotel" onChange={HandleChange} className="w-full px-6 py-2 z-30 rounded-full border bg-gray placeholder:text-gray-500 bg-transparent" />
                                <div className={`w-full h-full absolute flex justify-end items-center px-5 bg-transparent z-20 ${Search ? 'hidden' : 'flex'}`}>
                                    <i className='bx bx-search text-2xl text-gray-500'></i>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2 px-7 py-2 rounded-full cursor-pointer text-lg bg-gray filter hover:bg-black hover:text-white"
                            onClick={Savevalue}>
                            <i className='bx bx-book-bookmark'></i>
                            <h1>Filter</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto">
                    <div className="w-full py-5 px-5 lg:px-0 flex flex-col justify-center">
                        <h1 className="text-2xl">Explore the Best Luxury Hotels</h1>
                        <h1 className="text-gray-400">We Found <span className="text-black">{HotelCards.length}</span> Premium Hotels</h1>
                    </div>
                    <div className={`w-full h-full flex flex-wrap gap-4 sm:gap-0 lg:gap-4 ${Search || liste.length ? 'justify-start' : 'justify-between'}`}>
                        {renderCards()}
                    </div>
                </div>
            </div>
        </section>
    );
}
