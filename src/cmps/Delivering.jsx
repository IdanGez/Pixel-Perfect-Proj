import React from 'react';
import Avatar1 from '../assets/imgs/avatars/avatar-kady.jpg';
import Avatar2 from '../assets/imgs/avatars/avatar-aiysha.jpg';
import Avatar3 from '../assets/imgs/avatars/avatar-arthur.jpg';
import Gershaim from '../assets/imgs/imgs/gershaim.png';

export function Delivering() {
  return (
    <div className="delivering-layout">
      <section className='delivering-container'>
        <div className="delivering-hero-title">Delivering real results for top <br />
          companies. Some of our <span className="success-stories">success stories.</span>
        </div>
        <div className="stories-container flex-center">
          <div className="story-card left-card">
            <div className="gershaim"></div>
            <div className="story-text left-card">
              <br />
              <br />
              “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
            </div>
            <div className="story-teller-fullname">
              Kady Baker
            </div>
            <div className="story-teller-job">
              Product Manager at Bookmark
            </div>
            <div className="avatar-img-container"><img src={Avatar1} alt="" /></div>
          </div>
          <div className="story-card  midle-card">
            <div className="gershaim"></div>

            <div className="story-text midle-card">
              <br />
              <br />
              “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”          </div>
            <div className="story-teller-fullname">
              Aiysha Reese
            </div>
            <div className="story-teller-job">
              Founder of Manage
            </div>
            <div className="avatar-img-container"><img src={Avatar2} alt="" /></div>
          </div>
          <div className="story-card right-card">
            <div className="gershaim"></div>


            <div className="story-text right-card">
              <br />
              <br />
              “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”          </div>
            <div className="story-teller-fullname">
              Arthur Clarke
            </div>
            <div className="story-teller-job">
              Co-founder of MyPhysio
            </div>
            <div className="avatar-img-container"><img src={Avatar3} alt="" /></div>
          </div>
        </div>

      </section >
    </div>
  );
}
