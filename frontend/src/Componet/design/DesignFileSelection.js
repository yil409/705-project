import React, { useEffect, useState } from 'react';
import { Rnd }  from 'react-rnd';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';


import Button from '@mui/material/Button';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


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

  const style_modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  function FileSelection () {
    
    const [confirmInfo, setConfirmInfo] = useState({
        width: '200px',
        height: '50px',
        x: 10,
        y: 10
    });

    useEffect(() => {
      // storing choose file button size and position
      localStorage.setItem("confirmButton", JSON.stringify(confirmInfo));
    }, [confirmInfo]);

    function myFunction(){
      console.log("DDSS")
    }

    const [drag, setDrag] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    // const eventControl = (event) => {


    //   if (event.type === 'mousemove' || event.type === 'touchmove') {
    //     setDrag(true)
    //   }
  
    //   if (event.type === 'mouseup' || event.type === 'touchend') {
    //     setTimeout(() => {
    //       setDrag(false);
    //     }, 100);
  
    //   }
    // }

    // const handleClick = () =>
    // Dialog({
    //   // set the dialog's title
    //   title: "There's change in the Air!",
    //   // include some text to show the user, NOTE: this could be any arbitrary
    //   // component, not just a string.
    //   contentText: "Here's what's new in version 2.0 ...",
    //   // don't render the cancel button, because in this case the only thing a
    //   // user can do is "dismiss" the notification.
    //   cancelButton: false,
    //   // Mui defaults to text buttons, let's use a contained one styled with
    //   // the theme's primary color
    //   submitButton: {
    //     children: "Dismiss",
    //     props: {
    //       variant: "contained",
    //       color: "primary"
    //     }
    //   }});

    
      return (

        














        <Rnd

          onDrag={()=>setDrag(true)}

          style={style}
          size={{ width: confirmInfo.width, height: confirmInfo.height }}
          position={{ x: confirmInfo.x, y: confirmInfo.y }}
          onDragStop={(e, d) => {
            setConfirmInfo({...confirmInfo, x: d.x, y: d.y });

            setDrag(false)
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
          <div 
          // style={{height:"100vh",width:"100vh"}} 
          // onClick={setOpen(true)}
          onClick={()=>{if(drag){return}
           handleClickOpen()}}
          >
          Confirm
          </div>

          {/* <Dialog
            open={open}
            onClose={handleClose}
            aria-describedby="alert-dialog-description"
          >
            
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please confirm your submission
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>NO</Button>
              <Button onClick={handleClose} autoFocus>
                YES
              </Button>
            </DialogActions>
          </Dialog> */}



          {/* <Modal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="modal-modal-title"
          >
            <Box sx={style_modal}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                You have upload the file successfully
              </Typography>
            </Box>
          </Modal>   */}
        </Rnd>
        
      );
    
  }

export default FileSelection
