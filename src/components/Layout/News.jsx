import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

const News = () => {
  const newsArticles = [
    {
      title: 'New Science Lab Inauguration',
      date: 'August 1, 2024',
      description: 'We are excited to announce the inauguration of our new state-of-the-art science lab. Join us for the ribbon-cutting ceremony and a tour of the new facilities.',
      image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/news/science-lab-inauguration'
    },
    {
      title: 'Annual Sports Day',
      date: 'July 20, 2024',
      description: 'Our annual sports day was a great success with participation from students across all grades. Congratulations to all the winners!',
      image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/news/annual-sports-day'
    },
    {
      title: 'Guest Lecture by Dr. Jane Smith',
      date: 'July 15, 2024',
      description: 'Dr. Jane Smith, a renowned expert in environmental science, delivered an inspiring lecture on sustainable practices in modern agriculture.',
      image: 'https://images.pexels.com/photos/256524/pexels-photo-256524.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/news/guest-lecture-jane-smith'
    },
    {
      title: 'Students Win Regional Math Competition',
      date: 'June 25, 2024',
      description: 'Our talented students have won the regional math competition, showcasing their outstanding problem-solving skills and teamwork.',
      image: 'https://images.pexels.com/photos/256491/pexels-photo-256491.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/news/regional-math-competition'
    },
    {
      title: 'New Art Exhibition Opening',
      date: 'June 15, 2024',
      description: 'Come and explore the creativity of our students at the new art exhibition, featuring a variety of works in different mediums.',
      image: 'https://images.pexels.com/photos/256500/pexels-photo-256500.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/news/art-exhibition-opening'
    },
    {
      title: 'Parent-Teacher Conference Scheduled',
      date: 'June 10, 2024',
      description: 'Our next parent-teacher conference is scheduled for July 10th. This is an opportunity for parents to discuss their children\'s progress with teachers.',
      image: 'https://images.pexels.com/photos/256521/pexels-photo-256521.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/news/parent-teacher-conference'
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-12 pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">School News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="text-2xl font-bold mt-4">{article.title}</h2>
              <p className="text-gray-600">{article.date}</p>
              <p className="mt-2 text-gray-700">{article.description}</p>
              <Link to={article.link} className="text-blue-500 mt-4 block">
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Bestway College. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default News;
