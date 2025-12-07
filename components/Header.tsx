import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm font-sans">
      {/* Top Bar */}
      <div className="w-full bg-gray-100 border-b border-gray-200 text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center py-1">
          <div className="bg-gray-400 text-white px-3 py-1 font-bold text-[10px] rounded-sm uppercase tracking-wider">
            Vacantes
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-green-500 rounded-full p-1 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </div>
            <div className="flex flex-col text-right text-gray-600 font-medium">
                <span className="font-bold text-[#0066cc]">ÚNETE AL CANAL DE WHATSAPP</span>
            </div>
          </div>

          <div className="text-right text-gray-500 font-medium">
             <div className="text-[#005c99] font-bold">800.227.4272 / 800.527.4272 / 800.727.4272 / 55.5264.2272</div>
             <div className="text-[#005c99]">SIASA Latam (305) 479.2303 - marketing@siasa.com</div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center gap-3">
            {/* Mock Logo */}
            <div className="bg-gradient-to-br from-[#004d80] to-[#0073e6] text-white p-2 rounded shadow-md">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h10" />
                    <path d="M9 4v16" />
                    <path d="M3 9l3 3-3 3" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" transform="translate(4,0)"/>
                 </svg>
            </div>
            <div>
                <h1 className="text-2xl font-black text-[#004d80] leading-none tracking-tighter">TECNOLOGÍA <br/> DE SEGURIDAD</h1>
                <p className="text-[#004d80] text-sm font-bold tracking-widest uppercase">Distribuidor Mayorista</p>
            </div>
        </div>

        <nav className="mt-4 lg:mt-0">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-bold text-gray-300">
            <li><a href="#" className="text-gray-400 hover:text-[#0073e6]">Inicio</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#0073e6]">Quiénes Somos</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#0073e6]">Novedades</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#0073e6]">Promociones</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#0073e6]">Noticias</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#0073e6]">Artículos Técnicos</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#0073e6]">Sugerencias</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#0073e6]">Bolsa de Trabajo</a></li>
          </ul>
        </nav>
      </div>

      {/* Blue Sub Nav */}
      <div className="w-full bg-[#66b3ff] text-white text-[11px] font-bold">
        <div className="container mx-auto px-4 py-2">
            <ul className="flex flex-wrap justify-center lg:justify-between items-center gap-4 uppercase">
                <li className="cursor-pointer hover:underline">Control de asistencias</li>
                <li className="cursor-pointer hover:underline">Control de accesos</li>
                <li className="cursor-pointer hover:underline">Torniquetes</li>
                <li className="cursor-pointer hover:underline">Biometría</li>
                <li className="cursor-pointer hover:underline">Rondín de vigilancia</li>
                <li className="cursor-pointer hover:underline">Identificación digital</li>
                <li className="cursor-pointer hover:underline">CCTV</li>
                <li className="cursor-pointer hover:underline">Relojes checadores</li>
                <li className="cursor-pointer hover:underline">Software</li>
            </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;