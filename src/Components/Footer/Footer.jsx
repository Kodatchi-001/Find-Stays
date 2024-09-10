import Logo from "../../Assets/logo.png";
export default function Footer() {
    return <>
        <footer className="w-full lg:h-[50vh] px-3 lg:p-5 lg:pt-8 bg-black">
            <div className="w-full h-full flex flex-wrap lg:p-5 lg:py-6 bg-white rounded-3xl">
                <div className="w-1/2 h-full lg:flex justify-around hidden">
                    <ul className="w-1/6 h-full flex flex-col gap-2 text-lg text-gray-400">
                        <h1 className="text-2xl mb-1 text-black">Pages</h1>
                        <li><a href="#HomePage" className="text-black cursor-pointer">Home</a></li>
                        <li>Search</li>
                        <li>Blog</li>
                        <li>About</li>
                    </ul>
                    <ul className="w-1/6 h-full flex flex-col gap-2 text-lg text-gray-400">
                        <h1 className="text-2xl mb-1 text-black">Features</h1>
                        <li>Find Hotels</li>
                        <li>Book Hotels</li>
                        <li>Reviews</li>
                    </ul>
                    <ul className="w-1/6 h-full flex flex-col gap-2 text-lg text-gray-400">
                        <h1 className="text-2xl mb-1 text-black">Cookies</h1>
                        <li>Data Collect</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Laws</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/2 h-full rounded-3xl flex justify-end items-end relative py-5 lg:py-0 bg-gray-200">
                    <div className="w-full h-full flex lg:p-4">
                        <div className="w-full lg:w-1/2 h-full flex flex-col items-center lg:items-start gap-3 lg:gap-3">
                            <div className="w-full h-1/2 flex flex-col justify-between items-center lg:items-start gap-3 lg:gap-0 pb-3 lg:border-b border-black">
                                <h1 className="text-3xl lg:text-2xl w-full lg:w-[60%] text-center lg:text-start">Don’t Wanna Miss Our Offers?</h1>
                                <h1 className="text-xl lg:text-sm">Your email@mail.com</h1>
                            </div>
                            <div>
                                <button className="px-8 py-3 text-sm bg-black text-white rounded-full">Subsribe</button>
                            </div>
                        </div>
                        <div className="w-1/2 h-full lg:flex flex-wrap hidden">
                            <p className="w-5/6">
                                You guys better subscribe to our daily newsletter!
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 h-4/6 lg:flex justify-end overflow-hidden absolute hidden">
                        <div className="w-[15vw] h-[22vh] scale-150 mr-[-3vw]">
                            <img src={Logo} className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}