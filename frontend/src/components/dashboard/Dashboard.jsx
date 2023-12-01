import { Fragment } from 'react';
import './Dashboard.css';

const DashboardContent = () => {
  const currentUser = JSON.parse(localStorage.getItem('current_user'));
  const { username, name, level, fix_limit, match_commission, max_my_share, min_company_share, session_commission } = currentUser;

  return (
    <Fragment>
      <div className='dashboard-content fxc'>
        <h3 className="welcome-heading">Welcome,</h3>
        <h1 className="username-heading">{name}</h1>
        <div className="info-container">
          <div className="min-title">User information</div>
          <div className="box-par fxr">
            <div className="box-sub fxc">Level: <span className='box-val'>{level}</span></div>
            <div className="box-sub fxc">Company Contact: <span className='box-val'>{name}</span><span className='box-val-sub'>{username}</span></div>
            <div className="box-sub fxc">Fix Limit:<span className='box-val'>{fix_limit}</span></div>
            <div className="box-sub fxc">My Maximum Share: <span className='box-val'>{max_my_share}</span></div>
            <div className="box-sub fxc">Minimum Company Share: <span className='box-val'>{min_company_share}</span></div>
            <div className="box-sub fxc">Match Commission: <span className='box-val'>{match_commission}</span></div>
            <div className="box-sub fxc">Session Commission: <span className='box-val'>{session_commission}</span></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardContent;
