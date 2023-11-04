import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

const Index = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // Approval request
  // Approved jobs
  // Deleted jobs

  const [isWebsite, setIsWebsite] = React.useState(true);
  const [arrWebsite, setArrWebsite] = React.useState([]);
  const [isCall, setIsCall] = React.useState(false);
  const [arrCall, setArrCall] = React.useState([]);
  const [isWhatsapp, setIsWhatsapp] = React.useState(false);
  const [arrWhatsapp, setArrWhatsapp] = React.useState([]);

  React.useEffect(() => {
    setArrWebsite(data.slice(0, 5));
    setArrCall(data.slice(5, 10));
    setArrWhatsapp(data.slice(10, 15));
  }, []);

  const handletabs = (id) => {
    setIsWebsite(false);
    setIsCall(false);
    setIsWhatsapp(false);

    if (id === 1) setIsWebsite(true);
    if (id === 2) setIsCall(true);
    if (id === 3) setIsWhatsapp(true);
  };

  const renderWebsitetable = () =>
    arrWebsite.map((idx) => (
      <tr key={idx}>
        <td class="">
          <Link to="details" className="title mb-0">Greenusys Technology</Link>
          <p className="posted mb-0 txt-muted">Software Company</p>
        </td>
        <td>Basic</td>
        <td>20-Feb-2023</td>
        <td>20-Mar-2023</td>
        <td>
          <div className="status">Active</div>
        </td>
        <td>
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </td>
      </tr>
    ));

  const renderCalltable = () =>
    arrCall.map((idx) => (
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
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </td>
      </tr>
    ));

  const renderWhatsapptable = () =>
    arrWhatsapp.map((idx) => (
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
          <i class="fa-solid fa-ellipsis-vertical"></i>
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
                "listtabs " + (isWebsite ? "" : "txt-muted cursor-pointer")
              }
            >
              Website (57)
            </span>
            <span
              onClick={() => handletabs(2)}
              className={
                "listtabs " + (isCall ? "" : "txt-muted cursor-pointer")
              }
            >
              Call (20)
            </span>
            <span
              onClick={() => handletabs(3)}
              className={
                "listtabs " + (isWhatsapp ? "" : "txt-muted cursor-pointer")
              }
            >
              Whatsapp (24)
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
                      <th>Plan Detail</th>
                      <th>Date of Purchased</th>
                      <th>Date of Expiry</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead></thead>
                  <tbody>
                    {isWebsite && renderWebsitetable()}
                    {isCall && renderCalltable()}
                    {isWhatsapp && renderWhatsapptable()}
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
