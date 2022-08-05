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
  @media (max-width: 640px) {
    flex-direction: column;

    .MuiFormControl-root {
      width: 100%;
      margin-bottom: 16px;
    }
  }
`;

export const StyledTableFooter = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid #f0f0f0;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const StyledPagination = styled(Box)`
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  padding: 8px;
  @media (max-width: 1280px) {
    display: flex;
    justify-content: center;
  }

  .MuiPaginationItem-text {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    /* or 160% */

    text-align: center;

    color: #8f8f8f;
    &.Mui-selected {
      color: #000000;
    }
  }
`;

export const StyledButtonWrapper = styled(Box)`
  @media (max-width: 640px) {
    display: flex;
    justify-content: space-between;
  }
`;
