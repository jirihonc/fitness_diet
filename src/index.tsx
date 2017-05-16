import * as React from "react";
import * as ReactDOM from "react-dom";

import { FitnessDietPage } from "./components/FitnessDietPage";
import { MyCalendar } from "./components/MyCalendar";
// import Calendar from 'rc-calendar';

// <MyCalendar/>

ReactDOM.render(
    <div>        
        <MyCalendar/>
        <FitnessDietPage/>
    </div>,
    document.getElementById("root")
);
