import React from 'react';
import { MainCard } from './styles';

export const StyledCard = ({ children, ...props }) => {
  return (
    <MainCard variant="outlined" {...props}>
      {children}
    </MainCard>
  );
};
