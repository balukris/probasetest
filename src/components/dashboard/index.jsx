import { useWallet } from '@aptos-labs/wallet-adapter-react';
import useDashboardFetch from '../hooks/useDashboardFetch';
import WalletButtons from '../wallet/walletButton';

function Dashboard() {
  const {
    connected,
    disconnect,
    account,
    network,
    // wallet,
    // signAndSubmitTransaction,
    // signAndSubmitBCSTransaction,
    // signTransaction,
    // signMessage,
    // signMessageAndVerify,
  } = useWallet();

  const { data, isError, error, refetch } = useDashboardFetch({
    enabled: false,
  });

  return (
    <div>
      <h1>Dashboard</h1>
      {data?.data && data?.data?.map(({ name, id }) => <p key={id}>{name}</p>)}
      {isError && <p>{error?.message}</p>}
      <WalletButtons />
      <h1>Account : {account ? JSON.stringify(account) : ''}</h1>
      <h1>Network:{network ? JSON.stringify(network) : ''}</h1>
      {connected ? (
        <button onClick={disconnect} disabled={!connected} type="button">
          Disconnect
        </button>
      ) : null}
      <button onClick={refetch} type="button">
        Fetch Data
      </button>
    </div>
  );
}

export default Dashboard;
