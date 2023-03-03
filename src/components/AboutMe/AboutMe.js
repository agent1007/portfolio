

function AboutMe() {


    return (
        <section className="about-me">
            <div className="about-me__profile">
                <div className="about-me__profile-info">
                    <p className="about-me__name">Павел</p>
                    <p className="about-me__profession">Веб-разработчик</p>
                    <p className="about-me__description">
                        Приветствую Вас на моем сайте. Я занимаюсь web-разработкой сайтов. Сайты верстаю адаптивные и кросбраузерные.
                        Добавляю нужный функционал, всплывающие окна, счетчики и т. д.
                        Есть идеи, как улучшить работу в сфере электроэнергетики с помощью веб-разработки, а именно визуально облегчить прокладку электросетей.
                        Читаю “React в действии”, Тиленс Томас Марк.
                        Эта книга охватывает практически все темы, связанные с разработкой на React.
                        И это не может не радовать. Изучение такой масштабной технологии, используя только одну книгу – это очень круто.
                    </p>
                    <nav>
                        <ul className="about-me__links">
                            <li><a className="about-me__link" href="https://vk.com/id106135958" target="_blank" rel="noreferrer">Вконтакте</a></li>
                            <li><a className="about-me__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="about-me__image"></div>
            </div>

        </section>
    );
}

export default AboutMe;