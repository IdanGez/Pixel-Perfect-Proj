import React from 'react';
import { Link } from 'react-router-dom';
import myTeam from '../assets/imgs/imgs/myteam.png';
import Rectangle from '../assets/imgs/imgs/Rectangle.png';

export function AppHeader() {
  return (
    <div className="app-header-layout">
      <section className='app-header'>
        <div className='app-header-container flex'>
          <section className='app-logo'>
            <div className="my-team-container">
              <img src={myTeam} alt='' />
            </div>
          </section>
          <div className='nav-home'>
            home
          </div>
          <div className='nav-home'>
            about
          </div>
          <button className='contact-us-btn'><span className="contact-us-text">contact us</span></button>
        </div>
        <div className="hero-container flex">
          <div className="hero-title">Find the<br /> best<span className="hero-title-talent"> talent</span></div>
          <div className="hero-text-container ">
            <div className="rectangle"> <img src={Rectangle}/></div>
            <div className="hero-text">Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
