import './App.css';
import React from 'react';
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Qualification,
  Services,
  Skills,
  Testimonials,
} from './components';
import ScrollToUp from './components/scrolltoup/ScrollToUp';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToUp />
    </>
  );
};
export default App;
