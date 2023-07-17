import {Stack, TextField} from '@mui/material';
import { DatePicker, TimePicker } from '@mui/lab';
import { useState } from 'react';

function MuiPicker() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);
    console.log({selectedTime: selectedTime && selectedTime.toLocaleTimeString()})

    const handleDateChange = (newValue) => {
        setSelectedDate(newValue)
    }

    const handleTimeChange = (newValue) => {
        setSelectedTime(newValue)
    }

    return(
        <Stack spacing = {4} sx = {{width: '250px'}}>
            <DatePicker 
            label='Date Picker' 
            renderInput = {(params) => <TextField/>}
            value = {selectedDate}
            onChange = {(e) => handleDateChange(e.target.value)}
            />
            <TimePicker
            label='Time Picker' 
            renderInput = {(params) => <TextField/>}
            value = {selectedTime}
            onChange = {(e) => handleTimeChange(e.target.value)}
            />
        </Stack>
    )
}

export default MuiPicker;