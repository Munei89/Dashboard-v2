import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  salesOverview: () => _t(translations.salesOveriew, 'Sales Overview'),
  todaysSales: () => _t(translations.todaysSales, 'Todays Sales'),
  thisWeek: () => _t(translations.thisWeek, 'This Week'),
  thisMonth: () => _t(translations.thisMonth, 'This month'),
  lastMonth: () => _t(translations.lastMonth, 'Last month'),
  sales: () => _t(translations.sales, 'Sales'),
  downloadReport: () => _t(translations.downloadReport, 'Download report'),
  hidePanel: () => _t(translations.hidePanel, 'Hide panel'),
  sendAWire: () => _t(translations.sendAWire, 'Send a wire'),
  klashaText: () =>
    _t(
      translations.klashaText,
      'KlashaWire - send money to businesses globally from Africa',
    ),
  transactioHistory: () =>
    _t(translations.transactioHistory, 'Transaction history'),
  filter: () => _t(translations.filter, 'Filter'),
  export: () => _t(translations.export, 'Export'),
  transactions: () => _t(translations.transaction, 'Transactions'),
  transactionId: () => _t(translations.transactionId, 'Transaction ID'),
  transactionSource: () => _t(translations.transactionSource, 'Source'),
  customerName: () => _t(translations.customerName, 'Customer name'),
  customerEmail: () => _t(translations.customerEmail, 'Customer email'),
  amount: () => _t(translations.amount, 'Amount'),
  requestDate: () => _t(translations.requestDate, 'Request date'),
  status: () => _t(translations.status, 'Status'),
  mainPages: () => _t(translations.mainPages, 'Main pages'),
  dashboard: () => _t(translations.dashboard, 'Dashboard'),
  balances: () => _t(translations.balances, 'Balances'),
  analytics: () => _t(translations.analytics, 'Analytics'),
  marketing: () => _t(translations.marketing, 'Marketing'),
  exchangeRate: () => _t(translations.exchangeRate, 'Exchanges rate'),
  acceptPayment: () => _t(translations.acceptPayment, 'Accept payment'),
  klashaCheckout: () => _t(translations.klashaCheckout, 'KlashaCheckout'),
  paymentLinks: () => _t(translations.paymentLinks, 'Payment Links'),
  sendPayment: () => _t(translations.sendPayment, 'Send payments'),
  klashaWire: () => _t(translations.klashaWire, 'KlashaWire'),
};
