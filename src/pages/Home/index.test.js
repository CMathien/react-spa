import { screen } from '@testing-library/react'
import Home from './'
import { render } from '../../utils/test'

describe('Test Home Component', () => {
  it('should render title', async () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: "Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents",
      })
    ).toBeTruthy()
  })
})
