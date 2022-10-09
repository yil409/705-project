import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Css/Start.css';


export default function StartPage() {
    const navigate = useNavigate();
                const navigateToDesign = () => {
                navigate('/design');
                }
    return (
        <>
            <main>
                <div className='startPage'>
                
                <div className='heading'><h1>Welcome, students!</h1></div>
                <p>This little exercise will help you understand Fitts’ Law better. Let us begin by defining what Fitts’ Law is.</p>

<p><b>Fitts’ Law</b>:</p>
<p>The amount of time required for a person to move a pointer (e.g., mouse cursor) to a target area is a function of the distance to the target divided by the size of the target. Thus, the longer the distance and the smaller the target's size, the longer it takes.</p>
<p>In this activity, you will be required to upload an assignment within a given period of time using the default User Interface. Later on, you can alter the user interface as you see fit to record the lowest time required to submit the assignment. In turn, we hope this activity helps you in seeing the potential of a well-designed User Interface that complies with the principles of Fitts’ Law.</p>
<p> Go on now, the clock is ticking!</p>

                <div className='center'>
                <button className='startButton' onClick={navigateToDesign}>Start!</button>
                </div>
                </div>
            </main>
        </>
    );
}