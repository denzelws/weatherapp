import { render, screen } from '@testing-library/react'

import CurrentDate from '.'

describe('<CurrentDate />', () => {
  it('should render the heading', () => {
    const { container } = render(<CurrentDate />)

    expect(screen.getByRole('heading', { name: /CurrentDate/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
