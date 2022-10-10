import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Css/Start.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

export default function StartPage() {
    const navigate = useNavigate();
                const navigateToDesign = () => {
                navigate('/design');
                }
    return (
        <>
            <main>
                <div className='startPage'>
                
                <div className='heading'>
                    <h1>Welcome, students!</h1>
                    <button className='startButton' onClick={navigateToDesign}>Start!</button>
                </div>
                <div className='breakBar'> </div>
                    <h2>Introduction</h2>
                    <p>This little exercise will help you understand Fitts’ Law better. Let us begin by defining what Fitts’ Law is.</p>

                    <p style={{ paddingLeft: 20, marginBottom: 0}}><b>Fitts’ Law</b>:</p>
                    <p style={{ paddingLeft: 20 }}>The amount of time required for a person to move a pointer (e.g., mouse cursor) to a target area is a function of the distance to the target divided by the size of the target. Thus, the longer the distance and the smaller the target's size, the longer it takes.</p>
                    
                    <p>In this activity, you will be required to upload an assignment within a given period of time using the default User Interface (UI). Later on, you can alter the UI as you see fit to record the lowest time required to submit the assignment. In turn, we hope this activity helps you in seeing the potential of a well-designed User Interface that complies with the principles of Fitts’ Law.</p>
                    
                    <h2>Overview</h2>
                    <p> There are 3 main parts to this activity: The <b>Design</b> phase, the <b>Testing</b> phase and the <b>Results</b> evaluation.</p>
                    <p> This app is situated in the context of Canvas. We are assuming you have previous experience uploading assignments to Canvas, and that you are generally familiar with this process. This app will allow you to experiement with the UI of this, to investigate how Fitts' Law can be applied.</p>
                    <p> During the <b>Design</b> phase, you will change the position and size of the buttons. There are two design phases, these being: </p>
                    <ul>
                        <li>The Assignment Webpage</li>
                        <li>The File Upload Popup</li>
                    </ul>
                    <p> During the <b>Testing</b> phase, you will experiment with the design you have just created. You should complete this as quickly as you can. <b>Make sure to submit the correct file!</b> </p>
                    <p> Finally, during the <b>Results</b> evaluation you will be able to see the time it took you to complete each iteration of this exercise. Use this information to help design a better UI in the next iteration.</p>

                    <br></br>
                    <p style={{ paddingLeft: 20 }}> <i>Go on now, the clock is ticking!</i></p>
                    
                    <div className='breakBar'> </div>
                </div>


                <div className='instructionsAndPageName'>
                    <div className="instructionsAndPageNameHeader">
                        <FontAwesomeIcon icon={faCircleInfo} size="2x"/>
                        <h3> Help </h3>
                    </div>

                    <p>This help dialog will guide you throughout this activity. </p>
                    <p>It will display instructions for each step in the process, so if you feel lost at any point, look here for instructions pertaining to what to do! </p>
                    <p></p>

                    <p>Press "Start" when you feel ready to begin.</p>
                </div>

            </main>
        </>
    );
}