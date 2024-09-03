// Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-indigo-200 w-full h-14 flex justify-between items-center px-4 md:px-8">
      <div className='text-2xl text-black font-bold'>
        <Link to="/" aria-label="Go to homepage">Watch To Work</Link>
      </div>
      <ul className="font-semibold hidden md:flex space-x-4">
        <li>
          <Link to="/" className="cursor-pointer" aria-label="Home">Home</Link>
        </li>
        <li>
          <Link to="/about" className="cursor-pointer" aria-label="About Us">About</Link>
        </li>
        <li>
          <Link to="/contact" className="cursor-pointer" aria-label="Contact Us">Contact Us</Link>
        </li>
      </ul>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hidden md:block">Login/Signup</button>
      </div>
      <div className='md:hidden'>
        <button aria-label="Toggle menu" className="text-4xl">&#8801;</button>
      </div>
    </nav>
  );
}

export default Header;
