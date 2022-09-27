import React, { useEffect, useState } from 'react';
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
    
    const [startInfo, setStartInfo] = useState({
        width: '200px',
        height: '50px',
        x: 10,
        y: 10
    });
    
      return (

        <Rnd
          style={style}
          size={{ width: startInfo.width, height: startInfo.height }}
          position={{ x: startInfo.x, y: startInfo.y }}
          onDragStop={(e, d) => {
            setStartInfo({...startInfo, x: d.x, y: d.y });
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            setStartInfo({
              width: ref.style.width,
              height: ref.style.height,
              ...position
            });
          }}
          bounds="parent"
        >
          Start Assignment
        </Rnd>
        
      );
    
  }

export default StartAssignment
