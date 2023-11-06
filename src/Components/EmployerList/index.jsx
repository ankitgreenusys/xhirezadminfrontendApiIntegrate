import { useState, useEffect } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import "./Styles.css";
import ListedEmployersTableBody from "./ListedEmployersTableBody";

const Index = () => {
  // Approval request
  // Approved jobs
  // Deleted jobs

  const [activeTab, setActiveTab] = useState("Active");
  const [activeList, setActiveList] = useState([]);
  const [suspendedList, setSuspendedList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);
  const getData = async (tab) => {
    if (!tab) tab = activeTab;
    try {
      const { data } = await api.get(`/admin/employer/${tab}`);
      console.log(data);
      if (tab === "Active") setActiveList(data.employer);
      if (tab === "Suspended") setSuspendedList(data.employer);
      if (tab === "Deleted") setDeletedList(data.employer);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (activeTab === "Active" && activeList.length === 0) getData();
    if (activeTab === "Suspended" && suspendedList.length === 0) getData();
    if (activeTab === "Deleted" && deletedList.length === 0) getData();
  }, [activeTab]);

  return (
    <div className="emperlist marginframe">
      <div className="me-5">
        <div className="d-flex align-items-center mb-3">
          <nav className="nav me-auto">
            <span
              onClick={() => setActiveTab("Active")}
              className={
                "listtabs " +
                (activeTab === "Active" ? "" : "txt-muted cursor-pointer")
              }
            >
              Active Employers
            </span>
            <span
              onClick={() => setActiveTab("Suspended")}
              className={
                "listtabs " +
                (activeTab === "Suspended" ? "" : "txt-muted cursor-pointer")
              }
            >
              Suspended Employers
            </span>
            <span
              onClick={() => setActiveTab("Deleted")}
              className={
                "listtabs " +
                (activeTab === "Deleted" ? "" : "txt-muted cursor-pointer")
              }
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
                    <ListedEmployersTableBody
                      activeTab={activeTab}
                      activeList={activeList}
                      suspendedList={suspendedList}
                      deletedList={deletedList}
                      getData={getData}
                    />
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
