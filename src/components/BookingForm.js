import React, { useState, useEffect } from "react";


export default function BookingForm({ availableTimes, dispatch, submitForm}) {
    const [selectDate, setSelectDate] = useState("");
    const [selectTime, setSelectTime] = useState("");
    const [guestNumber, setGuestNumber] = useState("");
    const [occasion, setOccasion] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
      if (typeof dispatch === "function") {
        const today = new Date();
        dispatch({ type: "UPDATE_TIMES", payload: today });
      } else {
        console.error("Dispatch is not a function!");
      }
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

        submitForm(formData);
      };
    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
            <fieldset>
                <div>
                    <label htmlFor="selectDate">Choose date</label>
                    <input
                        value={selectDate}
                        onChange={handleDateChange}
                        type="date"
                        id="selectDate"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="selectTime">Choose time</label>
                    <select
                      value={selectTime}
                      onChange={(e) => setSelectTime(e.target.value)}
                      id="selectTime"
                      required>
                        <option value="">Select a Time</option>
                          {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
                              availableTimes.map((time) => (
                                  <option key={time} value={time}>
                                      {time}
                                  </option>
                              ))
                          ) : (
                              <option value="" disabled>
                                  No times available
                              </option>
                          )}
                    </select>

                </div>
                <div>
                    <label htmlFor="guestNumber">Number of guests</label>
                    <input
                        value={guestNumber}
                        onChange={(e) => setGuestNumber(e.target.value)}
                        type="number"
                        placeholder={1}
                        min={1}
                        max={10}
                        id="guestNumber"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        id="occasion"
                        required
                    >
                        <option value="">Select an Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>
                <div className="btnReceiver">
                    <button
                        disabled={!selectDate || !selectTime || !guestNumber || !occasion || formSubmitted}
                        type="submit"
                        className="btnReceiver"
                    >
                        Make Your reservation
                    </button>
                </div>
            </fieldset>
        </form>
    );
}
