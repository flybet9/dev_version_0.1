import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const navigate = useNavigate();

  const navigateHome = ()=>{
    navigate('/');
  }
  const handleLogout = () => {
    localStorage.clear();
    navigate('/adminLogin');
  };
  const popMenu = () => {
    document.querySelector(".sidebar").classList.toggle("minisidebar");
  };

  return (
    <Fragment>
      <div className="header-container">
        <div className="popouticon fxr" onClick={popMenu}>
              <MenuIcon />
        </div>
        <div className="buttons-container">
          <button className="site-button button-primary" onClick={navigateHome}>Flybet9.com</button>
          <button className="logout-button button-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
