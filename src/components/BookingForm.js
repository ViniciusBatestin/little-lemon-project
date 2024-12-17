import React, { useState } from "react";

export default function BookingForm({availableTimes, dispatch}) {
    const [selectDate, setSelectDate] = useState("");
    const [selectTime, setSelectTime] = useState("");
    const [guestNumber, setGuestNumber] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted")
    };

    const handleDate = (e) => {
      const newDate = e.target.value;
      setSelectDate(newDate);

      dispatch({type: "UPDATE_TIMES", payload: newDate})
    }
   return(
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
      <fieldset>
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          value={selectDate}
          onChange={handleDate}
          type="date"
          id="res-date"
        />
      </div>

      {/* <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            value={selectTime}
            onChange={(e) => setSelectTime(e.target.value)}
            id="res-time">
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              )) }
          </select>
        </div> */}

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
            id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <button
            disabled={!selectDate || !selectTime || !guestNumber || !occasion}
            type="submit"
            defaultValue="Make Your reservation"
            >Submit</button>
        </div>

      </fieldset>
    </form>
  )
}
