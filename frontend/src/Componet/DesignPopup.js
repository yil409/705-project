import React, { useState } from 'react';
import Box from "@mui/material/Box";

import { Link, renderMatches } from "react-router-dom";

import FileSelection from './design/DesignFileSelection';

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { DataGrid } from '@mui/x-data-grid';



import '.././App.css';
import '../Css/Test.css';


const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">Too lale...</div>;
    }

    return (
        <div className="timer">
            <div className="text">You can do in</div>
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
        </div>
    );
};

export default function DesignPopup() {

    const [startButton, setStartButton] = useState(() => {
        // getting stored start button value
        const saved = localStorage.getItem("startButton");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    const [submitButton, setSubmitButton] = useState(() => {
        // getting stored submit button value
        const saved2 = localStorage.getItem("submitButton");
        const initialValue2 = JSON.parse(saved2);
        return initialValue2 || "";
    });
    const [uploadButton, setUploadButton] = useState(() => {
        // getting stored upload button value
        const saved3 = localStorage.getItem("uploadButton");
        const initialValue3 = JSON.parse(saved3);
        return initialValue3 || "";
    });
    const [chooseButton, setChooseButton] = useState(() => {
        // getting stored upload button value
        const saved4 = localStorage.getItem("confirmButton");
        const initialValue4 = JSON.parse(saved4);
        return initialValue4 || "";
    });

    const startbuttonstyle = {
        width: startButton.width,
        height: startButton.height,
        marginLeft: startButton.x,
        marginTop: startButton.y
    };
    const uploadbuttonstyle = {
        width: uploadButton.width,
        height: uploadButton.height,
        marginLeft: uploadButton.x,
        marginTop: uploadButton.y
    };
    const submitbuttonstyle = {
        width: submitButton.width,
        height: submitButton.height,
        marginLeft: submitButton.x,
        marginTop: submitButton.y
    };
    const choosebuttonstyle = {
        width: chooseButton.width,
        height: chooseButton.height,
        marginLeft: chooseButton.x,
        marginTop: chooseButton.y
    };

    const columns = [
        {
            field: 'id', headerName: 'ID', width: 90
        },
        {
            field: 'fileName',
            headerName: 'File name',
            width: 550,
        },
        {
            field: 'dateModified',
            headerName: 'Date modified',
            width: 160,
        },
    ];

    const rows = [
        { id: 1, fileName: 'COMPSCI 705 Assignment', dateModified: '04-10-2022' },
        { id: 2, fileName: 'COMPSCI 705 Slides', dateModified: '01-10-2022' },
        { id: 3, fileName: 'COMPSCI 705 Recording', dateModified: '05-09-2022' },
        { id: 4, fileName: 'COMPSCI 760 Assignment', dateModified: '04-08-2022' },
    ];

    return (
        <div>



            <div style={{
                display: 'flex',
                position: 'absolute',
                zIndex: '1',
            }}>

                {/* <div className='TestPage'> */}
                <div className='assignmentPage'>
                    <div className="title">
                        <h1>Project plan presentation</h1>

                        <div className="detail">
                            <span >Due: &nbsp; Aug 23 by&nbsp;11:59pm</span>
                            <span >Points: &nbsp; 5 </span>
                            <span >Submitting a file upload</span>
                        </div>
                    </div>

                    <div className="description">
                        <p>First, please read the &nbsp;<a href="https://canvas.auckland.ac.nz/courses/72023/pages/overview-of-the-course-group-project" >Course Group Project Overview</a>.</p>
                        <p>In this assignment, you will record a video of your group presenting your plan for mini research project. You can choose from&nbsp;a range of&nbsp;<a href="https://canvas.auckland.ac.nz/courses/72023/pages/project-topics-2022" >project topics</a>. You will work on the same project throughout the course in group of 6 classmates. &nbsp;Project plan presentation.&nbsp;This project plan consists of an 8-minute presentation. Participation of all group members is compulsory. The presentation should cover:</p>
                        <ol>
                            <li>The context and motivation for your project.</li>
                            <li>The research question.</li>
                            <li>The project plan including:<br />
                                <ul>
                                    <li>the implementation</li>
                                    <li>the evaluation study that will allow you to answer the research question, and</li>
                                    <li>the data that you intend to collect.</li>
                                    <li>confirmation that your implementation is feasible, will enable the study, and that the features needed for the study are given priority.</li>
                                </ul>
                            </li>
                            <li>The expected results and the contribution of the research.</li>
                        </ol>
                        <p>By the time of this presentation, your group should have ensured the feasibility of the implementation of your project. For the rough plan for your implementation, please do&nbsp; "feasibility studies", e.g. touched (downloaded, checked) technologies and confirmed that interactions work. This can be in the form of what is often referred to as an architectural spike. For the evaluation study you should have developed a full draft, even if you don't present it fully in this presentation.</p>
                        <p> Submit the slides and video by the due date. &nbsp;</p>
                        <p>Good luck!</p>
                    </div>
                    <div className='submitArea'>
                        <div className="fileUploadArea" style={{ border: "solid 1px transparent" }}>
                            <button style={uploadbuttonstyle} disabled>Upload</button>
                        </div>
                        <div className="fileUploadArea" style={{ border: "solid 1px transparent" }}>
                            {/* <button style={submitbuttonstyle}  onClick={handleSubmitClick} >Submit Assignment</button> */}
                            <button style={submitbuttonstyle} disabled>Submit Assignment</button>
                        </div>
                    </div>
                </div>

                <div className='rightSideArea'>
                    <div className="countdown">
                        <div className="timer-wrapper">
                            <CountdownCircleTimer
                                // key={key}
                                isPlaying={false}
                                duration={10}
                                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                                colorsTime={[10, 6, 3, 0]}
                                onComplete={() => ({ shouldRepeat: false, delay: 1 })}
                            >
                                {renderTime}
                            </CountdownCircleTimer>
                        </div>
                    </div>
                </div>

                <div className="nextpageButton"> <Link to="/test" style={{ color: "white" }}>NEXTPAGE</Link> </div>
            </div>

            <div style={{
                position: 'relative',
                zIndex: '2',
            }}>

                <center>
                    <Box

                    >
                        <div style={{ height: 1000, width: 1000, background: "white", border: "solid", }}>
                            <div
                                className="head"
                                style={{
                                    width: "fit-content",
                                    margin: "auto",
                                }}
                            >
                                <h1
                                    style={{
                                        color: "blue",
                                    }}
                                >
                                    This is the popup modal window's designing page!
                                </h1>
                                <strong>Choose a file below to upload</strong>
                            </div>

                            <br />

                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    margin: "auto",
                                    width: "fit-content",
                                    "& > :not(style)": {
                                        m: 1,
                                        width: 900,
                                        height: 300,
                                    },
                                }}
                            >
                                <DataGrid autoHeight
                                    rows={rows}
                                    columns={columns}
                                />

                            </Box>
                            <div
                                style={{
                                    width: '80%',
                                    height: '50%',
                                    borderWidth: 1,
                                    padding: 20,
                                    borderColor: 'rgb(184, 183, 183)',
                                    borderStyle: 'dashed',
                                }}
                            >
                                <FileSelection />
                            </div>


                        </div>
                    </Box>
                </center>

            </div>
        </div >

    );





}

