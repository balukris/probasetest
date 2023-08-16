import { useQuery } from '@tanstack/react-query';
import fetchMarketplacedata from './queries';

function Marketplace() {
  const { data, isError, error } = useQuery(
    ['get', 'marketplace'],
    fetchMarketplacedata,
    {
      enabled: true,
    }
  );

  return (
    <div>
      {data?.data &&
        data?.data?.map(({ label, id }) => <p key={id}>{label}</p>)}
      {isError && <p>{error?.message}</p>}
      <h1>Market Place</h1>
    </div>
  );
}

export default Marketplace;
