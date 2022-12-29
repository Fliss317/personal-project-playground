import React, { useState } from 'react';
import './App.css';
import ConvertDate from "../Calculator/Calculator"

function App() {
const [year, setYear] = useState(0);
const [month, setMonth] = useState(0);
const [day, setDay] = useState(0);



  return (
    <>
      <select name="Month">
        <option value="01">Jan</option>
        <option value="02">Feb</option>
        <option value="03">Mar</option>
        <option value="04">Apr</option>
        <option value="05">May</option>
        <option value="06">Jun</option>
        <option value="07">Jul</option>
        <option value="08">Aug</option>
        <option value="09">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
      <ConvertDate year={year} month={month} day={day}/>
    </>
  );
}

export default App;
