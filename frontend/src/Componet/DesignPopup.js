import React from 'react';  
import Box from "@mui/material/Box";

import { Link, renderMatches } from "react-router-dom";

import FileSelection from './design/DesignFileSelection';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { DataGrid } from '@mui/x-data-grid';

import '.././App.css';

import { styled } from '@mui/material/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'


export default function DesignPopup() {


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
        <div>
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
            <center>
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
                        // checkboxSelection
                    />

                    




                </Box>
                <Box
                    sx={{
                        // float: left,
                        width: 0.8,
                        height: 25,
                        border: 1 ,
                        padding: 20,
                    }}
                // className="fileUploadArea"
                >
                    <FileSelection onSubmit={handleSubmit}/>           
                </Box>
            </center>
            <div className='instructionsAndPageName'>
                    <div className="instructionsAndPageNameHeader">
                        <FontAwesomeIcon icon={faCircleInfo} size="2x"/>
                        <h3> Design Page</h3>
                    </div>

                    <p>In this page, you can design how the assignment popup modal window will look. </p>
                    <p>Click and drag the buttons within the boxed boundaries to resize and change their position. </p>
                    <p></p>
                    <p>When you are ready, click the "Next Page" button.</p>
                </div>

            <div className="nextpageButton"> <Link to="/test" style={{color: "white"}}>NEXT PAGE</Link> </div>
        </div>
        
    );
    
}

