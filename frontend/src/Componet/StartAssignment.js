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

  class StartAssignment extends React.Component {
    constructor() {
      super();
      this.state = {
        width: 200,
        height: 50,
        x: 10,
        y: 10
      };
    }
  
    render() {
      return (
        <Rnd
          style={style}
          size={{ width: this.state.width, height: this.state.height }}
          position={{ x: this.state.x, y: this.state.y }}
          onDragStop={(e, d) => {
            this.setState({ x: d.x, y: d.y });
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.style.width,
              height: ref.style.height,
              ...position
            });
          }}
        >
          Rnd
        </Rnd>
      );
    }
  }

//function StartAssignment () {

 //   return (
 //       <>
            
  //              <Rnd
 //                   style={style}
  //                  bounds="parent"
 //                   default={{
  //                  x: 280,
  //                  y: 20,
  //                  width: '12vw',
  //                  height: '44px'
  //                  }}
  //              >
   //                 Start Assignment
  //              </Rnd>
           
  //      </>

  //  );
//}

export default StartAssignment
