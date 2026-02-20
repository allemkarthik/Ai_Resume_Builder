const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 fixed z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Custom Logo */}
          <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center font-bold text-lg">
            <img src="/logo.svg"/>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
            AI Resume Generator
          </h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <li className="hover:text-black cursor-pointer transition">
              Cover Letter
            </li>
            <li className="hover:text-black cursor-pointer transition">
              ATS Score
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Cold Email
            </li>

            {/* Login Button */}
            <li>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
