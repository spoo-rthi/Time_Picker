// import React from 'react';
// import { Link } from 'react-router-dom';
// import './TimePicker.css';

// function TimeWheel({ hour, minute }) {
//   return (
//     <div className="TimePickerContainer">
//       <form className="TimePickerForm">
//         <label>
//           <div className="TimePickerWheel">
//             <span className="TimePickerHour">{hour}</span>:
//             <span className="TimePickerMinute">{minute}</span>
//           </div>
//         </label>
//         <br />
//         <Link to="/" className="TimePickerSubmit">Back</Link>
//       </form>
//     </div>
//   );
// }
// export default TimeWheel;

import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import MuiPicker from './MuiPicker';
import { Link } from 'react-router-dom';
import './TimePicker.css';

function TimeWheel() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='TimePickerContainer'>
        <MuiPicker />
        <Link to="/TimePicker" className='TimePickerSubmit'>Back</Link>
      </div>
    </LocalizationProvider>
  );
}

export default TimeWheel;
