import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

const Index = () => {
  const [isSuspended, setIsSuspended] = React.useState(false);
  return (
    <div className="empeedetails marginframe">
      <div className="detopheader">
        <div className="">
          <Link to="/employee" className="backbtn">
            <i class="fa-solid fa-arrow-left"></i> Back
          </Link>
          <div className="hetitle my-2">Mohit Kumar</div>
          <div className="txt-muted desc">
            <span className="me-3">Joined date: 5 Feb 2023</span>
            <span>Last updated: 10 Feb 2023</span>
          </div>
        </div>
        <div className="hedbtn">
          {isSuspended ? (
            <>
              <button
                onClick={() => setIsSuspended(false)}
                className="mybtn btn-red mx-3"
              >
                Suspended
              </button>
              <button className="mybtn btn-green me-4">Reactivate</button>
            </>
          ) : (
            <>
              <button className="mybtn btn-red mx-3">Deleted</button>
              <button
                onClick={() => setIsSuspended(true)}
                className="mybtn btn-blue me-4"
              >
                Restore
              </button>
            </>
          )}
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className="row">
        <p className="">Resume</p>
        <div className="col-lg-7">
          <div className="atextbox resumearea"></div>
          <div className="row mt-3">
            <div className="col-lg-8">
              <div className="my-3 d-flex justify-content-between align-items-center pe-2">
                <p className="m-0">Contact Details</p>
                <i class="fa-solid fa-pen txt-blue"></i>
              </div>
              <div className="atextbox">
                <p className="m-0">Address</p>
                <p className="m-0 txt-muted">New Delhi, Delhi</p>
              </div>
              <div className="d-flex">
                <div className="atextbox mt-3 me-4">
                  <p className="m-0">City</p>
                  <p className="m-0 txt-muted">Delhi</p>
                </div>
                <div className="atextbox mt-3 ms-4">
                  <p className="m-0">State</p>
                  <p className="m-0 txt-muted">New Delhi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="my-3 d-flex justify-content-between align-items-center pe-2">
                <p className="m-0">Phone Number</p>
                <i class="fa-solid fa-pen txt-blue"></i>
              </div>
              <div className="atextbox">
                <p className="m-0">Phone Number</p>
                <p className="m-0 txt-muted">+91 98745 95668</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <div className="atextbox d-flex justify-content-between align-items-center pe-2">
            <div className="">
              <span class="me-2">Country</span>
              <span class="txt-muted">India</span>
            </div>
            <i class="fa-solid fa-pen txt-blue"></i>
          </div>
          <div className="">
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Resume</p>
              <i class="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0">Current Job title</p>
              <p className="m-0 txt-muted">Web Designer</p>
            </div>
            <div className="atextbox mt-3">
              <p className="m-0">Current Job title</p>
              <p className="m-0 txt-muted">Web Designer</p>
            </div>
          </div>
          <div className="">
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Job Preference</p>
              <i class="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0">Job type</p>
              <p className="m-0 txt-muted">Full time</p>
            </div>
            <div className="atextbox mt-3">
              <p className="m-0">Location</p>
              <p className="m-0 txt-muted">Noida, India</p>
            </div>
          </div>
          <div className="">
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Education</p>
              <i class="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0">Institution</p>
              <p className="m-0 txt-muted">Ducat institute</p>
            </div>
            <div className="atextbox mt-3">
              <p className="m-0">Area of study</p>
              <p className="m-0 txt-muted">Web Designing</p>
            </div>
            <div className="atextbox mt-3">
              <p className="m-0">Skills</p>
              <p className="m-0 txt-muted">Web Designing</p>
              <p className="m-0 txt-muted">Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
