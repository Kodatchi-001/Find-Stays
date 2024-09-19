export default function Section_5() {
    return <>
        <section className="w-full lg:h-screen px-3 lg:px-5 xl:px-24 py-5 mt-2 flex flex-wrap gap-5 lg:gap-0">
            <div className="w-full h-1/5 flex flex-col justify-center items-center lg:items-start gap-3">
                <h1 className="text-lg text-gray">PROFESSIONALS</h1>
                <h1 className="w-full text-center lg:text-start text-[2.50rem] lg:text-5xl">Meet The Team</h1>
            </div>
            <div className="w-full h-4/5 flex justify-center lg:justify-between items-end flex-wrap gap-6 sm:gap-2 lg:gap-1">
                <div className="w-full sm:w-[48%] lg:w-[30%] h-[50vh] lg:h-[95%] rounded-3xl border">
                    <div className="w-full h-[75%] team" id="team-1">

                    </div>
                    <div className="w-full h-[25%] flex flex-col justify-center items-center">
                        <h1 className="text-2xl">Ahmed Elyousfi</h1>
                        <h1 className="font-sans">Junior Manager</h1>
                    </div>
                </div>
                <div className="w-full sm:w-[48%] lg:w-[30%] xl:w-1/3 h-[50vh] lg:h-[95%] rounded-3xl border">
                    <div className="w-full h-[75%] team" id="team-2">

                    </div>
                    <div className="w-full h-[25%] flex flex-col justify-center items-center">
                        <h1 className="text-2xl">Kimberly Hansen</h1>
                        <h1 className="font-sans">Customer Relationship Manage</h1>
                    </div>
                </div>
                <div className="w-full sm:w-[48%] lg:w-[30%] xl:w-1/3 h-[50vh] lg:h-[95%] rounded-3xl border">
                    <div className="w-full h-[75%] team" id="team-3">

                    </div>
                    <div className="w-full h-[25%] flex flex-col justify-center items-center">
                        <h1 className="text-2xl">Kimberly Hansen</h1>
                        <h1 className="font-sans">Junior Manager</h1>
                    </div>
                </div>
            </div>
        </section>
    </>
}