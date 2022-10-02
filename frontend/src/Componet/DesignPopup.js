import React from 'react';
import { Link } from "react-router-dom";
import '.././Css/Design.css';



export default function DesignPopup() {
    return (
        <>

            <h1> This is the popup modal window's designing page</h1>
            <div className="nextpageButton"> <Link to="/test" style={{color: "white"}}>NEXTPAGE</Link> </div>
            
        </>
    )
}