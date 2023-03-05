
import Promo from '../Promo/promo';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';

import email from '../../images/email.svg';
import github from '../../images/github.svg';
import mobile from '../../images/mobile.png';
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';

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
          <section className="contacts">
            <div className="contacts__container">
              <img className="contacts__image" src={mobile} alt="Картинка" />
              <div className="contacts__title">Телефон:</div>
              <div className="contacts__text">8-(911)-917-74-43</div>
            </div>
            <div className="contacts__container">
              <img className="contacts__image" src={email} alt="Картинка" />
              <div className="contacts__title">Email:</div>
              <div className="contacts__text">pavelcherkasov@mail.ru</div>
            </div>
            <div className="contacts__container">
              <img className="contacts__image" src={github} alt="Картинка" />
              <div className="contacts__title">GitHub:</div>
              <a className="contacts__text" href="https://github.com/agent1007" target="_blank" rel="noreferrer">https://github.com/agent1007</a>
            </div>
            <div className="contacts__container">
              <img className="contacts__image" src={telegram} alt="Картинка" />
              <div className="contacts__title">Телеграм:</div>
              <a className="contacts__text" href="https://t.me/agent1177" target="_blank" rel="noreferrer">https://t.me/agent1177</a>
            </div>
            <div className="contacts__container">
              <img className="contacts__image" src={vk} alt="Картинка" />
              <div className="contacts__title">Вконтакте</div>
              <a className="contacts__text" href="https://vk.com/id106135958" target="_blank" rel="noreferrer">https://vk.com/id106135958</a>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
