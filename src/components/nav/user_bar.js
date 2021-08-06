import userIcon from './imgs/default_portrait.jpg';

const UserBar = () => {
  return (
    <div className='user-bar'>
      <img height='50' width='50' alt='empty' src={userIcon} className='user-icon'></img>
      <div className='user-bar__block'>
        <span>User Name</span>
        <span>Edit Profile</span>
      </div>
    </div>
  )
}

export default UserBar;
