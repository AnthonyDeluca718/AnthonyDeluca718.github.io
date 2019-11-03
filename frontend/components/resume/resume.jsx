import React from 'react';
import { Link, hashHistory } from 'react-router';

class Resume extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <object data="./assets/resume.pdf" type="application/pdf" className="resume-object">
          Your browser does not support pdfs, <a href="./assets/resume.pdf">click here to
          download the file.</a>
        </object>
      </div>
    );
  }
}

export default Resume;
