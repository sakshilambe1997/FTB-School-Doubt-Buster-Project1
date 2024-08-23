import React from "react";
import "./Teacher.css";

function Teacher() {
  return (
    <>
      <div className="Teacher-form">
        <h1 className="form-heading">Teacher Form</h1>

        <form>
          <input type="text" placeholder="Name" className="input-box"></input>

          <input type="text" placeholder="Class" className="input-box"></input>

          <input type="text" placeholder="Subject" className="input-box"></input>

          <input type="text" placeholder="Complaint" className="input-box"></input>
        </form>
      </div>
    </>
  );
}

export default Teacher;
