import api from "../../utils/api";
import dateFormatter from "../../utils/dateFormatter";

const ListedJobsTableBody = ({
  activeTab,
  approvalPendingList,
  approvedList,
  deletedList,
  getData,
  activeItem,
  setActiveItem,
}) => {
  const changeJobStatus = async (jobId, status) => {
    try {
      const { data } = await api.patch(`/admin/changeJobStatus/${jobId}`, {
        status,
      });
      console.log(data);
      getData(status);
      getData(activeTab);
    } catch (error) {
      console.log(error);
    }
  };
  if (activeTab === "ApprovalPending") {
    return (
      <>
        {approvalPendingList.map((item) => (
          <tr
            key={item._id}
            onClick={() => setActiveItem(item)}
            className={`${
              activeItem._id === item._id ? "active" : "cursor-pointer"
            }`}
          >
            <td className="">
              <p className="title mb-0">{item.jobTitle}</p>
              <p className="posted txt-muted">
                Posted: {dateFormatter(item.date)}
              </p>
            </td>
            <td>{item?.employerDetailId?.contactPersonName}</td>
            <td>
              <div className="d-flex align-items-center justify-content-start actbtn">
                <div
                  className="mybtn btn-blue me-3"
                  onClick={() => changeJobStatus(item._id, "Active")}
                >
                  Approve
                </div>
                <div
                  className="mybtn btn-trans"
                  onClick={() => changeJobStatus(item._id, "Deleted")}
                >
                  Decline
                </div>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }
  if (activeTab === "Active") {
    return (
      <>
        {approvedList.map((item) => (
          <tr
            key={item._id}
            onClick={() => setActiveItem(item)}
            className={`${
              activeItem._id === item._id ? "active" : "cursor-pointer"
            }`}
          >
            <td className="">
              <p className="title mb-0">{item.jobTitle}</p>
              <p className="posted txt-muted">
                Posted: {dateFormatter(item.date)}
              </p>
            </td>
            <td>{item?.employerDetailId?.contactPersonName}</td>
            <td>
              <div className="d-flex align-items-center justify-content-start actbtn">
                <div
                  className="mybtn btn-red"
                  onClick={() => changeJobStatus(item._id, "Deleted")}
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
          <tr
            key={item._id}
            onClick={() => setActiveItem(item)}
            className={`${
              activeItem._id === item._id ? "active" : "cursor-pointer"
            }`}
          >
            <td className="">
              <p className="title mb-0">{item.jobTitle}</p>
              <p className="posted txt-muted">
                Posted: {dateFormatter(item.date)}
              </p>
            </td>
            <td>{item?.employerDetailId?.contactPersonName}</td>
            <td>
              <div className="d-flex align-items-center justify-content-start actbtn">
                <div
                  className="mybtn btn-black"
                  onClick={() => changeJobStatus(item._id, "Active")}
                >
                  Restore
                </div>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }
};

export default ListedJobsTableBody;
