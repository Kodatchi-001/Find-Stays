import { useEffect, useState } from "react";
import Logo from "../../Assets/logo.png";
import { Link } from 'react-router-dom';

export default function Header(Props) {
    const [Links, setlinks] = useState(false);
    const [Size, setSize] = useState(false)
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
            case '/About':
                setlinks('About')
                break;
            default:
                setlinks('')
                break;
        }
    }, [Links]);
    const Navbar = () => Size ? setSize(false) : setSize(true)
    return <>
        <header className={`w-full ${Size ? 'h-[17vh]' : 'h-[9vh]'} lg:h-[15vh] flex justify-center flex-wrap lg:pr-6 fixed lg:relative shadow-lg lg:shadow-none z-50 bg-white lg:bg-transparent overflow-hidden`}>
            <div className={`w-full lg:h-full ${Size ? 'h-1/2' : 'h-full'} flex px-3 lg:px-0`}>
                <div className={`w-1/2 h-full flex items-center to-black lg:text-${Props.color}`}>
                    <div className="w-[30%] sm:w-[15%] lg:w-[10%]">
                        <img src={Logo} alt="Logo-Web" className="w-full h-full scale-125" />
                    </div>
                    <h1 className="text-2xl">FindStays</h1>
                </div>
                <div className="w-1/2 h-full lg:flex justify-end items-center hidden">
                    <ul className={`lg:w-[95%] xl:w-[65%] h-full flex justify-between items-center text-[1.1rem] text-${Props.color}`}>
                        <Link to="/" className={`links ${Links == 'HomePage' ? 'link-line' : ''}`}>Home</Link>
                        <Link to="/About" className={`links ${Links == 'About' ? 'link-line' : ''}`}>About</Link>
                        <Link to="/Search" className={`links ${Links == 'Search' ? 'link-line' : ''}`}>Search</Link>
                        <button className={`px-7 py-2 text-${Props.color} border ${Links == 'HomePage' ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} rounded-full`}>
                            Register
                        </button>
                    </ul>
                </div>
                <div className="w-1/2 h-full lg:hidden flex justify-end items-center"
                    onClick={Navbar}>
                    <i class='bx bx-menu-alt-right text-black text-3xl' ></i>
                </div>
            </div>
            <div className={`w-full ${Size ? 'h-1/2' : 'h-full'} px-4 lg:hidden`}>
                <ul className={`w-full h-full flex justify-between items-center text-[1.1rem] text-black lg:text-${Props.color}`}>
                    <Link to="/" className={`links ${Links == 'HomePage' ? 'link-line' : ''}`}>Home</Link>
                    <Link to="/About" className={`links ${Links == 'About' ? 'link-line' : ''}`}>About</Link>
                    <Link to="/Search" className={`links ${Links == 'Search' ? 'link-line' : ''}`}>Search</Link>
                    <button className={`text-black lg:text-${Props.color} ${Links == 'Search' ? 'border-black' : 'border-white'}`}>
                        Register
                    </button>
                </ul>
            </div>
        </header>
    </>
}