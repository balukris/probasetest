import { useQuery } from '@tanstack/react-query';
import fetchDashboardData from './queries';

function Dashboard() {
  const { data, isLoading, isError, error } = useQuery(
    ['get', 'dashboard'],
    fetchDashboardData
  );

  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      {data?.data && data?.data?.map(({ name, id }) => <p key={id}>{name}</p>)}
      {isError && <p>{error?.message}</p>}
    </div>
  );
}

export default Dashboard;
