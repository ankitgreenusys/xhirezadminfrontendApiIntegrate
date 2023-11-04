import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

const Index = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // Approval request
  // Approved jobs
  // Deleted jobs

  const [isActEmper, setIsActEmper] = React.useState(true);
  const [arrActEmper, setArrActEmper] = React.useState([]);
  const [isSusEmper, setIsSusEmper] = React.useState(false);
  const [arrSusEmper, setArrSusEmper] = React.useState([]);
  const [isDelEmper, setIsDelEmper] = React.useState(false);
  const [arrDelEmper, setArrDelEmper] = React.useState([]);

  React.useEffect(() => {
    setArrActEmper(data.slice(0, 5));
    setArrSusEmper(data.slice(5, 10));
    setArrDelEmper(data.slice(10, 15));
  }, []);

  const handletabs = (id) => {
    setIsActEmper(false);
    setIsSusEmper(false);
    setIsDelEmper(false);

    if (id === 1) setIsActEmper(true);
    if (id === 2) setIsSusEmper(true);
    if (id === 3) setIsDelEmper(true);
  };

  const renderActEmpertable = () =>
    arrActEmper.map((idx) => (
      <tr key={idx}>
        <td class="">
          <p className="title mb-0">Greenusys technology</p>
          <p className="posted mb-0 txt-muted">Company Created: 5 Feb 2023</p>
        </td>
        <td>Software Industry</td>
        <td>245</td>
        <td>
          <div className="d-flex align-items-center justify-content-start actbtn">
            <Link to="/employer/details" className="mybtn btn-black me-3">
              View
            </Link>
            <div className="mybtn btn-trans">Delete</div>
            <div className="mybtn btn-trans">Suspend</div>
          </div>
        </td>
      </tr>
    ));

  const renderSusEmpertable = () =>
    arrSusEmper.map((idx) => (
      <tr key={idx} className="">
        <td>
          <p className="title mb-0">Greenusys technology</p>
          <p className="posted mb-0 txt-muted">Company Created: 5 Feb 2023</p>
        </td>
        <td>Software Industry</td>
        <td>245</td>
        <td>
          <div className="d-flex align-items-center justify-content-start actbtn">
            <div className="mybtn btn-black me-3">Reactivate</div>
            <Link to="/employer/details" className="mybtn btn-trans">
              View
            </Link>
            <div className="mybtn btn-trans">Delete</div>
          </div>
        </td>
      </tr>
    ));

  const renderDelEmpertable = () =>
    arrDelEmper.map((idx) => (
      <tr key={idx} className="">
        <td>
          <p className="title mb-0">Greenusys technology</p>
          <p className="posted mb-0 txt-muted">Company Created: 5 Feb 2023</p>
        </td>
        <td>Software Industry</td>
        <td>245</td>
        <td>
          <div className="d-flex align-items-center justify-content-start actbtn">
            <div className="mybtn btn-black me-3">Restore</div>
            <Link to="/employer/details" className="mybtn btn-trans">
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
              className={"listtabs " + (isActEmper ? "" : "txt-muted cursor-pointer")}
            >
              Active Employers
            </span>
            <span
              onClick={() => handletabs(2)}
              className={"listtabs " + (isSusEmper ? "" : "txt-muted cursor-pointer")}
            >
              Suspended Employers
            </span>
            <span
              onClick={() => handletabs(3)}
              className={"listtabs " + (isDelEmper ? "" : "txt-muted cursor-pointer")}
            >
              Deleted Employers
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
                      <th>Company Name</th>
                      <th>Industry</th>
                      <th>No. of job posted</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead></thead>
                  <tbody>
                    {isActEmper && renderActEmpertable()}
                    {isSusEmper && renderSusEmpertable()}
                    {isDelEmper && renderDelEmpertable()}
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
