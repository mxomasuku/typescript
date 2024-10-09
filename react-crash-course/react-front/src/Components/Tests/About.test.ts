import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import About from '../routes/About'; // Adjust the import path as necessary

// Optional describe block to group tests
describe('About Component', () => {
  test('renders ABOUT COMPONENT', () => {
    render(<About />);
    
    // Example assertion: Check if specific text is rendered
    const aboutText = screen.getByText(/about/i); // Adjust this according to your component
    expect(aboutText).toBeInTheDocument();
  });
}); 