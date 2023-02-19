import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
        return (
            <header className='header'>
                <nav>
                    <div className='header__logo__cointainer'>
                            <ul className='header__nav__ul'>
                            <img className='header__logo' src="/logo.png" alt="LOGO" />
                                <li className='header__nav__ul__li'>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li className='header__nav__ul__li'>
                                    <NavLink to='/category/estetoscopios'>Estetoscopios</NavLink>
                                </li>
                                <li className='header__nav__ul__li'>
                                    <NavLink to='/category/tensiometros'>Tensiómetro</NavLink>
                                </li>
                                <li className='header__nav__ul__li'>
                                    <NavLink to='/category/indumentaria'>Indumentaria</NavLink>
                                </li>                        
                                <li className='header__nav__ul__li'>
                                    <NavLink to='/category/saturometros'>Saturometro</NavLink>
                                </li>                        
                                <li className='header__nav__ul__li'>
                                    <NavLink to='/cart'>{<CartWidget />}</NavLink>
                                </li>
                            </ul>                                                       
                    </div>
                </nav>  
            </header>
        )
}

export default NavBar;