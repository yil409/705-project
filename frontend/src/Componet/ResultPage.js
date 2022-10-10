import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '.././App.css';
import '.././Css/Result.css';
import {XYPlot,XAxis,YAxis,VerticalGridLines,HorizontalGridLines,LineSeries} from 'react-vis';
import 'react-vis/dist/style.css';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

export default function ResultPage() {
    const navigate = useNavigate();
    const [results, setResults] = useState(() => {
        const saved0 = localStorage.getItem("results");
        const initialValue0 = JSON.parse(saved0);

        return initialValue0 || [];
      });
    const handleClearClick = (event) => {
        const newResults = [];
        localStorage.setItem("results", JSON.stringify(newResults));
        navigate("/");
    };
    const data = [];
      for (let i = 0; i < results.length; i++){
        data.push({x: i, y: results[i].toFixed(3)});
      }
      const Last10Data = data.slice(-10);
    return (
        <>
            <div class="resultPageContainer">
                <div className="table">
                    <table>
                        <tr>
                            <th>Attemp</th>
                            <th>Time</th>
                        </tr>
                        {Last10Data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.x}</td>
                                <td>{val.y}</td>
                            </tr>
                        )
                        })}
                    </table>
                </div>
                <div className="graph">
                    <div className='yourResult'>
                        <h1>Your Result</h1>
                    </div>
                <XYPlot width={700} height={700} yDomain={[0, Math.max.apply(Math, Last10Data.map(function(o) { return o.y; }))]}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis title="Design"/>
                    <YAxis title="Time"/>
                    <LineSeries data={Last10Data} style={{ fill: 'none' }}/>
                </XYPlot>
                </div>
            </div>

            <div className='instructionsAndPageName'>
                    <div className="instructionsAndPageNameHeader">
                        <FontAwesomeIcon icon={faCircleInfo} size="2x"/>
                        <h3> Results Page</h3>
                    </div>

                    <p>Here are the results from your experiment. </p>
                    <p>With each iteration, how does the size and position of the buttons affect how quickly you are able to submit the assignment? </p>
                    <p></p>
                    <p>When you are ready, click the "Next Page" button.</p>
                </div>

            <div className="nextpageButton">
                <Link to="/" style={{color: "white"}}>RETRY</Link>
            </div>
            <div className="clearButton">
                <button onClick={handleClearClick} >CLEAR RESULT AND RETRY</button>
            </div>
        </>
    )
}