import UserBar from './user_bar'; 
import HeaderBar from './header_bar';
import NavList from './nav_list';

const NavPanel = () => {
  return (
    <nav>
      <HeaderBar/>
      <UserBar/> 
      <NavList/>
    </nav>
  );
}

export default NavPanel;
