import { Linkedin, Instagram, Facebook } from "lucide-react";


function Footer() {
    return (
        <footer className="bg-navy-blue text-white text-3xl">
            <h1 className="font-bold flex justify-center gap-2"><span className="text-white">Event</span><span className="text-primary">Hive</span></h1>
            <form className="" >
                <div className="flex justify-center text-2xl gap-4 p-4">
                <input className="bg-white text-primary text-sm w-3xs p-2" type="email" name="email" placeholder="Enter your mail" />
                <button className="text-2xl bg-primary rounded-lg text-white px-6 py-4" type="submit">Subscribe</button> </div>
                <div>
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Get In Touch</span>
                    <span>FAQs</span>
                </div>
                <hr />
                <div>
                    <div>
                        <button>English</button>
                        <button>French</button>
                        <button>Hindi</button>
                    </div>
                    <div>
                        <Linkedin/>
                        <Instagram/> 
                        <Facebook/> 
                    </div>
                    <p>Non Copryright© 2025 Upload By Event Hive</p>
                </div>
            </form>
        </footer>
    )
}

export default Footer;