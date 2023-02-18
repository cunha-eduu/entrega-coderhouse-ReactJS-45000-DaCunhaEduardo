import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
        return (
            <header className='header'>
                <nav>
                    <div>
                        <div>
                            <ul>
                            </ul>
                                <li className='header__nav__ul__li'>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li className='header__nav__ul__li'>
                                    <NavLink to='/category/estetoscopios'>Estetoscopios</NavLink>
                                </li>
                                <li className='header__nav__ul__li'>
                                    <NavLink to='/category/ambos'>Ambos</NavLink>
                                </li>
                                <li className='header__nav__ul__li'>
                                    <NavLink to='/category/guardapolvos'>Guardapolvos</NavLink>
                                </li>                        
                                <li className='header__nav__ul__li'>
                                    <NavLink to='/category/saturometros'>Saturometro</NavLink>
                                </li>                        
                                <li className='header__nav__ul__li'>
                                    <NavLink to='./CartWidget'>{<CartWidget />}</NavLink>
                                </li>                                                       
                        </div>
                    </div>
                </nav>  
            </header>
        )
}

export default NavBar;