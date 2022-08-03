import React from 'react';
import PieChart from 'app/assets/svgs/PieChart';
import Walllet from 'app/assets/svgs/Wallet';
import Payments from 'app/assets/svgs/Payments';
import Chart from 'app/assets/svgs/Chart';
import Exchange from 'app/assets/svgs/Exchange';
import Radar from 'app/assets/svgs/Radar';
import ShoppingCart from 'app/assets/svgs/ShoppingCart';
import PaymentLink from 'app/assets/svgs/PaymentLink';
import Transactions from 'app/assets/svgs/Transactions';

interface ILinks {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface IMenuItem {
  id: number;
  name: string;
  links: ILinks[];
}

export const menuItems: IMenuItem[] = [
  {
    id: 1,
    name: 'Main pages',
    links: [
      {
        id: 1,
        name: 'Dashboard',
        url: '/dashboard',
        icon: <PieChart />,
      },
      {
        id: 2,
        name: 'Balances',
        url: '/balances',
        icon: <Walllet />,
      },
      {
        id: 3,
        name: 'Transactions',
        url: '/transactions',
        icon: <Payments />,
      },
      {
        id: 4,
        name: 'Analytics',
        url: '/analytics',
        icon: <Chart />,
      },
      {
        id: 5,
        name: 'Marketing',
        url: '/marketing',
        icon: <Radar />,
      },
      {
        id: 6,
        name: 'Exchange rates',
        url: '/exchange-rates',
        icon: <Exchange />,
      },
    ],
  },
  {
    id: 2,
    name: 'Accept payments',
    links: [
      {
        id: 1,
        name: 'KlashaCheckout',
        url: '/klasha-checkout',
        icon: <ShoppingCart />,
      },
      {
        id: 2,
        name: 'Payment Links',
        url: '/payment-links',
        icon: <PaymentLink />,
      },
    ],
  },
  {
    id: 3,
    name: 'Send payments',
    links: [
      {
        id: 1,
        name: 'KlashaWire',
        url: '/klasha-wire',
        icon: <Transactions />,
      },
    ],
  },
];
