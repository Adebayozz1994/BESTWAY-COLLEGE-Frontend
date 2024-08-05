import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close'; 

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const location = useLocation();

  return (
    <>
      <nav className="bg-gradient-to-r from-yellow-400 to-green-500 text-white shadow-lg flex justify-between items-center lg:px-10 lg:py-5 fixed top-0 w-full z-50 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link to="/home">
            <h1 className="text-3xl font-bold text-white hover:text-yellow-200 transition-colors duration-300">BESTWAY COLLEGE</h1>
          </Link>
          <div className="lg:hidden">
            <Button
              aria-label="menu"
              onClick={toggleMobileMenu}
              className="text-white"
            >
              <MenuIcon />
            </Button>
          </div>
        </div>

        <div className={`flex flex-col lg:flex-row lg:items-center lg:gap-5 ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <Button
            id="home-button"
            className={`nav-button ${location.pathname === '/home' ? 'bg-white text-green-600' : 'text-white hover:bg-yellow-300'} transition-all duration-300`}
            component={Link}
            to="/home"
          >
            Home
          </Button>
          <Button
            id="portal-button"
            className={`nav-button ${location.pathname.startsWith('/user') || location.pathname.startsWith('/admin') ? 'bg-white text-green-600' : 'text-white hover:bg-yellow-300'} transition-all duration-300`}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleMenuClick}
          >
            E-Portal
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "portal-button",
            }}
            className="shadow-lg"
          >
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/admin/login"
            >
              Staff
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/user/login"
            >
              Student
            </MenuItem>
          </Menu>
          <Button
            id="about-button"
            className={`nav-button ${location.pathname === '/about' ? 'bg-white text-green-600' : 'text-white hover:bg-yellow-300'} transition-all duration-300`}
            component={Link}
            to="/about"
          >
            About
          </Button>
          <Button
            id="news-button"
            className={`nav-button ${location.pathname === '/News' ? 'bg-white text-green-600' : 'text-white hover:bg-yellow-300'} transition-all duration-300`}
            component={Link}
            to="/news"
          >
            News
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 bg-white text-black w-4/5 h-full shadow-lg z-50 lg:hidden">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-3xl font-bold">BESTWAY COLLEGE</h1>
            <Button
              aria-label="close menu"
              onClick={toggleMobileMenu}
              className="text-black"
            >
              <CloseIcon />
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <Button
              id="home-button"
              className={`nav-button ${location.pathname === '/home' ? 'bg-green-600 text-white' : 'text-black hover:bg-yellow-300'} transition-all duration-300`}
              component={Link}
              to="/home"
              onClick={toggleMobileMenu}
            >
              Home
            </Button>
            <Button
              id="portal-button"
              className={`nav-button ${location.pathname.startsWith('/user') || location.pathname.startsWith('/admin') ? 'bg-green-600 text-white' : 'text-black hover:bg-yellow-300'} transition-all duration-300`}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleMenuClick}
            >
              E-Portal
            </Button>
            <Button
              id="about-button"
              className={`nav-button ${location.pathname === '/about' ? 'bg-green-600 text-white' : 'text-black hover:bg-yellow-300'} transition-all duration-300`}
              component={Link}
              to="/about"
              onClick={toggleMobileMenu}
            >
              About
            </Button>
            <Button
              id="news-button"
              className={`nav-button ${location.pathname === '/News' ? 'bg-green-600 text-white' : 'text-black hover:bg-yellow-300'} transition-all duration-300`}
              component={Link}
              to="/news"
              onClick={toggleMobileMenu}
            >
              News
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
