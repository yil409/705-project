import React from 'react';
import { Rnd }  from 'react-rnd';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#405cf5",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  };



function StartAssignment () {

    return (
        <>
            
                <Rnd
                    style={style}
                    bounds="parent"
                    default={{
                    x: 280,
                    y: 20,
                    width: '12vw',
                    height: '44px'
                    }}
                >
                    Start Assignment
                </Rnd>
           
        </>

    );
}

export default StartAssignment
