import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AutoConnectContext from '../context/AutoConnectContext';

const AUTO_CONNECT_LOCAL_STORAGE_KEY = 'AptosWalletAutoConnect';

export default function AutoConnectProvider({ children }) {
  const [autoConnect, setAutoConnect] = useState(() => {
    try {
      const isAutoConnect = localStorage.getItem(
        AUTO_CONNECT_LOCAL_STORAGE_KEY
      );
      if (isAutoConnect) return JSON.parse(isAutoConnect);
    } catch (error) {
      if (typeof window !== 'undefined') {
        console.error(error);
      }
    }
    return null;
  });

  useEffect(() => {
    try {
      if (!autoConnect) {
        localStorage.removeItem(AUTO_CONNECT_LOCAL_STORAGE_KEY);
      } else {
        localStorage.setItem(
          AUTO_CONNECT_LOCAL_STORAGE_KEY,
          JSON.stringify(autoConnect)
        );
      }
    } catch (error) {
      if (typeof window !== 'undefined') {
        console.error(error);
      }
    }
  }, [autoConnect]);

  const autoConnectalue = useMemo(
    () => ({ autoConnect, setAutoConnect }),
    [autoConnect, setAutoConnect]
  );

  return (
    <AutoConnectContext.Provider value={autoConnectalue}>
      {children}
    </AutoConnectContext.Provider>
  );
}

AutoConnectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
