import icone_1 from "../../Assets/icone-1.png";
import icone_2 from "../../Assets/icone-2.png";
import icone_3 from "../../Assets/icone-3.png";
import icone_4 from "../../Assets/icone-4.png";
import icone_5 from "../../Assets/icone-5.png";
import icone_6 from "../../Assets/icone-6.png";

export default function Section_3() {
    return <>
        <section className="w-full lg:h-[90vh] p-5 px-2 lg:p-20 mt-16 lg:mt-0 bg-[#f7f1e8]">
            <div className="w-full h-full flex justify-center lg:justify-start flex-wrap gap-8 lg:gap-0">
                <div className="w-full lg:w-1/2 h-1/2 flex flex-col justify-center items-center lg:items-start xl:pl-16 gap-1 lg:gap-5">
                    <h1 className="text-lg text-[#f0b797]">AMENITIES</h1>
                    <h1 className="w-full text-center lg:text-start text-[2.50rem] lg:text-5xl">Make your vacation unforgettable</h1>
                </div>
                <div className="w-full lg:w-1/2 h-1/2 flex justify-between lg:justify-center items-center gap-24">
                    <div className="w-1/2 lg:w-1/3 h-1/2 flex flex-col justify-center items-center lg:items-start gap-5">
                        <div className="w-1/4">
                            <img src={icone_1} className="w-full h-full" />
                        </div>
                        <h1 className="w-full text-center lg:text-start lg:w-4/6 text-2xl">Top-Rated Hotels</h1>
                    </div>
                    <div className="w-1/2 lg:w-1/3 h-1/2 flex flex-col justify-center items-center lg:items-start gap-5">
                        <div className="w-1/4">
                            <img src={icone_2} className="w-full h-full" />
                        </div>
                        <h1 className="w-full text-center lg:text-start lg:w-4/6 text-2xl">Detailed Hotel Reviews</h1>
                    </div>
                </div>
                <div className="w-full h-1/2 flex flex-wrap gap-5 lg:gap-0">
                    <div className="w-full lg:w-1/2 h-full flex jjustify-between lg:justify-center items-center gap-24">
                        <div className="w-1/2 lg:w-1/3 h-1/2 flex flex-col justify-center items-center lg:items-start gap-5">
                            <div className="w-1/4 scale-90">
                                <img src={icone_3} className="w-full h-full" />
                            </div>
                            <h1 className="w-full text-center lg:text-start lg:w-4/6 text-2xl">Fast and Easy Booking</h1>
                        </div>
                        <div className="w-1/2 lg:w-1/3 h-1/2 flex flex-col justify-center items-center lg:items-start gap-5">
                            <div className="w-1/4">
                                <img src={icone_4} className="w-full h-full" />
                            </div>
                            <h1 className="w-full text-center lg:text-start lg:w-5/6 text-2xl">Exclusive Offers and Packages</h1>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 h-full flex jjustify-between lg:justify-center items-center gap-24">
                        <div className="w-1/2 lg:w-1/3 h-1/2 flex flex-col justify-center items-center lg:items-start gap-5">
                            <div className="w-1/4">
                                <img src={icone_5} className="w-full h-full" />
                            </div>
                            <h1 className="w-full text-center lg:text-start lg:w-[95%] text-2xl">Local Activity Guide</h1>
                        </div>
                        <div className="w-1/2 lg:w-1/3 h-1/2 flex flex-col justify-center items-center lg:items-start gap-5">
                            <div className="w-1/4">
                                <img src={icone_6} className="w-full h-full" />
                            </div>
                            <h1 className="w-full text-center lg:text-start lg:w-5/6 text-2xl">24/7 Customer Support</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}