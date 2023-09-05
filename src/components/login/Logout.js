import { useNavigate } from 'react-router-dom';

const Logout = ({ setCurrUser }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      <input type="button" value="Logout" onClick={handleClick} />
    </div>
  );
};
export default Logout;