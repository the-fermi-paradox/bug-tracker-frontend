import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const HeaderBar = () => {
  return (
    <div className='nav__header'>
      <span className='nav__title'>BugBegone</span>
      <FontAwesomeIcon icon={faCoffee}/>
    </div>
  );
}

export default HeaderBar;
