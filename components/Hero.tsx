import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[350px] bg-gradient-to-r from-[#008fb3] to-[#005c99] overflow-hidden">
        {/* Background Overlay Image Effect */}
        <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: "url('https://picsum.photos/seed/cctvcamera/1600/600')" }}
        ></div>

        {/* Yellow Tab */}
        <div className="absolute top-10 left-0 bg-[#d4d700] text-[#005c99] font-bold text-xs py-2 px-6 shadow-md z-20">
            RECIBA NUESTROS ANUNCIOS
        </div>

        {/* Black Tab */}
        <div className="absolute top-10 right-0 bg-[#222] text-white font-bold text-xs py-2 px-6 shadow-md z-20 cursor-pointer flex items-center gap-2">
            IR AL SITIO DE BIOPAD
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
             {/* Abstract Camera Lens Graphic */}
            <div className="w-32 h-32 rounded-full border-4 border-white/20 flex items-center justify-center mb-4 bg-black/20 backdrop-blur-sm">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-900 to-black shadow-inner flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-400 blur-sm"></div>
                </div>
            </div>

            <h2 className="text-5xl font-black text-white drop-shadow-md mb-6 uppercase tracking-widest">CCTV</h2>
            
            <button className="bg-white text-[#005c99] font-bold text-sm py-2 px-8 shadow-lg hover:bg-gray-100 transition-colors uppercase">
                Ver todos los productos del catálogo Siasa
            </button>
        </div>
    </div>
  );
};

export default Hero;