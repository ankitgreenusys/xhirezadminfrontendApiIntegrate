import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import dateFormatter from "../../utils/dateFormatter";

const ListedEmployersTableBody = ({
  activeTab,
  activeList,
  suspendedList,
  deletedList,
  getData,
}) => {
  const changeEmployerStatus = async (empId, status) => {
    try {
      const { data } = await api.patch(`/admin/changeEmployerStatus/${empId}`, {
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
                {item.companyName}
              </p>
              <p className="posted mb-0 txt-muted">
                Company Created: {item?.companyCreated}
              </p>
            </td>
            <td>{item.industry}</td>
            <td>{[item.jobs].length}</td>
            <td>
              <div className="d-flex align-items-center justify-content-start actbtn">
                <Link
                  to={`/employer/${item._id}/details`}
                  className="mybtn btn-black me-3"
                >
                  View
                </Link>
                <div
                  className="mybtn btn-trans"
                  onClick={() => changeEmployerStatus(item._id, "Deleted")}
                >
                  Delete
                </div>
                <div
                  className="mybtn btn-trans"
                  onClick={() => changeEmployerStatus(item._id, "Suspended")}
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
                {item.companyName}
              </p>
              <p className="posted mb-0 txt-muted">
                Company Created: {item?.companyCreated}
              </p>
            </td>
            <td>{item.industry}</td>
            <td>{[item.jobs].length}</td>
            <td>
              <div className="d-flex align-items-center justify-content-start actbtn">
                <div
                  className="mybtn btn-black me-3"
                  onClick={() => changeEmployerStatus(item._id, "Active")}
                >
                  Reactivate
                </div>
                <Link
                  to={`/employee/${item._id}/details`}
                  className="mybtn btn-trans"
                >
                  View
                </Link>
                <div
                  className="mybtn btn-trans"
                  onClick={() => changeEmployerStatus(item._id, "Deleted")}
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
                {item.companyName}
              </p>
              <p className="posted mb-0 txt-muted">
                Company Created: {item?.companyCreated}
              </p>
            </td>
            <td>{item.industry}</td>
            <td>{[item.jobs].length}</td>
            <td>
              <div className="d-flex align-items-center justify-content-start actbtn">
                <div
                  className="mybtn btn-black me-3"
                  onClick={() => changeEmployerStatus(item._id, "Active")}
                >
                  Restore
                </div>
                <Link
                  to={`/employee/${item._id}/details`}
                  className="mybtn btn-trans"
                >
                  View
                </Link>
                <div
                  className="mybtn btn-trans"
                  onClick={() => changeEmployerStatus(item._id, "Deleted")}
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

export default ListedEmployersTableBody;
