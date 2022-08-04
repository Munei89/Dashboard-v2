import styled from 'styled-components/macro';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';

export const StyledHeader = styled(Grid)`
  &.MuiGrid-root.MuiGrid-item {
    border-bottom: 1px solid red;
    padding-bottom: 16px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const StyledProfileMenu = styled(Menu)`
  &.MuiMenu-paper {
    box-shadow: '0px';
  }
`;
