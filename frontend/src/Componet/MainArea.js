import React, { useState } from 'react';
import { Button } from 'antd';
import '.././App.css';
import FileUpload from './UploadFile';
import StartAssignment from './StartAssignment';
import SubmitAssignment from './SubmitAssignment';
import Countdown from './CountdownTimer';




function MainArea () {
    //const [isShown, setIsShown] = useState(false);

    //const handleClick = event => {
    // setIsShown(true);
    //};

    return(
        <>

            <div className="main">
                <div className="assignmentPage">
                    
                    <div className="startAssignment"  /*onClick={handleClick} */>
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
                        <p>In this assignment, you will record a video of your group presenting your plan for mini research project. You can choose from&nbsp;a range of&nbsp;<a href="https://canvas.auckland.ac.nz/courses/72023/pages/project-topics-2022" >project topics</a>. You will work on the same project throughout the course in group of 6 classmates. &nbsp;</p>
                        <p>Project plan presentation.</p>
                        <p>This project plan consists of an 8-minute presentation. Participation of all group members is compulsory. The presentation should cover:</p>
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
                        <p>It's expected that the precise nature of your group implementation and your evaluation study will vary considerably depending on the nature of the project.&nbsp;</p>
                        <p>By the time of this presentation, your group should have ensured the feasibility of the implementation of your project. For the rough plan for your implementation, please do&nbsp; "feasibility studies", e.g. touched (downloaded, checked) technologies and confirmed that interactions work. This can be in the form of what is often referred to as an architectural spike. For the evaluation study you should have developed a full draft, even if you don't present it fully in this presentation.</p>
                        <p>Submit the slides and video by the due date. &nbsp;</p>
                    </div>
                
                            
                        <div className="fileUploadArea">
                        <FileUpload />
                        <SubmitAssignment/>
                        </div>
                            

                        
                    
                </div>
            </div>         
            <div className="rightSide">
                 <Countdown/>
            </div>
        </>
    )
        
}

export default MainArea


  