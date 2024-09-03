import Footer from './Footer'


function HeroSection() {
    return (
        <div>
            {/* Optional heading for context */}
            {/* <h1>Hi there</h1> */}
            
            <div className="w-full h-auto">
                {/* Image for medium and larger screens */}
                <img 
                    className="w-full md:block hidden h-auto" 
                    src="https://imgs.search.brave.com/zeFXQKSjUBk9GtzHCOx25bDnZUqdXrjv_0iK4GQLKHk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzIyLzk0LzYy/LzM2MF9GXzQyMjk0/NjIyNV9md0FMS3hQ/Smc1SHRRTWtjYjVE/VnV5Q1dQWVNNTkgz/cy5qcGc" 
                    alt="Description of second image" 
                />

                {/* Image for small screens */}
                <img 
                    className="w-full md:hidden" 
                    src="https://imgs.search.brave.com/qYPnlZYe6EMnQhLl7AAcsYurS7mgeodo5k8FebOLzGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MzkwNzY4Ny9maWxl/L29yaWdpbmFsLWE3/NDUxZjZhNjMyNjg2/YzU2YWY1Mjg4NjMw/YjQ3YmNmLmpwZz9y/ZXNpemU9NDAweDA" 
                    alt="Description of first image" 
                />
            </div>

            {/* Centered content section */}
            <div className="w-full h-auto flex flex-wrap flex-col items-center text-center p-4">
                <p className="font-bold text-indigo-400 text-2xl md:4xl text-center ">Presenting Our Robust System</p>
                        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-14 md:border-pink-400 "></div>
            </div>
            <div className=" w-full h-auto flex flex-wrap justify-evenly ">
                <div className="border-white border-4  p-2 rounded-xl w-46 flex flex-col items-center mb-12">
                    <img className="w-44 h-44 rounded-full" src="https://imgs.search.brave.com/VEJHhgDRLOtgMfcl7DOECF0jj2XFWczEPHQpgcme_1Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIz/MDc5ODQ4L3Bob3Rv/L29ubGluZS1zaG9w/cGluZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NzRjVzRM/RGxjV1JLbE1NczQ5/UktnMl8tOWxzQ2V0/UG5pNGZoS2pXN1Jo/UT0"></img>
                    <p className="font-bold text-white text-3xl">Challange YourSelf</p>
                    <p className="font-bold text-gray-500 text-2xl">Take Quiz</p>
                </div>
                <div className="border-white border-4 w-46 p-2 rounded-xl flex flex-col items-center mb-12">
                    <img className="w-44 h-44 rounded-full" src="https://imgs.search.brave.com/gVzp9QWMQh4szMrQFrCHSBuDqvDU8uiIHSXl_f69uhY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MDY5MTE2My9waG90/by9lLWxlYXJuaW5n/LWNvbmNlcHQtb25s/aW5lLWNsYXNzZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTRsb0hnVzJHektt/SkYzbmJSaGlpcnJE/MEtjN3oxVXJqQjBQ/Rm9ER2NuMDA9"></img>
                    <p className="font-bold text-white text-3xl">Boast Your Learning</p>
                    <p className="font-bold text-gray-500 text-2xl">20% Increased Productivity</p>
                </div>
                <div className="border-white border-4 p-2 rounded-xl w-46 flex flex-col items-center mb-12">
                    <img className=" w-44 h-44 rounded-full" src="https://imgs.search.brave.com/m_irdT6c6M14iHEb_lXZwsxtUcM9qKIUNiBwFRoaNZg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzMxLzQxLzI5/LzM2MF9GXzMzMTQx/Mjk5Nl9EeTN2eGtP/cFdpME1Ma0FyOU9s/enFicTU1c3dWTklO/US5qcGc"></img>
                    <p className="font-bold text-white text-3xl">Work Smart</p>
                    <p className="font-bold text-gray-500 text-2xl">Learn By Engaging</p>
                </div>
                <Footer></Footer>
             </div>
        </div>
    );
}

export default HeroSection;
