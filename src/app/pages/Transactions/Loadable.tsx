/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const Transactions = lazyLoad(
  () => import('./index'),
  module => module.Transactions,
);
