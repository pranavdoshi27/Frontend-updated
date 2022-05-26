import React, { Fragment, useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";
// import Pdf from "./Pdf";
//import { Document, Page } from "react-pdf";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    setUploadPercentage(100);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      });
      console.log("in post");
      // Clear percentage
      setTimeout(() => setUploadPercentage(100), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(100);
    }
  };

  //ur code
  console.log(uploadedFile.filePath);
  // const handleClick = () => {
  //   window.open(uploadedFile.filePath);
  // };
  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className="form-control mb-4">
          <input
            type="file"
            className="form-control-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="form-control-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <div className="form-control mb-4">
          <Progress percentage={uploadPercentage} />
        </div>

        <div class="d-grid gap-2 d-md-block">
          <input
            type="submit"
            value="Upload"
            className="btn btn-success "
            onClick={onSubmit}
          />
        </div>
      </form>
      {uploadedFile ? (
        <div className="row mt-6">
          <div className="d-grid gap-2 col-6 mx-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
            <button className="btn btn btn-success ">
              <a
                style={{ underline: "none", color: "white" }}
                href={`https://drive.google.com/drive/folders/1HccCNsmNfnVHaRCYtn9g60R1EVh0Pjf8`}
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
            </button>
          </div>
        </div>
      ) : null}

      {/* <Pdf filePath={uploadedFile.filePath}/> */}
    </Fragment>
  );
};

export default FileUpload;
