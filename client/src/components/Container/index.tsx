import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background: rgb(0, 151, 167);
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
