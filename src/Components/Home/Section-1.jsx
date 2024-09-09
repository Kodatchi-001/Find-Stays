import { useState } from "react";
import Header from "../Header/Header";

export default function Section_1() {
    const [datein, setdatein] = useState("2024-03-09");
    const [dateout, setdateout] = useState("2024-05-12");

    const Handelchangedatein = e => setdatein(e.target.value);
    const Handelchangedateout = e => setdateout(e.target.value);

    return <>
        <section className="w-full h-screen HomePage-Background">
            <div className="w-full h-full flex flex-col justify-between bg-black-blur lg:px-6 xl:px-20">
                <div className="w-full h-[9%] lg:h-[15%] flex items-center fixed lg:relative bg-white shadow-2xl lg:shadow-transparent lg:bg-transparent z-50">
                    <Header />
                </div>
                <div className="w-full h-[40%] lg:h-[60%] flex justify-between items-center flex-wrap px-4 mt-24 lg:mt-0 lg:px-0">
                    <div className="w-full lg:w-4/6 h-2/3 lg:h-full flex flex-col justify-center items-center lg:items-start gap-3 sm:gap-5 lg:gap-6 text-white">
                        <h1 className="w-[95%] sm:w-4/6 lg:w-full xl:w-[80%] text-5xl lg:text-8xl text-center lg:text-start">Stay Quietly, With No Worries</h1>
                        <p className="lg:5/6 xl:w-[75%] text-[1.1rem] hidden lg:flex">
                            Welcome to our hotel booking platform, where your travel experience
                            becomes easier and more enjoyable. With our platform, you can discover
                            the perfect accommodation for your stay worldwide.
                        </p>
                        <p className="sm:w-4/6 text-lg lg:hidden text-center lg:text-start">
                            Welcome to our hotel booking platform, where your
                            travel experience becomes easier and more enjoyable.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/6 lg:mt-14 h-1/3 lg:h-full flex lg:flex-col justify-center items-end gap-5 lg:gap-12 text-white">
                        <div className="w-1/3 lg:w-4/6 text-center lg:text-start">
                            <div className="w-full flex flex-col justify-center gap-2">
                                <h2 className="text-3xl lg:text-5xl">12k+</h2>
                                <h2>Satisfied Visitors</h2>
                            </div>
                        </div>
                        <div className="w-1/3 lg:w-4/6 text-center lg:text-start">
                            <div className="w-full flex flex-col justify-center gap-2">
                                <h2 className="text-3xl lg:text-5xl">4.5k+</h2>
                                <h2 className="text-[0.9rem] lg:text-[1rem]">Amazing TourGuide</h2>
                            </div>
                        </div>
                        <div className="w-1/3 lg:w-4/6 text-center lg:text-start">
                            <div className="w-full flex flex-col justify-center gap-2">
                                <h2 className="text-3xl lg:text-5xl">2k+</h2>
                                <h2>Special Travel Trip</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[45%] lg:h-[20%] xl:h-[30%] flex justify-center items-center py-5 lg:py-0 px-4 lg:px-0">
                    <div className="w-full sm:w-5/6 lg:w-full h-full sm:h-[70%] flex justify-between items-center flex-wrap px-1 lg:px-3 pt-2 lg:py-4 rounded-xl bg-white">
                        <div className="w-full lg:w-5/6 h-[70%] lg:h-full flex justify-between flex-wrap">
                            <div className="w-1/2 lg:w-1/4 h-[45%] lg:h-full flex flex-col justify-between px-2 lg:px-5">
                                <div className="w-full h-[30%] lg:h-1/4 flex items-center gap-1">
                                    <i class='bx bx-map text-xl'></i>
                                    <h1 className="h-full flex items-end text-lg lg:text-[1rem]">Location</h1>
                                </div>
                                <div className="w-full h-[60%] lg:h-[65%]">
                                    <input type="text" className="w-full h-full px-5 rounded-xl text-lg lg:text-xl text-black placeholder:text-black bg-gray-200 focus:outline-none" placeholder="Type Location" />
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 h-[45%] lg:h-full flex flex-col justify-between px-2 lg:px-5">
                                <div className="w-full h-[30%] lg:h-1/4 flex items-center gap-1">
                                    <i class='bx bx-user text-xl'></i>
                                    <h1 className="h-full flex items-end text-lg lg:text-[1rem]">Person</h1>
                                </div>
                                <div className="w-full h-[60%] lg:h-[65%] flex justify-end relative">
                                    <div className="w-full h-full bg-gray-200 pr-5 rounded-xl">
                                        <select className="w-full h-full px-5 bg-transparent text-lg lg:text-xl focus:outline-none text-black">
                                            <option value="">Person</option>
                                            <option value="">2</option>
                                            <option value="">4</option>
                                            <option value="">6</option>
                                            <option value="">8</option>
                                            <option value="">10</option>
                                        </select>
                                    </div>
                                    <div className="w-1/5 h-full mr-0 lg:flex justify-center items-center absolute hidden">
                                        <i class='bx bx-chevron-down text-3xl mr-[0.6rem] mb-[0.1rem]'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 h-[45%] lg:h-full flex flex-col justify-between px-2 lg:px-5 mt-1 lg:mt-0">
                                <div className="w-full h-[30%] lg:h-1/4 flex items-center gap-1">
                                    <i class='bx bx-calendar text-xl'></i>
                                    <h1 className="h-full flex items-end text-lg lg:text-[1rem]">Check-in</h1>
                                </div>
                                <div className="w-full h-[65%]">
                                    <input type="date" className="w-full h-full px-2 lg:px-5 rounded-xl text-black bg-gray-200 text-lg" value={datein} onChange={Handelchangedatein} />
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 h-[45%] lg:h-full flex flex-col justify-between px-2 lg:px-5 mt-1 lg:mt-0">
                                <div className="w-full h-[30%] lg:h-1/4 flex items-center gap-1">
                                    <i class='bx bx-calendar text-xl'></i>
                                    <h1 className="h-full flex items-end text-lg lg:text-[1rem]">Check-out</h1>
                                </div>
                                <div className="w-full h-[65%]">
                                    <input type="date" className="w-full h-full px-2 lg:px-5 rounded-xl text-black bg-gray-200 text-lg" value={dateout} onChange={Handelchangedateout} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/6 h-[30%] lg:h-full flex flex-col justify-center lg:justify-end px-2 lg:px-0">
                            <div className="w-full h-5/6 lg:h-[70%] pt-[0.38rem] flex justify-center">
                                <button className="w-full lg:w-[90%] h-full text-xl bg-black text-white rounded-xl border">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}