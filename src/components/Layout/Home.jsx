import React from 'react';
import Carousel from '../Layout/Carousel';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-4xl font-bold text-center">Bestway College</h1>
      </header>

      <main className="mt-8">
        {/* Carousel Section */}
        <section className="container mx-auto px-6">
          <Carousel />
        </section>

        {/* About Us Section */}
        <section className="about-us py-12 bg-gray-100">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center">About Us</h2>
    <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img 
          src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Bestway College Building" 
          className="w-full h-64 object-cover rounded-lg shadow-lg" 
        />
      </div>
      <div className="md:w-1/2 md:pl-6">
        <p className="text-gray-700 mb-4">
          Bestway College is dedicated to fostering an environment of academic excellence and personal growth. Founded with the vision of creating a nurturing educational environment, we strive to empower our students to excel in their chosen fields.
        </p>
        <h3 className="text-2xl font-bold mt-4">Our Mission</h3>
        <p className="mt-2 text-gray-600">
          Our mission is to provide high-quality education that is both comprehensive and innovative, preparing students for the challenges of the future. We aim to cultivate a passion for learning, critical thinking, and leadership skills.
        </p>
        <h3 className="text-2xl font-bold mt-4">Our Programs</h3>
        <p className="mt-2 text-gray-600">
          We offer a range of undergraduate and graduate programs designed to meet the needs of our diverse student body. From business and engineering to arts and sciences, our programs are designed to equip students with the knowledge and skills necessary for success.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Programs and Courses Section */}
        <section className="programs py-12 bg-gray-100">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center">Programs and Courses</h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img 
          src="https://images.pexels.com/photos/5212340/pexels-photo-5212340.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Undergraduate Programs" 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <h3 className="text-2xl font-bold mt-4">Undergraduate Programs</h3>
        <p className="mt-2 text-gray-600">Explore our diverse undergraduate programs designed to equip you with the skills needed for your chosen career path.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img 
          src="https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Graduate Programs" 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <h3 className="text-2xl font-bold mt-4">Graduate Programs</h3>
        <p className="mt-2 text-gray-600">Our graduate programs offer advanced knowledge and skills to help you excel in your field.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img 
          src="https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Online Courses" 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <h3 className="text-2xl font-bold mt-4">Online Courses</h3>
        <p className="mt-2 text-gray-600">Access flexible online courses designed for busy professionals and students seeking to advance their knowledge from anywhere.</p>
      </div>
    </div>
  </div>
</section>


        {/* Faculty and Staff Section */}
        <section className="faculty py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center">Our Faculty and Staff</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Faculty Member" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-xl font-bold mt-4">Dr. Jane Doe</h3>
                <p className="mt-2 text-gray-600">Head of Department of Computer Science</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Faculty Member" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-xl font-bold mt-4">Prof. John Smith</h3>
                <p className="mt-2 text-gray-600">Professor of History</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Faculty Member" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-xl font-bold mt-4">Ms. Emily Johnson</h3>
                <p className="mt-2 text-gray-600">Admissions Coordinator</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials and Success Stories Section */}
        <section className="testimonials py-12 bg-gray-100">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center">Testimonials and Success Stories</h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <img 
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Jane Doe" 
          className="w-16 h-16 rounded-full object-cover mr-4" 
        />
        <div>
          <h3 className="text-2xl font-bold">Jane Doe</h3>
          <p className="mt-2 text-gray-600">“Bestway College has been instrumental in shaping my career. The faculty is top-notch, and the programs are designed to provide real-world experience.”</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <img 
          src="https://images.pexels.com/photos/3775550/pexels-photo-3775550.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="John Smith" 
          className="w-16 h-16 rounded-full object-cover mr-4" 
        />
        <div>
          <h3 className="text-2xl font-bold">John Smith</h3>
          <p className="mt-2 text-gray-600">“The diverse programs and supportive environment at Bestway College have been pivotal to my academic and professional growth.”</p>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Events and News Section */}
        <section className="events-news py-12">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center">Events and News</h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img 
          src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Upcoming Open House" 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <h3 className="text-xl font-bold mt-4">Upcoming Open House</h3>
        <p className="mt-2 text-gray-600">Join us for an open house on September 20th. Learn more about our programs and meet our faculty.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img 
          src="https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Annual Science Fair" 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <h3 className="text-xl font-bold mt-4">Annual Science Fair</h3>
        <p className="mt-2 text-gray-600">Our annual science fair will be held on October 15th. Come and see innovative projects from our students.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img 
          src="https://images.pexels.com/photos/3609360/pexels-photo-3609360.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="New Campus Facilities" 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <h3 className="text-xl font-bold mt-4">New Campus Facilities</h3>
        <p className="mt-2 text-gray-600">We are excited to announce the opening of new campus facilities, including a state-of-the-art library and science labs.</p>
      </div>
    </div>
  </div>
</section>


        {/* Photo Gallery Section */}
        <section className="photo-gallery py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center">Photo Gallery</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://images.pexels.com/photos/3195186/pexels-photo-3195186.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery" className="w-full h-48 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="virtual-tour py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center">Virtual Tour</h2>
            <div className="mt-6">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Virtual Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="contact py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center">Contact Us</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">Address</h3>
                <p className="mt-2 text-gray-600">R08 Katangua Area Ogbomosho Oyo State, Nigeria</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">Phone</h3>
                <p className="mt-2 text-gray-600">+2348166223968</p>
                <h3 className="text-2xl font-bold mt-4">Email</h3>
                <p className="mt-2 text-gray-600">ogunladeadebayopeter@gmail.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="faqs py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-xl font-bold">What programs do you offer?</h3>
                <p className="mt-2 text-gray-600">We offer a range of undergraduate and graduate programs in various fields, including Science, Arts, Business, and Engineering.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-xl font-bold">How can I apply?</h3>
                <p className="mt-2 text-gray-600">You can apply through our online application portal. Please visit the Admissions section of our website for more details.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-xl font-bold">What are the tuition fees?</h3>
                <p className="mt-2 text-gray-600">Tuition fees vary depending on the program and your residency status. Please refer to the Fees section on our website for detailed information.</p>
              </div>
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
