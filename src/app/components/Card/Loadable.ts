/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const StyledCard = lazyLoad(
  () => import('./index'),
  module => module.StyledCard,
);
