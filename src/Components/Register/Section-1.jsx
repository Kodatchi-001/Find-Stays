import Header from "../Header/Header";

export default function Section_1() {
    return <>
        <section className="w-full lg:h-screen lg:px-2 xl:px-20">
            <Header />
            <div className="w-full h-[10vh] lg:hidden"></div>
            <div className="w-full h-full lg:h-[85vh] flex flex-col pt-2 lg:pt-8 px-2 lg:px-4 gap-3">
                <div className="w-full lg:h-[10%] flex justify-between items-center text-2xl">
                    <h1>Hotel Register</h1>
                    <h1>2 Items</h1>
                </div>
                <div className="w-full h-full lg:h-[90%] flex flex-wrap lg:flex-nowrap lg:flex-col gap-5">
                    <div className="sm:w-[48%] lg:w-full h-full lg:h-[35vh] flex border rounded-xl flex-wrap gap-2 lg:gap-0">
                        <div className="w-full lg:w-2/6 h-[30vh] lg:h-full rounded-xl lg:border-radius HomePage-Background"></div>
                        <div className="w-full lg:w-4/6 lg:h-full flex lg:pl-5 lg:pr-3 py-2 lg:py-3 flex-wrap gap-4 lg:gap-0 px-1">
                            <div className="w-full lg:w-4/6 lg:h-full flex flex-col justify-between gap-3 lg:gap-2">
                                <div className="w-full flex flex-col gap-1">
                                    <h1 className="text-4xl">Golden Horizon Hotel</h1>
                                    <h1 className="text-2xl">Malang, Indonesia</h1>
                                    <div className="w-full flex items-center gap-2">
                                        <div className="flex gap-1 text-yellow-500">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </div>
                                        <h1 className="text-sm mt-[0.5vh]">(121 visitors)</h1>
                                    </div>
                                </div>
                                <div className="w-full flex gap-2">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="w-full text-lg">Person</h1>
                                        <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-gray">
                                            <i class='bx bx-calendar text-lg'></i>
                                            <h1>8</h1>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-1/2 lg:w-auto flex flex-col gap-2">
                                            <h1 className="w-full text-lg">Check-in</h1>
                                            <div className="flex justify-center items-center gap-2 px-2 lg:pl-4 lg:pr-5 py-2 rounded-lg bg-gray">
                                                <i class='bx bx-calendar text-lg'></i>
                                                <h1>01-05-2025</h1>
                                            </div>
                                        </div>
                                        <div className="w-1/2 lg:w-auto flex flex-col gap-2">
                                            <h1 className="w-full text-lg">Check-out</h1>
                                            <div className="flex justify-center items-center gap-2 px-2 lg:pl-4 lg:pr-5 py-2 rounded-lg bg-gray">
                                                <i class='bx bx-calendar text-lg'></i>
                                                <h1>01-05-2025</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/6 lg:h-full flex lg:flex-col justify-between lg:items-end flex-wrap">
                                <div className="w-1/3 lg:w-full lg:h-1/5 flex lg:justify-end items-center gap-1">
                                    <i className={`bx bx-heart bx-bookmark px-3 py-2 scale-90 border border-black rounded-full text-xl`}></i>
                                    <i className={`bx bx-bookmark bx-bookmark px-3 py-2 scale-90 border border-black rounded-full text-xl`}></i>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-5 py-2 text-sm bg-green-500 text-white rounded-lg">Modifier</button>
                                    <button className="px-5 py-2 text-sm bg-red-500 text-white rounded-lg">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[48%] lg:w-full h-full lg:h-[35vh] flex border rounded-xl flex-wrap gap-2 lg:gap-0">
                        <div className="w-full lg:w-2/6 h-[30vh] lg:h-full rounded-xl lg:border-radius HomePage-Background"></div>
                        <div className="w-full lg:w-4/6 lg:h-full flex lg:pl-5 lg:pr-3 py-2 lg:py-3 flex-wrap gap-4 lg:gap-0 px-1">
                            <div className="w-full lg:w-4/6 lg:h-full flex flex-col justify-between gap-3 lg:gap-2">
                                <div className="w-full flex flex-col gap-1">
                                    <h1 className="text-4xl">Golden Horizon Hotel</h1>
                                    <h1 className="text-2xl">Malang, Indonesia</h1>
                                    <div className="w-full flex items-center gap-2">
                                        <div className="flex gap-1 text-yellow-500">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </div>
                                        <h1 className="text-sm mt-[0.5vh]">(121 visitors)</h1>
                                    </div>
                                </div>
                                <div className="w-full flex gap-2">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="w-full text-lg">Person</h1>
                                        <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-gray">
                                            <i class='bx bx-calendar text-lg'></i>
                                            <h1>8</h1>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-1/2 lg:w-auto flex flex-col gap-2">
                                            <h1 className="w-full text-lg">Check-in</h1>
                                            <div className="flex justify-center items-center gap-2 px-2 lg:pl-4 lg:pr-5 py-2 rounded-lg bg-gray">
                                                <i class='bx bx-calendar text-lg'></i>
                                                <h1>01-05-2025</h1>
                                            </div>
                                        </div>
                                        <div className="w-1/2 lg:w-auto flex flex-col gap-2">
                                            <h1 className="w-full text-lg">Check-out</h1>
                                            <div className="flex justify-center items-center gap-2 px-2 lg:pl-4 lg:pr-5 py-2 rounded-lg bg-gray">
                                                <i class='bx bx-calendar text-lg'></i>
                                                <h1>01-05-2025</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/6 lg:h-full flex lg:flex-col justify-between lg:items-end flex-wrap">
                                <div className="w-1/3 lg:w-full lg:h-1/5 flex lg:justify-end items-center gap-1">
                                    <i className={`bx bx-heart bx-bookmark px-3 py-2 scale-90 border border-black rounded-full text-xl`}></i>
                                    <i className={`bx bx-bookmark bx-bookmark px-3 py-2 scale-90 border border-black rounded-full text-xl`}></i>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-5 py-2 text-sm bg-green-500 text-white rounded-lg">Modifier</button>
                                    <button className="px-5 py-2 text-sm bg-red-500 text-white rounded-lg">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}