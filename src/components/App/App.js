import Promo from '../Promo/promo';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contacts from '../Contacts/Contacts';
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

          <Title
            title={"Мои контакты"}
            name={"contacts"} />
          <Contacts />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
