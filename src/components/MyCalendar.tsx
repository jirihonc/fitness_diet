import 'rc-calendar/assets/index.css';
import 'rc-select/assets/index.css';

import * as React from "react";
import * as ReactDOM from "react-dom";

import * as FullCalendar from 'rc-calendar/lib/FullCalendar';
import * as DatePicker from 'rc-calendar/lib/Picker';
import Select from 'rc-select';
import enUS from 'rc-calendar/lib/locale/en_US';
import * as moment from 'moment';

import 'moment/locale/en-gb';

const format = 'DD.MM YYYY';


// <props, state> => props goes to constructor, state
// in the props we delegate from parent what we want to share (clickHandler())
// once the state is changed => render() method is called 
// export const MyCalendar = React.createClass({

export  class MyCalendar extends React.Component<any, any> {

/*
  getInitialState() {
    return {
      type: 'month',
    };
  }*/

/*()
  getInitialState() {
    console.log('getInitialState: ' + this.state.type);
    return {
      type: 'month',
    };
  }*/

  onTypeChange(type: any) {
    this.setState({
      type,
    });
  }



  onSelect(value: FullCalendar) {
    console.log('select', value.format(format));
  }  

  render() {

    const now = moment();

    now.locale('en-gb').utcOffset(0);
    

    const defaultCalendarValue = now.clone();
    defaultCalendarValue.add(-1, 'month');

    return (
      
        <FullCalendar          
          Select={Select}
          fullscreen={false}
          onSelect={this.onSelect}
          defaultValue={now}
          locale={enUS}
        />
      
    );
  }
/*
    render() {
    const state = this.state;
    const calendar = (
      <Calendar
        className="week-calendar"
        showWeekNumber
        renderSidebar={this.renderSidebar}
        dateRender={this.dateRender}
        locale={cn ? zhCN : enUS}
        format={format}
        style={{ zIndex: 1000 }}
        dateInputPlaceholder="please input"
        defaultValue={now}
        showDateInput
      />);
    return (<div style={{ width: 400, margin: 20 }}>
      <div style={{
        boxSizing: 'border-box',
        position: 'relative',
        display: 'block',
        lineHeight: 1.5,
        marginBottom: 22,
      }}
      >
        <DatePicker
          onOpenChange={this.onOpenChange}
          open={this.state.open}
          animation="slide-up"
          calendar={calendar}
          value={state.value}
          onChange={this.onChange}
        >
          {
            ({ value }) => {
              return (
                <span tabIndex="0">
                <input
                  placeholder="please select week"
                  style={{ width: 250 }}
                  disabled={state.disabled}
                  readOnly
                  tabIndex="-1"
                  className="ant-calendar-picker-input ant-input"
                  value={value && value.format(format) || ''}
                />
                </span>
              );
            }
          }
        </DatePicker>
      </div>
    </div>);
  }
  */
  
};
