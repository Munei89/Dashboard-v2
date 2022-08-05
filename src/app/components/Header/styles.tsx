import styled from 'styled-components/macro';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';

export const StyledHeader = styled(Grid)`
  &.MuiGrid-root.MuiGrid-item {
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 16px;
    padding-left: 32px;
    padding-right: 32px;

    @media (max-width: 1280px) {
      padding-right: 0px;
    }
  }
`;

export const StyledProfileMenu = styled(Menu)`
  &.MuiMenu-paper {
    box-shadow: '0px';
  }
`;

export const StyledDate = styled.p`
  font-family: GeneralSans-Extralight, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #000;
  margin: 0;
`;

export const StyledProfileWrapper = styled(Box)`
  @media (max-width: 1280px) {
    text-align: end;
  }
`;
