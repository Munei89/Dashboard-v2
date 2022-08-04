import React from 'react';
import { SwitchButton } from 'app/components/SwitchButton';
import ArrowDown from 'app/assets/svgs/ArrowDown';
import MenuItem from '@mui/material/MenuItem';
import moment from 'moment';

import { StyledHeader, StyledProfileMenu } from './styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '../Button/Button';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isProfileMenuOpen = Boolean(anchorEl);

  const day = moment().format('LL');

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Grid container spacing={1} sx={{ marginBottom: '80px' }}>
      <StyledHeader
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        item
        xs={12}
      >
        <div>Today: {day}</div>
        <Box>
          <SwitchButton>Live</SwitchButton>
          <Button
            id="basic-button"
            aria-controls={isProfileMenuOpen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isProfileMenuOpen ? 'true' : undefined}
            onClick={handleOpen}
            variant="text"
            sx={{
              marginTop: '-16px',
              fontSize: '14px',
            }}
            disableTouchRipple
            disableRipple
            endIcon={<ArrowDown />}
          >
            Welcome back, Ada
          </Button>

          <StyledProfileMenu
            id="basic-menu"
            anchorEl={anchorEl}
            open={isProfileMenuOpen}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{
              boxShadow: '0px',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </StyledProfileMenu>
          <Button
            id="lang-button"
            aria-controls={isProfileMenuOpen ? 'lang-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isProfileMenuOpen ? 'true' : undefined}
            onClick={handleOpen}
            variant="text"
            sx={{
              marginTop: '-16px',
              fontSize: '14px',
            }}
            disableTouchRipple
            disableRipple
            endIcon={<ArrowDown />}
          >
            EN
          </Button>

          <StyledProfileMenu
            id="lang-menu"
            anchorEl={anchorEl}
            open={isProfileMenuOpen}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'lang-button',
            }}
            sx={{
              boxShadow: '0px',
            }}
          >
            <MenuItem onClick={handleClose}>EN</MenuItem>
            <MenuItem onClick={handleClose}>ES</MenuItem>
          </StyledProfileMenu>
        </Box>
      </StyledHeader>
    </Grid>
  );
};

export default Header;
