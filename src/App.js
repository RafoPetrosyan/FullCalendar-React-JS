import React, { useEffect } from 'react';
import RouterView from './routes/routes';
import './App.css';



function App() {

  useEffect(() =>{
      localStorage.setItem('auth_key', '2YujYbhFZMfsIZNkNYubx-SLhQ9txCSu');
    
  }, []);

  return (
    <div className="app">
          <RouterView/>
    </div>
  );
}

export default App;

// "data": {
//   "2022-02-24": [
//       {
//           "id": 57,
//           "description": "2h leave at 6:30-8:30 ujh",
//           "type": "Hourly Leave",
//           "date": "2022-02-24 06:30:00",
//           "employee_id": 5,
//           "employee_name": "Larisa Melkonyan",
//           "photo": "https://manage-company.app/uploads/IMG_9360.jpg",
//           "from": "2022-02-24 06:30:00",
//           "to": "2022-02-24 08:30:00"
//       },
//       {
//           "id": 192,
//           "description": "rfwefwefwfwef",
//           "type": "Vacation",
//           "date": "2022-02-24",
//           "employee_id": 1,
//           "employee_name": "Gurgen Gharibyan",
//           "photo": "https://manage-company.app/uploads/164794380211.webp",
//           "from": "2022-02-17 20:00:00",
//           "to": "2022-02-25 20:00:00"
//       },
//       {
//           "id": 8,
//           "description": "sfasfs in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-24 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-24 15:00:00",
//           "to": "2022-02-24 17:30:00"
//       },
//       {
//           "id": 48,
//           "description": "sdfsdf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-24 10:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-24 10:15:00",
//           "to": "2022-02-24 12:45:00"
//       },
//       {
//           "id": 41,
//           "description": "asfasf in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-24 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-24 10:00:00",
//           "to": "2022-02-24 12:30:00"
//       },
//       {
//           "id": 42,
//           "description": "safasf in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-24 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-24 10:00:00",
//           "to": "2022-02-24 12:30:00"
//       },
//       {
//           "id": 43,
//           "description": "asfafsafsafs in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-24 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-24 10:00:00",
//           "to": "2022-02-24 12:30:00"
//       },
//       {
//           "id": 63,
//           "description": "welcome in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-24 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-24 10:00:00",
//           "to": "2022-02-24 12:30:00"
//       }
//   ],
//   "2022-02-14": [
//       {
//           "id": 95,
//           "description": "dfghdfg",
//           "type": "Day Off",
//           "date": "2022-02-14 00:00:00",
//           "employee_id": 40,
//           "employee_name": "Vigen Hovhannisyan",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-02-14 00:00:00",
//           "to": "2022-02-15 00:00:00"
//       }
//   ],
//   "2022-02-16": [
//       {
//           "id": 105,
//           "description": "0.25h leave at 12:15-12:30 sdgsdg",
//           "type": "Hourly Leave",
//           "date": "2022-02-16 12:15:32",
//           "employee_id": 40,
//           "employee_name": "Vigen Hovhannisyan",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-02-16 12:15:32",
//           "to": "2022-02-16 12:30:32"
//       },
//       {
//           "id": 5,
//           "description": "sdfsdf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-16 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-16 15:00:00",
//           "to": "2022-02-16 17:30:00"
//       },
//       {
//           "id": 13,
//           "description": "dsdg in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-16 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-16 15:00:00",
//           "to": "2022-02-16 17:30:00"
//       },
//       {
//           "id": 10,
//           "description": "asfafsasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-16 12:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-16 12:00:00",
//           "to": "2022-02-16 14:30:00"
//       },
//       {
//           "id": 16,
//           "description": "asfasfasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-16 12:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-16 12:00:00",
//           "to": "2022-02-16 14:30:00"
//       },
//       {
//           "id": 26,
//           "description": "df in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-16 12:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-16 12:00:00",
//           "to": "2022-02-16 14:30:00"
//       },
//       {
//           "id": 62,
//           "description": "sdsdsdsd in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-16 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-16 10:00:00",
//           "to": "2022-02-16 12:30:00"
//       },
//       {
//           "id": 57,
//           "description": "adsdasda in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-16 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-16 09:15:00",
//           "to": "2022-02-16 12:35:00"
//       },
//       {
//           "id": 58,
//           "description": "sdfdsf in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-16 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-16 09:15:00",
//           "to": "2022-02-16 11:45:00"
//       },
//       {
//           "id": 49,
//           "description": "qqqq in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-16 00:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-16 00:00:00",
//           "to": "1970-01-01 02:30:00"
//       }
//   ],
//   "2022-03-23": [
//       {
//           "id": 193,
//           "description": "sdfsdfdsfds",
//           "type": "Work Remotely",
//           "date": "2022-03-23 00:00:00",
//           "employee_id": 1,
//           "employee_name": "Gurgen Gharibyan",
//           "photo": "https://manage-company.app/uploads/164794380211.webp",
//           "from": "2022-03-23 00:00:00",
//           "to": "2022-03-24 00:00:00"
//       },
//       {
//           "id": 300,
//           "description": "adfsgadfg",
//           "type": "Vacation",
//           "date": "2022-03-23",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-23 20:00:00",
//           "to": "2022-03-28 20:00:00"
//       }
//   ],
//   "2022-03-15": [
//       {
//           "id": 268,
//           "description": "fhfghfghjjjjj0990[[]['\\'\\'\\'",
//           "type": "Day Off",
//           "date": "2022-03-15 00:00:00",
//           "employee_id": 5,
//           "employee_name": "Larisa Melkonyan",
//           "photo": "https://manage-company.app/uploads/IMG_9360.jpg",
//           "from": "2022-03-15 00:00:00",
//           "to": "2022-03-16 00:00:00"
//       },
//       {
//           "id": 274,
//           "description": "sdfdfbhfgb",
//           "type": "Vacation",
//           "date": "2022-03-15",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 285,
//           "description": "fghjghj",
//           "type": "Vacation",
//           "date": "2022-03-15",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-09 20:00:00",
//           "to": "2022-03-15 20:00:00"
//       },
//       {
//           "id": 286,
//           "description": "cghjghj",
//           "type": "Vacation",
//           "date": "2022-03-15",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-12 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 288,
//           "description": "cvghjkghjk",
//           "type": "Vacation",
//           "date": "2022-03-15",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-07 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 290,
//           "description": "hjghj",
//           "type": "Vacation",
//           "date": "2022-03-15",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-13 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 295,
//           "description": "wwwwww",
//           "type": "Vacation",
//           "date": "2022-03-15",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 93,
//           "description": "555 in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-15 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-15 09:15:00",
//           "to": "2022-03-15 11:45:00"
//       }
//   ],
//   "2022-03-09": [
//       {
//           "id": 269,
//           "description": "2h leave at 11:42-1:42 rgejhutyujtyjdgdfgdfghdffdhf",
//           "type": "Hourly Leave",
//           "date": "2022-03-09 11:42:13",
//           "employee_id": 5,
//           "employee_name": "Larisa Melkonyan",
//           "photo": "https://manage-company.app/uploads/IMG_9360.jpg",
//           "from": "2022-03-09 11:42:13",
//           "to": "2022-03-09 13:42:13"
//       },
//       {
//           "id": 285,
//           "description": "fghjghj",
//           "type": "Vacation",
//           "date": "2022-03-09",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-09 20:00:00",
//           "to": "2022-03-15 20:00:00"
//       },
//       {
//           "id": 288,
//           "description": "cvghjkghjk",
//           "type": "Vacation",
//           "date": "2022-03-09",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-07 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 69,
//           "description": "qqqqqqqqqqq in Meeting Room",
//           "type": "Event",
//           "date": "2022-03-09 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-09 09:15:00",
//           "to": "2022-03-09 11:45:00"
//       }
//   ],
//   "2022-03-11": [
//       {
//           "id": 279,
//           "description": "0.25h leave at 1:00-1:15 dfbdfb",
//           "type": "Hourly Leave",
//           "date": "2022-03-11 01:00:00",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-11 01:00:00",
//           "to": "2022-03-11 01:15:00"
//       },
//       {
//           "id": 280,
//           "description": "1h leave at 2:15-3:15 sdgg",
//           "type": "Hourly Leave",
//           "date": "2022-03-11 02:15:00",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-11 02:15:00",
//           "to": "2022-03-11 03:15:00"
//       }
//   ],
//   "2022-03-17": [
//       {
//           "id": 283,
//           "description": "0.25h leave at 4:33-4:48 sdfghdfgh",
//           "type": "Hourly Leave",
//           "date": "2022-03-17 04:33:22",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-17 04:33:22",
//           "to": "2022-03-17 04:48:22"
//       },
//       {
//           "id": 289,
//           "description": "0.5h leave at 4:37-5:07 cghjj",
//           "type": "Hourly Leave",
//           "date": "2022-03-17 04:37:07",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-17 04:37:07",
//           "to": "2022-03-17 05:07:07"
//       },
//       {
//           "id": 274,
//           "description": "sdfdfbhfgb",
//           "type": "Vacation",
//           "date": "2022-03-17",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 286,
//           "description": "cghjghj",
//           "type": "Vacation",
//           "date": "2022-03-17",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-12 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 288,
//           "description": "cvghjkghjk",
//           "type": "Vacation",
//           "date": "2022-03-17",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-07 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 290,
//           "description": "hjghj",
//           "type": "Vacation",
//           "date": "2022-03-17",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-13 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 295,
//           "description": "wwwwww",
//           "type": "Vacation",
//           "date": "2022-03-17",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 86,
//           "description": "sssssssssssss in Test Room",
//           "type": "Event",
//           "date": "2022-03-17 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-17 10:00:00",
//           "to": "2022-03-17 12:30:00"
//       },
//       {
//           "id": 72,
//           "description": "aaaaaaaaaa in Test Room",
//           "type": "Event",
//           "date": "2022-03-17 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-17 09:30:00",
//           "to": "2022-03-17 12:00:00"
//       },
//       {
//           "id": 92,
//           "description": "ffffffff in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-17 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-17 09:15:00",
//           "to": "2022-03-17 11:45:00"
//       }
//   ],
//   "2022-03-24": [
//       {
//           "id": 284,
//           "description": "dfgdg",
//           "type": "Day Off",
//           "date": "2022-03-24 00:00:00",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-24 00:00:00",
//           "to": "2022-03-25 00:00:00"
//       },
//       {
//           "id": 300,
//           "description": "adfsgadfg",
//           "type": "Vacation",
//           "date": "2022-03-24",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-23 20:00:00",
//           "to": "2022-03-28 20:00:00"
//       },
//       {
//           "id": 88,
//           "description": "sssssssssssssssssssss in Test Room",
//           "type": "Event",
//           "date": "2022-03-24 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-24 10:00:00",
//           "to": "2022-03-24 12:30:00"
//       }
//   ],
//   "2022-03-08": [
//       {
//           "id": 291,
//           "description": "cghjgj",
//           "type": "Work Remotely",
//           "date": "2022-03-08 00:00:00",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-08 00:00:00",
//           "to": "2022-03-09 00:00:00"
//       },
//       {
//           "id": 293,
//           "description": "cghjgfhj",
//           "type": "Day Off",
//           "date": "2022-03-08 00:00:00",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-08 00:00:00",
//           "to": "2022-03-09 00:00:00"
//       },
//       {
//           "id": 288,
//           "description": "cvghjkghjk",
//           "type": "Vacation",
//           "date": "2022-03-08",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-07 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 6,
//           "description": "International Womens Day",
//           "type": "Holiday",
//           "date": "2022-03-08",
//           "employee_id": null,
//           "employee_name": "",
//           "photo": "",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-03-14": [
//       {
//           "id": 292,
//           "description": "cghjghj",
//           "type": "Work Remotely",
//           "date": "2022-03-14 00:00:00",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 00:00:00",
//           "to": "2022-03-15 00:00:00"
//       },
//       {
//           "id": 274,
//           "description": "sdfdfbhfgb",
//           "type": "Vacation",
//           "date": "2022-03-14",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 285,
//           "description": "fghjghj",
//           "type": "Vacation",
//           "date": "2022-03-14",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-09 20:00:00",
//           "to": "2022-03-15 20:00:00"
//       },
//       {
//           "id": 286,
//           "description": "cghjghj",
//           "type": "Vacation",
//           "date": "2022-03-14",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-12 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 288,
//           "description": "cvghjkghjk",
//           "type": "Vacation",
//           "date": "2022-03-14",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-07 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 290,
//           "description": "hjghj",
//           "type": "Vacation",
//           "date": "2022-03-14",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-13 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 295,
//           "description": "wwwwww",
//           "type": "Vacation",
//           "date": "2022-03-14",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 70,
//           "description": "new event in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-14 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-14 09:15:00",
//           "to": "2022-03-14 11:45:00"
//       }
//   ],
//   "2022-03-21": [
//       {
//           "id": 294,
//           "description": "0.25h leave at 6:45-7:00 sdfghdfgh",
//           "type": "Hourly Leave",
//           "date": "2022-03-21 06:45:00",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-21 06:45:00",
//           "to": "2022-03-21 07:00:00"
//       },
//       {
//           "id": 274,
//           "description": "sdfdfbhfgb",
//           "type": "Vacation",
//           "date": "2022-03-21",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 288,
//           "description": "cvghjkghjk",
//           "type": "Vacation",
//           "date": "2022-03-21",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-07 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       }
//   ],
//   "2022-05-18": [
//       {
//           "id": 296,
//           "description": "test",
//           "type": "Day Off",
//           "date": "2022-05-18 00:00:00",
//           "employee_id": 5,
//           "employee_name": "Larisa Melkonyan",
//           "photo": "https://manage-company.app/uploads/IMG_9360.jpg",
//           "from": "2022-05-18 00:00:00",
//           "to": "2022-05-19 00:00:00"
//       }
//   ],
//   "2022-09-30": [
//       {
//           "id": 297,
//           "description": "gfvvbjgfnhj",
//           "type": "Day Off",
//           "date": "2022-09-30 00:00:00",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-09-30 00:00:00",
//           "to": "2022-10-01 00:00:00"
//       }
//   ],
//   "2022-03-22": [
//       {
//           "id": 298,
//           "description": "dfhdfh",
//           "type": "Day Off",
//           "date": "2022-03-22 00:00:00",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-22 00:00:00",
//           "to": "2022-03-23 00:00:00"
//       }
//   ],
//   "2022-05-25": [
//       {
//           "id": 302,
//           "description": "tyij",
//           "type": "Day Off",
//           "date": "2022-05-25 00:00:00",
//           "employee_id": 5,
//           "employee_name": "Larisa Melkonyan",
//           "photo": "https://manage-company.app/uploads/IMG_9360.jpg",
//           "from": "2022-05-25 00:00:00",
//           "to": "2022-05-26 00:00:00"
//       }
//   ],
//   "2022-04-15": [
//       {
//           "id": 303,
//           "description": "2h leave at 11:03-1:03 fuykyuk",
//           "type": "Hourly Leave",
//           "date": "2022-04-15 11:03:56",
//           "employee_id": 5,
//           "employee_name": "Larisa Melkonyan",
//           "photo": "https://manage-company.app/uploads/IMG_9360.jpg",
//           "from": "2022-04-15 11:03:56",
//           "to": "2022-04-15 13:03:56"
//       },
//       {
//           "id": 91,
//           "description": "tttttttttttt in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-15 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-15 09:15:00",
//           "to": "2022-04-15 11:45:00"
//       }
//   ],
//   "2022-04-12": [
//       {
//           "id": 306,
//           "description": "sdxv",
//           "type": "Day Off",
//           "date": "2022-04-12 00:00:00",
//           "employee_id": 5,
//           "employee_name": "Larisa Melkonyan",
//           "photo": "https://manage-company.app/uploads/IMG_9360.jpg",
//           "from": "2022-04-12 00:00:00",
//           "to": "2022-04-13 00:00:00"
//       }
//   ],
//   "2022-04-19": [
//       {
//           "id": 307,
//           "description": "3333",
//           "type": "Day Off",
//           "date": "2022-04-19 00:00:00",
//           "employee_id": 5,
//           "employee_name": "Larisa Melkonyan",
//           "photo": "https://manage-company.app/uploads/IMG_9360.jpg",
//           "from": "2022-04-19 00:00:00",
//           "to": "2022-04-20 00:00:00"
//       }
//   ],
//   "2022-02-17": [
//       {
//           "id": 192,
//           "description": "rfwefwefwfwef",
//           "type": "Vacation",
//           "date": "2022-02-17",
//           "employee_id": 1,
//           "employee_name": "Gurgen Gharibyan",
//           "photo": "https://manage-company.app/uploads/164794380211.webp",
//           "from": "2022-02-17 20:00:00",
//           "to": "2022-02-25 20:00:00"
//       },
//       {
//           "id": 56,
//           "description": "asd in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-17 18:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 18:00:00",
//           "to": "2022-02-17 20:30:00"
//       },
//       {
//           "id": 3,
//           "description": "sdfsdf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 15:00:00",
//           "to": "2022-02-17 17:30:00"
//       },
//       {
//           "id": 4,
//           "description": "sdgsdg in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 15:00:00",
//           "to": "2022-02-17 17:30:00"
//       },
//       {
//           "id": 11,
//           "description": "yreryery in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 15:00:00",
//           "to": "2022-02-17 17:30:00"
//       },
//       {
//           "id": 14,
//           "description": "ewtwetwet in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 15:00:00",
//           "to": "2022-02-17 17:30:00"
//       },
//       {
//           "id": 18,
//           "description": "sfasfasf in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-17 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 15:00:00",
//           "to": "2022-02-17 17:30:00"
//       },
//       {
//           "id": 20,
//           "description": "asfasfasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 15:00:00",
//           "to": "2022-02-17 17:30:00"
//       },
//       {
//           "id": 25,
//           "description": "asfasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 13:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 13:00:00",
//           "to": "2022-02-17 15:30:00"
//       },
//       {
//           "id": 9,
//           "description": "sfasfasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 12:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 12:00:00",
//           "to": "2022-02-17 14:30:00"
//       },
//       {
//           "id": 15,
//           "description": "afsasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 12:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 12:00:00",
//           "to": "2022-02-17 14:30:00"
//       },
//       {
//           "id": 17,
//           "description": "asfasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 12:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 12:00:00",
//           "to": "2022-02-17 14:30:00"
//       },
//       {
//           "id": 47,
//           "description": "sdffdg in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 10:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 10:15:00",
//           "to": "2022-02-17 12:45:00"
//       },
//       {
//           "id": 36,
//           "description": "asfafs in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-17 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 10:00:00",
//           "to": "2022-02-17 12:30:00"
//       },
//       {
//           "id": 37,
//           "description": "asfasfasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 10:00:00",
//           "to": "2022-02-17 12:30:00"
//       },
//       {
//           "id": 40,
//           "description": "sggdsdgdsd in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-17 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 10:00:00",
//           "to": "2022-02-17 12:30:00"
//       },
//       {
//           "id": 46,
//           "description": "sgdsgdsdgsgd in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-17 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 10:00:00",
//           "to": "2022-02-17 12:30:00"
//       },
//       {
//           "id": 66,
//           "description": "vvvvvvv in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 10:00:00",
//           "to": "2022-02-17 12:30:00"
//       },
//       {
//           "id": 33,
//           "description": "asffsaasf in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-17 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 09:30:00",
//           "to": "2022-02-17 12:00:00"
//       },
//       {
//           "id": 34,
//           "description": "dfdfhhdf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 09:30:00",
//           "to": "2022-02-17 12:00:00"
//       },
//       {
//           "id": 39,
//           "description": "dhdfdfhd in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-17 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 09:30:00",
//           "to": "2022-02-17 12:00:00"
//       },
//       {
//           "id": 31,
//           "description": "eryerreyery in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 09:20:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 09:20:00",
//           "to": "2022-02-17 11:50:00"
//       },
//       {
//           "id": 68,
//           "description": "qqqqqqqqqq in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-17 09:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-17 09:00:00",
//           "to": "2022-02-17 11:30:00"
//       }
//   ],
//   "2022-02-20": [
//       {
//           "id": 192,
//           "description": "rfwefwefwfwef",
//           "type": "Vacation",
//           "date": "2022-02-20",
//           "employee_id": 1,
//           "employee_name": "Gurgen Gharibyan",
//           "photo": "https://manage-company.app/uploads/164794380211.webp",
//           "from": "2022-02-17 20:00:00",
//           "to": "2022-02-25 20:00:00"
//       }
//   ],
//   "2022-02-21": [
//       {
//           "id": 192,
//           "description": "rfwefwefwfwef",
//           "type": "Vacation",
//           "date": "2022-02-21",
//           "employee_id": 1,
//           "employee_name": "Gurgen Gharibyan",
//           "photo": "https://manage-company.app/uploads/164794380211.webp",
//           "from": "2022-02-17 20:00:00",
//           "to": "2022-02-25 20:00:00"
//       }
//   ],
//   "2022-02-22": [
//       {
//           "id": 192,
//           "description": "rfwefwefwfwef",
//           "type": "Vacation",
//           "date": "2022-02-22",
//           "employee_id": 1,
//           "employee_name": "Gurgen Gharibyan",
//           "photo": "https://manage-company.app/uploads/164794380211.webp",
//           "from": "2022-02-17 20:00:00",
//           "to": "2022-02-25 20:00:00"
//       }
//   ],
//   "2022-02-23": [
//       {
//           "id": 192,
//           "description": "rfwefwefwfwef",
//           "type": "Vacation",
//           "date": "2022-02-23",
//           "employee_id": 1,
//           "employee_name": "Gurgen Gharibyan",
//           "photo": "https://manage-company.app/uploads/164794380211.webp",
//           "from": "2022-02-17 20:00:00",
//           "to": "2022-02-25 20:00:00"
//       }
//   ],
//   "2022-03-16": [
//       {
//           "id": 274,
//           "description": "sdfdfbhfgb",
//           "type": "Vacation",
//           "date": "2022-03-16",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 286,
//           "description": "cghjghj",
//           "type": "Vacation",
//           "date": "2022-03-16",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-12 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 288,
//           "description": "cvghjkghjk",
//           "type": "Vacation",
//           "date": "2022-03-16",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-07 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 290,
//           "description": "hjghj",
//           "type": "Vacation",
//           "date": "2022-03-16",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-13 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 295,
//           "description": "wwwwww",
//           "type": "Vacation",
//           "date": "2022-03-16",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 84,
//           "description": "rrttrr in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-16 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-16 10:00:00",
//           "to": "2022-03-16 12:30:00"
//       },
//       {
//           "id": 73,
//           "description": "sdsdsd in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-16 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-16 09:30:00",
//           "to": "2022-03-16 12:00:00"
//       },
//       {
//           "id": 74,
//           "description": "99 in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-16 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-16 09:15:00",
//           "to": "2022-03-16 11:45:00"
//       },
//       {
//           "id": 75,
//           "description": "789 in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-16 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-16 09:15:00",
//           "to": "2022-03-16 11:45:00"
//       }
//   ],
//   "2022-03-20": [
//       {
//           "id": 274,
//           "description": "sdfdfbhfgb",
//           "type": "Vacation",
//           "date": "2022-03-20",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 286,
//           "description": "cghjghj",
//           "type": "Vacation",
//           "date": "2022-03-20",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-12 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 288,
//           "description": "cvghjkghjk",
//           "type": "Vacation",
//           "date": "2022-03-20",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-07 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 290,
//           "description": "hjghj",
//           "type": "Vacation",
//           "date": "2022-03-20",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-13 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 295,
//           "description": "wwwwww",
//           "type": "Vacation",
//           "date": "2022-03-20",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-14 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       }
//   ],
//   "2022-03-10": [
//       {
//           "id": 285,
//           "description": "fghjghj",
//           "type": "Vacation",
//           "date": "2022-03-10",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-09 20:00:00",
//           "to": "2022-03-15 20:00:00"
//       },
//       {
//           "id": 288,
//           "description": "cvghjkghjk",
//           "type": "Vacation",
//           "date": "2022-03-10",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-07 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       }
//   ],
//   "2022-03-13": [
//       {
//           "id": 285,
//           "description": "fghjghj",
//           "type": "Vacation",
//           "date": "2022-03-13",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-09 20:00:00",
//           "to": "2022-03-15 20:00:00"
//       },
//       {
//           "id": 286,
//           "description": "cghjghj",
//           "type": "Vacation",
//           "date": "2022-03-13",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-12 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       },
//       {
//           "id": 288,
//           "description": "cvghjkghjk",
//           "type": "Vacation",
//           "date": "2022-03-13",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-07 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       },
//       {
//           "id": 290,
//           "description": "hjghj",
//           "type": "Vacation",
//           "date": "2022-03-13",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-13 20:00:00",
//           "to": "2022-03-20 20:00:00"
//       }
//   ],
//   "2022-03-07": [
//       {
//           "id": 288,
//           "description": "cvghjkghjk",
//           "type": "Vacation",
//           "date": "2022-03-07",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-07 20:00:00",
//           "to": "2022-03-21 20:00:00"
//       }
//   ],
//   "2022-08-07": [
//       {
//           "id": 299,
//           "description": "sdfghsdfgh",
//           "type": "Vacation",
//           "date": "2022-08-07",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-08-06 20:00:00",
//           "to": "2022-08-15 20:00:00"
//       }
//   ],
//   "2022-08-08": [
//       {
//           "id": 299,
//           "description": "sdfghsdfgh",
//           "type": "Vacation",
//           "date": "2022-08-08",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-08-06 20:00:00",
//           "to": "2022-08-15 20:00:00"
//       }
//   ],
//   "2022-08-09": [
//       {
//           "id": 299,
//           "description": "sdfghsdfgh",
//           "type": "Vacation",
//           "date": "2022-08-09",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-08-06 20:00:00",
//           "to": "2022-08-15 20:00:00"
//       }
//   ],
//   "2022-08-10": [
//       {
//           "id": 299,
//           "description": "sdfghsdfgh",
//           "type": "Vacation",
//           "date": "2022-08-10",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-08-06 20:00:00",
//           "to": "2022-08-15 20:00:00"
//       }
//   ],
//   "2022-08-11": [
//       {
//           "id": 299,
//           "description": "sdfghsdfgh",
//           "type": "Vacation",
//           "date": "2022-08-11",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-08-06 20:00:00",
//           "to": "2022-08-15 20:00:00"
//       }
//   ],
//   "2022-08-14": [
//       {
//           "id": 299,
//           "description": "sdfghsdfgh",
//           "type": "Vacation",
//           "date": "2022-08-14",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-08-06 20:00:00",
//           "to": "2022-08-15 20:00:00"
//       }
//   ],
//   "2022-08-15": [
//       {
//           "id": 299,
//           "description": "sdfghsdfgh",
//           "type": "Vacation",
//           "date": "2022-08-15",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-08-06 20:00:00",
//           "to": "2022-08-15 20:00:00"
//       }
//   ],
//   "2022-03-27": [
//       {
//           "id": 300,
//           "description": "adfsgadfg",
//           "type": "Vacation",
//           "date": "2022-03-27",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-23 20:00:00",
//           "to": "2022-03-28 20:00:00"
//       }
//   ],
//   "2022-03-28": [
//       {
//           "id": 300,
//           "description": "adfsgadfg",
//           "type": "Vacation",
//           "date": "2022-03-28",
//           "employee_id": 43,
//           "employee_name": "Gexam Gexam",
//           "photo": "https://manage-company.app/dist/img/placeholder.png",
//           "from": "2022-03-23 20:00:00",
//           "to": "2022-03-28 20:00:00"
//       }
//   ],
//   "2022-01-01": [
//       {
//           "id": 1,
//           "description": "New Year",
//           "type": "Holiday",
//           "date": "2022-01-01",
//           "employee_id": null,
//           "employee_name": "",
//           "photo": "",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-01-02": [
//       {
//           "id": 2,
//           "description": "New year (Day 2)",
//           "type": "Holiday",
//           "date": "2022-01-02",
//           "employee_id": null,
//           "employee_name": "",
//           "photo": "",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-01-06": [
//       {
//           "id": 4,
//           "description": "Christmas",
//           "type": "Holiday",
//           "date": "2022-01-06",
//           "employee_id": null,
//           "employee_name": "",
//           "photo": "",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-01-28": [
//       {
//           "id": 5,
//           "description": "Army Day",
//           "type": "Holiday",
//           "date": "2022-01-28",
//           "employee_id": null,
//           "employee_name": "",
//           "photo": "",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-04-24": [
//       {
//           "id": 7,
//           "description": "Genocide Remembrance Day",
//           "type": "Holiday",
//           "date": "2022-04-24",
//           "employee_id": null,
//           "employee_name": "",
//           "photo": "",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-05-09": [
//       {
//           "id": 9,
//           "description": "Victory and Peace Day",
//           "type": "Holiday",
//           "date": "2022-05-09",
//           "employee_id": null,
//           "employee_name": "",
//           "photo": "",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-05-28": [
//       {
//           "id": 10,
//           "description": "Republic Day",
//           "type": "Holiday",
//           "date": "2022-05-28",
//           "employee_id": null,
//           "employee_name": "",
//           "photo": "",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-09-21": [
//       {
//           "id": 12,
//           "description": "Independence Day",
//           "type": "Holiday",
//           "date": "2022-09-21",
//           "employee_id": null,
//           "employee_name": "",
//           "photo": "",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-12-31": [
//       {
//           "id": 14,
//           "description": "New Year's Eve",
//           "type": "Holiday",
//           "date": "2022-12-31",
//           "employee_id": null,
//           "employee_name": "",
//           "photo": "",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-07-20": [
//       {
//           "id": 1,
//           "description": "",
//           "type": "Birthday",
//           "date": "2022-07-20",
//           "employee_id": 1,
//           "employee_name": "Gurgen Gharibyan",
//           "photo": "https://manage-company.app/uploads/164794380211.webp",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-06-18": [
//       {
//           "id": 2,
//           "description": "",
//           "type": "Birthday",
//           "date": "2022-06-18",
//           "employee_id": 2,
//           "employee_name": "Sergey Galstyan",
//           "photo": "https://manage-company.app/uploads/Image from iOS (17).jpg",
//           "from": "",
//           "to": ""
//       }
//   ],
//   "2022-04-29": [
//       {
//           "id": 138,
//           "description": "welcome in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-29 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-29 09:15:00",
//           "to": "2022-04-29 11:45:00"
//       },
//       {
//           "id": 139,
//           "description": "malefisenta in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-29 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-29 09:15:00",
//           "to": "2022-04-29 11:45:00"
//       }
//   ],
//   "2022-04-26": [
//       {
//           "id": 137,
//           "description": "nearby in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-26 09:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-26 09:00:00",
//           "to": "2022-04-26 12:20:00"
//       }
//   ],
//   "2022-04-21": [
//       {
//           "id": 94,
//           "description": "99 in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-21 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-21 10:00:00",
//           "to": "2022-04-21 12:30:00"
//       },
//       {
//           "id": 90,
//           "description": "ццццццц in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-21 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-21 09:15:00",
//           "to": "2022-04-21 11:45:00"
//       }
//   ],
//   "2022-04-20": [
//       {
//           "id": 104,
//           "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-20 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-20 09:15:00",
//           "to": "2022-04-20 11:45:00"
//       },
//       {
//           "id": 131,
//           "description": "asasfasfasf in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-20 05:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-20 05:30:00",
//           "to": "1970-01-01 06:40:00"
//       }
//   ],
//   "2022-04-14": [
//       {
//           "id": 101,
//           "description": "rrrrrrrrrrrrrrrrrrrrr in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-14 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-14 10:00:00",
//           "to": "2022-04-14 12:30:00"
//       },
//       {
//           "id": 102,
//           "description": "qwrgtgtgtgttg in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-14 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-14 09:30:00",
//           "to": "2022-04-14 12:00:00"
//       }
//   ],
//   "2022-04-13": [
//       {
//           "id": 129,
//           "description": "qwrqwrqwr in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-13 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-13 10:00:00",
//           "to": "2022-04-13 12:30:00"
//       },
//       {
//           "id": 103,
//           "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-13 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-13 09:15:00",
//           "to": "2022-04-13 11:45:00"
//       },
//       {
//           "id": 95,
//           "description": "eeeee in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-13 09:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-13 09:00:00",
//           "to": "2022-04-13 11:30:00"
//       },
//       {
//           "id": 124,
//           "description": "yhyhyhyhyh in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-13 05:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-13 05:15:00",
//           "to": "1970-01-01 00:00:00"
//       }
//   ],
//   "2022-04-07": [
//       {
//           "id": 135,
//           "description": "eeeeeeeeeee in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-07 09:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-07 09:00:00",
//           "to": "2022-04-07 12:20:00"
//       },
//       {
//           "id": 126,
//           "description": "title1 in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-07 05:45:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-07 05:45:00",
//           "to": "1970-01-01 02:30:00"
//       },
//       {
//           "id": 133,
//           "description": "vvvvvv in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-07 05:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-07 05:00:00",
//           "to": "1970-01-01 02:30:00"
//       },
//       {
//           "id": 134,
//           "description": "qwqwqw in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-07 05:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-07 05:00:00",
//           "to": "1970-01-01 02:30:00"
//       },
//       {
//           "id": 136,
//           "description": "malefo 1 in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-07 01:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-07 01:00:00",
//           "to": "1970-01-01 13:20:00"
//       }
//   ],
//   "2022-04-06": [
//       {
//           "id": 123,
//           "description": "trtrtrtrewwewewewewewee in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-06 21:45:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-06 21:45:00",
//           "to": "1970-01-01 05:00:00"
//       },
//       {
//           "id": 130,
//           "description": "new event in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-06 21:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-06 21:30:00",
//           "to": "1970-01-01 15:00:00"
//       }
//   ],
//   "2022-04-05": [
//       {
//           "id": 128,
//           "description": "qwr in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-05 17:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-05 17:15:00",
//           "to": "1970-01-01 03:20:00"
//       }
//   ],
//   "2022-04-04": [
//       {
//           "id": 116,
//           "description": "qwertyuiop in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-04 21:45:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-04 21:45:00",
//           "to": "1970-01-01 00:00:00"
//       },
//       {
//           "id": 96,
//           "description": "eeewww in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-04 09:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-04 09:00:00",
//           "to": "2022-04-04 11:30:00"
//       }
//   ],
//   "2022-04-03": [
//       {
//           "id": 97,
//           "description": "ewet in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-03 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-03 09:15:00",
//           "to": "2022-04-03 11:45:00"
//       },
//       {
//           "id": 99,
//           "description": "qwer in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-03 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-03 09:15:00",
//           "to": "2022-04-03 11:45:00"
//       },
//       {
//           "id": 100,
//           "description": "tytytyty in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-03 09:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-03 09:00:00",
//           "to": "2022-04-03 11:30:00"
//       }
//   ],
//   "2022-04-01": [
//       {
//           "id": 83,
//           "description": "fdffffffffffffffffffffffffffffffffffffffff in Test Room",
//           "type": "Event",
//           "date": "2022-04-01 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-01 10:00:00",
//           "to": "2022-04-01 12:30:00"
//       },
//       {
//           "id": 98,
//           "description": "y in Meeting Room",
//           "type": "Event",
//           "date": "2022-04-01 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-01 09:15:00",
//           "to": "2022-04-01 11:45:00"
//       },
//       {
//           "id": 127,
//           "description": "malefisenta event2 in Meeting Room1",
//           "type": "Event",
//           "date": "2022-04-01 01:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-04-01 01:30:00",
//           "to": "1970-01-01 00:00:00"
//       }
//   ],
//   "2022-03-31": [
//       {
//           "id": 79,
//           "description": "desert in Test Room",
//           "type": "Event",
//           "date": "2022-03-31 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-31 10:00:00",
//           "to": "2022-03-31 12:30:00"
//       },
//       {
//           "id": 81,
//           "description": "ttttttttttttttttttttttttttttttt in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-31 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-31 10:00:00",
//           "to": "2022-03-31 12:30:00"
//       },
//       {
//           "id": 82,
//           "description": "fffffffffffffff in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-31 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-31 09:15:00",
//           "to": "2022-03-31 11:45:00"
//       }
//   ],
//   "2022-03-30": [
//       {
//           "id": 80,
//           "description": "qwert in Test Room",
//           "type": "Event",
//           "date": "2022-03-30 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-30 09:30:00",
//           "to": "2022-03-30 12:00:00"
//       },
//       {
//           "id": 77,
//           "description": "qqqq in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-30 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-30 09:15:00",
//           "to": "2022-03-30 11:45:00"
//       }
//   ],
//   "2022-03-25": [
//       {
//           "id": 85,
//           "description": "112233 in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-25 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-25 09:30:00",
//           "to": "2022-03-25 12:00:00"
//       }
//   ],
//   "2022-03-18": [
//       {
//           "id": 78,
//           "description": "dessssssssssssss in Meeting Room1",
//           "type": "Event",
//           "date": "2022-03-18 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-18 09:30:00",
//           "to": "2022-03-18 12:00:00"
//       },
//       {
//           "id": 87,
//           "description": "trrtrrtrtrtrtrtrt in Test Room",
//           "type": "Event",
//           "date": "2022-03-18 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-03-18 09:30:00",
//           "to": "2022-03-18 12:00:00"
//       }
//   ],
//   "2022-02-25": [
//       {
//           "id": 24,
//           "description": "sdgsdgsdg in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-25 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-25 15:00:00",
//           "to": "2022-02-25 17:30:00"
//       },
//       {
//           "id": 51,
//           "description": "sdgsdg in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-25 10:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-25 10:15:00",
//           "to": "2022-02-25 12:45:00"
//       },
//       {
//           "id": 54,
//           "description": "qwe in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-25 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-25 09:30:00",
//           "to": "2022-02-25 12:00:00"
//       }
//   ],
//   "2022-02-18": [
//       {
//           "id": 1,
//           "description": "Meeting Room in test room",
//           "type": "Event",
//           "date": "2022-02-18 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 15:00:00",
//           "to": "2022-02-18 17:30:00"
//       },
//       {
//           "id": 2,
//           "description": "Meeting Room in test room",
//           "type": "Event",
//           "date": "2022-02-18 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 15:00:00",
//           "to": "2022-02-18 17:30:00"
//       },
//       {
//           "id": 6,
//           "description": "Meeting Room in test room",
//           "type": "Event",
//           "date": "2022-02-18 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 15:00:00",
//           "to": "2022-02-18 17:30:00"
//       },
//       {
//           "id": 7,
//           "description": "Meeting Room in test room",
//           "type": "Event",
//           "date": "2022-02-18 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 15:00:00",
//           "to": "2022-02-18 17:30:00"
//       },
//       {
//           "id": 12,
//           "description": "asfasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-18 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 15:00:00",
//           "to": "2022-02-18 17:30:00"
//       },
//       {
//           "id": 19,
//           "description": "asfasfasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-18 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 15:00:00",
//           "to": "2022-02-18 17:30:00"
//       },
//       {
//           "id": 21,
//           "description": "sdgsdg in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-18 15:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 15:00:00",
//           "to": "2022-02-18 17:30:00"
//       },
//       {
//           "id": 30,
//           "description": "asfafsafs in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-18 13:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 13:00:00",
//           "to": "2022-02-18 15:30:00"
//       },
//       {
//           "id": 23,
//           "description": "sdgsdgsdg in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-18 12:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 12:00:00",
//           "to": "2022-02-18 14:30:00"
//       },
//       {
//           "id": 29,
//           "description": "asfaf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-18 10:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 10:15:00",
//           "to": "2022-02-18 12:45:00"
//       },
//       {
//           "id": 38,
//           "description": "xcbxcxcb in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-18 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 10:00:00",
//           "to": "2022-02-18 12:30:00"
//       },
//       {
//           "id": 52,
//           "description": "sdgsdg in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-18 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 10:00:00",
//           "to": "2022-02-18 12:30:00"
//       },
//       {
//           "id": 35,
//           "description": "ddfdf in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-18 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 09:30:00",
//           "to": "2022-02-18 12:00:00"
//       },
//       {
//           "id": 53,
//           "description": "afasfa in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-18 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 09:30:00",
//           "to": "2022-02-18 12:00:00"
//       },
//       {
//           "id": 64,
//           "description": "wwwwwwwwww in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-18 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 09:30:00",
//           "to": "2022-02-18 12:00:00"
//       },
//       {
//           "id": 55,
//           "description": "asf in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-18 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 09:15:00",
//           "to": "2022-02-18 11:45:00"
//       },
//       {
//           "id": 50,
//           "description": "asfasfasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-18 00:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-18 00:00:00",
//           "to": "1970-01-01 02:30:00"
//       }
//   ],
//   "2022-02-15": [
//       {
//           "id": 28,
//           "description": "9999 in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-15 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-15 09:15:00",
//           "to": "2022-02-15 11:45:00"
//       },
//       {
//           "id": 60,
//           "description": "Happy in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-15 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-15 09:15:00",
//           "to": "2022-02-15 11:45:00"
//       },
//       {
//           "id": 67,
//           "description": "rtrtrt in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-15 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-15 09:15:00",
//           "to": "2022-02-15 11:45:00"
//       }
//   ],
//   "2022-02-12": [
//       {
//           "id": 44,
//           "description": "asfafsafs in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-12 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-12 10:00:00",
//           "to": "2022-02-12 12:30:00"
//       }
//   ],
//   "2022-02-11": [
//       {
//           "id": 59,
//           "description": "sfddfssdfds in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-11 09:15:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-11 09:15:00",
//           "to": "2022-02-11 11:45:00"
//       }
//   ],
//   "2022-02-10": [
//       {
//           "id": 22,
//           "description": "asfasf in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-10 12:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-10 12:00:00",
//           "to": "2022-02-10 14:30:00"
//       },
//       {
//           "id": 61,
//           "description": "sss in Meeting Room1",
//           "type": "Event",
//           "date": "2022-02-10 10:00:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-10 10:00:00",
//           "to": "2022-02-10 12:30:00"
//       },
//       {
//           "id": 32,
//           "description": "asfasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-10 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-10 09:30:00",
//           "to": "2022-02-10 12:00:00"
//       }
//   ],
//   "2022-02-09": [
//       {
//           "id": 65,
//           "description": "safafsasf in Meeting Room",
//           "type": "Event",
//           "date": "2022-02-09 09:30:00",
//           "employee_id": "",
//           "employee_name": "",
//           "photo": "",
//           "from": "2022-02-09 09:30:00",
//           "to": "2022-02-09 12:00:00"
//       }
//   ]
// }