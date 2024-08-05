import React from 'react';
import Navbar from '../Layout/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-12 pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Bestway College, our mission is to provide a holistic education that fosters academic excellence, critical thinking, and the development of ethical values. We are committed to preparing students for the challenges of the future by providing a supportive and inclusive learning environment.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <p className="text-gray-700">
            Established in 1985, Bestway College has a rich history of providing quality education to students from diverse backgrounds. Over the years, we have grown and evolved, adapting to the changing needs of society while maintaining our core values and commitment to excellence.
          </p>
        </section>

        <section className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">Programs and Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Undergraduate Programs" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold mt-4">Undergraduate Programs</h3>
              <p className="mt-2 text-gray-600">Explore our diverse undergraduate programs designed to equip you with the skills needed for your chosen career path.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Graduate Programs" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold mt-4">Graduate Programs</h3>
              <p className="mt-2 text-gray-600">Our graduate programs offer advanced knowledge and skills to help you excel in your field.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://images.pexels.com/photos/3195186/pexels-photo-3195186.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Online Courses" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold mt-4">Online Courses</h3>
              <p className="mt-2 text-gray-600">Access flexible online courses designed for busy professionals and students seeking to advance their knowledge from anywhere.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Faculty</h2>
          <p className="text-gray-700">
            Our faculty members are dedicated professionals with a passion for teaching and a commitment to student success. With diverse backgrounds and extensive experience, they provide valuable insights and mentorship to our students.
          </p>
        </section>

        <section className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">Campus Facilities</h2>
          <p className="text-gray-700">
            Bestway College boasts modern facilities designed to enhance the learning experience. Our campus includes state-of-the-art classrooms, laboratories, libraries, and recreational areas to support both academic and extracurricular activities.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            For more information about Bestway College, please reach out to us:
          </p>
          <p className="text-gray-700">
            Address: R08 Katangua Area, Ogbomosho, Oyo State, 210222<br />
            Phone: +2348166223968<br />
            Email: ogunladeadebayopeter@gmail.com
          </p>
        </section>
      </div>
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Bestway College. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
