import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgb(0, 151, 167);
    padding: ${theme.spacings.xxsmall} 0;
  `}
`

export const DateInformation = styled.div``

export const Date = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
  `}
`
export const Place = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
    justify-items: center;
  `}
`

export const City = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
  `}
`
