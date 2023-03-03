
import Promo from '../Promo/promo';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';



function App() {


  return (
    <div className="App">

      <div className="body">
        <div className="page">
          <Promo />

          <Title
            title={"Мои проекты"}
            name={"projects"} />
          <Projects />

          <Title
            title={"Обо мне"}
            name={"about-me"} />
          <AboutMe />
  
          <Title
            title={"Мои Скиллы"}
            name={"skills"} />
          <Skills />
        </div>

        <Title
            title={"Мои контакты"}
            name={"footer"} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
