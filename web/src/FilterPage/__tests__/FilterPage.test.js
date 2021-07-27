import React from 'react';
import { render, screen, act } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import FilterPage from '../FilterPage';
 
test('renders Filter Page component - header', () => {

  const {getByTestId} = render(<FilterPage />);
  const header = getByTestId('header')
  expect(header.textContent).toBe('Studifix')

});

test('renders Filter Page component - footer', () => {

  const {getByTestId} = render(<FilterPage />);
  const header = getByTestId('footer')
  expect(header.textContent).toBe('SupportWir sind für dich da!')

});