import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Main from 'app/layouts/Main';
import { menuItems } from 'utils/constants';
import ContentRow from 'app/components/ContentRow';
import { Grid, Box } from '@mui/material';
import TransactionTable from 'app/components/Table/Table';
import Button from 'app/components/Button';
import Input from 'app/components/Input';
import Search from 'app/assets/svgs/Search';
import Filter from 'app/assets/svgs/Filter';
import Pagination from '@mui/material/Pagination';
import { useInjectReducer } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from 'app/pages/slice';
import { selectAppState } from 'app/pages/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { _t } from 'utils/messages';
import { messages } from '../HomePage/messeges';

import {
  StyledTableContainer,
  StyledTableHeader,
  StyledTableActions,
  StyledTableFooter,
  StyledPagination,
  StyledButtonWrapper,
} from './styles';

export function Transactions() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currency, isDrawerOpen } = useSelector(selectAppState);
  return (
    <>
      <Helmet>
        <title>Transactions</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Main
        sidebarMenuItems={menuItems}
        drawerOpen={isDrawerOpen}
        onCloseDrawer={() => dispatch(actions.setDrawerOpen())}
      >
        <ContentRow>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <StyledTableContainer>
                <StyledTableHeader>
                  <h2>{t(messages.transactioHistory())}</h2>
                </StyledTableHeader>
                <StyledTableActions>
                  <Box>
                    <Input
                      id="search-input"
                      variant="outlined"
                      placeholder="Search"
                      InputProps={{
                        endAdornment: <Search />,
                      }}
                    />
                  </Box>
                  <StyledButtonWrapper>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ marginRight: '16px' }}
                      endIcon={<Filter />}
                    >
                      {t(messages.filter())}
                    </Button>
                    <Button size="small" variant="outlined">
                      {t(messages.export())}
                    </Button>
                  </StyledButtonWrapper>
                </StyledTableActions>
                <TransactionTable />
                <StyledTableFooter>
                  <StyledPagination>
                    <Pagination count={10} size="small" />
                  </StyledPagination>
                </StyledTableFooter>
              </StyledTableContainer>
            </Grid>
          </Grid>
        </ContentRow>
      </Main>
    </>
  );
}
