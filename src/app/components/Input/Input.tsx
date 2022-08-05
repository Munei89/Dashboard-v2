import React from 'react';
import { StyledInput } from './styles';

interface Props {
  [x: string]: any;
}

const Input = ({ ...props }: Props) => {
  return <StyledInput {...props} />;
};

export default Input;
