import { useContext } from "react";
import { Link } from "react-router-dom";
import { Listeinfo } from "../../utils/Liste-info";
export default function Section_2() {
    const { Cardsindex, setCardsindex } = useContext(Listeinfo);
    const Cards_1 = [
        { id: 2, name: "Whispering Pines Retreat", location: "Malang, Indonesia", visitors: "8127 Visitors" },
    ]
    const Cards_2 = [
        { id: 3, name: "Paradise Cove Retreat", location: "Tokyo, Japan", visitors: "237 Visitors" },
        { id: 7, name: "Serenity Bay Hotel", location: "San Francisco, USA", visitors: "789 Visitors" },
    ]

    const SendIndex = index => setCardsindex([...Cardsindex, index])
    return <>
        <section className="w-full h-full mt-5 lg:mt-16">
            <div className="w-full h-[30vh] lg:h-[40vh] flex flex-col justify-center items-center gap-5">
                <h1 className="w-full lg:w-4/6 xl:w-[45%] lg:leading-[4.8rem] text-center text-4xl lg:text-6xl">
                    Our Most Amazing Visited Hotel on 2023!
                </h1>
                <p className="w-[90%] lg:w-[45%] text-xl text-center">
                    Take a look our best choice for the hotels of the year
                    , we pick the hotels from our amazing visitors.
                </p>
            </div>
            <div className="w-full lg:h-screen flex justify-center lg:justify-between flex-wrap sm:flex-wrap-reverse px-3 lg:px-5 xl:px-24 p-5 gap-3 lg:gap-0">
                {/* <!-- Cards-1 --> */}
                {Cards_1.map((items, index) => (
                    <div key={index} className="w-full sm:w-[49%] lg:w-[65%] h-[30vh] lg:h-full rounded-2xl cards-homepage" id="Card-1-HomePage">
                        <div className="w-full h-full flex items-end p-5 xl:px-12 lg:pb-10 background-card-image rounded-2xl">
                            <div className="w-full flex flex-col justify-between text-white gap-6">
                                <h1 className="xl:w-4/6 text-3xl lg:text-[3.50rem] lg:leading-[3.5rem]">{items.name}</h1>
                                <div className="w-full h-[55%] flex justify-between items-center">
                                    <div className="w-4/6 lg:w-full xl:w-4/6 lg:h-full flex lg:gap-2 lg:items-center flex-col lg:flex-row lg:text-[1.15rem] text-gray-200">
                                        <h1>{items.location}</h1>
                                        <i class='bx bx-minus text-sm hidden lg:flex'></i>
                                        <div className="h-full lg:flex items-center gap-1 hidden">
                                            <i class='bx bxs-star' ></i>
                                            <i class='bx bxs-star' ></i>
                                            <i class='bx bxs-star' ></i>
                                            <i class='bx bxs-star' ></i>
                                            <i class='bx bxs-star text-gray-400'></i>
                                        </div>
                                        <h1 className="lg:flex hidden">({items.visitors})</h1>
                                        <div className="w-full flex gap-2 lg:hidden">
                                            <div className="h-full flex items-center gap-1">
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star text-gray-400'></i>
                                            </div>
                                            <h1>(218 Visitors)</h1>
                                        </div>
                                    </div>
                                    <Link to="/Booking" onClick={() => SendIndex(items.id)}>
                                        <i class='bx bx-chevron-right text-2xl px-2 py-1 scale-110 cursor-pointer bg-blur-white rounded-full'></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="w-full lg:w-[33%] h-full flex lg:flex-col justify-between flex-wrap gap-3 lg:gap-0">
                    {Cards_2.map((items, index) => (
                        <div key={index} className="w-full sm:w-[49%] lg:w-full h-[30vh] lg:h-[48%] rounded-2xl cards-homepage" id={`Card-${items.id}-HomePage`}>
                            <div className="w-full h-full flex items-end p-5 lg:px-4 xl:px-8 lg:pb-6 background-card-image rounded-2xl">
                                <div className="w-full flex flex-col justify-between text-white gap-3">
                                    <h1 className="w-4/6 text-3xl">{items.name}</h1>
                                    <div className="w-full h-1/2 flex justify-between items-center">
                                        <div className="w-4/6 flex flex-wrap items-center text-gray-200">
                                            <h1>{items.location}</h1>
                                            <div className="w-full flex items-center gap-2">
                                                <div className="flex gap-1">
                                                    <i class='bx bxs-star' ></i>
                                                    <i class='bx bxs-star' ></i>
                                                    <i class='bx bxs-star' ></i>
                                                    <i class='bx bxs-star' ></i>
                                                    <i class='bx bxs-star text-gray-400'></i>
                                                </div>
                                                <h1>({items.visitors})</h1>
                                            </div>
                                        </div>
                                        <Link to="/Booking" onClick={() => SendIndex(items.id)}>
                                            <i class='bx bx-chevron-right text-2xl px-2 py-1 scale-110 cursor-pointer bg-blur-white rounded-full'></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
}