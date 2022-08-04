import Button from '@mui/material/Button';
import styled from 'styled-components/macro';

export const StyledButton = styled(Button)<{
  variant?: string;
  buttontype?: string;
}>`
  &.MuiButton-root {
    border-radius: 6px;
    font-weight: 400;
    font-size: 12px;
    padding: 12px 24px;
  
    ${({ variant }) => {
      switch (variant) {
        case 'outlined':
          return `
                  border: 1px solid #000000;
                  color: #000000;
                    &:hover {
                      border: 0px;
                        background-color: #000;
                        color: #fff;

                        svg {
                          path {
                            stroke: #fff;
                          }
                        }
                    }
                `;
        case 'contained':
          return `
                    background-color: #000000;
                    color: #fff;
                    border: 1px solid #000000;
                    &:hover {
                        background-color: #000000;
                        color: #fff;
                        border: none;
                    }
                `;
        case 'text':
          return `
                    background-color: transparent;
                    color: #000;
                    border: 0px;
                    &:hover {
                        background-color: transparent;
                        color: #000;
                        border: none;
                    }
                `;
        default:
          return `
                    background-color: transperent;
                    color: #008E8A;
                `;
      }
    }}
`;
