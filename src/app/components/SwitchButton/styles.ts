import styled from 'styled-components/macro';
import Switch from '@mui/material/Switch';

export const StyledSwitchButton = styled(Switch)`
  &.MuiSwitch-root {
    width: 48px;
    height: 24px;
    padding: 0px;
    margin-left: 0px;
    margin-right: 10px;
    .Mui-checked + .MuiSwitch-track {
      background-color: #ef2c5a;
      opacity: 1;
    }
    .Mui-checked {
      color: #fff;
    }
  }
  .MuiSwitch-track {
    background: #000;
    opacity: 1;
    border-radius: 40px;
  }
  .MuiSwitch-thumb {
    margin-top: -7px;
    margin-left: -3px;
  }
  .Mui-checked {
    color: #ef2c5a;
    .MuiSwitch-thumb {
      margin-left: -3px;
    }
  }
`;

export const StyledSwitchWrapper = styled.div`
  color: #000;
  display: inline-flex;
  margin: 0px 0;

  p {
    margin-top: 8px;
    margin-bottom: -8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  div {
    flex-grow: 1;
  }
`;
