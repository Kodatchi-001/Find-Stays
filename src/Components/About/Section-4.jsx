export default function Section_4() {
    return <>
        <section className="w-full lg:h-screen flex flex-wrap lg:px-24 lg:p-16">
            <div className="w-full lg:w-[45%] h-full flex flex-col justify-end items-center lg:items-start pt-8 lg:pt-0 pb-5 gap-5 px-1 lg:px-0">
                <h1 className="text-lg text-gray">FAQS</h1>
                <h1 className="w-5/6 text-[2.50rem] lg:text-5xl text-center lg:text-start">We Offer All Types of Travel Services</h1>
                <div className="w-full lg:w-5/6 lg:h-[50%] mt-2 lg:mt-5 flex flex-wrap gap-5 lg:gap-0">
                    {/* <!-- Cards-1 --> */}
                    <div className="w-full lg:h-[45%] lg:py-3 overflow-hidden cursor-pointer flex flex-wrap gap-2">
                        <div className="w-full lg:h-[40%] flex items-center gap-2">
                            <i class='bx bx-plus text-lg'></i>
                            <h1 className="text-xl">How can I find the best hotels?</h1>
                        </div>
                        <div className="w-full lg:h-[60%] flex items-center pl-6 lg:pl-0">
                            <p className="text-lg lg:text-xl font-sans">
                                With innovative search tools, we make discovering
                                luxury hotels easy and convenient.
                            </p>
                        </div>
                    </div>
                    {/* <!-- Cards-2 --> */}
                    <div className="w-full lg:h-[27.5%] overflow-hidden border-t border-b cursor-pointer">
                        <div className="w-full h-full flex items-center gap-2">
                            <i class='bx bx-minus text-lg'></i>
                            <h1 className="text-xl">What is the booking process like?</h1>
                        </div>
                        <div className="w-full flex items-center">
                            <p className="text-xl font-sans">
                                Experience seamless booking with real-time
                                availability and instant confirmation.
                            </p>
                        </div>
                    </div>
                    {/* <!-- Cards-3 --> */}
                    <div className="w-full lg:h-[27.5%] overflow-hidden border-t border-b cursor-pointer">
                        <div className="w-full h-full flex items-center gap-2">
                            <i class='bx bx-minus text-lg'></i>
                            <h1 className="text-xl">What are the cancellation policies?</h1>
                        </div>
                        <div className="w-full flex items-center">
                            <p className="text-xl font-sans">
                                Enjoy flexible booking options with transparent
                                and customer-friendly cancellation policies.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full lg:w-[55%] h-full flex justify-end items-center">
                <div className="w-full lg:w-4/6 h-[50vh] lg:h-full flex items-center lg:items-end Card-Section-4-about">
                    <div className="w-full lg:w-[38vw] h-[45%] lg:ml-[-14vw] flex justify-around items-center flex-wrap px-24 lg:px-0 gap-5 lg:gap-0">
                        <div className="w-full lg:w-[45%] h-4/6 px-6 lg:px-10 p-6 flex flex-col justify-between lg:text-lg text-white bg-black">
                            <h1>Hotels</h1>
                            <h1 className="text-4xl lg:text-6xl text-gray">120+</h1>
                            <h1>Chain Hotel</h1>
                        </div>
                        <div className="w-full lg:w-[45%] h-4/6 px-6 lg:px-10 p-6 flex flex-col justify-between lg:text-lg bg-white">
                            <h1>Staff</h1>
                            <h1 className="text-4xl lg:text-6xl text-gray">16+</h1>
                            <h1>Dedicated Staff</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}