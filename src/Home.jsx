import React, { useState } from 'react';
import './app.css';
import Navbar from './navbar';
import genphoto from './assets/genphoto.png'; 
import coffee from './assets/coffee.png';
import sunny from './assets/sunny.jpg';
import beauty from './assets/beauty.jpeg';
import twitterIcon from './assets/twitter.svg';
import instgramIcon from './assets/instagram.svg';
import linkedinIcon from './assets/linkedin.svg';
import githubIcon from './assets/github.svg';

const FORMSPREE_URL = 'https://formspree.io/f/xnjgzqol';

const Home = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('Sending...');

    const formData = new FormData(event.target);

    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    if (response.ok) {
      setFormStatus('Thanks! Your message has been sent.');
      event.target.reset();
    } else {
      const data = await response.json().catch(() => ({}));
      setFormStatus(
        data?.errors?.[0]?.message ||
          'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <>
    <Navbar />
    <section id='home'>
      <div className="heads">
        <div className="head-text">
          <h5>WELCOME TO MY WORLD</h5>
          <h1> <span>Hi, I'm</span> Innocent</h1>
          <h3>a Website developer</h3>
          <p>i am passionate about building responsive and user-focused website.
            i turn ideas into clean, functional and engaging web experiences
            that leaves a lasting impression and drives results.
          </p>
          <div className="link">
            <a href="https://github.com/inn-creat" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://x.com/Innocent_create" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="c:\Users\USER\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\470362D7A015E44538AC2C83B151E88664B35A2E\transfers\2026-11\WhatsApp Image 2026-03-13 at 2.16.01 PM.jpeg"
            target="_blank" rel="noopener noreferrer">
              <img src={instgramIcon} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/achilaonu-innocent-35514b243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="head-img">
          <img src={genphoto} alt="photo" />
        </div>
      </div>
    </section>
    <section id='portfolio'>
      <h3>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h3>
      <h1>My portfolio</h1>
      <div className="project">
        <a href="https://coffee-landing-page-eight-mu.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={coffee} alt="" />
        </a>
        <a href="https://inn-creat.github.io/agency/" target="_blank" rel="noopener noreferrer">
          <img src={sunny} alt="" />
        </a>
        <a href="https://cosmetic-design.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={beauty} alt="" />
        </a>
      </div>
    </section>
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <h2>Contact</h2>
          <p>Ready to bring your vision to life? Whether you have a project in mind or just want to talk creativity, I'd love to hear from you.</p>
          <div className="contact-detail">
            <div className="contact-icon">📞</div>
            <div>
              <strong>Phone</strong>
              <span>+234 0813 557 5874</span>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-icon">✉️</div>
            <div>
              <strong>Email</strong>
              <span>ugonnaachilaonu@gmail.com</span>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          action={FORMSPREE_URL}
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" name="subject" placeholder="How can I help?" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required />
          </div>
          <button className="form-submit" type="submit">Send Message →</button>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
      </div>
    </section>
    </>
  );
}

export default Home;