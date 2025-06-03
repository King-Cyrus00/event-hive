import { Linkedin, Instagram, Facebook } from "lucide-react";


function Footer() {
    return (
        <footer className="bg-navy-blue text-white text-3xl ">
            <h1 className="font-bold flex justify-center"><span className="text-white">Event</span><span className="text-primary">Hive</span></h1>
            <form className="" >
                <div className="flex justify-center text-2xl">
                <input className="" type="email" name="email" placeholder="Enter your mail" />
                <button  type="submit">Subscribe</button> </div>
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