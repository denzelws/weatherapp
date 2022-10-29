import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: rgb(0, 151, 167);
  `}
`

export const Detail = styled.h3`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.small} 0;
    align-items: center;
    justify-content: center;
    color: rgb(207 250 254);
  `}
`
export const Temperature = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Celsius = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 4.8rem;
  `}
`

export const TemperatureDetails = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 300;
    font-size: ${theme.font.sizes.small};
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xxsmall};
  `}
`
export const Items = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      width: 1.2rem;
      color: ${theme.colors.white};
      margin-right: 0.4rem;
    }
  `}
`

export const ItemsLow = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      width: 2rem;
      color: ${theme.colors.white};
      margin-right: 0.4rem;
    }
  `}
`

export const FeelTemp = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    margin-left: 0.4rem;
  `}
`

export const AditionalDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem 0;
    > svg {
      width: 2rem;
      color: ${theme.colors.white};
    }
  `}
`

export const InfoBar = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall} 0;
  `}
`
