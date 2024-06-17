import React from 'react';
import './App.css';

// Define a constant for the buy link
const buyLink = "https://pump.fun/CqCkCdk4wdL1dgBwQbrN9isUCz6zfBx4HkpL2Qgupump";

function Products() {
  return (
    <div className='min-h-screen w-screen relative'>
      <div className='w-screen text-center text-3xl md:text-5xl my-[10%] md:mt-[7%] md:mb-[5%] font-custom1'>Products</div>
      <a href="/" className="absolute -top-3 left-5 md:left-20 font-custom1 text-2xl md:text-3xl bg-white px-3 py-2 border-2 border-black whitespace-nowrap">
        <div className="text-black transition duration-200 ease-in-out">Back</div>
      </a>
      <div className='min-h-screen w-screen flex justify-center items-center'>
        <div className="font-custom1 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[7.5%] text-[20px] leading-none md:text-3xl">
          <div className="relative h-72 w-72 sm:h-96 sm:w-96 md:hover:scale-105 transition duration-200 ease-in-out overflow-hidden"
            style={{ backgroundImage: "url('/product1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-65"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="font-bold">Cashmere Turtle Neck</div>
              <div>7.5 SOL</div>
            </div>
            <a href={buyLink} className="absolute bottom-4 right-4 bg-white px-4 py-2 text-black hover:bg-gray-200 transition duration-200 ease-in-out">Buy</a>
          </div>
          <div className="relative h-72 w-72 sm:h-96 sm:w-96 md:hover:scale-105 transition duration-200 ease-in-out overflow-hidden"
            style={{ backgroundImage: "url('/product2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-65"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="font-bold">Pattern Bucket Hat</div>
              <div>3.5 SOL</div>
            </div>
            <a href={buyLink} className="absolute bottom-4 right-4 bg-white px-4 py-2 text-black hover:bg-gray-200 transition duration-200 ease-in-out">Buy</a>
          </div>
          <div className="relative h-72 w-72 sm:h-96 sm:w-96 md:hover:scale-105 transition duration-200 ease-in-out overflow-hidden"
            style={{ backgroundImage: "url('/product3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-65"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="font-bold">Shades</div>
              <div>2.5 SOL</div>
            </div>
            <a href={buyLink} className="absolute bottom-4 right-4 bg-white px-4 py-2 text-black hover:bg-gray-200 transition duration-200 ease-in-out">Buy</a>
          </div>
          <div className="relative h-72 w-72 sm:h-96 sm:w-96 md:hover:scale-105 transition duration-200 ease-in-out overflow-hidden"
            style={{ backgroundImage: "url('/product4.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-65"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="font-bold">Bling Collar</div>
              <div>5 SOL</div>
            </div>
            <a href={buyLink} className="absolute bottom-4 right-4 bg-white px-4 py-2 text-black hover:bg-gray-200 transition duration-200 ease-in-out">Buy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;