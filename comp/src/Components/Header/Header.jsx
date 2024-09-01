// Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-indigo-200 w-full h-14 flex justify-between items-center px-4 md:px-8">
      <div>Watch To Work</div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login/Signup</button>
      </div>
    </nav>
  );
}

export default Header;
