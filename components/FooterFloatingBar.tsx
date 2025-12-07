import React from 'react';

const FooterFloatingBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-40">
      <div className="flex justify-end items-end p-4">
        <div className="bg-[#0073e6] rounded-full p-2 flex items-center shadow-lg pointer-events-auto mr-20 mb-2">
          {/* Search Icon */}
          <button className="p-2 text-white hover:bg-white/20 rounded-full transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          
          {/* Tag Icon */}
          <button className="p-2 text-white hover:bg-white/20 rounded-full transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          </button>

          {/* Download Icon */}
          <button className="p-2 text-white hover:bg-white/20 rounded-full transition">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </button>

          {/* Divider */}
          <div className="h-6 w-px bg-white/30 mx-2"></div>

          {/* Text Links */}
          <button className="text-white font-bold text-xs px-3 hover:underline">Login</button>
          <button className="text-white font-bold text-xs px-3 hover:underline">Contacto</button>
        </div>
      </div>
    </div>
  );
};

export default FooterFloatingBar;