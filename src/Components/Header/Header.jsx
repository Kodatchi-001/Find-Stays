import { useEffect, useState } from "react";
import Logo from "../../Assets/logo.png";
import { Link } from 'react-router-dom';

export default function Header(Props) {
    const [Links, setlinks] = useState(false);
    useEffect(() => {
        switch (window.location.pathname) {
            case '/':
                setlinks('HomePage')
                break;
            case '/Search':
                setlinks('Search')
                break;
            case '/Booking':
                setlinks('Search')
                break;
            default:
                setlinks('')
                break;
        }
    }, [Links]);
    return <>
        <header className="w-full h-5/6 flex pr-4 lg:pr-6 px-1 lg:px-0">
            <div className={`w-1/2 h-full flex items-center to-black lg:text-${Props.color}`}>
                <div className="w-[30%] sm:w-[15%] lg:w-[10%]">
                    <img src={Logo} alt="Logo-Web" className="w-full h-full scale-125" />
                </div>
                <h1 className="text-2xl">FindStays</h1>
            </div>
            <div className="w-1/2 h-full lg:flex justify-end items-center hidden">
                <ul className={`lg:w-[95%] xl:w-[80%] h-full flex justify-between items-center text-[1.1rem] text-${Props.color}`}>
                    <Link to="/" className={`links ${Links == 'HomePage' ? 'link-line' : ''}`}>Home</Link>
                    <Link to="/Search" className={`links ${Links == 'Search' ? 'link-line' : ''}`}>Search</Link>
                    <Link to="/" className="links">Blog</Link>
                    <Link to="/" className="links">About</Link>
                    <button className={`px-7 py-2 text-${Props.color} border ${Links == 'Search' ? 'border-black' : 'border-white'} rounded-full hover:bg-white hover:text-black`}>
                        Register
                    </button>
                </ul>
            </div>
            <div className="w-1/2 h-full lg:hidden flex justify-end items-center">
                <i class='bx bx-menu-alt-right text-black text-3xl' ></i>
            </div>
        </header>
    </>
}