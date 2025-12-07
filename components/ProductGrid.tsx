import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: "Videotimbre Videoportero RemoBell S RMBS1M",
    brand: "Remo+",
    image: "https://picsum.photos/seed/doorbell1/300/300", 
    brandLogo: "remo",
    editorsChoice: true
  },
  {
    id: 2,
    name: "Videotimbre Videoportero RemoBell W RMBW1M",
    brand: "Remo+",
    image: "https://picsum.photos/seed/doorbell2/300/300",
    brandLogo: "remo"
  },
  {
    id: 3,
    name: "LCV5300R-BN",
    brand: "LG",
    image: "https://picsum.photos/seed/cctvlg1/300/300",
    brandLogo: "lg"
  },
  {
    id: 4,
    name: "L2104-DN",
    brand: "LG",
    image: "https://picsum.photos/seed/cctvlg2/300/300",
    brandLogo: "lg"
  }
];

const ProductGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;