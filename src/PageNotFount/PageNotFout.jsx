import React from "react";
import { useNavigate } from "react-router-dom";
import './PageNotFount.css';

const PageNotFount = () =>{

    const navigate = useNavigate();

    return (
        <div className="pageNotFound">
            <h3 className="textpageNotFound">PAGE NOT FOUND</h3>
            <button className="btnpageNotFound" onClick={() => navigate('/calendar')}>Back Go</button>
        </div >
    )
}

export default PageNotFount;