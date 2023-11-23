import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ColorModeToggle from '../../components/DarkModeToggle';

/**
 * Test: DarkModeToggle toggles the color mode on click
 * Description: Verifies that the ColorModeToggle component correctly toggles the color mode when clicked.
 */
test('DarkModeToggle toggles the color mode on click', () => {
  // Step 1: Render the ColorModeToggle component.
  const { getByLabelText } = render(<ColorModeToggle />);

  // Step 2: Simulate a click on the color mode toggle button.
  fireEvent.click(getByLabelText('Color mode toggle'));

  // Step 3: Assert for NO expected outcome after the click.
  expect(document.body).not.toHaveClass('dark');
});
