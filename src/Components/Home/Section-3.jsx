import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Listeinfo } from "../../utils/Liste-info";

const hotelCards = [
    { id: 0, name: "Emerald Valley Lodge", location: "New Zealand, Australia", visitors: "7612 Visitors" },
    { id: 1, name: "Golden Horizon Hotel", location: "New York, USA", visitors: "212 Visitors" },
    { id: 2, name: "Whispering Pines Retreat", location: "Malang, Indonesia", visitors: "8127 Visitors" },
    { id: 3, name: "Paradise Cove Retreat", location: "Tokyo, Japan", visitors: "237 Visitors" },
    { id: 4, name: "Sunset Vista Resort", location: "Jakarta, Indonesia", visitors: "493 Visitors" },
    { id: 5, name: "Enchanted Meadows", location: "Kuala Lumpur, Malaysia", visitors: "101 Visitors" },
    { id: 6, name: "Mystic Falls Lodge", location: "Sydney, Australia", visitors: "1234 Visitors" },
    { id: 7, name: "Serenity Bay Hotel", location: "San Francisco, USA", visitors: "789 Visitors" },
];
export default function Section_3() {
    const [Search, setSearch] = useState('');
    const [NoteFound, setNoteFound] = useState(false);
    const { listeindex, setlisteindex } = useContext(Listeinfo)
    const [SavedHotels, setSavedHotels] = useState([]);
    /*-------------------------------------------------*/
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    const userIndex = users.findIndex(user => user.userEmail == currentUserEmail);
    /*-------------------------------------------------*/
    const Handelchange = e => setSearch(e.target.value.toLowerCase());
    const FilteredHotels = hotelCards.filter(item => item.location.toLowerCase().includes(Search));
    const SendIndex = index => setlisteindex([...listeindex, index])
    const SaveHotel = index => {
        if (userIndex !== -1) {
            if (users[userIndex].Save.includes(index)) {
                users[userIndex].Save = users[userIndex].Save.filter(item => item !== index)
            } else {
                users[userIndex].Save.push(index)
            }
            localStorage.setItem('users', JSON.stringify(users));
            setSavedHotels(users[userIndex].Save);
        }
    }
    /*-------------------------------------------------*/
    useEffect(() => { setNoteFound(FilteredHotels.length > 0) }, [FilteredHotels]);
    return <>
        <section className="w-full h-full mt-5 lg:mt-16 lg:px-5 xl:px-24 flex flex-wrap gap-5 lg:gap-0">
            <div className="w-full lg:h-[30vh] flex justify-between items-center flex-wrap gap-5 lg:gap-0">
                <h1 className="w-full lg:w-1/2 xl:w-[45%] lg:leading-[4.8rem] text-4xl lg:text-6xl text-center lg:text-start">Explore Our Best List 5-Stars Hotel!</h1>
                <div className="w-full lg:w-1/2 lg:h-full flex justify-center lg:justify-end items-center">
                    <div className="w-full lg:w-4/6 h-full flex flex-col justify-center gap-5 px-3 lg:px-0">
                        <p className="w-full text-xl text-center lg:text-start">
                            We understand that every traveler has
                            different preferences. That's why our platform’s good.
                        </p>
                        <div className="w-full relative flex">
                            <input type="text" placeholder="Find Hotel" value={Search} onChange={Handelchange} className="w-full px-8 py-3 z-30 rounded-full text-xl border border-black placeholder:text-gray-500 bg-transparent" />
                            <div className={`w-full h-full absolute flex justify-end items-center px-5 bg-transparent z-20 ${Search ? 'hidden' : 'flex'}`}>
                                <i class='bx bx-search text-2xl text-gray-500'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:h-screen flex items-center flex-wrap">
                <div className={`w-full h-full lg:h-[90%] flex flex-wrap ${Search ? 'justify-start gap-4' : 'justify-between gap-0'}`}>
                    {NoteFound ? (
                        FilteredHotels.map((item, index) => (
                            <div key={item.id} className="w-full sm:w-[50%] lg:w-[24%] h-[45vh] sm:h-[41vh] flex flex-col justify-between cursor-pointer Cards-section-2 p-3 lg:p-0">
                                <div className="w-full h-[68%] rounded-2xl cards-homepage-section-2" id={`Card-${index}-Section-2-HomePage`}></div>
                                <div className="w-full h-[28%] flex flex-wrap cards-homepage-info overflow-hidden gap-5">
                                    <div className="w-full h-full flex flex-col justify-between">
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
                                        <Link to="/Booking" className="w-[85%] text-center py-2 rounded-full text-lg duration-300 bg-black text-white hover:bg-green-800"
                                            onClick={() => SendIndex(index)}>Book Now</Link>
                                        <i class={`bx ${SavedHotels.includes(index) ? 'bxs-bookmark text-green-500' : 'bx-bookmark'} p-2 scale-125 rounded-full border border-black`}
                                            onClick={() => SaveHotel(index)}>
                                        </i>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="w-full h-[50vh] lg:h-full flex justify-center items-center gap-5 flex-col overflow-hidden">
                            <i class='bx bx-map-alt text-8xl'></i>
                            <h1 className="w-5/6 lg:w-[22%] text-center text-2xl">{`Sorry, This Location "${Search}" Not Found`}</h1>
                        </div>
                    )}
                </div>
            </div>
        </section>
    </>
}