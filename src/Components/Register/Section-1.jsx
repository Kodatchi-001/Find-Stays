import { useContext } from "react";
import Header from "../Header/Header";
import { Listeinfo } from "../../utils/Liste-info";

export default function Section_1() {
    const { Register, setRegister, SaveHotel, setSaveHotel, LikeHotel, setLikeHotel } = useContext(Listeinfo);
    /*-------------------------------------------------*/
    const SaveLike = index => setLikeHotel(itemsLikes => itemsLikes.includes(index) ? itemsLikes.filter(i => i !== index) : [...itemsLikes, index]);
    const SaveCards = index => setSaveHotel(prevSave => prevSave.includes(index) ? prevSave.filter(i => i !== index) : [...prevSave, index]);
    const RemoveRegister = index => setRegister(Register.filter((_, i) => i !== index))
    return <>
        <section className="w-full lg:h-screen lg:px-2 xl:px-20">
            <Header />
            <div className="w-full h-[10vh] lg:hidden"></div>
            <div className="w-full h-full lg:h-[85vh] flex flex-col pt-4 lg:pt-8 px-2 lg:px-4 gap-5 lg:gap-3">
                <div className="w-full lg:h-[10%] flex justify-between items-center text-2xl">
                    <h1>Hotel Register</h1>
                    <h1>{Register.length} Items</h1>
                </div>
                <div className="w-full h-full lg:h-[90%] flex flex-wrap lg:flex-nowrap lg:flex-col gap-5">
                    {Register.length > 0 ? Register.map((items, index) => (
                        <div key={items.id} className="sm:w-[48%] lg:w-full h-full lg:h-[35vh] flex lg:border rounded-xl flex-wrap gap-2 lg:gap-0">
                            <div className="w-full lg:w-2/6 h-[30vh] lg:h-full rounded-2xl bg-cover" style={{ backgroundImage: `url(${require(`../../Assets/${items.Picture}`)})` }}></div>
                            <div className="w-full lg:w-4/6 lg:h-full flex lg:pl-5 lg:pr-3 py-2 lg:py-3 flex-wrap gap-2 lg:gap-0 px-1">
                                <div className="w-full lg:w-4/6 lg:h-full flex flex-col justify-between gap-3 lg:gap-2">
                                    <div className="w-full flex flex-col gap-2">
                                        <div>
                                            <h1 className="text-4xl">{items.Hotel}</h1>
                                            <h1 className="text-2xl">{items.Location}</h1>
                                        </div>
                                        <div>
                                            <h1>${items.Price}/Night</h1>
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
                                    </div>
                                    <div className="w-full flex justify-between lg:justify-start gap-2">
                                        <div className="flex flex-col gap-2">
                                            <h1 className="w-full text-lg">Person</h1>
                                            <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-gray">
                                                <i class='bx bx-user text-lg'></i>
                                                <h1>{items.Person}</h1>
                                            </div>
                                        </div>

                                        <div className="w-1/2 lg:w-auto flex flex-col gap-2">
                                            <h1 className="w-full text-lg">Check-in</h1>
                                            <div className="flex justify-center items-center gap-2 px-2 lg:pl-4 lg:pr-5 py-2 rounded-lg bg-gray">
                                                <i class='bx bx-calendar text-lg'></i>
                                                <h1>{items.Check_In}</h1>
                                            </div>
                                        </div>
                                        <div className="w-1/2 lg:w-auto flex flex-col gap-2">
                                            <h1 className="w-full text-lg">Check-out</h1>
                                            <div className="flex justify-center items-center gap-2 px-2 lg:pl-4 lg:pr-5 py-2 rounded-lg bg-gray">
                                                <i class='bx bx-calendar text-lg'></i>
                                                <h1>{items.Check_Out}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6 h-1/6 flex justify-end flex-wrap">
                                    <div className="flex gap-1">
                                        <i className={`bx bx-heart px-3 py-2 scale-90 border border-black rounded-full text-xl cursor-pointer duration-200 hover:bg-red-500 hover:text-white hover:border-transparent ${LikeHotel.includes(items.id) ? 'bxs-heart text-red-500' : 'bx-heart text-black'}`}
                                            onClick={() => SaveLike(items.id)}></i>
                                        <i className={`bx bx-bookmark px-3 py-2 scale-90 border border-black rounded-full text-xl cursor-pointer duration-200 hover:bg-green-500 hover:text-white hover:border-transparent ${SaveHotel.includes(items.id) ? 'bxs-bookmark' : 'bx-bookmark'}`}
                                            onClick={() => SaveCards(items.id)}></i>
                                        <i class='bx bx-trash px-3 py-2 scale-90 border border-black rounded-full text-xl cursor-pointer duration-200 hover:bg-black hover:text-white hover:border-transparent'
                                            onClick={() => RemoveRegister(index)}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="w-full h-[70vh] lg:h-[85%] flex flex-col justify-center items-center gap-5">
                            <i class='bx bx-map text-8xl'></i>
                            <h1 className="w-1/2 lg:w-1/4 text-center text-3xl">No bookings available now</h1>
                        </div>
                    )}
                </div>
            </div>
        </section >
    </>
}