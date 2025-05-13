import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header-section ${headerActive ? 'header-active' : ''}`}>
     <div className="container">
       <div className="header-wrapper">
        
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img
                src="/frontend/images/logo/logo.png" // Update this path as per your project
                alt="logo"
                className="h-10"
              />
            </Link>
          </div>
        <ul className={`menu ${menuActive ? 'active' : ''}`}>
          <li className="header-button">
            <Link to="/">Home</Link>
          </li>
            <li className="header-button">
              <Link to="/movie-grid">
                Movie Grid
              </Link>
            </li>
          <li className="header-button">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="header-button">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="header-button">
            <Link to="/blog">Blog</Link>
          </li>
          
        </ul>
        {/* Sign In Button */}
          <a
            href="/login"
            className="signupRegiste"
          >
            <i className="fas fa-user"></i>
            <span>Sign in</span>
          </a>
          <div className={`header-bar ${menuActive ? 'active' : ''} `} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
     </div>
    </header>
  );
};

export default Header;
