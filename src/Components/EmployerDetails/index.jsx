import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";
import "./Styles.css";

const Index = () => {
  const { id } = useParams();

  const [employer, setEmployer] = useState({});
  const getEmployer = async () => {
    try {
      const { data } = await api.get("/admin/employerbyId/" + id);
      console.log(data);
      setEmployer(data.employer);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEmployer();
  }, []);

  const changeEmployerStatus = async (status) => {
    try {
      const { data } = await api.patch(`/admin/changeEmployerStatus/${id}`, {
        status,
      });
      console.log(data);
      setEmployer({
        ...employer,
        status: status,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="emperdetails marginframe">
      <div className="detopheader">
        <div className="">
          <Link to="/employer" className="backbtn">
            <i class="fa-solid fa-arrow-left"></i> Back
          </Link>
          <div className="hetitle my-2">{employer.companyName}</div>
          <div className="txt-muted desc">
            <span className="me-3">
              Created date: {employer?.employerId?.created}
            </span>
          </div>
        </div>
        <div className="hedbtn">
          {employer.status === "Suspended" ? (
            <>
              <button className="mybtn btn-red mx-3">Suspended</button>
              <button
                className="mybtn btn-green me-4"
                onClick={() => changeEmployerStatus("Active")}
              >
                Reactivate
              </button>
            </>
          ) : (
            employer === "Deleted" && (
              <>
                <button className="mybtn btn-red mx-3">Deleted</button>
                <button
                  onClick={() => changeEmployerStatus("Active")}
                  className="mybtn btn-blue me-4"
                >
                  Restore
                </button>
              </>
            )
          )}
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <div className="cmpydet">
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">About Us</p>
              <i class="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0 txt-muted desc">
               {employer.aboutCompany}
              </p>
            </div>
          </div>
          <div className="cmpydet">
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Why Join us</p>
              <i class="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0 txt-muted desc">{employer.whyJoinCompany}</p>
            </div>
          </div>
          <div className="cmpydet">
            <div className="my-3 d-flex justify-content-between align-items-center pe-2">
              <p className="m-0">Salaries</p>
              <i class="fa-solid fa-pen txt-blue"></i>
            </div>
            <div className="atextbox">
              <p className="m-0 txt-muted desc">
                {employer.salaries}
              </p>
            </div>
          </div>
          <div className="row jobpostlist mt-4">
            <p className="mb-3">Posted Jobs</p>
            {employer.jobs.map((job) => (
              <div className="col-lg-3 col-md-6">
                <div className="jobpost">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="deginat">{employer.jobTitle}</div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                  <p class="joblink">
                    View Job
                    <i class="fa-solid fa-arrow-up-right-from-square ms-2 txt-blue"></i>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <div className="atextbox d-flex justify-content-between align-items-center pe-2 my-3">
            <div className="">
              <p className="m-0">Field</p>
              <p className="m-0 txt-muted">{employer.industry}</p>
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
              <p className="m-0 txt-muted">{employer.headquarter}</p>
            </div>
            <div className="atextbox mt-3">
              <p className="m-0">Company size</p>
              <p className="m-0 txt-muted">
                {employer?.size?.min}-{employer?.size?.max} employees
              </p>
            </div>
            <div className="atextbox mt-3">
              <p className="m-0">Website url</p>
              <p className="m-0 txt-muted">{employer.website}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
