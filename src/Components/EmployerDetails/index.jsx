import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

const Index = () => {
  const [isSuspended, setIsSuspended] = React.useState(false);
  return (
    <div className="emperdetails marginframe">
      <div className="detopheader">
        <div className="">
          <Link to="/employer" className="backbtn">
            <i class="fa-solid fa-arrow-left"></i> Back
          </Link>
          <div className="hetitle my-2">Greenusys Technology</div>
          <div className="txt-muted desc">
            <span className="me-3">Created date: 5 Feb 2023</span>
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
        <div className="col-lg-7">
          <div className="cmpydet">
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Job Preference</p>
              <i class="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0 txt-muted desc">
                See Makeen Technologies salaries collected directly from
                employees and jobs on Indeed. Salary information comes from 0
                data points collected directly from employees, users, and past
                and present job advertisements on Indeed in the past 36 months.
                Please note that all salary figures are approximations based
                upon third party submissions to Indeed. These figures are given
                to the Indeed users for the purpose of generalised comparison
                only. Minimum wage may differ by jurisdiction and you should
                consult the employer for actual salary figures.
              </p>
            </div>
          </div>
          <div className="cmpydet">
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Why Join us</p>
              <i class="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0 txt-muted desc">
                See Makeen Technologies salaries collected directly from
                employees and jobs on Indeed. Salary information comes from 0
                data points collected directly from employees, users, and past
                and present job advertisements on Indeed in the past 36 months.
                Please note that all salary figures are approximations based
                upon third party submissions to Indeed. These figures are given
                to the Indeed users for the purpose of generalised comparison
                only. Minimum wage may differ by jurisdiction and you should
                consult the employer for actual salary figures.
              </p>
            </div>
          </div>
          <div className="cmpydet">
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Job Preference</p>
              <i class="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0 txt-muted desc">
                See Makeen Technologies salaries collected directly from
                employees and jobs on Indeed. Salary information comes from 0
                data points collected directly from employees, users, and past
                and present job advertisements on Indeed in the past 36 months.
                Please note that all salary figures are approximations based
                upon third party submissions to Indeed. These figures are given
                to the Indeed users for the purpose of generalised comparison
                only. Minimum wage may differ by jurisdiction and you should
                consult the employer for actual salary figures.
              </p>
            </div>
          </div>
          <div className="row jobpostlist mt-4">
            <p className="mb-3">Posted Jobs</p>
            <div className="col-lg-3 col-md-6">
              <div className="jobpost">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="deginat">Mobile Application Developer</div>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <p class="joblink">
                  View Job
                  <i class="fa-solid fa-arrow-up-right-from-square ms-2 txt-blue"></i>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="jobpost">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="deginat">Mobile Application Developer</div>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <p class="joblink">
                  View Job
                  <i class="fa-solid fa-arrow-up-right-from-square ms-2 txt-blue"></i>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="jobpost">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="deginat">Mobile Application Developer</div>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <p class="joblink">
                  View Job
                  <i class="fa-solid fa-arrow-up-right-from-square ms-2 txt-blue"></i>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="jobpost">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="deginat">Mobile Application Developer</div>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <p class="joblink">
                  View Job
                  <i class="fa-solid fa-arrow-up-right-from-square ms-2 txt-blue"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <div className="atextbox d-flex justify-content-between align-items-center pe-2 my-3">
            <div className="">
              <p className="m-0">Field</p>
              <p className="m-0 txt-muted">Software Company</p>
            </div>
            <i class="fa-solid fa-pen txt-blue"></i>
          </div>
          <div className="">
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Other details</p>
              <i class="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0">Headquarter</p>
              <p className="m-0 txt-muted">Noida, India</p>
            </div>
            <div className="atextbox mt-3">
              <p className="m-0">Company size</p>
              <p className="m-0 txt-muted">0 - 50 employees</p>
            </div>
            <div className="atextbox mt-3">
              <p className="m-0">Website url</p>
              <p className="m-0 txt-muted">www.greenusys.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
