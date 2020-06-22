import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
       <header className="showcase">
    <div className="content">
      <div className="title">
        Welcome to BlogLife
      </div>
      <div className="text">
        Take some time every evening to review and reflect on your day and write a personal blog entry.
      </div>
      <button className="enter-btn"><Link className="link-text" to ='/home'>Enter</Link></button>

    </div>
  </header>

{/* Services */}
  <section className="services">
    <div className="container grid-3 center">
      <div>
        <h3>Mindfulness</h3>
        <p>We live in a very fast-paced world, and mindfulness has never been more important in ensuring the best mental space.</p>
      </div>
      <div>
        <h3>Productivity</h3>
        <p>By exercising your mind in tracing most of your daily activities, your memory and focus in the present moment sharpens.</p>
      </div>
      <div>
        <h3>Reflection</h3>
        <p>Having your past entries available to you allows you to reflect and note progress, or note where you would like to make changes in your life.</p>
      </div>
    </div>
  </section>

{/* About */}
  <section className="about bg-light">
    <div className="container">
      <div className="grid-2">
        <div className="center">
          <i className="fas fa-laptop-code fa-10x"></i>
        </div>
        <div className="center">
          <h3 className="blk">About Us</h3>
          <p>Have you ever found yourself wondering- "what did I even do yesterday?" I definitely have. I wanted to build this application so that people can take a pause in their daily life every evening, and reflect on their day. What did you get done? What did you want to get done, but couldn't get around to? What did you eat? Did you get the workout you wanted to in? Answering these types of questions every evening helps you hold yourself accountable to the tasks you wish to accomplish daily. Try it!</p>
        </div>
      </div>
    </div>
  </section>

  <footer className="center bg-dark">
    <p>©2020 BlogLife Labs, Inc.</p>
  </footer>
    </div>
  );
};

export default Landing;