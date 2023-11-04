import { useState, useEffect } from "react";
import api from "../../utils/api";
import ListedJobsTableBody from "./ListedJobsTableBody";
import "./Styles.css";

const Index = () => {
  // Approval request
  // Approved jobs
  // Deleted jobs

  const [activeTab, setActiveTab] = useState("ApprovalPending");
  const [approvalPendingList, setApprovalPendingList] = useState([]);
  const [approvedList, setApprovedList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);
  const getData = async () => {
    try {
      const { data } = await api.get(`/admin/jobs/${activeTab}`);
      console.log(data);
      if (activeTab === "ApprovalPending") setApprovalPendingList(data.jobs);
      if (activeTab === "Active") setApprovedList(data.jobs);
      if (activeTab === "Deleted") setDeletedList(data.jobs);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [activeTab]);

  return (
    <div className="listedjobs marginframe">
      <div className="row">
        <div className="d-flex align-items-center mb-3">
          <nav className="nav me-auto">
            <span
              onClick={() => setActiveTab("ApprovalPending")}
              className={
                "listtabs " +
                (activeTab === "ApprovalPending"
                  ? ""
                  : "txt-muted cursor-pointer")
              }
            >
              Approval Requests
            </span>
            <span
              onClick={() => setActiveTab("Active")}
              className={
                "listtabs " +
                (activeTab === "Active" ? "" : "txt-muted cursor-pointer")
              }
            >
              Approved Jobs
            </span>
            <span
              onClick={() => setActiveTab("Deleted")}
              className={
                "listtabs " +
                (activeTab === "Deleted" ? "" : "txt-muted cursor-pointer")
              }
            >
              Deleted Jobs
            </span>
          </nav>
        </div>
        <div className="col-lg-7 mt-3">
          <div className="commntable">
            <section>
              <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Posted by</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead></thead>
                  <tbody>
                    <ListedJobsTableBody
                      activeTab={activeTab}
                      approvalPendingList={approvalPendingList}
                      approvedList={approvedList}
                      deletedList={deletedList}
                      getData={getData}
                    />
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
        <div className="col-lg-5 mt-3 desc">
          <div className="frame p-3">
            <p className="title txt-black">Mobile Application Developer</p>
            <div className="majordet txt-muted">
              <div className="d-flex">
                <p className="txt-blue me-3">Microsoft Pvt. Ltd.</p>
                <p className="txt-muted">
                  <i class="fa-solid fa-location-dot me-1"></i> Delhi, India
                </p>
              </div>
              <div className="d-flex">
                <p class="me-3">
                  <i className="fa-solid fa-briefcase me-1"></i> 2-3 Years
                </p>
                <p class="">
                  <i class="fa-solid fa-money-bills me-1"></i> 10,000 - 20,000
                  PM
                </p>
              </div>
            </div>
            <hr />
            <div className="longdesct">
              <p className="dechead">Full Job Description</p>
              <div className="txt-muted details">
                <p className="">
                  We're looking for a passionate UI/UX Web/Mobile/Interaction
                  and Graphics Designer to create amazing user experiences,
                  products and interaction concepts. Design seamless and pixel
                  perfect User Interfaces for Web and Mobile Apps (iOS +
                  Android).
                </p>
                <p>
                  Company details: VinSol | SnackMagic. Vinsol is now a part of
                  Snackmagic. Snackmagic is a Venture Funded New York
                  Headquartered Technology company. At Snackmagic, we have an
                  innovative take on Corporate Gifting - making it super easy
                  for an organiser to treat 1 or 10000 people within minutes.
                  The choice of selection rests with the gift recipient. So it’s
                  a win-win for all.
                </p>
                <p>
                  Snackmagic started with only gifting snacks but has now added
                  other offerings like Swag and Local specialities to the menu.
                </p>
                <p>Visit vinsol.com | snackmagic.com for more details.</p>
                <p>Experience: 1 - 3 years</p> <p>Salary: 6 - 10 LPA</p> <p></p>
              </div>
              <p className="dechead">Responsibilities</p>
              <div className="txt-muted details">
                <ul>
                  <li>
                    Communicate with management and engineering teams to
                    understand, measure and estimate a high level project idea.
                  </li>
                  <li>
                    Understand the ecosystem of an idea and take a
                    domain-oriented approach to conceptualize the product and
                    derive innovative directions, visuals and experiences.
                  </li>
                  <li>
                    Communicate with clients to understand their business goals
                    and objectives
                  </li>
                  <li>
                    Effectively communicate the idea behind design and product
                    concepts to a diverse audience through wireframes,
                    storyboards, user flows, process flows and product maps.
                  </li>
                  <li>Design project and concept specific graphics.</li>
                  <li>
                    Compile designs into thoughtful interactive prototypes over
                    Invision.
                  </li>
                  <li>Conduct an ongoing user research</li>
                  <li>
                    Collaborate with teams to ensure smooth adoption of designs
                    and delivery of product.
                  </li>
                </ul>
              </div>
              <p className="dechead">Job type</p>
              <div className="txt-muted details">
                <ul>
                  <li>Full Time</li>
                  <li>Part Time</li>
                </ul>
              </div>
              <p className="dechead">Job schedule</p>
              <div className="txt-muted details">
                <ul>
                  <li>Day Shift</li>
                  <li>Night Shift</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
