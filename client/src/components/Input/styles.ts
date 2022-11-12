import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
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
      width: 2.3rem;
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
    width: 80%;
    height: 3.5rem;
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    outline: none;
  `}
`
