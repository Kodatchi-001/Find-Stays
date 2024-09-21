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
            case '/About':
                setlinks('About')
                break;
            case '/Search':
                setlinks('Search')
                break;
            case '/Booking':
                setlinks('Search')
                break;
            case '/Register':
                setlinks('Register')
                break;
            default:
                setlinks('')
                break;
        }
    }, [Links]);
    const Navbar = () => Size ? setSize(false) : setSize(true)
    return <>
        <header className={`w-full ${Size ? 'h-[15vh]' : 'h-[8.5vh]'} lg:h-[15vh] flex justify-center flex-wrap lg:pr-6 fixed lg:relative shadow-lg lg:shadow-none z-50 bg-white lg:bg-transparent overflow-hidden`}>
            <div className={`w-full lg:h-full ${Size ? 'h-1/2' : 'h-full'} flex px-2 lg:px-0 pr-5 lg:pr-0`}>
                <Link to="/" className={`w-[40%] lg:w-2/6 xl:w-[40%] h-full flex items-center to-black lg:text-${Props.color}`}>
                    <div className="w-[30%] sm:w-[15%] xl:w-[10%]">
                        <img src={Logo} alt="Logo-Web" className="w-full h-full scale-125" />
                    </div>
                    <h1 className="text-2xl">FindStays</h1>
                </Link>
                <div className="lg:w-4/6 xl:w-[60%] h-full lg:flex justify-end items-center hidden">
                    <ul className={`h-full flex justify-end items-center gap-10 text-[1.1rem] text-${Props.color}`}>
                        <Link to="/" className={`links ${Links == 'HomePage' ? 'link-line' : ''}`}>Home</Link>
                        <Link to="/About" className={`links ${Links == 'About' ? 'link-line' : ''}`}>About</Link>
                        <Link to="/Search" className={`links ${Links == 'Search' ? 'link-line' : ''}`}>Search</Link>
                        <Link to="/Register" className={`links ${Links == 'Register' ? 'link-line' : ''}`}>Register</Link>
                        <Link to="/Sign-In" className={`px-6 py-2 border border-${Props.color} text-${Props.color} rounded-full link hover:bg-black hover:text-white`}>Sign In</Link>
                    </ul>
                </div>
                <div className="w-[60%] h-full lg:hidden flex justify-end items-center"
                    onClick={Navbar}>
                    <i class='bx bx-menu-alt-right text-black text-3xl' ></i>
                </div>
            </div>
            <div className={`w-full ${Size ? 'h-1/2' : 'h-full'} px-8 lg:hidden`}>
                <ul className={`w-full h-full flex justify-between items-center text-[1.1rem] text-black lg:text-${Props.color}`}>
                    <Link to="/" className={`links ${Links == 'HomePage' ? 'link-line' : ''}`}>Home</Link>
                    <Link to="/About" className={`links ${Links == 'About' ? 'link-line' : ''}`}>About</Link>
                    <Link to="/Search" className={`links ${Links == 'Search' ? 'link-line' : ''}`}>Search</Link>
                    <Link to="/Register" className={`links ${Links == 'Register' ? 'link-line' : ''}`}>Register</Link>
                </ul>
            </div>
        </header>
    </>
}