import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import dateFormatter from "../../utils/dateFormatter";

const ListedEmployeesTableBody = ({
  activeTab,
  activeList,
  suspendedList,
  deletedList,
  getData,
}) => {
  const changeEmployeeStatus = async (jobId, status) => {
    try {
      const { data } = await api.patch(`/admin/changeEmployeeStatus/${jobId}`, {
        status,
      });
      console.log(data);
      getData(status);
      getData(activeTab);
    } catch (error) {
      console.log(error);
    }
  };

  if (activeTab === "Active") {
    return (
      <>
        {activeList.map((item) => (
          <tr key={item._id}>
            <td>
              <p className="title mb-0">
                {item?.userId?.firstName} {item?.userId?.lastName}
              </p>
              <p className="posted mb-0 txt-muted">
                Joining Date: {item?.workingExperience?.startDate}
              </p>
              <p className="posted txt-muted">Last updated: 10 Feb 2023</p>
            </td>
            <td>{item.currentJob}</td>
            <td>{item.city}</td>
            <td>
              <div className="d-flex align-items-center justify-content-start actbtn">
                <Link to="/employee/details" className="mybtn btn-black me-3">
                  View
                </Link>
                <div
                  className="mybtn btn-trans"
                  onClick={() => changeEmployeeStatus(item._id, "Deleted")}
                >
                  Delete
                </div>
                <div
                  className="mybtn btn-trans"
                  onClick={() => changeEmployeeStatus(item._id, "Suspended")}
                >
                  Suspend
                </div>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }
  if (activeTab === "Suspended") {
    return (
      <>
        {suspendedList.map((item) => (
          <tr key={item._id}>
            <td>
              <p className="title mb-0">
                {item?.userId?.firstName} {item?.userId?.lastName}
              </p>
              <p className="posted mb-0 txt-muted">
                Joining Date: {item?.workingExperience?.startDate}
              </p>
              <p className="posted txt-muted">Last updated: 10 Feb 2023</p>
            </td>
            <td>{item.currentJob}</td>
            <td>{item.city}</td>
            <td>
              <div className="d-flex align-items-center justify-content-start actbtn">
                <div
                  className="mybtn btn-black me-3"
                  onClick={() => changeEmployeeStatus(item._id, "Active")}
                >
                  Reactivate
                </div>
                <Link to="/employee/details" className="mybtn btn-trans">
                  View
                </Link>
                <div
                  className="mybtn btn-trans"
                  onClick={() => changeEmployeeStatus(item._id, "Deleted")}
                >
                  Delete
                </div>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }
  if (activeTab === "Deleted") {
    return (
      <>
        {deletedList.map((item) => (
          <tr key={item._id}>
            <td>
              <p className="title mb-0">
                {item?.userId?.firstName} {item?.userId?.lastName}
              </p>
              <p className="posted mb-0 txt-muted">
                Joining Date: {item?.workingExperience?.startDate}
              </p>
              <p className="posted txt-muted">Last updated: 10 Feb 2023</p>
            </td>
            <td>{item.currentJob}</td>
            <td>{item.city}</td>
            <td>
              <div className="d-flex align-items-center justify-content-start actbtn">
                <div
                  className="mybtn btn-black me-3"
                  onClick={() => changeEmployeeStatus(item._id, "Active")}
                >
                  Restore
                </div>
                <Link to="/employee/details" className="mybtn btn-trans">
                  View
                </Link>
                <div
                  className="mybtn btn-trans"
                  onClick={() => changeEmployeeStatus(item._id, "Deleted")}
                >
                  Delete
                </div>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }
};

export default ListedEmployeesTableBody;
