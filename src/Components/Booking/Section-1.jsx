import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default function Section_1() {
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
                    <div className="w-full h-full flex flex-wrap gap-5">
                        <div className="w-full h-1/6 flex flex-col justify-center gap-3">
                            <h1 className="text-5xl">Radiant Residences</h1>
                            <div className="flex text-2xl text-[#a5a5a5]">
                                <h1>Serene Avenue,West Jakarta</h1>
                            </div>
                        </div>
                        <div className="w-full h-full lg:h-screen py-2 flex justify-between flex-wrap">
                            <div className="w-full lg:w-[65%] h-full flex flex-col justify-between">
                                <div className="w-full h-[40vh] lg:h-[70%] rounded-3xl cards-homepage" id="Card-1-chambre-1">

                                </div>
                                <div className="w-full h-[30%] flex justify-between items-center py-4 lg:py-2 gap-2 lg:gap-0 overflow-x-scroll lg:overflow-auto">
                                    <div className="min-w-[40vw] lg:min-w-[24%] h-[15vh] lg:h-[80%] rounded-xl lg:rounded-3xl cursor-pointer" id="Card-1-chambre-1"></div>
                                    <div className="min-w-[40vw] lg:min-w-[24%] h-[15vh] lg:h-[80%] rounded-xl lg:rounded-3xl cursor-pointer" id="Card-1-chambre-2"></div>
                                    <div className="min-w-[40vw] lg:min-w-[24%] h-[15vh] lg:h-[80%] rounded-xl lg:rounded-3xl cursor-pointer" id="Card-1-chambre-3"></div>
                                    <div className="min-w-[40] lg:min-w-[24%] h-[15vh] lg:h-[80%] rounded-xl lg:rounded-3xl cursor-pointer" id="Card-1-chambre-4"></div>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/6 lg:h-[75%] rounded-xl p-3 gap-3 lg:gap-0 flex flex-col justify-between bg-gray">
                                <div className="w-full lg:h-[72%] flex flex-col justify-between p-4 rounded-xl bg-white">
                                    <div className="w-full flex flex-wrap">
                                        <h1 className="w-full text-lg text-gray-500 font-serif">Location</h1>
                                        <input type="text" className="w-full px-6 py-2 rounded-full text-xl border border-gray-400" />
                                    </div>
                                    <div className="w-full flex flex-wrap gap-2">
                                        <h1 className="w-full text-lg text-gray-500 font-serif">Person</h1>
                                        <input type="text" className="w-full px-6 py-2 rounded-full text-xl border border-gray-400" />
                                    </div>
                                    <div className="w-full flex flex-wrap gap-2">
                                        <h1 className="w-full text-lg text-gray-500 font-serif">Check-in</h1>
                                        <input type="text" className="w-full px-6 py-2 rounded-full text-xl border border-gray-400" />
                                    </div>
                                    <div className="w-full flex flex-wrap gap-2">
                                        <h1 className="w-full text-lg text-gray-500 font-serif">Check-out</h1>
                                        <input type="text" className="w-full px-6 py-2 rounded-full text-xl border border-gray-400" />
                                    </div>
                                </div>
                                <div className="w-full lg:h-[25%] flex flex-col justify-between gap-3 lg:gap-0">
                                    <div className="w-full flex justify-between items-center px-5 py-4 bg-white rounded-xl font-serif">
                                        <h1 className="text-lg">Pricing Per Night</h1>
                                        <h1 className="text-lg">$120/Night</h1>
                                    </div>
                                    <button className="w-full py-4 rounded-xl text-lg hover:bg-green-500 bg-black text-white">Reserve</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-4/6 lg:h-[30vh] flex flex-col justify-center gap-5">
                            <h1 className="text-5xl">About</h1>
                            <p className="lg:text-lg text-gray-500">
                                Radiant Residences is an exquisite hotel nestled in the heart of Jakarta,
                                offering a harmonious blend of modern luxury and comfort. With contemporary
                                architecture and stylish interiors, the hotel provides a serene retreat for
                                both business and leisure travelers. The spacious and well-appointed rooms are
                                designed to create a tranquil atmosphere, complemented by state-of-the-art amenities.
                                Guests can indulge in a culinary journey at the hotel’s fine dining restaurant or unwind.
                            </p>
                        </div>
                        <div className="w-full h-[20vh] mt-5 flex flex-col justify-center gap-5">
                            <h1 className="text-5xl">Facilities</h1>
                            <div className="w-full flex justify-center lg:justify-start flex-wrap gap-2 lg:gap-6 text-white">
                                <h1 className="w-[48%] lg:w-auto lg:px-8 py-3 lg:py-2 text-lg text-center bg-black rounded-full">Free wifi</h1>
                                <h1 className="w-[48%] lg:w-auto lg:px-8 py-3 lg:py-2 text-lg text-center bg-black rounded-full">2 Bathroom</h1>
                                <h1 className="w-[48%] lg:w-auto lg:px-8 py-3 lg:py-2 text-lg text-center bg-black rounded-full">3 Bedroom</h1>
                                <h1 className="w-[48%] lg:w-auto lg:px-8 py-3 lg:py-2 text-lg text-center bg-black rounded-full">Swimming Pool</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-6 lg:mt-0 mb-5 lg:mb-0">
                <Footer background={'white'} background_2={'black'}/>
            </div>
        </section>
    </>
}