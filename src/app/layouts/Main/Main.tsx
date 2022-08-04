import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Grid';

import { IMenuItem } from 'utils/constants';
import KlashaLogo from 'app/assets/svgs/KlashaLogo';
import Button from 'app/components/Button';
import ArrowLeft from 'app/assets/svgs/ArrowLeft';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { StyledDrawer, StyledMenuHeading, StyledMenuItem } from './styles';

interface Props {
  children: React.ReactNode;
  sidebarMenuItems: IMenuItem[];
}

const Main = ({ children, sidebarMenuItems }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [isPanelHidden, setIsPanelHidden] = React.useState(false);
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  let drawerWidth;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const hidePanel = () => {
    setIsPanelHidden(!isPanelHidden);
  };

  if (!isLg) {
    drawerWidth = 107;
  } else {
    drawerWidth = 207;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledDrawer
        variant={isLg ? 'permanent' : 'temporary'}
        $panel={isPanelHidden}
        open={true}
        anchor="left"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box>
            <Box
              sx={{
                paddingBottom: '34px',
              }}
            >
              <KlashaLogo />
            </Box>

            {sidebarMenuItems.map(item => (
              <List key={item.id}>
                <StyledMenuHeading>
                  <ListItemText primary={item.name} />
                </StyledMenuHeading>
                {item.links.map(link => (
                  <StyledMenuItem
                    key={link.id}
                    disableTouchRipple
                    disableRipple
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.name} />
                  </StyledMenuItem>
                ))}
              </List>
            ))}
          </Box>
          <Box
            sx={{
              paddingTop: '40px',
            }}
          >
            <Button
              onClick={hidePanel}
              variant="outlined"
              startIcon={<ArrowLeft />}
            >
              Hide panel
            </Button>
          </Box>
        </Box>
      </StyledDrawer>
      <Box
        component="main"
        sx={{
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Main;
