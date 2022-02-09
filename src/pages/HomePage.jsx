import React from 'react';
import { BuildAndManage } from '../cmps/BuildAndManage.jsx'
import { Delivering } from '../cmps/Delivering.jsx'
import { ContactUs } from '../cmps/ContactUs.jsx'
import { AppHeader } from '../cmps/AppHeader.jsx';
import { AppFooter } from '../cmps/AppFooter.jsx';
export function HomePage() {


  return (
    <section className='home-page'>
      <AppHeader />
      <BuildAndManage />
      <Delivering />
      <ContactUs />
      <AppFooter />
    </section>
  );
}
