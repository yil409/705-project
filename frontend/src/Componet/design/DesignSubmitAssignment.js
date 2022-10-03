import React, {useEffect,  useState } from 'react';
import { Rnd }  from 'react-rnd';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#00457C",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  };


function SubmitAssignment () {

    const [submitInfo, setSubmitInfo] = useState({
        width: '200px',
        height: '50px',
        x: 10,
        y: 10
    });
    
    useEffect(() => {
        // storing submit button size and position
        localStorage.setItem("submitButton", JSON.stringify(submitInfo));
      }, [submitInfo]);
      

    return (
        <>
                <Rnd
                    style={style}
                    size={{ width: submitInfo.width, height: submitInfo.height }}
                    position={{ x: submitInfo.x, y: submitInfo.y }}
                    onDragStop={(e, d) => {
                        setSubmitInfo({...submitInfo, x: d.x, y: d.y });
                    }}
                    onResizeStop={(e, direction, ref, delta, position) => {
                        setSubmitInfo({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                        });
                    }}
                    bounds="parent"
                >
                    Submit Assignment
                </Rnd>
            
        </>

    );
}

export default SubmitAssignment