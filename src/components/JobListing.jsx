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
      <div className="job">
        <div className="job__type">{job.type}</div>
        <h4 className="job__title">{job.title}</h4>
        <p className="job__description">
          {description}
          <span className="job__hide-btn" onClick={() => handleShowMore()}>
            {`show ${showMore ? "less" : "more"}`}
          </span>
        </p>
        <div className="job__salary">
          <span className="job__salary-amount">{job.salary}</span> / year
        </div>
        <div className="flex flex--job">
          <div className="job__location">{job.location}</div>
          <Link to={`/job/${job.id}`} className="btn">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
