import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './index'

describe('Card correctly', () => {
  test('sould render card correctly ', () => {
    render(<Card className={'bg-info'}>Card</Card>)

    const cardElement = screen.getByTestId('card-element')
    expect(cardElement).toHaveClass('bg-info')
  })
})
