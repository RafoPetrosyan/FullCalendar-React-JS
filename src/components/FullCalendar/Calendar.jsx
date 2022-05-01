import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, createSearchParams } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { createAction } from "../../store/actions/createAction";
import { GET_DATA } from "../../store/actions/actionTypes";
import birth from './images/birth.png';
import './Calendar.css';

const Calendar = () => {

  // GET REDUX DATA
  const calendarData = useSelector(state => state.calendarData.calendarData);
  const dispatch = useDispatch();
  const calendarRef = useRef();

  // QUERY PARAMS
  const [searchParams, setSearchParams] = useSearchParams();

  // useState
  const [state, setState] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [year, setYear] = useState(() => (searchParams.get('year') || moment().format('YYYY')));
  const [month, setMonth] = useState(() => (searchParams.get('month') || `0${moment().format('M')}`));


  const getCalendarApi = () => {
      const { current } = calendarRef;
      return current?.getApi();
  };

  // console.log(getCalendarApi());

  const queryParams = useMemo(() => ({
      year: isNaN(+year) ? moment().format('YYYY') : year,
      month: isNaN(+month) ? `0${moment().format('M')}` : month,
  }), [year, month]);

  useEffect(() => {
      const currentDate = `${queryParams.year}-${queryParams.month}-01`;
      const calendarApi = getCalendarApi();
      calendarApi.gotoDate(currentDate);
  }, []);

  // SET QUERY PARAMS AND GET DATA API
  const getData = () => {
      setSearchParams(createSearchParams(queryParams));
      const url = `?year=${queryParams.year}&month=${queryParams.month}`;
      dispatch(createAction(GET_DATA, url));
  }
  
  useEffect(() => {
      getData();
  }, [queryParams]);


  useEffect(() => {
    if(calendarData) {
      const calendarItems = Object.values(calendarData).map(item => {
        return item.map(item => {
            return {
              title: item.type,
              type: item.type,
              description: item.description,
              photo: item.photo,
              id: item.id,
              start: item.date,
              end: item.to ? item.to : item.date,
              name: item.employee_name,
            }
        })
      })
      setState(_.flatten(calendarItems));
    }

  }, [calendarData]);


  // CURRENT DATE
  const monthChange = async (args) => {

      let currentDate = await args.view.getCurrentData().viewTitle;

      if(currentDate.split(' ').length > 2){
          currentDate = await args.startStr;
      }
      let currentMonth = +moment(currentDate).format('M');
      if(currentMonth < 10) currentMonth = `0${currentMonth}`;
      let currentYear = moment(currentDate).format('YYYY');

      setYear(currentYear);
      setMonth(currentMonth);
 
  };


  const confirmImageUrl = async (url) =>{
      return await new Promise((resolve, reject) =>{
          const image = new Image();
          image.src = url;
          image.onload = () => resolve(url);
          image.onerror = () =>  reject('');
      }).catch(() => {
          console.log('image not found');
      })
  }
 
  const eventClick = async (event) => {
  
    const url = await confirmImageUrl(event.event._def.extendedProps.photo).then((url) =>{
        return url ? url : '';
    })
    const modalState = {
        title: event.event._def.title,
        photo: url,
        description: event.event._def.extendedProps.description,
        date: moment(event.event._instance.range.start).format('ll, HH:mm'),
        name: event.event._def.extendedProps.name,
    }
    setModalState(modalState);
  };

 

  const renderEventContent = (event) => {
    return (
        <div className='content'
            style={{backgroundImage: event.event._def.title === 'Birthday' ? `url(${birth})` : '',
                    color: event.event._def.title === 'Birthday' ? 'red' : 'white'
            }}
        >
              <b>{event.event._def.title}</b>
              <i> {moment(event.event._instance.range.start).format('HH:mm')}</i>
        </div>
      )
  }


  return (
    <div className="background" >
      <div className="main">

        <FullCalendar
          timeZone="local"
          navLinks={true}
          ref={calendarRef}
          // defaultDate={defaultDate}
          datesSet={(args) => monthChange(args)}
          dayMaxEvents={true}
          className='fullCalendar'
          eventClick={eventClick}
          defaultView="dayGridMonth"
          eventDurationEditable={false}
          // progressiveEventRendering={true}
          editable={true}
          scrollTime="12am"
          // droppable={true}
          headerToolbar={{
            left: "prev, next, today",
            center: 'title',
            right: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek'
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, bootstrap5Plugin]}
          eventContent={renderEventContent}
          events={state}
          datesAboveResources={true}
          eventTimeFormat = {{
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          }}
        />
      </div>
      
      {modalState ?
      <div className='backgroundModal' aria-hidden="true">
        <div className="hoverModal" onClick={() => setModalState(null)}></div>
        <div className="modal" >
                <div className="modalHeader">
                    <h1 className="h1">{modalState.title}</h1>
                </div>
                {modalState.photo &&
                    <img src={modalState.photo} className='image'
                />}
                <p className="name">{modalState.name}</p>
                <p className="description">{modalState.description}</p>
                <p className="description date">{modalState.date}</p>
                <div className="btnDiv">
                    <button className="delete" onClick={() => setModalState(null)}>Delete</button>
                    <button className="close" onClick={() => setModalState(null)}>Close</button>
                </div>
        </div>
      </div> : null}
        
    </div>
  )
}

export default Calendar;