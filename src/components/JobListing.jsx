import { Link } from "react-router-dom";
import { useState } from "react";

export default function JobListing({ job }) {
  const [showMore, setShowMore] = useState(false);

  let description = job.description;
  if (!showMore) description = description.substring(0, 80) + "...";

  function handleShowMore() {
    setShowMore((prev) => !prev);
  }

  return (
    <>
      <div className="job-card">
        <div className="job-card__type">{job.type}</div>
        <h4 className="job-card__title">{job.title}</h4>
        <p className="job-card__description">
          {description}
          <span className="job-card__hide-btn" onClick={() => handleShowMore()}>
            {`show ${showMore ? "less" : "more"}`}
          </span>
        </p>
        <div className="job-card__salary">
          <span className="job-card__salary-amount">{job.salary}</span> / year
        </div>
        <div className="flex flex--job">
          <div className="job-card__location">{job.location}</div>
          <Link to={`/jobs/${job.id}`} className="btn">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
