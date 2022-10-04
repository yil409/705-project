import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '.././App.css';


export default function ResultPage() {
    return (
        <>

            <h1> This is the result page </h1>
            
            <div className="nextpageButton"><Link to="/" style={{color: "white"}}>RETRY</Link></div>
            
            
        </>
    )
}