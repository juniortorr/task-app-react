import { render, screen } from '@testing-library/react';
import storage from '../data';
import NewProject from '../components/New-Project';
import { act } from 'react-dom/test-utils';
import { describe, expect, it } from 'vitest';
describe('app', () => {
  it('adds a project to the array', () => {
    render(<NewProject />);
    const form = screen.getByRole('form');
    act(() => {
      form.dispatchEvent('submit');
    });
    const tasks = storage.tasks;
    expect(tasks).toBe(2);
  });
});
