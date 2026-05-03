const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RealEstate</h3>
            <p className="text-gray-400">Find your dream home with the best real estate platform.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/add-property" className="hover:text-white">Add Property</a></li>
              <li><a href="/profile" className="hover:text-white">Profile</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Houses</a></li>
              <li><a href="#" className="hover:text-white">Apartments</a></li>
              <li><a href="#" className="hover:text-white">Villas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Email: support@realestate.com</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RealEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;