import { useState, useCallback, useEffect } from 'react';
import Promo from '../Promo/promo';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';



function App() {


  return (
    <div className="App">

      <div className="body">
        <div className="page">
          <Promo />
          <Projects />
          <AboutMe />
          <section className="skills">
            <div className="skill">
            <div className="skill__square"></div>
            <div className="skill__parallelogram"></div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
