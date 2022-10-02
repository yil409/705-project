import React from 'react';
import Countdown from './test/CountdownTimer';
import { Link } from "react-router-dom";
import '../Css/Test.css';

export default function TestPage() {
    return (
        <>

            
            <div className='TestPage'>
                
                <div className='mainArea'>
                    <h1> This is the test mode page </h1>
                </div>

                <div className='rightSideArea'>
                <Countdown/>
                </div>
            </div>
            
            <Link to="/result">SUBMIT</Link>

        </>
    )
}