import { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { Listeinfo } from "../utils/Liste-info";

export default function Section_1() {
    const [search, setsearch] = useState('');
    const [Likes, setLikes] = useState([]);
    const [Save, setSave] = useState([]);
    const [NoteFound, setNoteFound] = useState(false)
    const { liste } = useContext(Listeinfo)
    const [valide, setvalide] = useState(false)
    console.log(liste)
    const hotelCards = [
        { name: "Emerald Valley Lodge", img: 'Card-0-Section-2-HomePage.jpeg', location: "New Zealand, Australia", visitors: "7612 Visitors" },
        { name: "Golden Horizon Hotel", img: 'Card-1-Section-2-HomePage.jpeg', location: "New York, USA", visitors: "212 Visitors" },
        { name: "Whispering Pines Retreat", img: 'Card-2-Section-2-HomePage.jpeg', location: "Malang, Indonesia", visitors: "8127 Visitors" },
        { name: "Paradise Cove Retreat", img: 'Card-3-Section-2-HomePage.jpeg', location: "Tokyo, Japan", visitors: "237 Visitors" },
        { name: "Sunset Vista Resort", img: 'Card-4-Section-2-HomePage.jpeg', location: "Jakarta, Indonesia", visitors: "493 Visitors" },
        { name: "Enchanted Meadows", img: 'Card-5-Section-2-HomePage.jpeg', location: "Kuala Lumpur, Malaysia", visitors: "101 Visitors" },
        { name: "Mystic Falls Lodge", img: 'Card-6-Section-2-HomePage.jpeg', location: "Sydney, Australia", visitors: "1234 Visitors" },
        { name: "Serenity Bay Hotel", img: 'Card-7-Section-2-HomePage.jpeg', location: "San Francisco, USA", visitors: "789 Visitors" },
        { name: "Lakeside Inn", img: 'Card-8-Section-2-HomePage.jpeg', location: "Lake Tahoe, USA", visitors: "320 Visitors" },
        { name: "Mountain View Lodge", img: 'Card-9-Section-2-HomePage.jpeg', location: "Aspen, USA", visitors: "450 Visitors" },
        { name: "Ocean Breeze Resort", img: 'Card-10-Section-2-HomePage.jpeg', location: "Miami, USA", visitors: "1025 Visitors" },
        { name: "Urban Chic Hotel", img: 'Card-11-Section-2-HomePage.jpeg', location: "Paris, France", visitors: "1500 Visitors" },
        { name: "Historic Grand Hotel", img: 'Card-12-Section-2-HomePage.jpeg', location: "Rome, Italy", visitors: "2048 Visitors" },
        { name: "Sunrise Haven", img: 'Card-13-Section-2-HomePage.jpeg', location: "Bali, Indonesia", visitors: "678 Visitors" },
        { name: "Desert Oasis Inn", img: 'Card-14-Section-2-HomePage.jpeg', location: "Dubai, UAE", visitors: "943 Visitors" },
        { name: "Highland Retreat", img: 'Card-15-Section-2-HomePage.jpeg', location: "Edinburgh, Scotland", visitors: "850 Visitors" },
        { name: "Coastal Paradise Hotel", img: 'Card-16-Section-2-HomePage.jpeg', location: "Cape Town, South Africa", visitors: "1324 Visitors" },
        { name: "Cityscape Suites", img: 'Card-17-Section-2-HomePage.jpeg', location: "Hong Kong, China", visitors: "2200 Visitors" },
        { name: "Lagoon View Resort", img: 'Card-18-Section-2-HomePage.jpeg', location: "Maldives", visitors: "1890 Visitors" },
        { name: "Alpine Lodge", img: 'Card-19-Section-2-HomePage.jpeg', location: "Zurich, Switzerland", visitors: "775 Visitors" },
        { name: "Serenity Springs Inn", img: 'Card-20-Section-2-HomePage.jpeg', location: "Vancouver, Canada", visitors: "410 Visitors" },
        { name: "Island Breeze Hotel", img: 'Card-21-Section-2-HomePage.jpeg', location: "Fiji", visitors: "998 Visitors" },
        { name: "Tropical Escape Resort", img: 'Card-22-Section-2-HomePage.jpeg', location: "Cancun, Mexico", visitors: "850 Visitors" },
        { name: "Royal Palace Hotel", img: 'Card-23-Section-2-HomePage.jpeg', location: "London, UK", visitors: "1280 Visitors" },
    ];
    const handelchange = e => setsearch(e.target.value.toLowerCase());
    const SaveLike = index => setLikes(itemsLikes => itemsLikes.includes(index) ? Likes.filter(i => i !== index) : [...itemsLikes, index]);
    const SaveCards = index => setSave(itemsSave => itemsSave.includes(index) ? Save.filter(i => i !== index) : [...itemsSave, index]);
    // console.log(`Cards ${Likes.length} + ${Save.length}`);
    const hotelfilter = hotelCards.filter(item => item.location.toLowerCase().includes(search));
    useEffect(() => {
        setNoteFound(hotelfilter.length > 0);
    }, [hotelfilter])

    useEffect(() => {
        setvalide(liste.length > 0)
    }, [valide])
    return <>
        <section className="w-full lg:h-screen">
            <div className="w-full h-[9vh] lg:h-[15%] flex fixed lg:relative justify-center items-center bg-white z-50 shadow-2xl lg:shadow-transparent lg:px-6 xl:px-20">
                <Header color={'Black'} />
            </div>
            <div className="w-full h-[10vh] lg:hidden">

            </div>
            <div className="w-full h-full lg:px-6 xl:px-24">
                <div className="w-full h-auto flex flex-wrap gap-3 lg:gap-0 py-7 px-5 lg:px-0 lg:border-t border-b">
                    <div className="w-full lg:w-4/6 h-full flex justify-between lg:justify-start items-center flex-wrap gap-2 lg:gap-5">
                        <div className={`w-[45%] lg:w-auto flex flex-col gap-2 ${valide ? 'flex' : 'hidden'}`}>
                            <h1 className="w-full text-lg">Location</h1>
                            <div className="flex items-center gap-1 pl-4 pr-14 py-2 rounded-lg bg-gray">
                                <i class='bx bx-map text-lg'></i>
                                {liste.map((info, index) => (
                                    index == liste.length - 1 && <h1 key={index}>{info.Location}</h1>
                                ))}
                            </div>
                        </div>
                        <div className={`w-[45%] lg:w-auto flex flex-col gap-2 ${valide ? 'flex' : 'hidden'}`}>
                            <h1 className="w-full text-lg">Person</h1>
                            <div className="flex items-center gap-1 pl-4 pr-14 py-2 rounded-lg bg-gray">
                                <i class='bx bx-user text-lg'></i>
                                {liste.map((info, index) => (
                                    index === liste.length - 1 && <h1 key={index}>{info.Person}</h1>
                                ))}

                            </div>
                        </div>
                        <div className={`w-[45%] lg:w-auto flex flex-col gap-2 ${valide ? 'flex' : 'hidden'}`}>
                            <h1 className="w-full text-lg">Check-in</h1>
                            <div className="flex items-center gap-1 pl-4 pr-14 py-2 rounded-lg bg-gray">
                                <i class='bx bx-calendar text-lg'></i>
                                {liste.map((info, index) => (
                                    index === liste.length - 1 && <h1 key={index}>{info.DateIn}</h1>
                                ))}

                            </div>
                        </div>
                        <div className={`w-[45%] lg:w-auto flex flex-col gap-2 ${valide ? 'flex' : 'hidden'}`}>
                            <h1 className="w-full text-lg">Check-out</h1>
                            <div className="flex items-center gap-2 pl-4 pr-14 py-2 rounded-lg bg-gray">
                                <i class='bx bx-calendar text-lg'></i>
                                {liste.map((info, index) => (
                                    index === liste.length - 1 && <h1 key={index}>{info.DateOut}</h1>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/6 h-full flex justify-between items-end lg:gap-3 xl:gap-0">
                        <div className="w-[65%] sm:w-[75%] lg:w-[65%] h-full flex flex-col justify-between gap-2">
                            <h1 className="w-full text-lg">Find spesific hotel</h1>
                            <div className="w-full relative flex">
                                <input type="text" placeholder="Find Hotel" value={search} onChange={handelchange} className="w-full px-6 py-2 z-30 rounded-full border bg-gray placeholder:text-gray-500 bg-transparent" />
                                <div className={`w-full h-full absolute flex justify-end items-center px-5 bg-transparent z-20 ${search ? 'hidden' : 'flex'}`}>
                                    <i class='bx bx-search text-2xl text-gray-500'></i>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2 px-7 py-2 rounded-full cursor-pointer text-lg bg-gray filter hover:bg-black hover:text-white">
                            <i class='bx bx-book-bookmark'></i>
                            <h1>Filter</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto">
                    <div className="w-full py-5 px-5 lg:px-0 flex flex-col justify-center">
                        <h1 className="text-2xl">Hotels In Jakarta,Indonisia</h1>
                        <h1 className="text-gray-400">We Found <span className="text-black">250</span> Premuim Hotels</h1>
                    </div>
                    <div className={`w-full h-full flex flex-wrap gap-4 sm:gap-0 lg:gap-4 ${search ? 'justify-start' : 'justify-between'}`}>
                        {NoteFound ?
                            hotelfilter.map((item, index) => (
                                <div key={index} className="w-full sm:w-[50%] lg:w-[32%] xl:w-[24%] h-[45vh] sm:h-[41vh] lg:mt-1 lg:mb-1 flex flex-col justify-between cursor-pointer Cards-section-2 p-3 lg:p-0">
                                    <div className="w-full h-[68%] rounded-2xl cards-homepage-section-2 haja" style={{ backgroundImage: `url(${require(`../../Assets/${item.img}`)})` }}>
                                        <div className="w-full h-full p-4">
                                            <i class={`bx bx-heart p-2 scale-110 bg-white rounded-full ${Likes.includes(index) ? 'bxs-heart text-red-500' : 'bx-heart text-black'}`}
                                                onClick={() => SaveLike(index)}></i>
                                        </div>
                                    </div>
                                    <div className="w-full h-[28%] flex flex-wrap cards-homepage-info overflow-hidden gap-5">
                                        <div className="w-full h-full flex flex-col justify-between">
                                            <div className="w-full h-2/3 flex flex-col">
                                                <h1 className="text-2xl lg:text-xl xl:text-2xl">{item.name}</h1>
                                                <h1>{item.location}</h1>
                                            </div>
                                            <div className="w-full h-1/3 flex items-center gap-2">
                                                <div className="flex gap-1  text-yellow-500">
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
                                            <button className="w-[85%] py-2 rounded-full text-lg bg-black text-white hover:bg-green-800">Book Now</button>
                                            <i class={`bx bx-bookmark ${Save.includes(index) ? 'bxs-bookmark' : 'bx-bookmark'} p-2 scale-125 rounded-full border border-black`}
                                                onClick={() => SaveCards(index)}>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="w-full h-[50vh] lg:h-[40vh] flex justify-center items-center gap-5 flex-col overflow-hidden">
                                    <i class='bx bx-map-alt text-8xl'></i>
                                    <h1 className="w-5/6 lg:w-[22%] text-center text-2xl">{`Sorry, This Location "${search}" Not Found`}</h1>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </section >
    </>
}