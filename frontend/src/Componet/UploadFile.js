import React from "react";


function FileUpload() {
  
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div className="upload-box">
      <input type="file" onChange={handleUpload} />
    </div>
  );
}

export default FileUpload


