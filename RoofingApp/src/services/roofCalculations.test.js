// src/services/__tests__/roofCalculations.test.js

import { RoofCalculator } from '../roofCalculations';

describe('RoofCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new RoofCalculator(1836, 504);
  });

  test('calculates total area correctly', () => {
    expect(calculator.getTotalArea()).toBe(2340);
  });

  test('calculates squares needed correctly', () => {
    expect(calculator.getSquaresEstimated()).toBe(39); // ceil(2340 * 0.0162502)
  });

  test('calculates customer price correctly', () => {
    const calculations = calculator.getAllCalculations();
    expect(calculations.customerPrice).toBeDefined();
    expect(typeof calculations.customerPrice).toBe('number');
  });
});

// src/components/__tests__/Questionnaire.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Questionnaire from '../Questionnaire';

describe('Questionnaire', () => {
  test('renders input fields', () => {
    const { getByPlaceholderText } = render(<Questionnaire onComplete={() => {}} />);
    
    expect(getByPlaceholderText('e.g., 1836')).toBeTruthy();
    expect(getByPlaceholderText('e.g., 504')).toBeTruthy();
  });

  test('calls onComplete with calculated values', () => {
    const mockOnComplete = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <Questionnaire onComplete={mockOnComplete} />
    );

    fireEvent.changeText(getByPlaceholderText('e.g., 1836'), '1836');
    fireEvent.changeText(getByPlaceholderText('e.g., 504'), '504');
    fireEvent.press(getByText('Calculate Estimate'));

    expect(mockOnComplete).toHaveBeenCalled();
  });
});