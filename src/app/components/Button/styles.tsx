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
                    border: 1px solid #008E8A;
                    &:hover {
                        background-color: #008E8A;
                        color: #fff;
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
