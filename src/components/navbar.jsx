export default function Navbar() {
    return ( 
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
            <h1 className="text-3xl font-bold flex gap-1.5">
                <span className="text-black">Event</span>
                <span className="text-primary">Hive</span>
            </h1>
            <div className="flex gap-6">
                <button>Login</button>
                <button className="text-white rounded-lg bg-primary px-7 py-3">SignUp</button> 
            </div>
        </nav>
    )
}