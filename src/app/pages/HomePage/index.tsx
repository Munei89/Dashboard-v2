import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Main from 'app/layouts/Main';
import { menuItems } from 'utils/constants';
import ContentRow from 'app/components/ContentRow';
import { StyledCard } from 'app/components/Card';
import { Grid, Box } from '@mui/material';
import Graph from 'app/assets/svgs/Graph';
import {
  StyledCardHeading,
  StyledAmount,
  StyledAmountWhite,
  StyledCardHeadingWhite,
  StyledSvgWrapper,
  StyledGraphHeading,
  StyledGraphIndicators,
  StyledCardText,
} from './styles';
import GraphLite from 'app/assets/svgs/GraphLite';
import { Chart } from 'app/components/Chart/Loadable';
import Button from 'app/components/Button';
import ArrowDown from 'app/assets/svgs/ArrowDown';
import ArrowDownAlt from 'app/assets/svgs/ArrowDownAlt';

export function HomePage() {
  const currency = '₦';
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Main sidebarMenuItems={menuItems}>
        <ContentRow contentHeader={<h2>Sales overview</h2>}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={3}>
              <StyledCard
                sx={{
                  height: '240px',
                }}
              >
                <StyledCardHeading>Today's sales</StyledCardHeading>
                <StyledAmount>{currency}1,652.50</StyledAmount>
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <StyledCard
                sx={{
                  height: '240px',
                  backgroundColor: '#000',
                  color: '#fff',
                }}
              >
                <StyledCardHeadingWhite>
                  24 Aug - 01 Sep 21
                </StyledCardHeadingWhite>
                <StyledSvgWrapper>
                  <Graph />
                </StyledSvgWrapper>
                <StyledCardHeadingWhite>Today's sales</StyledCardHeadingWhite>
                <StyledAmountWhite>{currency}1,652.50</StyledAmountWhite>
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <StyledCard
                sx={{
                  height: '240px',
                }}
              >
                <StyledCardHeading>24 Aug - 01 Sep 21</StyledCardHeading>
                <StyledSvgWrapper>
                  <GraphLite />
                </StyledSvgWrapper>
                <StyledCardHeading>This month</StyledCardHeading>
                <StyledAmount>{currency}1,652.50</StyledAmount>
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <StyledCard
                sx={{
                  height: '240px',
                }}
              >
                <StyledCardHeading>24 Aug - 01 Sep 21</StyledCardHeading>
                <StyledSvgWrapper>
                  <GraphLite />
                </StyledSvgWrapper>
                <StyledCardHeading>Last month</StyledCardHeading>
                <StyledAmount>{currency}1,652.50</StyledAmount>
              </StyledCard>
            </Grid>
          </Grid>
        </ContentRow>
        <ContentRow
          contentHeader={
            <Box
              sx={{
                display: 'flex',
                margin: '16px 0',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <StyledGraphHeading>Sales</StyledGraphHeading>
                <StyledGraphIndicators> 7 Days</StyledGraphIndicators>
                <StyledGraphIndicators>30 Days</StyledGraphIndicators>
                <Button
                  variant="outlined"
                  endIcon={<ArrowDown />}
                  sx={{ margin: '0 16px' }}
                >
                  USD
                </Button>
              </Box>
              <Box>
                <Button variant="outlined" startIcon={<ArrowDownAlt />}>
                  Download report
                </Button>
              </Box>
            </Box>
          }
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={8}>
              <StyledCard
                sx={{
                  height: '284px',
                }}
              >
                <Chart />
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledCard
                sx={{
                  height: '284px',
                  backgroundColor: '#EF2C5A',
                  color: '#fff',
                  border: '2px solid #EF2C5A !important',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <StyledCardText>
                  KlashaWire - send money to businesses globally from Africa
                </StyledCardText>
                <Button size="xs" variant="contained">
                  Send a wire
                </Button>
              </StyledCard>
            </Grid>
          </Grid>
        </ContentRow>
      </Main>
    </>
  );
}
