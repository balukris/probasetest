import { useContext } from 'react';
import { PetraWallet } from 'petra-plugin-wallet-adapter';
import PropTypes from 'prop-types';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import AutoConnectProvider from './AutoConnectProvider';
import AutoConnectContext from '../context/AutoConnectContext';

function WalletContextProvider({ children }) {
  const { autoConnect } = useContext(AutoConnectContext);

  const wallets = [new PetraWallet()];

  return (
    <AptosWalletAdapterProvider
      plugins={wallets}
      autoConnect={autoConnect}
      onError={(error) => {
        console.log('Custom error handling', error);
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
}

export default function AppContext({ children }) {
  return (
    <AutoConnectProvider>
      <WalletContextProvider>{children}</WalletContextProvider>
    </AutoConnectProvider>
  );
}

WalletContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};
