import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FiUser, FiLogOut, FiHome, FiPlus } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              RealEstate
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            {user && (
              <>
                <Link to="/add-property" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                  <FiPlus /> Add Property
                </Link>
                <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                  <FiUser /> Profile
                </Link>
              </>
            )}
            {user ? (
              <button onClick={handleLogout} className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                <FiLogOut /> Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn-secondary">Login</Link>
                <Link to="/register" className="btn-primary">Sign Up</Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</Link>
            {user && (
              <>
                <Link to="/add-property" className="block px-3 py-2 text-blue-600 hover:text-blue-700">Add Property</Link>
                <Link to="/profile" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Profile</Link>
                <button onClick={handleLogout} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;