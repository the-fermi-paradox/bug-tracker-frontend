import ListItem from './nav_item';

const NavList = () => {
  return (
    <ul className='nav-list'>
      <ListItem name='Home'/>
      <ListItem name='My Tasks'/>
      <ListItem name='Recent'/>
    </ul>
  )
};

export default NavList;
