import { useState } from "react";

export default function Section_4() {
    const hotelCards_1 = [
        {
            paragraph: "A luxurious retreat offering unmatched comfort and a stunning view of the city skyline. Perfect for both business and leisure travelers.",
            title: "Blue Saroza Drogba Comfort Hotel",
            name: "Blue Saroza Drogba Comfort Hotel",
            location: "Surabaya, Indonesia",
            visitors: "104 Visitors"
        },
        {
            paragraph: "Experience the elegance of our suites, featuring top-notch amenities and exceptional service in the heart of New York City.",
            title: "Grand Horizon Luxury Suites NYC",
            name: "Grand Horizon Suites",
            location: "New York, USA",
            visitors: "230 Visitors"
        },
        {
            paragraph: "Enjoy a royal stay in our luxurious hotel with world-class facilities and impeccable service in the vibrant city of London.",
            title: "Royal Retreat Five-Star London Hotel",
            name: "Royal Retreat Hotel",
            location: "London, UK",
            visitors: "500 Visitors"
        }
    ];

    const hotelCards_2 = [
        {
            paragraph: "Immerse yourself in the beauty of nature at Emerald Valley Lodge, where comfort meets serenity in New Zealand.",
            title: "Emerald Valley Scenic Lodge",
            name: "Emerald Valley Lodge",
            location: "New Zealand, Australia",
            visitors: "7612 Visitors"
        },
        {
            paragraph: "Experience the luxury and convenience of Golden Horizon Hotel, located in the heart of New York with stunning city views.",
            title: "Golden Horizon Hotel New York",
            name: "Golden Horizon Hotel",
            location: "New York, USA",
            visitors: "212 Visitors"
        },
        {
            paragraph: "Relax and rejuvenate at Whispering Pines Retreat, nestled in the serene landscape of Malang, Indonesia.",
            title: "Whispering Pines Serene Retreat",
            name: "Whispering Pines Retreat",
            location: "Malang, Indonesia",
            visitors: "8127 Visitors"
        }
    ];

    const hotelCards_3 = [
        {
            paragraph: "Discover tranquility at Paradise Cove Retreat, a haven in Tokyo offering peace and luxury.",
            title: "Paradise Cove Retreat Tokyo",
            name: "Paradise Cove Retreat",
            location: "Tokyo, Japan",
            visitors: "237 Visitors"
        },
        {
            paragraph: "Enjoy a relaxing stay at Sunset Vista Resort in Jakarta, featuring stunning sunset views and top-notch amenities.",
            title: "Sunset Vista Resort Jakarta",
            name: "Sunset Vista Resort",
            location: "Jakarta, Indonesia",
            visitors: "493 Visitors"
        },
        {
            paragraph: "Experience the charm of Enchanted Meadows in Kuala Lumpur, where comfort and elegance meet.",
            title: "Enchanted Meadows Kuala Lumpur",
            name: "Enchanted Meadows",
            location: "Kuala Lumpur, Malaysia",
            visitors: "101 Visitors"
        }
    ];
    const hotelCards_4 = [
        {
            paragraph: "A peaceful escape located on the serene beaches of Maldives. Ideal for relaxation and rejuvenation.",
            title: "Maldives Serenity Beach Resort",
            name: "Maldives Serenity Resort",
            location: "Maldives",
            visitors: "345 Visitors"
        },
        {
            paragraph: "Experience the vibrant culture and modern comforts of Dubai at our luxurious city hotel.",
            title: "Dubai Grand City Hotel",
            name: "Dubai Grand Hotel",
            location: "Dubai, UAE",
            visitors: "678 Visitors"
        },
        {
            paragraph: "Stay at the iconic Sydney Harbour Hotel with breathtaking views of the opera house and harbor.",
            title: "Sydney Harbour Iconic Hotel",
            name: "Sydney Harbour Hotel",
            location: "Sydney, Australia",
            visitors: "890 Visitors"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const allHotelCards = [...hotelCards_1, ...hotelCards_2, ...hotelCards_3, ...hotelCards_4];
    const slideCards = direction => {
        setCurrentIndex(prevIndex => {
            const totalSlides = allHotelCards.length / 3;
            const newIndex = (prevIndex + direction + totalSlides) % totalSlides;
            return newIndex;
        });
    };

    return <>
        <section className="w-full lg:h-screen flex justify-center flex-wrap mt-16 pt-10 text-white overflow-hidden bg-black">
            <div className="w-full h-1/4 flex justify-center lg:justify-between xl:justify-center items-center px-2 lg:px-10 xl:px-24">
                <h1 className="xl:w-[55%] text-center lg:text-start xl:text-center lg:leading-[4rem] text-[2.50rem] lg:text-5xl">
                    Let’s Hear How Their Experiences Use Our Platform
                </h1>
                <div className="w-1/2 h-full lg:flex justify-end items-center gap-5 hidden xl:hidden">
                    <i class='bx bx-left-arrow-alt p-3 text-5xl scale-90 cursor-pointer bg-white text-black rounded-full'
                        onClick={() => slideCards(-1)}></i>
                    <i class='bx bx-right-arrow-alt p-3 text-5xl scale-90 cursor-pointer bg-white text-black rounded-full'
                        onClick={() => slideCards(1)}></i>
                </div>
            </div>
            <div className="w-5/6 h-[10%] flex justify-center items-center gap-4 lg:hidden mt-5 lg:mt-0 mb-5 lg:mb-0">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className={`w-[13vh] h-[0.4vh] rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}></div>
                ))}
            </div>
            <div className="w-full h-[65%] flex">
                <div className="w-[10%] h-full xl:flex justify-center items-center hidden z-40">
                    <i class='bx bx-left-arrow-alt p-3 text-5xl scale-90 cursor-pointer bg-white text-black rounded-full'
                        onClick={() => slideCards(-1)}></i>
                </div>
                <div className="w-full xl:w-[80%] h-full flex" style={{ transform: `translateX(${-currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
                    {/* <!-- Cards/1 --> */}
                    <div className="min-w-full h-full flex justify-between sm:justify-center lg:justify-between flex-wrap py-4 px-5 lg:px-2 xl:px-5 gap-6 lg:gap-0">
                        {hotelCards_1.map((items, index) => (
                            <div className="w-full sm:w-[48%] lg:w-[31%] h-[50vh] sm:h-full p-5 lg:p-3 xl:p-5 sm:gap-3 lg:gap-0 flex flex-col justify-between rounded-2xl bg-gray-transparent">
                                <div className="w-full h-[40%] flex flex-col justify-between sm:gap-3 lg:gap-0">
                                    <p>{items.paragraph}</p>
                                    <div className="w-full h-[45%] flex items-center gap-3">
                                        <h1 className="p-6 rounded-full bg-black"></h1>
                                        <div className="w-5/6 flex flex-col justify-between flex-wrap">
                                            <h1>{items.name}</h1>
                                            <h1 className="text-sm text-gray-300">{items.location}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[58%] rounded-2xl cards-homepage-section-2" id={`Card-${index}-Section-2-HomePage`}>
                                    <div className="w-full h-full flex items-end background-card-image p-4 px-5 rounded-2xl">
                                        <div className="w-full h-[60%]">
                                            <div className="w-full h-full flex flex-col justify-between text-white">
                                                <h1 className="w-5/6 text-2xl">{items.title}</h1>
                                                <div className="w-full h-1/2 flex justify-between items-center">
                                                    <div className="w-4/6 flex flex-wrap items-center gap-1 text-gray-200">
                                                        <h1 className="text-sm">Surabaya, Indonesia</h1>
                                                        <div className="w-full flex items-center text-sm gap-2">
                                                            <div className="flex gap-1">
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star'></i>
                                                            </div>
                                                            <h1>({items.visitors})</h1>
                                                        </div>
                                                    </div>
                                                    <i class='bx bx-chevron-right text-2xl px-2 py-1 scale-95 cursor-pointer bg-blur-white rounded-full'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <!-- Cards/2 --> */}
                    <div className="min-w-full h-full flex justify-between sm:justify-center lg:justify-between flex-wrap py-4 px-5 gap-6 lg:gap-0">
                        {hotelCards_2.map((items, index) => (
                            <div className="w-full sm:w-[48%] lg:w-[31%] h-[50vh] sm:h-full p-5 sm:gap-3 lg:gap-0 flex flex-col justify-between rounded-2xl bg-gray-transparent">
                                <div className="w-full h-[40%] flex flex-col justify-between sm:gap-3 lg:gap-0">
                                    <p>{items.paragraph}</p>
                                    <div className="w-full h-[45%] flex items-center gap-3">
                                        <h1 className="p-6 rounded-full bg-black"></h1>
                                        <div className="w-5/6 flex flex-col justify-between flex-wrap">
                                            <h1>{items.name}</h1>
                                            <h1 className="text-sm text-gray-300">{items.location}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[58%] rounded-2xl cards-homepage-section-2" id={`Card-${index}-Section-2-HomePage`}>
                                    <div className="w-full h-full flex items-end background-card-image p-4 px-5 rounded-2xl">
                                        <div className="w-full h-[60%]">
                                            <div className="w-full h-full flex flex-col justify-between text-white">
                                                <h1 className="w-5/6 text-2xl">{items.title}</h1>
                                                <div className="w-full h-1/2 flex justify-between items-center">
                                                    <div className="w-4/6 flex flex-wrap items-center gap-1 text-gray-200">
                                                        <h1 className="text-sm">Surabaya, Indonesia</h1>
                                                        <div className="w-full flex items-center text-sm gap-2">
                                                            <div className="flex gap-1">
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star'></i>
                                                            </div>
                                                            <h1>({items.visitors})</h1>
                                                        </div>
                                                    </div>
                                                    <i class='bx bx-chevron-right text-2xl px-2 py-1 scale-95 cursor-pointer bg-blur-white rounded-full'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <!-- Cards/3 --> */}
                    <div className="min-w-full h-full flex justify-between sm:justify-center lg:justify-between flex-wrap py-4 px-5 gap-6 lg:gap-0">
                        {hotelCards_3.map((items, index) => (
                            <div className="w-full sm:w-[48%] lg:w-[31%] h-[50vh] sm:h-full p-5 sm:gap-3 lg:gap-0 flex flex-col justify-between rounded-2xl bg-gray-transparent">
                                <div className="w-full h-[40%] flex flex-col justify-between sm:gap-3 lg:gap-0">
                                    <p>{items.paragraph}</p>
                                    <div className="w-full h-[45%] flex items-center gap-3">
                                        <h1 className="p-6 rounded-full bg-black"></h1>
                                        <div className="w-5/6 flex flex-col justify-between flex-wrap">
                                            <h1>{items.name}</h1>
                                            <h1 className="text-sm text-gray-300">{items.location}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[58%] rounded-2xl cards-homepage-section-2" id={`Card-${index}-Section-2-HomePage`}>
                                    <div className="w-full h-full flex items-end background-card-image p-4 px-5 rounded-2xl">
                                        <div className="w-full h-[60%]">
                                            <div className="w-full h-full flex flex-col justify-between text-white">
                                                <h1 className="w-5/6 text-2xl">{items.title}</h1>
                                                <div className="w-full h-1/2 flex justify-between items-center">
                                                    <div className="w-4/6 flex flex-wrap items-center gap-1 text-gray-200">
                                                        <h1 className="text-sm">Surabaya, Indonesia</h1>
                                                        <div className="w-full flex items-center text-sm gap-2">
                                                            <div className="flex gap-1">
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star'></i>
                                                            </div>
                                                            <h1>({items.visitors})</h1>
                                                        </div>
                                                    </div>
                                                    <i class='bx bx-chevron-right text-2xl px-2 py-1 scale-95 cursor-pointer bg-blur-white rounded-full'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <!-- Cards/4 --> */}
                    <div className="min-w-full h-full flex justify-between sm:justify-center lg:justify-between flex-wrap py-4 px-5 gap-6 lg:gap-0">
                        {hotelCards_4.map((items, index) => (
                            <div className="w-full sm:w-[48%] lg:w-[31%] h-[50vh] sm:h-full p-5 sm:gap-3 lg:gap-0 flex flex-col justify-between rounded-2xl bg-gray-transparent">
                                <div className="w-full h-[40%] flex flex-col justify-between sm:gap-3 lg:gap-0">
                                    <p>{items.paragraph}</p>
                                    <div className="w-full h-[45%] flex items-center gap-3">
                                        <h1 className="p-6 rounded-full bg-black"></h1>
                                        <div className="w-5/6 flex flex-col justify-between flex-wrap">
                                            <h1>{items.name}</h1>
                                            <h1 className="text-sm text-gray-300">{items.location}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[58%] rounded-2xl cards-homepage-section-2" id={`Card-${index}-Section-2-HomePage`}>
                                    <div className="w-full h-full flex items-end background-card-image p-4 px-5 rounded-2xl">
                                        <div className="w-full h-[60%]">
                                            <div className="w-full h-full flex flex-col justify-between text-white">
                                                <h1 className="w-5/6 text-2xl">{items.title}</h1>
                                                <div className="w-full h-1/2 flex justify-between items-center">
                                                    <div className="w-4/6 flex flex-wrap items-center gap-1 text-gray-200">
                                                        <h1 className="text-sm">Surabaya, Indonesia</h1>
                                                        <div className="w-full flex items-center text-sm gap-2">
                                                            <div className="flex gap-1">
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star' ></i>
                                                                <i class='bx bxs-star'></i>
                                                            </div>
                                                            <h1>({items.visitors})</h1>
                                                        </div>
                                                    </div>
                                                    <i class='bx bx-chevron-right text-2xl px-2 py-1 scale-95 cursor-pointer bg-blur-white rounded-full'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[10%] h-full xl:flex justify-center items-center hidden">
                    <i class='bx bx-right-arrow-alt p-3 text-5xl scale-90 cursor-pointer bg-white text-black rounded-full'
                        onClick={() => slideCards(1)}>
                    </i>
                </div>
            </div>
            <div className="w-full h-[10%] lg:flex justify-center items-center gap-4 hidden">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className={`w-[13vh] h-[0.4vh] rounded-full ${currentIndex == index ? 'bg-white' : 'bg-gray-500'}`}></div>
                ))}
            </div>
            <div className="w-full h-[10vh] flex justify-center gap-5 items-center">
                <i class='bx bx-left-arrow-alt p-3 text-5xl scale-90 cursor-pointer bg-white text-black rounded-full'
                    onClick={() => slideCards(-1)}>
                </i>
                <i class='bx bx-right-arrow-alt p-3 text-5xl scale-90 cursor-pointer bg-white text-black rounded-full'
                    onClick={() => slideCards(1)}>
                </i>
            </div>
        </section>
    </>
}