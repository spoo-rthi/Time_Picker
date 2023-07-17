import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './TimePicker.css';
import TimeWheel from './TimeWheel';

function TimePicker() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  const handleHourChange = (event) => {
    setHour(parseInt(event.target.value));
  };

  const handleMinuteChange = (event) => {
    setMinute(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected time: ${hour}:${minute}`);
  };

  return (
    <Router>
      <div className="TimePickerBox">
        <div className="TimePickerContainer">
          <Routes>
            <Route path="/" element={<TimeForm hour={hour} minute={minute} handleHourChange={handleHourChange} handleMinuteChange={handleMinuteChange} handleSubmit={handleSubmit} />} />
            <Route path="/time-wheel" element={<TimeWheel hour={hour} minute={minute} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function TimeForm({ hour, minute, handleHourChange, handleMinuteChange, handleSubmit }) {
  return (
    <form className="TimePickerForm" onSubmit={handleSubmit}>
      <label>
        <input
          className="TimePickerInput"
          type="number"
          min={0}
          max={23}
          value={hour}
          onChange={handleHourChange}
        />:
        <input
          className="TimePickerInput"
          type="number"
          min={0}
          max={59}
          value={minute}
          onChange={handleMinuteChange}
        />
      </label>
      <br />
      {/* <br /> */}
      <Link to="/time-wheel" className="TimePickerSubmit">Submit</Link>
    </form>
  );
}

export default TimePicker;