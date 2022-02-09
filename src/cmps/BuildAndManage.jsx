import React from 'react';
import PinkRectangle from '../assets/imgs/imgs/Pink-Rectangle.png';



export function BuildAndManage() {
  return (
    <div className="build-container-layout">
      <section className='build-container '>
        <div className="pink-rectangle"><img src={PinkRectangle} /></div>
        <div className="main-context flex">
          <div className="left-side">
            <div className="hero-title">
              Build & manage<br /> distributed teams<br /> like no one else.
            </div>
          </div>
          <div className="right-side">
            <div className="top-article">
              <div className="article-header">Experienced Individuals</div>
              <div className="article-info">Our network is made up of highly experienced professionals who are passionate about what they do.</div>
            </div>
            <div className="midle-article">
              <div className="article-header">Easy to Implement</div>
              <div className="article-info">Our processes have been refined over years of implementation meaning our teams always deliver.</div>
            </div>
            <div className="bottom-article">
              <div className="article-header">Enhanced Productivity</div>
              <div className="article-info">Our customized platform with in-built analytics helps you manage your distributed teams.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
