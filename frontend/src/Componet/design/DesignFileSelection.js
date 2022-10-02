import React, { useEffect, useState } from 'react';
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

  function FileSelection () {
    
    const [confirmInfo, setConfirmInfo] = useState({
        width: '200px',
        height: '50px',
        x: 10,
        y: 10
    });
    
      return (

        <Rnd
          style={style}
          size={{ width: confirmInfo.width, height: confirmInfo.height }}
          position={{ x: confirmInfo.x, y: confirmInfo.y }}
          onDragStop={(e, d) => {
            setConfirmInfo({...confirmInfo, x: d.x, y: d.y });
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            setConfirmInfo({
              width: ref.style.width,
              height: ref.style.height,
              ...position
            });
          }}
          bounds="parent"
        >
          Confirm
        </Rnd>
        
      );
    
  }

export default FileSelection
