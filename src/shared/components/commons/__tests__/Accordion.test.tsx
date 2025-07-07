import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '../Accordion';

describe('Accordion', () => {
  it('renders with title', () => {
    render(
      <Accordion title="Test Accordion">
        <div>Test content</div>
      </Accordion>
    );
    expect(screen.getByText('Test Accordion')).toBeInTheDocument();
  });

  it('toggles content when clicked', () => {
    render(
      <Accordion title="Test Accordion">
        <div>Test content</div>
      </Accordion>
    );
    
    // Content should be hidden initially
    expect(screen.queryByText('Test content')).not.toBeInTheDocument();
    
    // Click to open
    fireEvent.click(screen.getByText('Test Accordion'));
    expect(screen.getByText('Test content')).toBeInTheDocument();
    
    // Click to close
    fireEvent.click(screen.getByText('Test Accordion'));
    expect(screen.queryByText('Test content')).not.toBeInTheDocument();
  });

  it('opens by default when defaultOpen is true', () => {
    render(
      <Accordion title="Test Accordion" defaultOpen>
        <div>Test content</div>
      </Accordion>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});