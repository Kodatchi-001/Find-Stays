import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { Listeinfo } from "../../utils/Liste-info";
const hotel_Cards_info = [
    { id: 0, name: "Emerald Valley Lodge", img: 'Card-0-Section-2-HomePage.jpeg', location: "New Zealand, Australia", img_2: 'Card-0-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-0-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-0-Section-2-HomePage-chambre-3.jpeg', about: 'Radiant Residences est un hôtel moderne situé à Jakarta, offrant une expérience luxueuse avec des équipements contemporains. Les chambres élégamment décorées offrent une vue imprenable sur la ville. Profitez de notre piscine spectaculaire et de notre espace bien-être pour un séjour inoubliable. Le service client est impeccable, garantissant une expérience sans faille. Que vous soyez en voyage d’affaires ou de loisirs, Radiant Residences répondra à tous vos besoins.', facilities: ['Free wifi', '2 Bathroom', '3 Bedroom', 'Swimming Pool'] },
    { id: 1, name: "Golden Horizon Hotel", img: 'Card-1-Section-2-HomePage.jpeg', location: "New York, USA", img_2: 'Card-1-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-1-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-1-Section-2-HomePage-chambre-3.jpeg', about: 'Emerald Suites propose un hébergement élégant avec des chambres spacieuses et des vues panoramiques sur la ville. Chaque chambre est équipée de tout le confort moderne pour vous garantir une expérience agréable. Le centre de fitness et le bar sur le toit sont des atouts majeurs pour les visiteurs en quête de détente et de divertissement. Notre personnel attentif est là pour répondre à toutes vos attentes, vous assurant un séjour exceptionnel. Emerald Suites est le choix parfait pour un séjour chic à New York.', facilities: ['Free wifi', 'Fitness center', 'Rooftop bar'] },
    { id: 2, name: "Whispering Pines Retreat", img: 'Card-2-Section-2-HomePage.jpeg', location: "Malang, Indonesia", img_2: 'Card-0-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-0-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-0-Section-2-HomePage-chambre-3.jpeg', about: 'Radiant Residences est un hôtel moderne situé à Jakarta, offrant une expérience luxueuse avec des équipements contemporains. Les chambres élégamment décorées offrent une vue imprenable sur la ville. Profitez de notre piscine spectaculaire et de notre espace bien-être pour un séjour inoubliable. Le service client est impeccable, garantissant une expérience sans faille. Que vous soyez en voyage d’affaires ou de loisirs, Radiant Residences répondra à tous vos besoins.', facilities: ['Free wifi', '2 Bathroom', '3 Bedroom', 'Swimming Pool'] },
    { id: 3, name: "Paradise Cove Retreat", img: 'Card-3-Section-2-HomePage.jpeg', location: "Tokyo, Japan", img_2: 'Card-1-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-1-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-1-Section-2-HomePage-chambre-3.jpeg', about: 'Emerald Suites propose un hébergement élégant avec des chambres spacieuses et des vues panoramiques sur la ville. Chaque chambre est équipée de tout le confort moderne pour vous garantir une expérience agréable. Le centre de fitness et le bar sur le toit sont des atouts majeurs pour les visiteurs en quête de détente et de divertissement. Notre personnel attentif est là pour répondre à toutes vos attentes, vous assurant un séjour exceptionnel. Emerald Suites est le choix parfait pour un séjour chic à New York.', facilities: ['Free wifi', 'Fitness center', 'Rooftop bar'] },
    { id: 4, name: "Sunset Vista Resort", img: 'Card-4-Section-2-HomePage.jpeg', location: "Jakarta, Indonesia", img_2: 'Card-0-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-0-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-0-Section-2-HomePage-chambre-3.jpeg', about: 'Radiant Residences est un hôtel moderne situé à Jakarta, offrant une expérience luxueuse avec des équipements contemporains. Les chambres élégamment décorées offrent une vue imprenable sur la ville. Profitez de notre piscine spectaculaire et de notre espace bien-être pour un séjour inoubliable. Le service client est impeccable, garantissant une expérience sans faille. Que vous soyez en voyage d’affaires ou de loisirs, Radiant Residences répondra à tous vos besoins.', facilities: ['Free wifi', '2 Bathroom', '3 Bedroom', 'Swimming Pool'] },
    { id: 5, name: "Enchanted Meadows", img: 'Card-5-Section-2-HomePage.jpeg', location: "Kuala Lumpur, Malaysia", img_2: 'Card-1-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-1-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-1-Section-2-HomePage-chambre-3.jpeg', about: 'Emerald Suites propose un hébergement élégant avec des chambres spacieuses et des vues panoramiques sur la ville. Chaque chambre est équipée de tout le confort moderne pour vous garantir une expérience agréable. Le centre de fitness et le bar sur le toit sont des atouts majeurs pour les visiteurs en quête de détente et de divertissement. Notre personnel attentif est là pour répondre à toutes vos attentes, vous assurant un séjour exceptionnel. Emerald Suites est le choix parfait pour un séjour chic à New York.', facilities: ['Free wifi', 'Fitness center', 'Rooftop bar'] },
    { id: 6, name: "Mystic Falls Lodge", img: 'Card-6-Section-2-HomePage.jpeg', location: "Sydney, Australia", img_2: 'Card-0-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-0-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-0-Section-2-HomePage-chambre-3.jpeg', about: 'Radiant Residences est un hôtel moderne situé à Jakarta, offrant une expérience luxueuse avec des équipements contemporains. Les chambres élégamment décorées offrent une vue imprenable sur la ville. Profitez de notre piscine spectaculaire et de notre espace bien-être pour un séjour inoubliable. Le service client est impeccable, garantissant une expérience sans faille. Que vous soyez en voyage d’affaires ou de loisirs, Radiant Residences répondra à tous vos besoins.', facilities: ['Free wifi', '2 Bathroom', '3 Bedroom', 'Swimming Pool'] },
    { id: 7, name: "Serenity Bay Hotel", img: 'Card-7-Section-2-HomePage.jpeg', location: "San Francisco, USA", img_2: 'Card-1-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-1-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-1-Section-2-HomePage-chambre-3.jpeg', about: 'Emerald Suites propose un hébergement élégant avec des chambres spacieuses et des vues panoramiques sur la ville. Chaque chambre est équipée de tout le confort moderne pour vous garantir une expérience agréable. Le centre de fitness et le bar sur le toit sont des atouts majeurs pour les visiteurs en quête de détente et de divertissement. Notre personnel attentif est là pour répondre à toutes vos attentes, vous assurant un séjour exceptionnel. Emerald Suites est le choix parfait pour un séjour chic à New York.', facilities: ['Free wifi', 'Fitness center', 'Rooftop bar'] },
    { id: 8, name: "Lakeside Inn", img: 'Card-8-Section-2-HomePage.jpeg', location: "Lake Tahoe, USA", img_2: 'Card-0-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-0-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-0-Section-2-HomePage-chambre-3.jpeg', about: 'Radiant Residences est un hôtel moderne situé à Jakarta, offrant une expérience luxueuse avec des équipements contemporains. Les chambres élégamment décorées offrent une vue imprenable sur la ville. Profitez de notre piscine spectaculaire et de notre espace bien-être pour un séjour inoubliable. Le service client est impeccable, garantissant une expérience sans faille. Que vous soyez en voyage d’affaires ou de loisirs, Radiant Residences répondra à tous vos besoins.', facilities: ['Free wifi', '2 Bathroom', '3 Bedroom', 'Swimming Pool'] },
    { id: 9, name: "Mountain View Lodge", img: 'Card-9-Section-2-HomePage.jpeg', location: "Aspen, USA", img_2: 'Card-1-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-1-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-1-Section-2-HomePage-chambre-3.jpeg', about: 'Emerald Suites propose un hébergement élégant avec des chambres spacieuses et des vues panoramiques sur la ville. Chaque chambre est équipée de tout le confort moderne pour vous garantir une expérience agréable. Le centre de fitness et le bar sur le toit sont des atouts majeurs pour les visiteurs en quête de détente et de divertissement. Notre personnel attentif est là pour répondre à toutes vos attentes, vous assurant un séjour exceptionnel. Emerald Suites est le choix parfait pour un séjour chic à New York.', facilities: ['Free wifi', 'Fitness center', 'Rooftop bar'] },
    { id: 10, name: "Ocean Breeze Resort", img: 'Card-10-Section-2-HomePage.jpeg', location: "Miami, USA", img_2: 'Card-0-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-0-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-0-Section-2-HomePage-chambre-3.jpeg', about: 'Radiant Residences est un hôtel moderne situé à Jakarta, offrant une expérience luxueuse avec des équipements contemporains. Les chambres élégamment décorées offrent une vue imprenable sur la ville. Profitez de notre piscine spectaculaire et de notre espace bien-être pour un séjour inoubliable. Le service client est impeccable, garantissant une expérience sans faille. Que vous soyez en voyage d’affaires ou de loisirs, Radiant Residences répondra à tous vos besoins.', facilities: ['Free wifi', '2 Bathroom', '3 Bedroom', 'Swimming Pool'] },
    { id: 11, name: "Urban Chic Hotel", img: 'Card-11-Section-2-HomePage.jpeg', location: "Paris, France", img_2: 'Card-1-Section-2-HomePage-chambre-1.jpeg', img_3: 'Card-1-Section-2-HomePage-chambre-2.jpeg', img_4: 'Card-1-Section-2-HomePage-chambre-3.jpeg', about: 'Emerald Suites propose un hébergement élégant avec des chambres spacieuses et des vues panoramiques sur la ville. Chaque chambre est équipée de tout le confort moderne pour vous garantir une expérience agréable. Le centre de fitness et le bar sur le toit sont des atouts majeurs pour les visiteurs en quête de détente et de divertissement. Notre personnel attentif est là pour répondre à toutes vos attentes, vous assurant un séjour exceptionnel. Emerald Suites est le choix parfait pour un séjour chic à New York.', facilities: ['Free wifi', 'Fitness center', 'Rooftop bar'] }
];
export default function Section_1() {
    const [inputnumber, setinputnumber] = useState(0);
    const [inputCheckin, setinputCheckin] = useState(null);
    const [inputCheckout, setinputCheckout] = useState(null);
    const [Price, setPrice] = useState(0);
    const [Pictures, setPictures] = useState(null)
    const { liste, listeindex, setlisteindex } = useContext(Listeinfo);
    /*-------------------------------------------------*/
    const ChangeNumber = e => setinputnumber(e.target.value)
    const ChangeCheckin = e => setinputCheckin(e.target.value);
    const ChangeCheckout = e => setinputCheckout(e.target.value);
    /*-------------------------------------------------*/
    useEffect(() => {
        setinputnumber(parseInt(liste[liste.length - 1]?.Person || inputnumber));
        setinputCheckin(liste[liste.length - 1]?.DateIn || '2025-05-01')
        setinputCheckout(liste[liste.length - 1]?.DateOut || '2025-10-01');
        setlisteindex(listeindex.slice(-1))
    }, []);
    useEffect(() => { setPrice(inputnumber * 40) }, [inputnumber]);
    /*-------------------------------------------------*/
    const ChangePicture = src => setPictures(src)
    return <>
        <section className="w-full lg:h-screen lg:px-24">
            <Header color={'Black'} />
            <div className="w-full h-[10vh] lg:hidden"></div>
            <div className="w-full">
                <div className="w-full h-full flex flex-wrap gap-3 lg:gap-0 pt-7 px-5 lg:px-0 lg:border-t">
                    <div className="w-full py-8">
                        <div className="lg:w-1/6 h-full flex lg:justify-center items-center gap-5">
                            <Link to="/Search">
                                <i class='bx bx-chevron-left p-2 text-[1.3rem] font-bold cursor-pointer hover:bg-black hover:text-white border border-[#a5a5a5] rounded-full'></i>
                            </Link>
                            <div className="h-full flex items-center gap-2">
                                <h1 className="text-lg text-[#a5a5a5]">Search</h1>
                                <div className="p-[0.4rem] scale-50 bg-black rounded-full"></div>
                                <h1 className="text-lg">Details</h1>
                            </div>
                        </div>
                    </div>
                    {hotel_Cards_info.filter(item => item.id == listeindex).map((items, index) => (
                        <div key={index} className="w-full h-full flex flex-wrap gap-5">
                            <div className="w-full h-1/6 flex flex-col justify-center gap-3">
                                <h1 className="text-5xl">{items.name}</h1>
                                <div className="flex text-2xl text-[#a5a5a5]">
                                    <h1>{items.location}</h1>
                                </div>
                            </div>
                            <div className="w-full h-full lg:h-screen py-2 flex justify-between flex-wrap">
                                <div className="w-full lg:w-[65%] h-full flex flex-col justify-between">
                                    <div className="w-full h-[40vh] lg:h-[70%] rounded-3xl Card-Booking" style={{ backgroundImage: `url(${require(`../../Assets/${Pictures == null ? items.img : Pictures}`)})` }}>

                                    </div>
                                    <div className="w-full h-[30%] flex justify-between items-center py-4 lg:py-2 gap-2 lg:gap-0 overflow-x-scroll lg:overflow-auto">
                                        <div className="min-w-[40vw] lg:min-w-[24%] h-[15vh] lg:h-[80%] rounded-xl lg:rounded-3xl cursor-pointer cards" style={{ backgroundImage: `url(${require(`../../Assets/${items.img}`)})` }}
                                            onClick={() => ChangePicture(items.img)}></div>
                                        <div className="min-w-[40vw] lg:min-w-[24%] h-[15vh] lg:h-[80%] rounded-xl lg:rounded-3xl cursor-pointer cards" style={{ backgroundImage: `url(${require(`../../Assets/${items.img_2}`)})` }}
                                            onClick={() => ChangePicture(items.img_2)}></div>
                                        <div className="min-w-[40vw] lg:min-w-[24%] h-[15vh] lg:h-[80%] rounded-xl lg:rounded-3xl cursor-pointer cards" style={{ backgroundImage: `url(${require(`../../Assets/${items.img_3}`)})` }}
                                            onClick={() => ChangePicture(items.img_3)}></div>
                                        <div className="min-w-[40] lg:min-w-[24%] h-[15vh] lg:h-[80%] rounded-xl lg:rounded-3xl cursor-pointer cards" style={{ backgroundImage: `url(${require(`../../Assets/${items.img_4}`)})` }}
                                            onClick={() => ChangePicture(items.img_4)}></div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 lg:h-[75%] rounded-xl p-3 gap-3 lg:gap-0 flex flex-col justify-between bg-gray">
                                    <div className="w-full lg:h-[72%] flex flex-col justify-between p-4 rounded-xl bg-white">
                                        <div className="w-full flex flex-wrap">
                                            <h1 className="w-full text-lg text-gray-500 font-serif">Location</h1>
                                            <input type="text" value={items.location} className="w-full px-6 py-2 rounded-full text-xl border border-gray-400" />
                                        </div>
                                        <div className="w-full flex flex-wrap gap-2">
                                            <h1 className="w-full text-lg text-gray-500 font-serif">Person</h1>
                                            <div className="w-full flex justify-end items-center relative">
                                                <input type="number" value={inputnumber} onChange={ChangeNumber} readOnly className="w-full px-6 py-2 rounded-full text-xl border border-gray-400" />
                                                <div className="w-1/2 h-5/6 flex justify-end items-center gap-1 px-2 rounded-full absolute mr-2 bg-white">
                                                    <i class='bx bx-minus p-2 scale-90 cursor-pointer bg-gray-200 rounded-full border border-black'
                                                        onClick={() => setinputnumber(inputnumber > 0 ? inputnumber - 1 : 0)}></i>
                                                    <i class='bx bx-plus p-2 scale-90 cursor-pointer bg-black text-white rounded-full border border-black'
                                                        onClick={() => setinputnumber(inputnumber + 1)}></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-wrap gap-2">
                                            <h1 className="w-full text-lg text-gray-500 font-serif">Check-in</h1>
                                            <div className="w-full relative flex justify-end items-center">
                                                <input type="date" value={inputCheckin} onChange={ChangeCheckin} className="w-full px-6 py-2 rounded-full text-xl border border-gray-400" />
                                                <div className="w-1/3 h-5/6 absolute rounded-full bg-white mr-2"></div>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-wrap gap-2">
                                            <h1 className="w-full text-lg text-gray-500 font-serif">Check-out</h1>
                                            <div className="w-full relative flex justify-end items-center">
                                                <input type="date" value={inputCheckout} onChange={ChangeCheckout} className="w-full px-6 py-2 rounded-full text-xl border border-gray-400" />
                                                <div className="w-1/3 h-5/6 absolute rounded-full bg-white mr-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:h-[25%] flex flex-col justify-between gap-3 lg:gap-0">
                                        <div className="w-full flex justify-between items-center px-5 py-4 bg-white rounded-xl font-serif">
                                            <h1 className="text-lg">Pricing Per Night</h1>
                                            <h1 className="text-lg">${Price}/Night</h1>
                                        </div>
                                        <button className="w-full py-4 rounded-xl text-lg hover:bg-green-500 bg-black text-white">Reserve</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/6 lg:h-[30vh] flex flex-col justify-center gap-5">
                                <h1 className="text-5xl">About</h1>
                                <p className="lg:text-lg text-gray-500">{items.about}</p>
                            </div>
                            <div className="w-full h-[20vh] mt-5 flex flex-col justify-center gap-5">
                                <h1 className="text-5xl">Facilities</h1>
                                <div className="w-full flex justify-center lg:justify-start flex-wrap gap-2 lg:gap-6 text-white">
                                    {items.facilities.map((facilitie, index) => (
                                        <h1 key={index} className="w-[48%] lg:w-auto lg:px-8 py-3 lg:py-2 text-lg text-center bg-black rounded-full">{facilitie}</h1>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mt-6 lg:mt-0 mb-5 lg:mb-0">
                <Footer background={'white'} background_2={'black'} />
            </div>
        </section>
    </>
}