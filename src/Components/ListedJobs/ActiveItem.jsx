const ActiveItem = ({ activeItem }) => {
  if (!activeItem._id) return null;
  return (
    <div className="frame p-3">
      <p className="title txt-black">{activeItem.jobTitle}</p>
      <div className="majordet txt-muted">
        <div className="d-flex">
          <p className="txt-blue me-3">
            {activeItem?.employerDetailId?.companyName}
          </p>
          <p className="txt-muted">
            <i className="fa-solid fa-location-dot me-1"></i> {activeItem.city},
            India
          </p>
        </div>
        <div className="d-flex">
          <p className="me-3">
            <i className="fa-solid fa-briefcase me-1"></i>{" "}
            {activeItem.experience.min}-{activeItem.experience.max} Years
          </p>
          <p>
            <i className="fa-solid fa-money-bills me-1"></i> Rs.{" "}
            {activeItem.pay.min}-{activeItem.pay.max} PM
          </p>
        </div>
      </div>
      <hr />
      <div className="longdesct">
        <p className="dechead">Full Job Description</p>
        <div className="txt-muted details">
          <p>
            We're looking for a passionate UI/UX Web/Mobile/Interaction and
            Graphics Designer to create amazing user experiences, products and
            interaction concepts. Design seamless and pixel perfect User
            Interfaces for Web and Mobile Apps (iOS + Android).
          </p>
          <p>
            Company details: VinSol | SnackMagic. Vinsol is now a part of
            Snackmagic. Snackmagic is a Venture Funded New York Headquartered
            Technology company. At Snackmagic, we have an innovative take on
            Corporate Gifting - making it super easy for an organiser to treat 1
            or 10000 people within minutes. The choice of selection rests with
            the gift recipient. So it’s a win-win for all.
          </p>
          <p>
            Snackmagic started with only gifting snacks but has now added other
            offerings like Swag and Local specialities to the menu.
          </p>
          <p>Visit vinsol.com | snackmagic.com for more details.</p>
          <p>Experience: 1 - 3 years</p> <p>Salary: 6 - 10 LPA</p> <p></p>
        </div>
        <p className="dechead">Responsibilities</p>
        <div className="txt-muted details">
          <ul>
            {activeItem.responsiblities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="dechead">Job type</p>
        <div className="txt-muted details">
          <ul>
            {activeItem.jobType.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="dechead">Job schedule</p>
        <div className="txt-muted details">
          <ul>
            {activeItem.jobSchedule.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActiveItem;
