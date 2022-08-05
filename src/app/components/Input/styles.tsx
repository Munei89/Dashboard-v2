import styled from 'styled-components/macro';
import TextField from '@mui/material/TextField';

export const StyledInput = styled(TextField)`
  .MuiOutlinedInput-root {
    padding: 5px 14px;
    border: 1px solid #d1d1d1;
    border-radius: 8px;

    &.Mui-focused {
      border: 1px solid #000;
    }

    fieldset {
      border: none;
    }

    input {
      padding: 0;
    }
  }
`;
