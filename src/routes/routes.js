import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Calendar from "../components/FullCalendar/Calendar";
import PageNotFount from "../PageNotFount/PageNotFout";
import history from './browserHistory'

const RouterView = () =>{

    return (
        <HistoryRouter history={history}>

            <Routes>
                <Route path="/">
                    <Route path="calendar" element={<Calendar/>}/>
                </Route>
                <Route path="*" element={<PageNotFount/>}/>
            </Routes>

        </HistoryRouter>
    )
}

export default RouterView;