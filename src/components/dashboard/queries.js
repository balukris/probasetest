import axios from 'axios';

const fetchDashboardData = async () => {
  const result = await axios.get('http://localhost:4000/dashboard');
  return result;
};

export default fetchDashboardData;
