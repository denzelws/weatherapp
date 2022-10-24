import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
    display: flex;
    padding: ${theme.spacings.xsmall};
    align-items: center;
    justify-content: center;
    background: rgb(0, 151, 167);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  `}
`
export const City = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`
