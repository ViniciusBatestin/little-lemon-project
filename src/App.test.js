import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';

test('Renders the BookingForm', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns correct time', () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(["17:00", "18:00", "19:00"])
});

test('updateTimes returns the same state when action type is UPDATE_TIMES', () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: "UPDATE_TIMES", payload: "2023-12-24" };
    const updatedState = updateTimes(currentState, action);

    // Assert that the state remains unchanged
    expect(updatedState).toEqual(currentState);
  });
