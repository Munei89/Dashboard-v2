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

import {
  StyledTableContainer,
  StyledTableHeader,
  StyledTableActions,
} from './styles';

export function Transactions() {
  return (
    <>
      <Helmet>
        <title>Transactions</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Main sidebarMenuItems={menuItems}>
        <ContentRow>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <StyledTableContainer>
                <StyledTableHeader>
                  <h2>Transaction history</h2>
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
                  <Box>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ marginRight: '16px' }}
                      endIcon={<Filter />}
                    >
                      Filter
                    </Button>
                    <Button size="small" variant="outlined">
                      Export
                    </Button>
                  </Box>
                </StyledTableActions>
                <TransactionTable />
              </StyledTableContainer>
            </Grid>
          </Grid>
        </ContentRow>
      </Main>
    </>
  );
}
