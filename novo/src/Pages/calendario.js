import React from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';

import moment from 'moment';

class calendario extends React.Component {
    

   render() {
       
    const holidays = []

       this.state.holidaysList.forEach((holiday) => {

           let start = moment(holiday.for_date).toDate()

           holidays.push({ id: holiday.id, title: holiday.occasion, start: start, end: start, color: holiday.color, resource: holiday.is_restricted, type: 'holiday', allDay: 'true' })

       })

       const leaves = []

       this.state.absentiesList.forEach((leave) => {

           let start_at = (new Date(leave.start_at))

           let end_at = (new Date(leave.end_at))

           leaves.push({ id: leave.id, title: leave.username, start: start_at, end: end_at, color: leave.color, type: 'leave', allDay: 'true' })

       })

       const list = [...holidays, ...leaves]
    return (

        <Calendar

            events={list}

            startAccessor="start"

            endAccessor="end"

            defaultDate={moment().toDate()}

            eventPropGetter={event => {

                const eventData = list.find(ot => ot.id === event.id);

                const backgroundColor = eventData && eventData.color;

                return { style: { backgroundColor } };

            }}

        />

    )

   }
}
export default Calendar;