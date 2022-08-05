import styled from 'styled-components/macro';
import { Grid } from '@mui/material';

export const StyledCardHeading = styled.h4`
  font-family: 'Inter Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #000000;
  margin: 0;
`;

export const StyledCardHeadingWhite = styled.h4`
  font-family: 'Inter Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #fff;
  margin: 0;
`;

export const StyledAmount = styled.h3`
  font-family: 'GeneralSans-Extralight', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #000000;
  margin: 0;
`;

export const StyledAmountWhite = styled.h3`
  font-family: 'GeneralSans-Extralight', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 0;
`;

export const StyledSvgWrapper = styled.div`
  text-align: center;
  margin: 20px auto;
`;

export const StyledGraphHeading = styled.h3`
  font-family: 'GeneralSans-Extralight', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #000000;
  margin: 0;
  margin-right: 16px;
`;

export const StyledGraphIndicators = styled.div`
  font-family: 'GeneralSans-Extralight', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #ef2c5a;
  margin: 0 16px;
`;

export const StyledCardText = styled.p`
  font-family: 'GeneralSans-Extralight', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  letter-spacing: -0.02em;
  font-feature-settings: 'ss05' on, 'ss06' on, 'liga' off;

  /* base/white */
  margin: 0;
  color: #ffffff;
  width: 70%;
`;

export const StyledSaleGridHeader = styled(Grid)`
  &.MuiGrid-root.MuiGrid-item {
    padding-left: 0px;
    padding-right: 32px;
  }
`;
