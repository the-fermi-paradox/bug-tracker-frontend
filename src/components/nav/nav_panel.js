import UserBar from './user_bar'; 
import HeaderBar from './header_bar';
import NavList from './nav_list';

const NavPanel = () => {
  return (
    <nav className='nav-panel'>
      <HeaderBar/>
      <UserBar/> 
      <NavList/>
    </nav>
  );
}

export default NavPanel;
