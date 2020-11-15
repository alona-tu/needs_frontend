import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default class AdsCalendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: '',
          center: 'prev,title,next',
          right: '',
        }}
        events={[
          {
            title: '居家換季 收納質感',
            start: '2020-11-12',
            end: '2020-11-15',
            extendedProps: {
              status: 'done',
              id: 4,
            },
          },
        ]}
        eventDidMount={function (info) {
          if (info.event.extendedProps.status === 'done') {
            // Change background color of row
            switch (info.event.extendedProps.id) {
              case 1:
                info.el.style.backgroundColor = '#e8cd00'
                break
              case 2:
                info.el.style.backgroundColor = '#28c76f'
                break
              case 3:
                info.el.style.backgroundColor = '#ea5455'
                break
              case 4:
                info.el.style.backgroundColor = '#ff9f43'
                break
              case 5:
                info.el.style.backgroundColor = '#00cfe8'
                break
              default:
                info.el.style.backgroundColor = '#7367f0'
            }

            info.el.style.border = 'none'
            // console.log(info.event.title)
          }
        }}
        dateClick={function (info) {
          console.log(info.dayEl.dataset.date)
        }}
      />
    )
  }
}
