import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300">
      
      <div className="relative p-6 flex-grow flex items-center justify-center bg-white min-h-[250px]">
        {/* Editors Choice Badge */}
        {product.editorsChoice && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-red-600 text-white p-1 text-xs font-bold w-12 text-center leading-tight shadow-md">
                PC <br/> <span className="text-[9px] font-normal">PCMAG.COM</span>
                <div className="bg-yellow-400 text-red-700 text-[8px] uppercase py-0.5 mt-1">Editors' Choice</div>
            </div>
          </div>
        )}
        
        <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-48 object-contain mix-blend-multiply"
        />
      </div>

      <div className="w-full">
        {/* Blue Title Bar */}
        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-center py-4 px-2">
            <h3 className="text-xs font-bold uppercase tracking-wide leading-tight">
                {product.name}
            </h3>
        </div>

        {/* Brand Logo Section */}
        <div className="bg-white py-4 flex justify-center items-center border-t border-gray-100 h-16">
            {product.brand === 'Remo+' ? (
                 <div className="text-3xl text-gray-700 font-light flex items-center">
                    rem<span className="text-[#99cc33] font-normal">o</span><sup className="text-xl">+</sup>
                 </div>
            ) : (
                <div className="flex items-center gap-1 text-gray-500 font-bold text-xl">
                    <div className="w-6 h-6 rounded-full border-2 border-[#a50034] text-[#a50034] flex items-center justify-center text-xs font-black">LG</div>
                    <span className="text-gray-600">LG</span>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;