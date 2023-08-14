import PropTypes from 'prop-types';
import Sidebar from '../components/common/Sidebar';

function PrivateRoute({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
