import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '.././Css/Design.css';
import '.././App.css';
import UploadButton from './design/DesignUploadButton';
import StartAssignment from './design/DesignStartAssignment';
import SubmitAssignment from './design/DesignSubmitAssignment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'



function DesignPage () {
    

    return(
        <>

            
                <div className="assignmentPage">
                    
                    <div className="startAssignment" >
                        <StartAssignment />
                    </div>

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
                    </div>

                        <div className="fileUploadArea">
                            <UploadButton/>
                        </div>
                        <div className="fileUploadArea">
                            <SubmitAssignment/>
                        </div>
  
                    
                </div>
                
                <div className='instructionsAndPageName'>
                    <div className="instructionsAndPageNameHeader">
                        <FontAwesomeIcon icon={faCircleInfo} size="2x"/>
                        <h3> Design Page</h3>
                    </div>

                    <p>In this page, you can design how the assignment submission page will look. </p>
                    <p>Click and drag the buttons within the boxed boundaries to resize and change their position. </p>
                    <p></p>
                    <p></p>
                    <p>When you are ready, click the "Next Page" button.</p>
                </div>

                <div className="nextpageButton">
                    <Link to="/popup" style={{color: "white"}}>NEXT PAGE</Link>
                </div>
                
            
        </>
    )
        
}

export default DesignPage


  