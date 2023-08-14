import React from 'react';

const components = {
  dashboard: React.lazy(() => import('../components/dashboard')),
  marketplace: React.lazy(() => import('../components/marketplace')),
  portfolio: React.lazy(() => import('../components/portfolio')),
  notfound: React.lazy(() => import('../components/common/NotFound')),
};

export default components;
