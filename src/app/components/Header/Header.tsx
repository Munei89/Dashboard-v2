import React from 'react';
import { SwitchButton } from 'app/components/SwitchButton';
import ArrowDown from 'app/assets/svgs/ArrowDown';
import MenuItem from '@mui/material/MenuItem';
import moment from 'moment';

import {
  StyledHeader,
  StyledProfileMenu,
  StyledDate,
  StyledProfileWrapper,
} from './styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '../Button/Button';
import Menu from 'app/assets/svgs/Menu';
import { useInjectReducer } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from 'app/pages/slice';
import { useDispatch } from 'react-redux';
import { LanguageSwitch } from 'app/components/LanguageSwitch';

interface Props {
  isMenuOpen: boolean;
}

const Header = ({ isMenuOpen }: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const dispatch = useDispatch();

  const day = moment().format('LL');

  return (
    <Grid container spacing={1} sx={{ marginBottom: ['40px', '40px', '80px'] }}>
      <StyledHeader
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        item
        xs={12}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          {' '}
          {!isMenuOpen && (
            <Box
              sx={{
                position: 'relative',
                marginRight: '16px',
              }}
              onClick={() => dispatch(actions.setDrawerOpen())}
            >
              <Menu />
            </Box>
          )}
          <StyledDate>Today: {day}</StyledDate>
        </Box>
        <StyledProfileWrapper
          sx={{
            xs: { display: 'flex', textAlign: 'right' },
            md: { display: 'flex', textAlign: 'right' },
          }}
        >
          <SwitchButton>Live</SwitchButton>
          <Button
            id="basic-button"
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
          <LanguageSwitch />
        </StyledProfileWrapper>
      </StyledHeader>
    </Grid>
  );
};

export default Header;
