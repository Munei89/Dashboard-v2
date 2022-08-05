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
  StyledCardText,
  StyledSaleGridHeader,
} from './styles';
import GraphLite from 'app/assets/svgs/GraphLite';
import { Chart } from 'app/components/Chart/Loadable';
import Button from 'app/components/Button';
import ArrowDown from 'app/assets/svgs/ArrowDown';
import ArrowDownAlt from 'app/assets/svgs/ArrowDownAlt';
import Lines from 'app/assets/images/lines.png';
import { useInjectReducer } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from 'app/pages/slice';
import { selectAppState } from 'app/pages/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { messages } from './messeges';

export function HomePage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const dispatch = useDispatch();
  const { currency, isDrawerOpen } = useSelector(selectAppState);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Main
        sidebarMenuItems={menuItems}
        drawerOpen={isDrawerOpen}
        onCloseDrawer={() => dispatch(actions.setDrawerOpen())}
      >
        <ContentRow contentHeader={<h2>{t(messages.salesOverview())}</h2>}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <StyledCard
                sx={{
                  height: '240px',
                }}
              >
                <StyledCardHeading>
                  {t(messages.todaysSales())}
                </StyledCardHeading>
                <StyledAmount>{currency}1,652.50</StyledAmount>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
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
                <StyledCardHeadingWhite>
                  {t(messages.thisWeek())}
                </StyledCardHeadingWhite>
                <StyledAmountWhite>{currency}1,652.50</StyledAmountWhite>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <StyledCard
                sx={{
                  height: '240px',
                }}
              >
                <StyledCardHeading>24 Aug - 01 Sep 21</StyledCardHeading>
                <StyledSvgWrapper>
                  <GraphLite />
                </StyledSvgWrapper>
                <StyledCardHeading>{t(messages.thisMonth())}</StyledCardHeading>
                <StyledAmount>{currency}1,652.50</StyledAmount>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <StyledCard
                sx={{
                  height: '240px',
                }}
              >
                <StyledCardHeading>24 Aug - 01 Sep 21</StyledCardHeading>
                <StyledSvgWrapper>
                  <GraphLite />
                </StyledSvgWrapper>
                <StyledCardHeading>{t(messages.lastMonth())}</StyledCardHeading>
                <StyledAmount>{currency}1,652.50</StyledAmount>
              </StyledCard>
            </Grid>
          </Grid>
        </ContentRow>
        <ContentRow
          contentHeader={
            <Grid
              container
              spacing={4}
              sx={{
                display: 'flex',
                margin: '16px 0',
              }}
            >
              <StyledSaleGridHeader
                item
                xs={12}
                sm={12}
                lg={8}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: ['column', 'row'],
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    flexDirection: ['row', 'row'],
                  }}
                >
                  <StyledGraphHeading>{t(messages.sales())}</StyledGraphHeading>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowDown />}
                    sx={{ margin: ['0 8px', '0 16px'], width: { xs: '100%' } }}
                  >
                    USD
                  </Button>
                </Box>
                <Box
                  sx={{
                    marginTop: ['16px', '0'],
                  }}
                >
                  <Button
                    sx={{
                      width: { xs: '100%' },
                    }}
                    variant="outlined"
                    startIcon={<ArrowDownAlt />}
                  >
                    {t(messages.downloadReport())}
                  </Button>
                </Box>
              </StyledSaleGridHeader>
            </Grid>
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
                  backgroundImage: `url(${Lines})`,
                }}
              >
                <StyledCardText>{t(messages.klashaText())}</StyledCardText>
                <Box>
                  <Button size="xs" variant="contained">
                    {t(messages.sendAWire())}
                  </Button>
                </Box>
              </StyledCard>
            </Grid>
          </Grid>
        </ContentRow>
      </Main>
    </>
  );
}
