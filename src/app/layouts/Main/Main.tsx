import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Grid from '@mui/material/Grid';

import { IMenuItem } from 'utils/constants';
import KlashaLogo from 'app/assets/svgs/KlashaLogo';
import Button from 'app/components/Button';

import { StyledDrawer } from './styles';

interface Props {
  children: React.ReactNode;
  sidebarMenuItems: IMenuItem[];
}

const Main = ({ children, sidebarMenuItems }: Props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <StyledDrawer variant="permanent" open={true}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              paddingBottom: '34px',
            }}
          >
            <KlashaLogo />

            {sidebarMenuItems.map(item => (
              <List key={item.id}>
                <ListItem>
                  <ListItemText primary={item.name} />
                </ListItem>
                {item.links.map(link => (
                  <ListItemButton key={link.id}>
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.name} />
                  </ListItemButton>
                ))}
              </List>
            ))}
          </Box>
          <Box>
            <Button>Hide panel</Button>
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
