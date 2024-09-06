export default function Section_2() {
    return <>
        <section className="w-full h-full mt-5 lg:mt-16">
            <div className="w-full h-[30vh] lg:h-[40vh] flex flex-col justify-center items-center gap-5">
                <h1 className="w-full lg:w-[45%] lg:leading-[4.8rem] text-center text-[2.50rem] lg:text-6xl">
                    Our Most Amazing Visited Hotel on 2023!
                </h1>
                <p className="w-[90%] lg:w-[45%] text-xl text-center">
                    Take a look our best choice for the hotels of the year
                    , we pick the hotels from our amazing visitors.
                </p>
            </div>
            <div className="w-full lg:h-screen flex justify-between flex-wrap sm:flex-wrap-reverse px-3 lg:px-24 p-5 gap-3 lg:gap-0">
                <div className="w-full sm:w-[49%] lg:w-[65%] h-[30vh] lg:h-full rounded-2xl cards-homepage" id="Card-1-HomePage">
                    <div className="w-full h-full flex items-end px-8 lg:px-12 pb-8 lg:pb-10 background-card-image rounded-2xl">
                        <div className="w-full flex flex-col justify-between text-white gap-6">
                            <h1 className="lg:w-4/6 text-3xl lg:text-[3.50rem] lg:leading-[3.5rem]">Oasis Sands Resort Homestay</h1>
                            <div className="w-full h-[55%] flex justify-between items-center">
                                <div className="w-4/6 lg:h-full flex lg:gap-2 lg:items-center flex-col lg:flex-row lg:text-[1.15rem] text-gray-200">
                                    <h1>Palm Jumeirah, Dubai</h1>
                                    <i class='bx bx-minus text-sm hidden lg:flex'></i>
                                    <div className="h-full lg:flex items-center gap-1 hidden">
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star text-gray-400'></i>
                                    </div>
                                    <h1 className="lg:flex hidden">(218 Visitors)</h1>
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
                                <i class='bx bx-chevron-right text-2xl px-2 py-1 scale-125 cursor-pointer bg-blur-white rounded-full'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[33%] h-full flex lg:flex-col justify-between flex-wrap gap-3 lg:gap-0">
                    <div className="w-full sm:w-[49%] lg:w-full h-[30vh] lg:h-[48%] rounded-2xl cards-homepage" id="Card-2-HomePage">
                        <div className="w-full h-full flex items-end px-8 pb-8 lg:pb-6 background-card-image rounded-2xl">
                            <div className="w-full flex flex-col justify-between text-white gap-3">
                                <h1 className="w-5/6 text-3xl">Blue Saroza Drogba Comfort Hotel</h1>
                                <div className="w-full h-1/2 flex justify-between items-center">
                                    <div className="w-4/6 flex flex-wrap items-center text-gray-200">
                                        <h1>Surabaya, Indonesia</h1>
                                        <div className="w-full flex items-center gap-2">
                                            <div className="flex gap-1">
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star text-gray-400'></i>
                                            </div>
                                            <h1>(104 Visitors)</h1>
                                        </div>
                                    </div>
                                    <i class='bx bx-chevron-right text-2xl px-2 py-1 scale-110 cursor-pointer bg-blur-white rounded-full'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[49%] lg:w-full h-[30vh] lg:h-[48%] rounded-2xl cards-homepage" id="Card-3-HomePage">
                        <div className="w-full h-full flex items-end px-8 pb-8 lg:pb-6 background-card-image rounded-2xl">
                            <div className="w-full flex flex-col justify-between text-white gap-3">
                                <h1 className="lg:w-5/6 text-3xl">Luxury Comfort Stays Hotel Indonesia</h1>
                                <div className="w-full h-1/2 flex justify-between items-center">
                                    <div className="w-4/6 flex flex-wrap items-center text-gray-200">
                                        <h1>Malang, Indonesia</h1>
                                        <div className="w-full flex items-center gap-2">
                                            <div className="flex gap-1">
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star text-gray-400'></i>
                                            </div>
                                            <h1>(102 Visitors)</h1>
                                        </div>
                                    </div>
                                    <i class='bx bx-chevron-right text-2xl px-2 py-1 scale-110 cursor-pointer bg-blur-white rounded-full'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}