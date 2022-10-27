import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TemperatureAndDetails from '.'

describe('<TemperatureAndDetails />', () => {
  it('should render correctly', () => {
    renderWithTheme(<TemperatureAndDetails />)
    expect(screen.getByRole('img', { name: /uma imagem/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /cloudy or whatever/i })
    ).toBeInTheDocument()
  })
})
