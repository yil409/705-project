import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '.././App.css';
import '.././Css/Result.css';
import {XYPlot,XAxis,YAxis,VerticalGridLines,HorizontalGridLines,LineSeries} from 'react-vis';
import 'react-vis/dist/style.css';



export default function ResultPage() {
    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];
    return (
        <>
            <div class="resultPageContainer">
                <div className="table">
                    <table>
                        <tr>
                            <th>Design</th>
                            <th>Time</th>
                        </tr>
                        {data.map((val, key) => {
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
                <h1>Your Result</h1>
                <XYPlot width={300} height={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis tickTotal={data.length}/>
                    <YAxis tickTotal={Math.max.apply(Math, data.map(function(o) { return o.y; }))}/>
                    <LineSeries data={data} style={{ fill: 'none' }}/>
                </XYPlot>
                </div>
            </div>
            <div className="nextpageButton">
                <Link to="/" style={{color: "white"}}>RETRY</Link>
            </div>
        </>
    )
}