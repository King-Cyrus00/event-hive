import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";


export default function Home() {
    return (
        <>
            <Navbar />
            <section className="bg-[url(./assets/images/hero-bg.jpg)] h-[596px] bg-cover  mx-auto relative">
                <h1 className="text-white font-bold text-center text-bigheading w-[30%] mx-auto pt-35">MADE FOR THOSE WHO DO</h1>

                <form className="text-white bg-navy-blue w-[90%] mx-auto py-6 px-10 flex flex-row justify-between absolute -bottom-12 left-[5%]">
                    <div className="flex flex-col">
                        <label htmlFor="type" className="text-white">Looking for</label>
                        <select name="type" id="type" className="bg-white text-black p-2 rounded-md w-80">
                            <option selected disabled>Choose event type</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="location" className="text-white">Location</label>
                        <select name="location" id="location" className="bg-white text-black p-2 rounded-md w-80">
                            <option selected disabled>Choose Location</option>
                            <option value="kasoa">Kasoa</option>
                            <option value="accra">Accra</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="when" className="text-white">When</label>
                        <input type="datetime-local" name="when" id="when" className="bg-white p-1.5 rounded-md w-80" />
                    </div>


                    <div className="text-white bg-primary size-[60px] flex flex-row justify-center items-center rounded-md py-1 px-4">
                        <Search />
                    </div>
                </form>

            </section>
            <section>
                <div className="flex flex-row items center pt-[8%] pb-[2%]  justify-between px-[5%]">
                    <h1 className=" font-bold text-bigheading flex gap-2 "><span className="text-black">Upcoming</span>
                        <span className="text-primary">Events</span>
                    </h1>


                    <div className=" gap-5 flex justify-center items-center">
                        <select className="bg-gray py-3 px-4 rounded-md w-auto" name="weekdays" id="weekdays">
                            <option disable selected>Weekdays</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                        </select>

                        <select className="bg-gray py-3 px-4 rounded-md w-auto text-center" name="event-type" id="event-type">
                            <option disable selected>Event type</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                            <option value="music">Music</option>
                        </select>

                        <select className="bg-gray rounded-md px-4 py-3 w-auto text-center" name="any-category" id="any-category">
                            <option disable selected>Any category</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                            <option value="music">Music</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-5">
                    {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
                </div>
            </section>
            <section className="h-[500px]"></section>
            <Footer />
        </>
    );
}