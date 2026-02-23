import { Link } from 'react-router-dom';
import { User, Code, MessageSquare, Home } from 'lucide-react'; 

export const Navbar = () => {
  return (
    <nav className="navbar glass-card">
      <div className="nav-logo gradient-text">Vishal.dev</div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <Home size={18} className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <User size={18} className="nav-icon" /> About
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <Code size={18} className="nav-icon" /> Projects
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <MessageSquare size={18} className="nav-icon" /> Contact
          </Link>
        </li>
      </ul>
      <Link to="/contact" className="contact-btn nav-hire-btn">
        Hire Me
      </Link>
    </nav>
  );
};