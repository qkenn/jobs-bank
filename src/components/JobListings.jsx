import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobListing from "./JobListing";

export default function JobListings({ isHome }) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "http://localhost:8000/jobs?_limit=3"
        : "http://localhost:8000/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <>
      <section className="section">
        <div className="wrapper">
          <h2 className="headline">Browse Jobs</h2>

          <div className="grid grid--job-listings">
            {isLoading ? (
              <h2>It&apos;s still loading</h2>
            ) : (
              jobs.map((job) => {
                return <JobListing job={job} key={job.id} />;
              })
            )}
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
