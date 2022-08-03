import styled from 'styled-components/macro';
import Drawer from '@mui/material/Drawer';

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    padding: 48px 0 0 48px;
    width: 280px;
    background: #fffbf7;

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
