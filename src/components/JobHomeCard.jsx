import { Link } from "react-router-dom";
import { useState } from "react";

export default function JobHomeCard({ job }) {
  const [showMore, setShowMore] = useState(false);

  let description = job.description;
  if (!showMore) description = description.substring(0, 80) + "...";

  function handleShowMore() {
    setShowMore((prev) => !prev);
  }

  return (
    <>
      <div className="job-homecard">
        <div className="job-homecard__type">{job.type}</div>
        <h4 className="job-homecard__title">{job.title}</h4>
        <p className="job-homecard__description">
          {description}
          <span
            className="job-homecard__hide-btn"
            onClick={() => handleShowMore()}
          >
            {`show ${showMore ? "less" : "more"}`}
          </span>
        </p>
        <div className="job-homecard__salary">
          <span className="job-homecard__salary-amount">{job.salary}</span> /
          year
        </div>
        <div className="flex flex--job">
          <div className="job-homecard__location">{job.location}</div>
          <Link to={`/jobs/${job.id}`} className="btn">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
