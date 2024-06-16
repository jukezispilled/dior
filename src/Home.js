import React from 'react';
import './App.css';

function Home() {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center font-custom text-5xl md:text-8xl bg-cover bg-center"
      style={{ backgroundImage: "url('/Dior2.png')" }}
    >
      <div className='absolute top-[10%]'>
        DIOR DOGE
      </div>
      <a href="/products" className='absolute bottom-[15%] font-custom1 text-2xl md:text-3xl bg-white w-min px-3 py-2 border-2 border-black whitespace-nowrap'>
        SHOP NOW
      </a>
    </div>
  );
}

export default Home;