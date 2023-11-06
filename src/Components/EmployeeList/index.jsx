import { useState, useEffect } from "react";
import api from "../../utils/api";
import ListedEmployeesTableBody from "./ListedEmployeesTableBody";
import "./Styles.css";

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
      const { data } = await api.get(`/admin/employee/${tab}`);
      console.log(data);
      if (tab === "Active") setActiveList(data.employee);
      if (tab === "Suspended") setSuspendedList(data.employee);
      if (tab === "Deleted") setDeletedList(data.employee);
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
              Active Employees
            </span>
            <span
              onClick={() => setActiveTab("Suspended")}
              className={
                "listtabs " +
                (activeTab === "Suspended" ? "" : "txt-muted cursor-pointer")
              }
            >
              Suspended Employees
            </span>
            <span
              onClick={() => setActiveTab("Deleted")}
              className={
                "listtabs " +
                (activeTab === "Deleted" ? "" : "txt-muted cursor-pointer")
              }
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
                    <ListedEmployeesTableBody
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
