import { Link } from "react-router-dom";
import jobs from "../jobs.json";
import JobListing from "./JobListing";

export default function JobListings({ isHome }) {
  let previewJobs;
  isHome ? (previewJobs = jobs.slice(0, 3)) : (previewJobs = jobs);

  return (
    <>
      <section className="section">
        <div className="wrapper">
          <h2 className="headline">Browse Jobs</h2>

          <div className="grid grid--job-listings">
            {previewJobs.map((job) => {
              return <JobListing job={job} key={job.id} />;
            })}
          </div>

          <div className="btn-wrap">
            <Link to="/jobs" className="btn btn--jobs">
              All Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
