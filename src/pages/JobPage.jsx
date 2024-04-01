import { useLoaderData } from "react-router-dom";

export default function JobPage() {
  const job = useLoaderData();

  return (
    <>
      <section className="section section--job">
        <div className="wrapper">
          <div className="grid grid--job">
            <div className="job__card">
              <div className="job__type">Full-Time</div>
              <h2 className="title title--primary">Senior React Developer</h2>
              <div className="job__location">Boston, MA</div>
            </div>

            <div className="job__card">
              <h4 className="title title--secondary">Job Description</h4>
              <p>
                We are seeking a talented Front-End Developer to join our team
                in Boston, MA. The ideal candidate will have strong skills in
                HTML, CSS, and JavaScript, with experience working with modern
                JavaScript frameworks such as React or Angular.
              </p>

              <h4 className="title title--secondary">Salary</h4>
              <p>
                <span>$70K - $80K</span> / Year
              </p>
            </div>

            <div className="job__card">
              <h4 className="title title--secondary">Company Info</h4>
              <h3 className="title title--primary">Senior React Developer</h3>
              <p>
                NewTek Solutions is a leading technology company specializing in
                web development and digital solutions. We pride ourselves on
                delivering high-quality products and services to our clients
                while fostering a collaborative and innovative work environment.
              </p>

              <h4 className="title title--secondary">Company Info</h4>
              <div className="job__contact">contact@teksolutions.com</div>

              <h4 className="title title--secondary">Company Info</h4>
              <div className="job__contact">contact@teksolutions.com</div>
            </div>

            <div className="job__card">
              <h4 className="title title--secondary">Manage Jobs</h4>

              <a href="#" className="job__btn">
                Edit job
              </a>
              <a href="#" className="job__btn">
                Delete job
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
