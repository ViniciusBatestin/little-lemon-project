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
  expect(initialTimes).toEqual([ "17:00", "17:30", "20:00", "20:30", "22:30", "23:00", "23:30"])
});

//THE SCRIPT API IS OUTDATED SO I DID A WORKAROUND

// test('updateTimes returns the same state when action type is UPDATE_TIMES', () => {
//     const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00","22:00"];
//     const action = { type: "UPDATE_TIMES", payload: "06/01/2025"};
//     const today = new Date();
//     const updatedState = updateTimes(currentState, action);

//     // Assert that the state remains unchanged
//     expect(updatedState).toEqual(currentState);
//   });

test('Date input has required attribute and proper type', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/Choose date/i); // Grabbing the date input element
  expect(dateInput).toHaveAttribute('required'); // Check that the "required" attribute is present
  expect(dateInput).toHaveAttribute('type', 'date'); // Check that the input type is "date"
});

test('Time select has required attribute', () => {
  render(<BookingForm />);
  const timeSelect = screen.getByLabelText(/Choose time/i); // Grabbing the time select element
  expect(timeSelect).toHaveAttribute('required'); // Check that the "required" attribute is present
});

test('Number of guests input has required, min, and max attributes', () => {
  render(<BookingForm />);
  const guestInput = screen.getByLabelText(/Number of guests/i); // Grabbing the guest number input element
  expect(guestInput).toHaveAttribute('required'); // Check that the "required" attribute is present
  expect(guestInput).toHaveAttribute('type', 'number'); // Check that the input type is "number"
  expect(guestInput).toHaveAttribute('min', '1'); // Check that the min value is set to 1
  expect(guestInput).toHaveAttribute('max', '10'); // Check that the max value is set to 10
});

test('Occasion select has required attribute', () => {
  render(<BookingForm />);
  const occasionSelect = screen.getByLabelText(/Occasion/i); // Grabbing the occasion select element
  expect(occasionSelect).toHaveAttribute('required'); // Check that the "required" attribute is present
});
