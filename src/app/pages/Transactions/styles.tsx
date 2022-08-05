import styled from 'styled-components/macro';
import { Box } from '@mui/material';

export const StyledTableContainer = styled(Box)`
  width: 100%;
  height: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
`;

export const StyledTableHeader = styled(Box)`
  border-bottom: 1px solid #f0f0f0;
  padding: 16px;

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 0;
  }
`;

export const StyledTableActions = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
`;
