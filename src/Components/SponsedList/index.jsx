import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

const Index = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // Approval request
  // Approved jobs
  // Deleted jobs

  const [isEmpeelis, setIsEmpeelis] = React.useState(true);
  const [arrEmpeelis, setArrEmpeelis] = React.useState([]);
  const [isEmperlis, setIsEmperlis] = React.useState(false);
  const [arrEmperlis, setArrEmperlis] = React.useState([]);

  React.useEffect(() => {
    setArrEmpeelis(data.slice(0, 7));
    setArrEmperlis(data.slice(7, 15));
  }, []);

  const handletabs = (id) => {
    setIsEmpeelis(false);
    setIsEmperlis(false);

    if (id === 1) setIsEmpeelis(true);
    if (id === 2) setIsEmperlis(true);
  };

  const renderEmpeelistable = () =>
    arrEmpeelis.map((idx) => (
      <tr key={idx}>
        <td class="">
          <p className="title mb-0">Mohit Sharma</p>
          <p className="posted mb-0 txt-muted">Digital Marketer</p>
        </td>
        <td>Basic</td>
        <td>20-Feb-2023</td>
        <td>20-Mar-2023</td>
        <td>
          <div className="status">Active</div>
        </td>
        <td>
          <div className="mybtn btn-trans ps-0">Download</div>
        </td>
      </tr>
    ));

  const renderEmperlistable = () =>
    arrEmperlis.map((idx) => (
      <tr key={idx}>
        <td class="">
          <p className="title mb-0">Greenusys Technology</p>
          <p className="posted mb-0 txt-muted">Software Company</p>
        </td>
        <td>Basic</td>
        <td>20-Feb-2023</td>
        <td>20-Mar-2023</td>
        <td>
          <div className="status">Active</div>
        </td>
        <td>
          <div className="mybtn btn-trans ps-0">Download</div>
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
              className={
                "listtabs " + (isEmpeelis ? "" : "txt-muted cursor-pointer")
              }
            >
              Employees List
            </span>
            <span
              onClick={() => handletabs(2)}
              className={
                "listtabs " + (isEmperlis ? "" : "txt-muted cursor-pointer")
              }
            >
              Employers List
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
                      <th>
                        {(isEmpeelis ? "Employee" : "Company" )+ " Name"}
                      </th>
                      <th>Plan Detail</th>
                      <th>Date of Purchased</th>
                      <th>Date of Expiry</th>
                      <th>Status</th>
                      <th>Resume</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead></thead>
                  <tbody>
                    {isEmpeelis && renderEmpeelistable()}
                    {isEmperlis && renderEmperlistable()}
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
