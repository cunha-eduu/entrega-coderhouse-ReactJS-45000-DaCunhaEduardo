import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
        return (
            <header className='header'>
                <nav>
                    <div>
                        <div>
                            <ul>
                            </ul>
                                <li className='header__nav__ul__li'>
                                    <a href='./index'>Home</a>
                                </li>
                                <li className='header__nav__ul__li'>
                                    <a href='./Productos'>Productos</a>
                                </li>
                                <li className='header__nav__ul__li'>
                                    <a href='./Contacto'>Contacto</a>
                                </li>
                                <li className='header__nav__ul__li'>
                                    <a href='./Nosotros'>Nosotros</a>
                                </li>                        
                                <li className='header__nav__ul__li'>
                                    <a href='./CartWidget'>{<CartWidget />}</a>
                                </li>                                                       
                        </div>
                    </div>
                </nav>  
            </header>
        )
}

export default NavBar;