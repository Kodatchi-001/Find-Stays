import { useEffect, useState } from "react";
import Header from "../Header/Header";

export default function Section_1() {
    const [userReservations, setUserReservations] = useState([]);
    const [userName, setuserName] = useState('');

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUserEmail = localStorage.getItem('currentUserEmail');
        const userIndex = users.findIndex(user => user.userEmail == currentUserEmail);
        if (userIndex !== -1) {
            setUserReservations(users[userIndex].reservations);
            setuserName(users[userIndex].fullName)
        }
    }, []);
    return <>
        <section className="w-full lh-screen lg:px-2 xl:px-20">
            <Header />
            <div className="w-full h-[10vh] lg:hidden"></div>
            <div className="w-full h-full flex flex-col pt-4 lg:pt-8 px-2 lg:px-4 gap-5">
                <div className="w-full lg:h-[10%] flex justify-between items-center">
                    <div>
                        <h1 className={`text-2xl ${userName.trim() == '' ? 'flex' : 'hidden'}`}>Go! Create an Account to Register</h1>
                        <h1 className={`text-2xl ${userName.trim() == '' ? 'hidden' : 'flex'}`}>Hello, {userName}!</h1>
                    </div>
                    {/* <h1>{userReservations.length} Items</h1> */}
                    <select className="rounded-lg px-2 text-xl py-2 border">
                        <option value="Register" defaultChecked>Register</option>
                        <option value="Like">Like</option>
                        <option value="Save">Save</option>
                    </select>
                </div>
                <div className="w-full h-full lg:h-[90%] flex flex-wrap lg:flex-nowrap lg:flex-col gap-5">
                    {userReservations.length > 0 ? userReservations.map((items) => (
                        <div key={items.id} className="sm:w-full h-full lg:h-[28vh] flex rounded-lg flex-wrap p-5 px-4 gap-2 lg:gap-0 Shadow">
                            <div className="w-full lg:w-1/2 lg:h-full flex flex-col justify-between gap-5 lg:gap-0">
                                <div>
                                    <h1 className="text-3xl lg:text-4xl">{items.Hotel}</h1>
                                    <h1 className="text-2xl text-gray">{items.Location}</h1>
                                </div>
                                <div>
                                    <h1 className="text-xl">${items.Price}/Night</h1>
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
                            <div className="w-full lg:w-1/2 h-full flex flex-wrap-reverse lg:flex-col justify-between items-end gap-2 lg:gap-0">
                                <div className="w-full flex justify-end">
                                    <i className={`bx bx-heart px-3 py-2 scale-90 border border-black rounded-full text-xl cursor-pointer duration-200 hover:bg-red-500 hover:text-white hover:border-transparent`}></i>
                                    <i className={`bx bx-bookmark px-3 py-2 scale-90 border border-black rounded-full text-xl cursor-pointer duration-200 hover:bg-green-500 hover:text-white hover:border-transparent`}></i>
                                    <i class='bx bx-trash px-3 py-2 scale-90 border border-black rounded-full text-xl cursor-pointer duration-200 hover:bg-black hover:text-white hover:border-transparent'></i>
                                </div>
                                <div className="w-full flex justify-between lg:justify-end gap-2">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="w-full text-lg text-center">Person</h1>
                                        <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-gray">
                                            <i class='bx bx-user text-lg'></i>
                                            <h1>{items.Person}</h1>
                                        </div>
                                    </div>

                                    <div className="w-1/2 lg:w-auto flex flex-col gap-2">
                                        <h1 className="w-full text-lg text-center">Check-in</h1>
                                        <div className="flex justify-center items-center gap-2 px-2 lg:pl-4 lg:pr-5 py-2 rounded-lg bg-gray">
                                            <i class='bx bx-calendar text-lg'></i>
                                            <h1>{items.Check_In}</h1>
                                        </div>
                                    </div>
                                    <div className="w-1/2 lg:w-auto flex flex-col gap-2">
                                        <h1 className="w-full text-lg text-center">Check-out</h1>
                                        <div className="flex justify-center items-center gap-2 px-2 lg:pl-4 lg:pr-5 py-2 rounded-lg bg-gray">
                                            <i class='bx bx-calendar text-lg'></i>
                                            <h1>{items.Check_Out}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="w-full h-[50vh] flex flex-col justify-center items-center gap-5">
                            <i class='bx bx-map text-8xl'></i>
                            <h1 className="w-1/2 lg:w-1/4 text-center text-3xl">No bookings available now</h1>
                        </div>
                    )}
                </div>
            </div>
        </section >
    </>
}