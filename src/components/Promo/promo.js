import Header from '../Header/Header';

function Promo() {
  return (
    <section className="promo">
      <Header />
      <div className="promo__container">
        <h2 className="promo__title">Привет, я Павел Черкасов.</h2>
        <h3 className="promo__subtitle">Этот сайт моё потрфолио.</h3>
        <h3 className="promo__subtitle promo__subtitle_delay">Хочешь посмотреть мои проекты?</h3>
        <div className="promo__button"><a className="promo__link" href="#projects">Жми сюда!</a></div>
      </div>
    </section>
  );
}
export default Promo;
