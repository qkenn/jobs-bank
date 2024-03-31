import jobs from "../jobs.json";
import JobListing from "./JobListing";

export default function JobListings() {
  const fewJobs = jobs.slice(0, 3);
  return (
    <>
      <section className="section">
        <div className="wrapper">
          <h2 className="headline">Browse Jobs</h2>

          <div className="grid grid--job-listings">
            {fewJobs.map((job) => {
              return <JobListing job={job} key={job.id} />;
            })}
          </div>

          <div className="btn-wrap">
            <a href="/jobs" className="btn btn--jobs">
              All Jobs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
