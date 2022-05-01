import React, { useEffect, useRef, useState } from "react";
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
import './Calendar.css';

const Calendar = () => {

  // GET REDUX DATA
  const calendarData = useSelector(state => state.calendarData.calendarData);

  // QUERY PARAMS
  const [searchParams, setSearchParams] = useSearchParams();

  // useState
  const [state, setState] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [year, setYear] = useState(() => (searchParams.get('year') || moment().format('YYYY')));
  const [month, setMonth] = useState(() => (searchParams.get('month') || moment().format('M')));


  const calendarRef = useRef();

  console.log(calendarRef.current);


  const defaultDate = moment('May 29, 2022').format('LL');

  const dispatch = useDispatch();

  useEffect(() =>{
      // let year = searchParams.get('year') || null
      // calendarRef.props.defaultDate = 'May 29, 2022';
      // calendarRef.updater._calendarApi.data.currentDate = moment('05/11/21').format();
      // console.log(moment('05/11/21').format());
  }, []);

  
  

  // SET QUERY PARAMS AND GET DATA API
  const getData = () => {
      const query = {
          year: year,
          month: month,
      }
      setSearchParams(createSearchParams(query));
      const url = `?year=${year}&month=${month}`;
      dispatch(createAction(GET_DATA, url));
  }
  
  useEffect(() => {
      if(year && month) getData(); 
  }, [year, month]);


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


  // function confirmImageUrl(url){
  //     return new Promise((resolve, reject) =>{
  //         const image = new Image();
  //         image.src = url;
  //         image.onload = () => resolve(url);
  //         image.onerror = () =>  reject('');
  //     }).catch(() => {
  //         console.log('image not found');
  //     })
  // }
 
  const eventClick = (eventClick) => {
    setModalState(eventClick);
  };

 

  const renderEventContent = (event) => {
   
    return (
        <div className='content'>
              <b>{event.event._def.title}</b>
              <i> {moment(event.event._instance.range.start).format('HH:mm')}</i>
        </div>
      )
  }



  return (
    <>
    <div className="background" >
      <div className="main">


        <FullCalendar
        navLinks={true}
          ref={calendarRef}
        //  firstDay={1}
          // gotToDate = {() => moment('05/11/21').format()}
          // defaultDate={defaultDate}
          datesSet={(args) => monthChange(args)}
          dayMaxEvents={true}
          className='fullCalendar'
          eventClick={eventClick}
          defaultView="dayGridMonth"
          // rerenderDelay={10}
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
          timeFormat = {{
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
                    <h1 className="h1">{modalState.event._def.title}</h1>
                </div>
                {modalState.event.extendedProps.photo &&
                <img src={modalState.event.extendedProps.photo} className='image'
                />}
                <p className="description">{modalState.event._def.extendedProps.description}</p>
                <p className="description date">{moment(modalState.event._instance.range.start).format('ll, HH:mm')}</p>
                <div className="btnDiv">
                    <button className="delete" onClick={() => setModalState(null)}>Delete</button>
                    <button className="close" onClick={() => setModalState(null)}>Close</button>
                </div>
                  
        </div>
      </div> : null}
        
    </div>

   
    
  </>
  )
}

export default Calendar;