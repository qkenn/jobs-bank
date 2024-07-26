import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function JobPage({ deleteJob }) {
  const job = useLoaderData();

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure ?");
    if (!confirm) {
      return;
    }

    deleteJob(id);
    toast.success("Deleted successfully");
    navigate("/jobs");
  };

  return (
    <>
      <section className="section section--job">
        <div className="wrapper">
          <Link to="/jobs" className="jobcard__backlink">
            Back to Job Listings
          </Link>
          <div className="grid grid--job">
            <div className="jobcard__wrapper jobcard__wrapper--large">
              <div className="jobcard jobcard--intro">
                <div className="jobcard__type">{job.type}</div>
                <h2 className="title title--role">{job.title}</h2>
                <div className="jobcard__location">{job.location}</div>
              </div>

              <div className="jobcard jobcard--info">
                <h4 className="title title--medium">Job Description</h4>
                <p>{job.description}</p>

                <h4 className="title title--salary title--medium">Salary</h4>
                <p>
                  <span className="jobcard__salary">{job.salary}</span> / Year
                </p>
              </div>
            </div>

            <div className="jobcard__wrapper jobcard__wrapper--small">
              <div className="jobcard jobcard--company">
                <h4 className="title title--medium mb-2">Company Info</h4>
                <h3 className="title title--company-name">
                  {job.company.name}
                </h3>
                <p className="jobcard__description">
                  {job.company.description}
                </p>

                <h4 className="title title--medium mt-2">Email</h4>
                <div className="jobcard__contact">
                  {job.company.contactEmail}
                </div>

                <h4 className="title title--medium mt-1">Phone</h4>
                <div className="jobcard__contact">
                  {job.company.contactPhone}
                </div>
              </div>

              <div className="jobcard jobcard--manage">
                <h4 className="title title--medium mb-2">Manage Jobs</h4>

                <div className="flex flex--jobcard">
                  <div className="jobcard__btn-wrap">
                    <Link
                      to={`/edit-job/${job.id}`}
                      className="jobcard__btn jobcard__btn--blue"
                    >
                      Edit Job
                    </Link>
                  </div>
                  <div className="jobcard__btn-wrap">
                    <button
                      href="#"
                      className="jobcard__btn jobcard__btn--red"
                      onClick={() => handleDelete(job.id)}
                    >
                      Delete Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
