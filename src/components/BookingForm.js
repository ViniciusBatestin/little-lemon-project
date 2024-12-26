import React, { useState, useEffect } from "react";

export default function BookingForm({ availableTimes, dispatch }) {
    const [selectDate, setSelectDate] = useState("");
    const [selectTime, setSelectTime] = useState("");
    const [guestNumber, setGuestNumber] = useState("");
    const [occasion, setOccasion] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
      const today = new Date();
      setSelectDate(today.toISOString().split("T")[0]); // Set today's date in YYYY-MM-DD format
      dispatch({ type: "UPDATE_TIMES", payload: today });
  }, [dispatch]);

    const handleDateChange = (e) => {
        const newDate = new Date(e.target.value);
        setSelectDate(e.target.value);
        dispatch({ type: "UPDATE_TIMES", payload: newDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        const formData = {
            date: selectDate,
            time: selectTime,
            guests: guestNumber,
            occasion: occasion,
        };

        const success = submitAPI(formData); // submitAPI is available globally
        if (success) {
            console.log("Booking submitted successfully!");
            // Handle successful submission (e.g., redirect to a confirmation page)
        } else {
            console.error("Booking submission failed.");
            // Handle submission error
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
            <fieldset>
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        value={selectDate}
                        onChange={handleDateChange}
                        type="date"
                        id="res-date"
                    />
                </div>
                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        value={selectTime}
                        onChange={(e) => setSelectTime(e.target.value)}
                        id="res-time"
                    >
                        <option value="">Select a Time</option>
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        value={guestNumber}
                        onChange={(e) => setGuestNumber(e.target.value)}
                        type="number"
                        placeholder={1}
                        min={1}
                        max={10}
                        id="guests"
                    />
                </div>
                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        id="occasion"
                    >
                        <option value="">Select an Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    <button
                        disabled={!selectDate || !selectTime || !guestNumber || !occasion || formSubmitted}
                        type="submit"
                    >
                        Make Your reservation
                    </button>
                </div>
            </fieldset>
        </form>
    );
}
