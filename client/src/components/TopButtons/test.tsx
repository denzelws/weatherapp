import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TopButtons from '.'

describe('<TopButtons />', () => {
  it('should render the top button', () => {
    renderWithTheme(<TopButtons />)
  })
})
