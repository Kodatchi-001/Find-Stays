import { useEffect, useState } from "react";
import Header from "../Header/Header";
export default function Section_1() {
    const [userName, setuserName] = useState('');
    const [userReservations, setUserReservations] = useState([]);
    /*-------------------------------------------------*/
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    const userIndex = users.findIndex(user => user.userEmail == currentUserEmail);
    const [LikeHotels, setLikeHotels] = useState([]);
    const [SavedHotels, setSavedHotels] = useState([]);
    /*-------------------------------------------------*/
    const LikeHotel = index => {
        if (userIndex !== -1) {
            if (users[userIndex].Like.includes(index)) {
                users[userIndex].Like = users[userIndex].Like.filter(item => item !== index)
            } else {
                users[userIndex].Like.push(index)
            }
            localStorage.setItem('users', JSON.stringify(users));
            setLikeHotels(users[userIndex].Like)
        }
    }
    const SaveHotel = index => {
        if (userIndex !== -1) {
            if (users[userIndex].Save.includes(index)) {
                users[userIndex].Save = users[userIndex].Save.filter(item => item !== index)
            } else {
                users[userIndex].Save.push(index)
            }
            localStorage.setItem('users', JSON.stringify(users));
            setSavedHotels(users[userIndex].Save);
        }
    }
    const SuprimmeHotel = index => {
        if (userIndex !== -1) {
            users[userIndex].reservations = users[userIndex].reservations.filter(items => items.id !== index);
            localStorage.setItem('users', JSON.stringify(users));
            setUserReservations(users[userIndex].reservations);
        }
    }
    /*-------------------------------------------------*/
    useEffect(() => {
        if (userIndex !== -1) {
            setuserName(users[userIndex].fullName)
            setLikeHotels(users[userIndex].Like || []);
            setSavedHotels(users[userIndex].Save || []);
            setUserReservations(users[userIndex].reservations || []);
        }
    }, [userIndex]);
    return <>
        <section className="w-full lh-screen lg:px-2 xl:px-20">
            <Header />
            <div className="w-full h-[10vh] lg:hidden"></div>
            <div className="w-full h-full flex flex-col pt-4 lg:pt-8 px-3 lg:px-4 gap-5">
                <div className="w-full lg:h-[10%] flex justify-between items-center">
                    <div>
                        <h1 className={`text-2xl ${userName.trim() == '' ? 'flex' : 'hidden'}`}>Go! Create an Account.</h1>
                        <h1 className={`text-2xl ${userName.trim() == '' ? 'hidden' : 'flex'}`}>Hello, {userName} !</h1>
                    </div>
                    <h1 className="text-2xl">{userReservations.length} Items</h1>
                </div>
                <div className="w-full h-full lg:h-[90%] flex flex-wrap lg:flex-nowrap lg:flex-col gap-5">
                    {userReservations.length > 0 ? userReservations.map(items => (
                        <div key={items.id} className="sm:w-full h-full lg:h-[28vh] flex rounded-lg flex-wrap p-5 px-4 gap-2 lg:gap-0 bg-gray-100 shadow-lg">
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
                                    <i className={`bx ${LikeHotels.includes(items.id) ? 'bxs-heart text-red-500' : 'bx-heart'} px-3 py-2 scale-90 border border-black rounded-full text-xl cursor-pointer`}
                                        onClick={() => LikeHotel(items.id)}></i>

                                    <i className={`bx ${SavedHotels.includes(items.id) ? 'bxs-bookmark text-green-500' : 'bx-bookmark'} px-3 py-2 scale-90 border border-black rounded-full text-xl cursor-pointer`}
                                        onClick={() => SaveHotel(items.id)}></i>

                                    <i class='bx bx-trash px-3 py-2 scale-90 border border-black rounded-full text-xl cursor-pointer'
                                        onClick={() => SuprimmeHotel(items.id)}></i>
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