import { Grid } from '@mui/material';
import React from 'react';
import { StyledHeaderWrapper } from './styles';

interface Props {
  children: React.ReactNode;
  [x: string]: any;
  contentHeader: React.ReactNode;
}

const ContentRow = ({ children, contentHeader }: Props) => {
  return (
    <Grid container sx={{ padding: '0 32px', marginBottom: '24px' }}>
      <StyledHeaderWrapper item xs={12}>
        {contentHeader}
      </StyledHeaderWrapper>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default ContentRow;
