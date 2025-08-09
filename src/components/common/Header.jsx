import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'CONTACT US', href: '#contact' },
    { label: 'CAREERS', href: '#careers' }
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="w-full bg-[#4f46e5] relative z-40">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] xl:px-[80px]">
          <div className="flex justify-between items-center py-[26px] xl:py-[30px]">
            {/* Logo Section */}
            <div className="flex gap-[14px] xl:gap-[16px] justify-center items-center">
              <img 
                src="/images/img_layer_2.svg" 
                className="w-[44px] h-[42px] xl:w-[48px] xl:h-[46px]" 
                alt="AT Digital Logo" 
              />
              <img 
                src="/images/img_group_94.svg" 
                className="w-[166px] h-[48px] xl:w-[180px] xl:h-[52px]" 
                alt="AT Digital Text" 
              />
            </div>

            {/* Hamburger Menu Icon (Mobile only) */}
            <button 
              className="block lg:hidden p-2 text-white z-50 relative" 
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-[28px] xl:gap-[32px] justify-center items-center">
              {menuItems?.slice(1).map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  className="text-[14px] xl:text-[15px] font-inter font-medium leading-[17px] xl:leading-[18px] text-white hover:text-gray-200 transition-colors duration-200"
                >
                  {item?.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Menu Header with Close Button */}
          <div className="flex justify-between items-center p-6">
            <h2 className="text-lg font-medium text-gray-900">HOME</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-6 py-4">
            <div className="flex flex-col space-y-6">
              {menuItems?.slice(1).map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-lg font-medium text-gray-900 hover:text-[#4f46e5] transition-colors duration-200 py-3"
                  onClick={() => setMenuOpen(false)}
                >
                  {item?.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;