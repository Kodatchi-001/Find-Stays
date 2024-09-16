import Header from "../Header/Header";

export default function Section_1() {
    return <>
        <section className="w-full h-screen">
            <div className="w-full h-screen AboutPage-Background">
                <div className="w-full h-full bg-black-blur">
                    <div className="lg:px-20">
                        <Header color={'white'} />
                    </div>
                    <div className="w-full h-full lg:h-[85%] flex justify-center items-center px-2 lg:px-0 text-white">
                        <div className="w-full lg:w-4/6 flex flex-col items-center mt-[-8vh]">
                            <h1 className="text-xl">About Us</h1>
                            <h1 className="text-5xl lg:text-6xl xl:text-8xl text-center">Our Commitment to Exceptional Stays</h1>
                            <p className="w-full sm:w-5/6 text-center mt-3">
                                Welcome to Sind Stays! We are passionate about creating unforgettable
                                lodging experiences. Our mission is to provide you with comfortable and memorable stays,
                                with a focus on quality service and your satisfaction. Discover our story and what makes us unique
                                in the world of hospitality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}