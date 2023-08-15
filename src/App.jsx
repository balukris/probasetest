import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppContext from './components/wallet/AppContext';

function App() {
  return (
    <Suspense>
      <AppContext>
        <Outlet />
      </AppContext>
    </Suspense>
  );
}

export default App;
