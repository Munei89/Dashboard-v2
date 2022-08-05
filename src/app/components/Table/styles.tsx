import styled from 'styled-components/macro';
import Table from '@mui/material/Table';

export const StyledTable = styled(Table)`
  &.MuiTable-root {
    background-color: #fff;

    .MuiTableCell-head {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      letter-spacing: -0.02em;

      /* Black sub */

      color: #464646;
      border: 0;
    }
    .MuiTableRow-root {
      &:first-child {
        .MuiTableCell-body {
          border: none;
        }
      }
    }
    .MuiTableCell-body {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      color: #4c4c4c;
    }
  }
`;
