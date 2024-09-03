import Footer from './Footer';

function HeroSection() {
    return (
        <div>
            <div className="relative w-full h-auto">
                {/* Image for medium and larger screens */}
                <img 
                    className="w-full md:block hidden h-auto" 
                        src="https://imgs.search.brave.com/zeFXQKSjUBk9GtzHCOx25bDnZUqdXrjv_0iK4GQLKHk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzIyLzk0LzYy/LzM2MF9GXzQyMjk0/NjIyNV9md0FMS3hQ/Smc1SHRRTWtjYjVE/VnV5Q1dQWVNNTkgz/cy5qcGc" 
                    alt="Description of second image" 
                />

                {/* CTA Section with text above and button on the left */}
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 flex flex-col items-start p-4">
                    <p className=" text-xl font-semibold mb-4 text-white">
                        Discover the Amazing Features
                    </p>
                    <a 
                        href="#cta" // Link to your CTA section or external URL
                        className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                    >
                        Get Started
                    </a>
                </div>

                {/* Image for small screens with dark overlay */}
                <div className="relative md:hidden">
                    <img 
                        className="w-full h-auto" 
                        src='https://imgs.search.brave.com/nU0j4QEDeQfZj94Nz3tBVNFDEWf0bbkiHnO9IB3AqF4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/NzM1NDA0OC9waG90/by9vbGRlci13b21h/bi13b3JraW5nLW9u/LWxhcHRvcC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9MFJl/ZWV2THNhTk1OVjBn/bnlNRmh4Q1ZMVXBp/MDZSU0hwZ0lvUXpM/MWU0ND0'
                        alt="Description of first image" 
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
                    <div className="absolute top-1/2 left-10 transform -translate-y-1/2 flex flex-col items-start p-4">
                    <p className=" text-xl font-semibold mb-4 text-white">
                        Discover the Amazing Features
                    </p>
                    <a 
                        href="#cta" // Link to your CTA section or external URL
                        className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                    >
                        Get Started
                    </a>
                </div>
                </div>
            </div>

            {/* Centered content section */}
            <div className="w-full h-auto flex flex-wrap flex-col items-center text-center p-4">
                <p className="font-bold text-indigo-400 text-2xl md:text-4xl">Presenting Our Robust System</p>
                <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-14 md:border-pink-400"></div>
            </div>
            <div className="w-full h-auto flex flex-wrap justify-evenly">
                <div className="border-white border-4 p-2 rounded-xl w-46 flex flex-col items-center mb-12">
                    <img className="w-44 h-44 rounded-full" src="https://imgs.search.brave.com/VEJHhgDRLOtgMfcl7DOECF0jj2XFWczEPHQpgcme_1Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIz/MDc5ODQ4L3Bob3Rv/L29ubGluZS1zaG9w/cGluZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NzRjVzRM/RGxjV1JLbE1NczQ5/UktnMl8tOWxzQ2V0/UG5pNGZoS2pXN1Jo/UT0"></img>
                    <p className="font-bold text-white text-3xl">Challenge Yourself</p>
                    <p className="font-bold text-gray-500 text-2xl">Take Quiz</p>
                </div>
                <div className="border-white border-4 w-46 p-2 rounded-xl flex flex-col items-center mb-12">
                    <img className="w-44 h-44 rounded-full" src="https://imgs.search.brave.com/gVzp9QWMQh4szMrQFrCHSBuDqvDU8uiIHSXl_f69uhY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MDY5MTE2My9waG90/by9lLWxlYXJuaW5n/LWNvbmNlcHQtb25s/aW5lLWNsYXNzZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTRsb0hnVzJHektt/SkYzbmJSaGlpcnJE/MEtjN3oxVXJqQjBQ/Rm9ER2NuMDA9"></img>
                    <p className="font-bold text-white text-3xl">Boost Your Learning</p>
                    <p className="font-bold text-gray-500 text-2xl">20% Increased Productivity</p>
                </div>
                <div className="border-white border-4 p-2 rounded-xl w-46 flex flex-col items-center mb-12">
                    <img className="w-44 h-44 rounded-full" src="https://imgs.search.brave.com/m_irdT6c6M14iHEb_lXZwsxtUcM9qKIUNiBwFRoaNZg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzMxLzQxLzI5/LzM2MF9GXzMzMTQx/Mjk5Nl9EeTN2eGtP/cFdpME1Ma0FyOU9s/enFicTU1c3dWTklO/US5qcGc"></img>
                    <p className="font-bold text-white text-3xl">Work Smart</p>
                    <p className="font-bold text-gray-500 text-2xl">Learn By Engaging</p>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default HeroSection;
