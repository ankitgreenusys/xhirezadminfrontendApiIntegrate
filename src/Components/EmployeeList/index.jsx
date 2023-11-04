import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

const Index = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // Approval request
  // Approved jobs
  // Deleted jobs

  const [isActEmpee, setIsActEmpee] = React.useState(true);
  const [arrActEmpee, setArrActEmpee] = React.useState([]);
  const [isSusEmpee, setIsSusEmpee] = React.useState(false);
  const [arrSusEmpee, setArrSusEmpee] = React.useState([]);
  const [isDelEmpee, setIsDelEmpee] = React.useState(false);
  const [arrDelEmpee, setArrDelEmpee] = React.useState([]);

  React.useEffect(() => {
    setArrActEmpee(data.slice(0, 5));
    setArrSusEmpee(data.slice(5, 10));
    setArrDelEmpee(data.slice(10, 15));
  }, []);

  const handletabs = (id) => {
    setIsActEmpee(false);
    setIsSusEmpee(false);
    setIsDelEmpee(false);

    if (id === 1) setIsActEmpee(true);
    if (id === 2) setIsSusEmpee(true);
    if (id === 3) setIsDelEmpee(true);
  };

  const renderActEmpeetable = () =>
    arrActEmpee.map((idx) => (
      <tr key={idx}>
        <td class="">
          <p className="title mb-0">Mobile Application Developer</p>
          <p className="posted mb-0 txt-muted">Posted: 5 Feb 2023</p>
          <p className="posted txt-muted">Last updated: 10 Feb 2023</p>
        </td>
        <td>Mobile Application Developer</td>
        <td>Noida</td>
        <td>
          <div className="d-flex align-items-center justify-content-start actbtn">
            <Link to="/employee/details" className="mybtn btn-black me-3">
              View
            </Link>
            <div className="mybtn btn-trans">Delete</div>
            <div className="mybtn btn-trans">Suspend</div>
          </div>
        </td>
      </tr>
    ));

  const renderSusEmpeetable = () =>
    arrSusEmpee.map((idx) => (
      <tr key={idx} className="">
        <td>
          <p className="title mb-0">Mobile Application Developer</p>
          <p className="posted mb-0 txt-muted">Posted: 5 Feb 2023</p>
          <p className="posted txt-muted">Last updated: 10 Feb 2023</p>
        </td>
        <td>Mobile Application Developer</td>
        <td>Noida</td>
        <td>
          <div className="d-flex align-items-center justify-content-start actbtn">
            <div className="mybtn btn-black me-3">Reactivate</div>
            <Link to="/employee/details" className="mybtn btn-trans">
              View
            </Link>
            <div className="mybtn btn-trans">Delete</div>
          </div>
        </td>
      </tr>
    ));

  const renderDelEmpeetable = () =>
    arrDelEmpee.map((idx) => (
      <tr key={idx} className="">
        <td>
          <p className="title mb-0">Mobile Application Developer</p>
          <p className="posted mb-0 txt-muted">Posted: 5 Feb 2023</p>
          <p className="posted txt-muted">Last updated: 10 Feb 2023</p>
        </td>
        <td>Mobile Application Developer</td>
        <td>Noida</td>
        <td>
          <div className="d-flex align-items-center justify-content-start actbtn">
            <div className="mybtn btn-black me-3">Restore</div>
            <Link to="/employee/details" className="mybtn btn-trans">
              View
            </Link>
            <div className="mybtn btn-trans">Delete</div>
          </div>
        </td>
      </tr>
    ));

  return (
    <div className="emperlist marginframe">
      <div className="me-5">
        <div className="d-flex align-items-center mb-3">
          <nav className="nav me-auto">
            <span
              onClick={() => handletabs(1)}
              className={"listtabs " + (isActEmpee ? "" : "txt-muted cursor-pointer")}
            >
              Active Employees
            </span>
            <span
              onClick={() => handletabs(2)}
              className={"listtabs " + (isSusEmpee ? "" : "txt-muted cursor-pointer")}
            >
              Suspended Employees
            </span>
            <span
              onClick={() => handletabs(3)}
              className={"listtabs " + (isDelEmpee ? "" : "txt-muted cursor-pointer")}
            >
              Deleted Employees
            </span>
          </nav>
        </div>
        <div className="mt-3">
          <div className="commntable">
            <section>
              <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Field</th>
                      <th>Location</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead></thead>
                  <tbody>
                    {isActEmpee && renderActEmpeetable()}
                    {isSusEmpee && renderSusEmpeetable()}
                    {isDelEmpee && renderDelEmpeetable()}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
