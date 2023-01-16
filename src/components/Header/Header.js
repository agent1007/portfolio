import { Link  } from 'react-router-dom';
import logo from '../../images/icon-header.png';

function Header() {

    

    return (
        <section className="header">
            <img className="header__logo" src={logo} alt="Картинка"/>
            <div className="header__container">
                <Link to="/" className="header__title">Проекты</Link>
                <Link to="/testing" className="header__title">Обо мне</Link>
                <Link to="/interesting" className="header__title">Скиллы</Link>
                
            </div>
        </section>
    );
}

export default Header;