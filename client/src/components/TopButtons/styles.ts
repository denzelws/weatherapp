import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.xsmall};
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  `}
`
export const City = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`
