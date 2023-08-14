import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div>
      <ul>
        <li style={{ color: pathname === '/' && 'red' }}>
          <Link to="/">Dashboard</Link>
        </li>
        <li style={{ color: pathname === '/marketplace' && 'red' }}>
          <Link to="/marketplace">MarketPlace</Link>
        </li>
        <li style={{ color: pathname === '/portfolio' && 'red' }}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
