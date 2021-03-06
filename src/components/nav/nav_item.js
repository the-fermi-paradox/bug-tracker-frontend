import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ListItem = ({name}) => {
  return (
    <li className='nav-list__item'>
      <FontAwesomeIcon icon={faCoffee}/>
      <span className='nav-list__text'>{name}</span>
    </li>
  );
};

export default ListItem;
