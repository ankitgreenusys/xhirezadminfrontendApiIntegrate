import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";
import "./Styles.css";

const Index = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState({});
  const getEmployee = async () => {
    try {
      const { data } = await api.get("/admin/employeebyId/" + id);
      console.log(data);
      setEmployee(data.employee);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEmployee();
  }, []);

  const changeEmployeeStatus = async (status) => {
    try {
      const { data } = await api.patch(`/admin/changeEmployeeStatus/${id}`, {
        status,
      });
      console.log(data);
      setEmployee({
        ...employee,
        status: status,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="empeedetails marginframe">
      <div className="detopheader">
        <div>
          <Link to="/employee" className="backbtn">
            <i className="fa-solid fa-arrow-left"></i> Back
          </Link>
          <div className="hetitle my-2">
            {employee?.userId?.firstName} {employee?.userId?.lastName}
          </div>
          <div className="txt-muted desc">
            <span className="me-3">
              Joined date: {employee?.workingExperience?.startDate}
            </span>
            <span>Last updated: 10 Feb 2023</span>
          </div>
        </div>
        <div className="hedbtn">
          {employee.status === "Suspended" ? (
            <>
              <button className="mybtn btn-red mx-3">Suspended</button>
              <button
                className="mybtn btn-green me-4"
                onClick={() => changeEmployeeStatus("Active")}
              >
                Reactivate
              </button>
            </>
          ) : (
            employee === "Deleted" && (
              <>
                <button className="mybtn btn-red mx-3">Deleted</button>
                <button
                  onClick={() => changeEmployeeStatus("Active")}
                  className="mybtn btn-blue me-4"
                >
                  Restore
                </button>
              </>
            )
          )}
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className="row">
        <p>Resume</p>
        <div className="col-lg-7">
          <div className="atextbox resumearea"></div>
          <div className="row mt-3">
            <div className="col-lg-8">
              <div className="my-3 d-flex justify-content-between align-items-center pe-2">
                <p className="m-0">Contact Details</p>
                <i className="fa-solid fa-pen txt-blue"></i>
              </div>
              <div className="atextbox">
                <p className="m-0">Address</p>
                <p className="m-0 txt-muted">{employee.address}</p>
              </div>
              <div className="d-flex">
                <div className="atextbox mt-3 me-4">
                  <p className="m-0">City</p>
                  <p className="m-0 txt-muted">{employee.city}</p>
                </div>
                <div className="atextbox mt-3 ms-4">
                  <p className="m-0">State</p>
                  <p className="m-0 txt-muted">{employee.state}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="my-3 d-flex justify-content-between align-items-center pe-2">
                <p className="m-0">Phone Number</p>
                <i className="fa-solid fa-pen txt-blue"></i>
              </div>
              <div className="atextbox">
                <p className="m-0">Phone Number</p>
                <p className="m-0 txt-muted">+91 {employee?.userId?.number}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <div className="atextbox d-flex justify-content-between align-items-center pe-2">
            <div>
              <span className="me-2">Country</span>
              <span className="txt-muted">India</span>
            </div>
            <i className="fa-solid fa-pen txt-blue"></i>
          </div>
          <div>
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Resume</p>
              <i className="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0">Current Job title</p>
              <p className="m-0 txt-muted">{employee.currentJob}</p>
            </div>
            <div className="atextbox mt-3">
              <p className="m-0">Current Job title</p>
              <p className="m-0 txt-muted">{employee.currentJob}</p>
            </div>
          </div>
          <div>
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Job Preference</p>
              <i className="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0">Job type</p>
              <p className="m-0 txt-muted">{employee.jobType}</p>
            </div>
            <div className="atextbox mt-3">
              <p className="m-0">Location</p>
              <p className="m-0 txt-muted">{employee.location} India</p>
            </div>
          </div>
          <div>
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Education</p>
              <i className="fa-solid fa-pen txt-blue"></i>
            </div>
            {employee?.education &&
              employee.education.map((item) => (
                <div key={item._id}>
                  <div className="atextbox">
                    <p className="m-0">Institution</p>
                    <p className="m-0 txt-muted">{item.institution}</p>
                  </div>
                  <div className="atextbox mt-3">
                    <p className="m-0">Area of study</p>
                    <p className="m-0 txt-muted">{item.educationalLevel}</p>
                  </div>
                </div>
              ))}
            <div className="atextbox mt-3">
              <p className="m-0">Skills</p>
              {employee?.skills &&
                employee.skills.map((item, index) => (
                  <p className="m-0 txt-muted" key={index}>
                    {item}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
