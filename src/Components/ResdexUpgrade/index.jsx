import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="resdexdet marginframe">
      <div className="detopheader">
        <div className="">
          <Link to="/resdex/details" className="backbtn">
            <i class="fa-solid fa-arrow-left"></i> Back
          </Link>
          <div className="hetitle my-2">Greenusys Technology</div>
          <div className="txt-muted desc">
            <span className="me-3">Created date: 5 Feb 2023</span>
          </div>
        </div>
        <div className="hedbtn">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <div className="plandet">
            <div className="my-3  pe-2">
              <p className="m-0">Current Plan details</p>
            </div>
            <div className="atextbox mt-3 ms-4">
              <p className="m-0">Plan Name</p>
              <p className="m-0 txt-muted">Basic</p>
              <div className="d-flex justify-content-between mt-4">
                <div className="">
                  <p className="m-0">No of CV access</p>
                  <p className="m-0 txt-muted">150</p>
                </div>
                <div className="">
                  <p className="m-0">No of Emails</p>
                  <p className="m-0 txt-muted">1500</p>
                </div>
                <div className="">
                  <p className="m-0">Extra Benefits</p>
                  <p className="m-0 txt-muted">
                    1 Hot Vacancy Job Posting worth ₹1650
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 pe-2">
              <p className="m-0">Upgrade plan</p>
            </div>
            <div className="atextbox mt-3 ms-4">
              <p className="m-0">Plan Name</p>
              <select class="form-select mt-2 w-50">
                <option selected>Basic</option>
                <option value="1">Plus </option>
                <option value="2">Premium </option>
              </select>
              <div className="d-flex justify-content-between mt-4">
                <div className="detinp">
                  <p className="m-0">No of CV access</p>
                  <input class="form-control mt-2 w-75" type="text" value={150} />
                </div>
                <div className="">
                  <p className="m-0">No of Emails</p>
                  <input class="form-control mt-2 w-75" type="text" value={1500} />
                </div>
                <div className="">
                  <p className="m-0">Extra Benefits</p>
                  <select class="form-select mt-2">
                    <option selected>
                      1 Hot Vacancy Job Posting worth ₹1650
                    </option>
                    <option value="1">
                      2 Hot Vacancy Job Posting worth ₹1650
                    </option>
                    <option value="2">
                      3 Hot Vacancy Job Posting worth ₹1650
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <div className="atextbox pe-2 my-3">
            <div className="">
              <p className="m-0">Date of Purchase</p>
              <p className="m-0 txt-muted">21-Feb-2020</p>
            </div>
          </div>
          <div className="atextbox pe-2 my-3">
            <div className="">
              <p className="m-0">Date of Expire</p>
              <p className="m-0 txt-muted">21-Mar-2020</p>
            </div>
          </div>
          <div className="atextbox pe-2 my-3">
            <div className="">
              <p className="m-0">Last Update</p>
              <p className="m-0 txt-muted">21-Mar-2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
