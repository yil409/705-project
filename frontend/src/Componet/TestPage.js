import React, { useState } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import '../Css/Test.css';
import '.././App.css';
import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from '@mui/x-data-grid';


//countdown Timer
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

  

 function TestPage() {

    const [isStartShown, setIsStartShown] = useState(true);
    const [isSubmitShown, setIsSubmitShown] = useState(false);
    const [key, setKey] = useState(0);
    const [isPlay, setIsPlay] = useState(false);
    const [chosenFile, setChosenFile] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [msg, setMsg] = useState()
    const navigate = useNavigate();
    const timer = null;

    const handleStartClick = event => {
        setIsSubmitShown(true);
        setIsStartShown(false);
        setKey(prevKey => prevKey + 1);
        setIsPlay(true);
        console.log(startButton);
        timer = setInterval(() => {
            setSeconds((seconds) => seconds + 0.01)
        },10)
    };

    const handleSubmitClick = (event) => {
        if(chosenFile == 1){
            setIsPlay(false);
            clearInterval(timer)
            const newResults = results
            newResults.push(seconds)
            localStorage.setItem("results", JSON.stringify(newResults));
            navigate("/result");
        }
        else if(chosenFile == 0){
            setMsg('Choose a file first!')
        }
        else{
            setMsg('Wrong file!')
        }
    };

    const handleEvent = (
        params, // GridRowParams
        event, // MuiEvent<React.MouseEvent<HTMLElement>>
        details, // GridCallbackDetails
      ) => {
        setChosenFile(params.row.id)
      };



    const [results, setResults] = useState(() => {
        const saved0 = localStorage.getItem("results");
        const initialValue0 = JSON.parse(saved0);
        return initialValue0 || [];
      });


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
        console.log(initialValue4);
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
        { id: 3, fileName: 'COMPSCI 705 Recording', dateModified: '05-09-2022'},
        { id: 4, fileName: 'COMPSCI 760 Assignment', dateModified: '04-08-2022' },
    ];

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }
    


    return (
        <>

            
            <div className='TestPage'>
                
                <div className='assignmentPage'>

                    {isStartShown ? 
                        <div className="startAssignment"  style={{border: "solid 1px transparent"}} >
                            <button style={startbuttonstyle}  onClick={handleStartClick}>Start Assignment</button>
                        </div>
                    :null}

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
                        {msg ? <p style={{color:"red"}}>{msg}</p> : <p>Good luck!</p>}
                    </div>

                    {isSubmitShown ? 
                        <div className='submitArea'>
                            <div className="fileUploadArea" style={{border: "solid 1px transparent"}}>
                                
                                <Popup trigger={<button style={uploadbuttonstyle}  >Upload</button>} modal>
                                    {close => (

                                        <div className="modal">

                                            <div>
                                                    <div
                                                        className="head"
                                                        style={{
                                                            width: "fit-content",
                                                            margin: "auto",
                                                        }}
                                                    >
                                                        <h2>Modal Window</h2>
                                                        <strong>Choose a file below to upload</strong>
                                                    </div>
                                                    <br />
                                                    <center>

                                                    <div className="content">
                                                        <div style={{ height: "35vh" ,minHeight:"340px"}}> 
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
                                                                onRowClick={handleEvent}
                                                                // checkboxSelection
                                                            />

                                                        </Box>
                                                        </div> 
                                                    </div>
                                                    </center>
                                                    <div className="actions">
                                                        <div className="chooseFileArea">
                                                             <button style={choosebuttonstyle}  onClick={close} >Choose file</button>
                                                        </div>
                                                        
                                                    </div>    
                                                        

                                                 
                                                    
                                                    
                                            </div>



                                        </div>
                                    )}
                                </Popup>
                            </div>
                            <div className="fileUploadArea" style={{border: "solid 1px transparent"}}>
                                <button style={submitbuttonstyle}  onClick={handleSubmitClick} >Submit Assignment</button>
                            </div>
                        </div>
                    :null}
                </div>

                <div className='rightSideArea'>
                    <div className="countdown">
                        <div className="timer-wrapper">
                            <CountdownCircleTimer
                            key={key}
                            isPlaying={isPlay}
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
            </div>
            
            

        </>
    )
}

export default TestPage