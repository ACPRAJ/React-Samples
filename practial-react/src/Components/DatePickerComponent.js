import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat={"dd-MMM-yyyy"}
        minDate={new Date()}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        showYearDropdown
        showMonthDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
}

export default DatePickerComponent;
