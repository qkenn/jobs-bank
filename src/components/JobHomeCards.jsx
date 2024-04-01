import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobHomeCard from "./JobHomeCard";

export default function JobHomeCards({ isHome }) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
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
          <h2 className="title title--headline">Browse Jobs</h2>

          <div className="grid grid--job-listings">
            {isLoading ? (
              <h2>It&apos;s still loading</h2>
            ) : (
              jobs.map((job) => {
                return <JobHomeCard job={job} key={job.id} />;
              })
            )}
          </div>

          {isHome && (
            <div className="btn-wrap">
              <Link to="/jobs" className="btn btn--jobs">
                All Jobs
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
