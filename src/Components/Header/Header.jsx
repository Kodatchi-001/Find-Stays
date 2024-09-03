import Logo from "../../Assets/logo.png";
export default function Header() {
    return <>
        <header className="w-full h-5/6 flex pr-4 lg:pr-6 px-1 lg:px-0">
            <div className="w-1/2 h-full flex items-center to-black lg:text-white">
                <div className="w-[30%] sm:w-[15%] lg:w-[10%]">
                    <img src={Logo} alt="Logo-Web" className="w-full h-full scale-125" />
                </div>
                <h1 className="text-2xl">FindStays</h1>
            </div>
            <div className="w-1/2 h-full lg:flex justify-end items-center hidden">
                <ul className="lg:w-[95%] xl:w-[80%] h-full flex justify-between items-center text-[1.1rem] text-white">
                    <li>Home</li>
                    <li>Search</li>
                    <li>Blog</li>
                    <li>About</li>
                    <button className="px-7 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black">Register</button>
                </ul>
            </div>
            <div className="w-1/2 h-full lg:hidden flex justify-end items-center">
                <i class='bx bx-menu-alt-right text-black text-3xl' ></i>
            </div>
        </header>
    </>
}