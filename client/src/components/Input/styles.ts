import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: ${theme.spacings.xsmall};
  `}
`

export const Information = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > svg {
      width: 3rem;
      color: ${theme.colors.white};
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }

    > svg:hover {
      transform: scale(1.5);
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 30rem;
    height: 3.5rem;
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    outline: none;
    margin-right: ${theme.spacings.xxsmall};

    ${media.lessThan('medium')`
     width: 100%;
    `}
  `}
`
