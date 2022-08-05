import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTable } from './styles';
import { useTranslation } from 'react-i18next';
import { _t } from 'utils/messages';
import { messages } from 'app/pages/HomePage/messeges';

function createData(
  transactionId: string,
  source: string,
  customerName: string,
  customerEmail: string,
  amount: string,
  requestDate: string,
  status: string,
) {
  return {
    transactionId,
    source,
    customerName,
    customerEmail,
    amount,
    requestDate,
    status,
  };
}

const rows = [
  createData(
    'GB124QWERTY12346',
    'GTB',
    'Mike Owen',
    '0223337281',
    '$230.00',
    '24.08.2021',
    'Pending',
  ),
  createData(
    'CB328ABCEDF23416',
    'UBA',
    'Steve O Shassy',
    '0982764829',
    '$480.00',
    '22.08.2021',
    'Successful',
  ),
  createData(
    'GB124QWERTY12346',
    'GTB',
    'Mike Owen',
    '0223337281',
    '$230.00',
    '24.08.2021',
    'Pending',
  ),
  createData(
    'GB124QWERTY12346',
    'GTB',
    'Mike Owen',
    '0223337281',
    '$230.00',
    '24.08.2021',
    'Pending',
  ),
  createData(
    'GB124QWERTY12346',
    'GTB',
    'Mike Owen',
    '0223337281',
    '$230.00',
    '24.08.2021',
    'Pending',
  ),
];

const TransactionTable = () => {
  const { t } = useTranslation();
  return (
    <TableContainer>
      <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t(messages.transactionId())}</TableCell>
            <TableCell align="left">
              {t(messages.transactionSource())}
            </TableCell>
            <TableCell align="left">{t(messages.customerName())}</TableCell>
            <TableCell align="left">{t(messages.customerEmail())}</TableCell>
            <TableCell align="left">{t(messages.amount())}</TableCell>
            <TableCell align="left">{t(messages.requestDate())}</TableCell>
            <TableCell align="left">{t(messages.status())}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            const isSuccessful = row.status === 'Successful';
            return (
              <TableRow
                key={i}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: isSuccessful ? '#FAFAFA' : '#fff',
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: isSuccessful ? '0' : '1px solid #F0F0F0;',
                  }}
                  scope="row"
                >
                  {row.transactionId}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    borderBottom: isSuccessful ? '0' : '1px solid #F0F0F0;',
                  }}
                >
                  {row.source}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    borderBottom: isSuccessful ? '0' : '1px solid #F0F0F0;',
                  }}
                >
                  {row.customerName}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    borderBottom: isSuccessful ? '0' : '1px solid #F0F0F0;',
                  }}
                >
                  {row.customerEmail}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    borderBottom: isSuccessful ? '0' : '1px solid #F0F0F0;',
                  }}
                >
                  {row.amount}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    borderBottom: isSuccessful ? '0' : '1px solid #F0F0F0;',
                  }}
                >
                  {row.requestDate}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    borderBottom: isSuccessful ? '0' : '1px solid #F0F0F0;',
                  }}
                >
                  {row.status}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default TransactionTable;
