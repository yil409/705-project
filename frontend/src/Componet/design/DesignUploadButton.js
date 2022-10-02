import React, { useState } from 'react';
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


function UploadButton () {

    const [uploadInfo, setUploadInfo] = useState({
        width: '200px',
        height: '50px',
        x: 10,
        y: 10
    });

    return (
        <>
                <Rnd
                    style={style}
                    size={{ width: uploadInfo.width, height: uploadInfo.height }}
                    position={{ x: uploadInfo.x, y: uploadInfo.y }}
                    onDragStop={(e, d) => {
                        setUploadInfo({...uploadInfo, x: d.x, y: d.y });
                    }}
                    onResizeStop={(e, direction, ref, delta, position) => {
                        setUploadInfo({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                        });
                    }}
                    bounds="parent"
                >
                    Choose File
                </Rnd>
            
        </>

    );
}

export default UploadButton