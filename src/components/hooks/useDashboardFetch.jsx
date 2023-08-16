import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchDashboardData = async () => {
  const result = await axios.get('http://localhost:4000/dashboard');
  return result;
};

const useDashboardFetch = (params) => {
  return useQuery(['get', 'dashboard'], fetchDashboardData, {
    ...params,
  });
};

export default useDashboardFetch;
