import React, { useState } from "react";

export default function BookingForm() {
    const [selectDate, setSelectDate] = useState("");
    const [selectTime, setSelectTime] = useState("17:00");
    const [guestNumber, setGuestNumber] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");

    const [availableTimes, setAvailableTimes] = useState ([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ])

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted")
    }

   return(
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
      <fieldset>
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          value={selectDate}
          onChange={(e) => setSelectDate(e.target.value)}
          type="date"
          id="res-date"
        />
      </div>

      <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            value={selectTime}
            onChange={(e) => setSelectTime(e.target.value)}
            id="res-time">
              {availableTimes.map((time) => (
                <option>
                  {time}
                </option>
              )) }
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
