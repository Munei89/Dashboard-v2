import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell align="right">Source</TableCell>
            <TableCell align="right">Customer name</TableCell>
            <TableCell align="right">Customer email</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Request date</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.transactionId}
              </TableCell>
              <TableCell align="right">{row.source}</TableCell>
              <TableCell align="right">{row.customerName}</TableCell>
              <TableCell align="right">{row.customerEmail}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.requestDate}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
