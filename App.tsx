import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ChatWidget from './components/ChatWidget';
import FooterFloatingBar from './components/FooterFloatingBar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
      </main>

      {/* Floating Elements */}
      <FooterFloatingBar />
      <ChatWidget />
    </div>
  );
};

export default App;