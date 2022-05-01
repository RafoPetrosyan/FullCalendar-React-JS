import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Calendar from "../components/FullCalendar/Calendar";
import history from './browserHistory'

const RouterView = () =>{

    return (
        <HistoryRouter history={history}>

            <Routes>
                <Route path="/">
                    <Route path="calendar" element={<Calendar/>}/>
                </Route>
            </Routes>

        </HistoryRouter>
    )
}

export default RouterView;