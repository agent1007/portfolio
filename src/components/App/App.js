import { useState, useCallback, useEffect } from 'react';
import Promo from '../Promo/promo';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';



function App() {


  return (
    <div className="App">

      <div className="body">
        <div className="page">
          <Promo />
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
