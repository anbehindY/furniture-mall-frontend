import { NavLink } from 'react-router-dom';
import Logout from '../../login/Logout';
import logo from './logo.png';

const LeftSidebar = (data) => {
  const { setCurrUser } = data;
  return (
    <div className="leftsidebar-container">
      <div className="upper-part">
        <div className="app-logo">
          <div className="logo-image">
            <img src={logo} alt="Application Logo" />
            <h3>Dashboard</h3>
          </div>
        </div>
      </div>
      <div className="left-content">
        <ul className="action-list">
          <li className="item">
            <NavLink to="/furnitures" className="menubar-link">
              <span>Furnitures</span>
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/my-appointments" className="menubar-link">
              <span> My Appointments</span>
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/new-appointment" className="menubar-link">
              <span>Add Appointment</span>
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/new-furniture" className="menubar-link">
              <span>Add Furniture</span>
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/delete-furniture" className="menubar-link">
              <span>Delete Furniture</span>
            </NavLink>
          </li>
        </ul>
        <ul className="category-list">
          <li className="item">
            <Logout setCurrUser={setCurrUser} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LeftSidebar;
