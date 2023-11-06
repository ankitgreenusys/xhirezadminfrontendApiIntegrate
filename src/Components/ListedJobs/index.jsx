import { useState, useEffect } from "react";
import api from "../../utils/api";
import ListedJobsTableBody from "./ListedJobsTableBody";
import ActiveItem from "./ActiveItem";
import "./Styles.css";

const Index = () => {
  // Approval request
  // Approved jobs
  // Deleted jobs

  const [activeTab, setActiveTab] = useState("ApprovalPending");
  const [activeItem, setActiveItem] = useState({});

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
      if (data.jobs.length > 0) setActiveItem(data.jobs[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (activeTab === "ApprovalPending" && approvalPendingList.length === 0)
      getData();
    if (activeTab === "Active" && approvedList.length === 0) getData();
    if (activeTab === "Deleted" && deletedList.length === 0) getData();
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
                      activeItem={activeItem}
                      setActiveItem={setActiveItem}
                    />
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
        <div className="col-lg-5 mt-3 desc">
          <ActiveItem activeItem={activeItem} />
        </div>
      </div>
    </div>
  );
};

export default Index;
