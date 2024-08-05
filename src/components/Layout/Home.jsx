import React from 'react';
import Carousel from '../Layout/Carousel';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-4xl font-bold text-center">Bestway College</h1>
      </header>
      
      <main className="mt-8">
        <section className="container mx-auto px-6">
          <Carousel />
        </section>
        
        <section className="container mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Campus" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-2xl font-bold mt-4">Our Campus</h2>
              <p className="mt-2 text-gray-600">Explore our beautiful campus located in the heart of the city.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Programs" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-2xl font-bold mt-4">Programs</h2>
              <p className="mt-2 text-gray-600">We offer a wide range of programs to suit your interests and career goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://images.pexels.com/photos/3195186/pexels-photo-3195186.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Faculty" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-2xl font-bold mt-4">Our Faculty</h2>
              <p className="mt-2 text-gray-600">Learn from the best with our experienced and dedicated faculty.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Bestway College. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
