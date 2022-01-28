import React from 'react'
import { render, screen } from '@testing-library/react'
import { Person } from './Person'

test('renders a name', () => {
    render(<Person name="Lucas" />)
    const componentName = screen.getByText(/Name is Lucas/i)
    expect(componentName).toBeInTheDocument()
});

test('renders a name with a refined test', () => {
    render(<Person name="Lucas" />)
    const divElement = screen.getByRole("contentinfo")
    expect(divElement).toHaveTextContent("Name is Lucas")
    expect(divElement).toHaveAttribute("role", "contentinfo")
});