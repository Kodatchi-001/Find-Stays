import Header from "../Header/Header";

export default function Section_1() {
    return <>
        <section className="w-full lg:h-screen">
            <div className="lg:px-20">
                <Header color={'black'} />
            </div>
            <div className="w-full lg:h-[85vh] lg:px-8 xl:px-24 flex items-center flex-wrap gap-8 lg:gap-0 pt-28 lg:pt-5">
                <div className="w-full lg:w-1/2 h-5/6 flex flex-col gap-5 lg:gap-8 items-center lg:items-start text-center lg:text-start">
                    <h1 className="text-lg text-gray">WELCOME TO FIND STAYS</h1>
                    <h1 className="w-full lg:w-[75%] text-[2.50rem] lg:text-5xl">We Are The Best Host For Your Comfort</h1>
                    <div className="w-[95%] lg:w-[78%] flex flex-wrap gap-5">
                        <p>
                            At Sind Stays, we have redefined luxury in accommodation with an
                            innovative approach. Our platform offers a seamless way to discover top-notch
                            hotels that elevate your travel experience.
                        </p>
                        <p>
                            Experience exceptional comfort and elegance in our curated selection
                            of hotels. Each option is chosen to ensure your stay is both luxurious
                            and memorable.
                        </p>
                    </div>
                    <button className="px-8 py-2 text-lg lg:text-md bg-black text-white rounded-full">Register</button>
                </div>
                <div className="w-full lg:w-1/2 h-5/6 flex justify-around flex-wrap lg:flex-nowrap lg:px-2">
                    <div className="w-full sm:w-[48%] lg:w-[46%] h-[50vh] lg:h-[80%] lg:mt-16 cards-About-1"></div>
                    <div className="w-full sm:w-[48%] lg:w-[46%] h-[50vh] lg:h-[80%] cards-About-2"></div>
                </div>
            </div>

        </section>
    </>
}