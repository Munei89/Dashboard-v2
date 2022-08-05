import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Grid';

import KlashaLogo from 'app/assets/svgs/KlashaLogo';
import Button from 'app/components/Button';
import ArrowLeft from 'app/assets/svgs/ArrowLeft';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Header from 'app/components/Header';

import { StyledDrawer, StyledMenuHeading, StyledMenuItem } from './styles';
import { useInjectReducer } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from 'app/pages/slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PieChart from 'app/assets/svgs/PieChart';
import Walllet from 'app/assets/svgs/Wallet';
import Payments from 'app/assets/svgs/Payments';
import Chart from 'app/assets/svgs/Chart';
import Exchange from 'app/assets/svgs/Exchange';
import Radar from 'app/assets/svgs/Radar';
import ShoppingCart from 'app/assets/svgs/ShoppingCart';
import PaymentLink from 'app/assets/svgs/PaymentLink';
import Transactions from 'app/assets/svgs/Transactions';

import { useTranslation } from 'react-i18next';
import { messages } from 'app/pages/HomePage/messeges';

interface Props {
  children: React.ReactNode;
  sidebarMenuItems: IMenuItem[];
  drawerOpen: boolean;
  onCloseDrawer?: () => void;
}

interface ILinks {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface IMenuItem {
  id: number;
  name: string;
  links: ILinks[];
}

const Main = ({ children, drawerOpen }: Props) => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = React.useState('');
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const dispatch = useDispatch();
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  let navigate = useNavigate();
  let drawerWidth = 280;

  React.useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  React.useEffect(() => {
    if (isLg) {
      dispatch(actions.setDrawerOpen());
    } else {
      dispatch(actions.setDrawerClose());
    }
  }, [isLg, dispatch]);

  const handleClick = (url: string) => {
    navigate(url);
  };

  const menuItems: IMenuItem[] = [
    {
      id: 1,
      name: `${t(messages.mainPages())}`,
      links: [
        {
          id: 1,
          name: `${t(messages.dashboard())}`,
          url: '/',
          icon: <PieChart />,
        },
        {
          id: 2,
          name: `${t(messages.balances())}`,
          url: '#balances',
          icon: <Walllet />,
        },
        {
          id: 3,
          name: `${t(messages.transactions())}`,
          url: '/transactions',
          icon: <Payments />,
        },
        {
          id: 4,
          name: `${t(messages.analytics())}`,
          url: '#analytics',
          icon: <Chart />,
        },
        {
          id: 5,
          name: `${t(messages.marketing())}`,
          url: '#marketing',
          icon: <Radar />,
        },
        {
          id: 6,
          name: `${t(messages.exchangeRate())}`,
          url: '#exchange-rates',
          icon: <Exchange />,
        },
      ],
    },
    {
      id: 2,
      name: `${t(messages.acceptPayment())}`,
      links: [
        {
          id: 1,
          name: `${t(messages.klashaCheckout())}`,
          url: '#checkout',
          icon: <ShoppingCart />,
        },
        {
          id: 2,
          name: `${t(messages.paymentLinks())}`,
          url: '#payment-links',
          icon: <PaymentLink />,
        },
      ],
    },
    {
      id: 3,
      name: `${t(messages.sendPayment())}`,
      links: [
        {
          id: 1,
          name: `${t(messages.klashaWire())}`,
          url: '#klasha-wire',
          icon: <Transactions />,
        },
      ],
    },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <StyledDrawer
        variant="permanent"
        open={drawerOpen}
        $islg={isLg}
        anchor="left"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: { lg: drawerWidth },
          flexShrink: { sm: 0 },
          backgroundColor: '#fffbf7',
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
              onClick={() => {
                navigate('/');
              }}
            >
              <KlashaLogo />
            </Box>

            {menuItems.map(item => (
              <List key={item.id}>
                <StyledMenuHeading>
                  <ListItemText primary={item.name} />
                </StyledMenuHeading>
                {item.links.map(link => (
                  <StyledMenuItem
                    key={link.id}
                    disableTouchRipple
                    disableRipple
                    $active={activeLink === link.url}
                    onClick={() => {
                      handleClick(link.url);
                    }}
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
              onClick={() =>
                drawerOpen
                  ? dispatch(actions.setDrawerClose())
                  : dispatch(actions.setDrawerOpen())
              }
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
          flexGrow: 1,
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            padding: '48px 0px ',
          }}
        >
          <Header isMenuOpen={drawerOpen} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
