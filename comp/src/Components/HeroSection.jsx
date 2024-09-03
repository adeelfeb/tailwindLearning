function HeroSection() {
    return (
        <div>
            {/* Optional heading for context */}
            {/* <h1>Hi there</h1> */}
            
            <div className="w-full h-auto">
                {/* Image for medium and larger screens */}
                <img 
                    className="w-full md:block hidden h-15" 
                    src="https://cdn.dribbble.com/userupload/3907753/file/original-e88012dca30ee7b68c62909d7d36d8b2.jpg?resize=1024x768" 
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
                <p>Presenting Our Robust System</p>
                <div>Line Here</div>
            </div>
        </div>
    );
}

export default HeroSection;
