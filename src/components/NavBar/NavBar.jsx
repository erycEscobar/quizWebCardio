import './NavBar.scss';
import Logo from './components/Logo/Logo';
import NavBarOptions from './components/NavBarOptions/NavBarOptions';
import { Options } from './Options';

const NavBar = () => {
    return (
        <div className='navBar_container'>
            <div className='navBar'>
                <Logo />
                <NavBarOptions optionList={ Options }/>
            </div>
        </div>
    )
}
export default NavBar