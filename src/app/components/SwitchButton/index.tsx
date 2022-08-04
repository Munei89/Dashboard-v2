import React from 'react';
import { StyledSwitchButton, StyledSwitchWrapper } from './styles';

interface Props {
  children?: React.ReactNode;
}

export const SwitchButton = ({ children }: Props) => {
  return (
    <StyledSwitchWrapper>
      <StyledSwitchButton /> {children}
    </StyledSwitchWrapper>
  );
};
