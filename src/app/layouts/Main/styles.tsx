import styled from 'styled-components/macro';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';

export const StyledDrawer = styled(Drawer)<{ $panel: boolean }>`
  .MuiDrawer-paper {
    padding: 48px 0 0 48px;
    background: #fffbf7;
    border: 0px;

    .MuiList-root {
      padding-top: 0;
      padding-bottom: 0;
    }

    .MuiListItem-root,
    .MuiListItemButton-root {
      padding-left: 0;
      padding-bottom: 12px;
    }
    .MuiListItemIcon-root {
      min-width: 36px;
    }
  }
`;

export const StyledMenuHeading = styled(ListItem)`
  &.MuiListItem-root {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #a3a3a3;
    padding-bottom: 8px;
  }
`;

export const StyledMenuItem = styled(ListItemButton)`
  &.MuiListItemButton-root {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;

    &:hover {
      color: #ef2c5a;
      background-color: transparent;

      svg {
        path {
          stroke: #ef2c5a;
        }
      }
    }
  }
`;

export const StyledHeader = styled(Grid)`
  &.MuiGrid-root {
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
