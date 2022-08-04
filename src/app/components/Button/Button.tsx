import React from 'react';
import { StyledButton } from './styles';

interface Props {
  children: React.ReactNode;
  [x: string]: any;
}

const Button = ({ children, ...rest }: Props) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
