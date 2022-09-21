import React from 'react';
import { Rnd }  from 'react-rnd';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#405cf5",
    color: "#fff",
    borderRadius: "6px"
  };


function SubmitAssignment () {

    return (
        <>
                
                <Rnd
                    style={style}
                    bounds="parent"
                    default={{
                    x: 10,
                    y: 80,
                    width: '12vw',
                    height: '44px'
                    }}
                >
                    Submit Assignment
                </Rnd>
            
        </>

    );
}

export default SubmitAssignment