import React from 'react';
import Countdown from './CountdownTimer';
import { Link } from "react-router-dom";

export default function TestPage() {
    return (
        <>

            <h1> This is the test mode page </h1>
            <div className='TestPage'>
                <div className='assignmentPage'>

                </div>
                <div className='rightSideArea'>
                <Countdown/>
                </div>
            </div>
            
            <Link to="/result">SUBMIT</Link>

        </>
    )
}