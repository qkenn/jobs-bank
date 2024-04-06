import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

export default function UpdateJobPage({ updateJob }) {
  const job = useLoaderData();

  const [type, setType] = useState(job.type);
  const [jobName, setJobName] = useState(job.title);
  const [jobDescription, setJobDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [location, setLocation] = useState(job.location);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [email, setEmail] = useState(job.company.contactEmail);
  const [phone, setPhone] = useState(job.company.contactPhone);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedJob = {
      title: jobName,
      type,
      description: jobDescription,
      location: location,
      salary: salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: email,
        contactPhone: phone,
      },
    };

    updateJob(job.id, updatedJob);
    toast.success("Job Updated");
    navigate("/jobs");
  };

  return (
    <>
      <section className="section">
        <div className="wrapper wrapper--form">
          <div className="form">
            <h2 className="title title--form">Update Job</h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-3">
                <label htmlFor="type">Job Type</label>
                <select
                  name="type"
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Intern">Internship</option>
                </select>
              </div>

              <div className="mt-3">
                <label htmlFor="job_name">Job Name</label>
                <input
                  type="text"
                  name="job_name"
                  placeholder="eg: Software Developer"
                  onChange={(e) => setJobName(e.target.value)}
                  value={jobName}
                />
              </div>

              <div className="mt-3">
                <label htmlFor="job_description">Job Description</label>
                <textarea
                  name="job_description"
                  id="job_description"
                  placeholder="Expectations, duties, requirements"
                  onChange={(e) => setJobDescription(e.target.value)}
                  value={jobDescription}
                ></textarea>
              </div>

              <div className="mt-3">
                <label htmlFor="salary">Salary</label>
                <select
                  name="salary"
                  onChange={(e) => setSalary(e.target.value)}
                  value={salary}
                >
                  <option value="Under $50k">Under $50k</option>
                  <option value="More than $50k">More than $50k</option>
                </select>
              </div>

              <div className="mt-3">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="eg: San Francisco"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                />
              </div>

              <h3 className="title title--c-info">Company Info</h3>

              <div className="mt-3">
                <label htmlFor="compny_name">Company Name</label>
                <input
                  type="text"
                  name="compny_name"
                  placeholder="eg: New Age Corparation"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                />
              </div>

              <div className="mt-3">
                <label htmlFor="company_description">Company Description</label>
                <textarea
                  name="company_description"
                  id="company_description"
                  placeholder="what does your company do ?"
                  onChange={(e) => setCompanyDescription(e.target.value)}
                  value={companyDescription}
                ></textarea>
              </div>

              <div className="mt-3">
                <label htmlFor="company_email">Email</label>
                <input
                  type="email"
                  placeholder="eg: no@mail.com"
                  name="company_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="mt-3">
                <label htmlFor="company_telephone">Telephone</label>
                <input
                  type="tel"
                  placeholder="555-55-555"
                  name="company_telephone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>

              <button type="submit" className="btn">
                Update Job
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
