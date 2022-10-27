import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CurrentDate from '.'

describe('<CurrentDate />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<CurrentDate />)
    expect(screen.getByRole('heading', { name: /quinta/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /rio, br/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
