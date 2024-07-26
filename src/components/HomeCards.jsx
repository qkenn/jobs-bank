import { Link } from "react-router-dom";
import IntroCard from "./IntroCard";

export default function HomeCards() {
  return (
    <>
      <section className="section">
        <div className="wrapper">
          <div className="grid grid--intro-cards">
            <IntroCard bg="gray">
              <h3 className="intro-card__title">For Developers</h3>
              <p className="intro-card__description">
                Browse our React jobs and start your career tody.
              </p>
              <Link to="/jobs" className="btn">
                Browse Jobs
              </Link>
            </IntroCard>

            <IntroCard bg="blue">
              <h3 className="intro-card__title">For Employers</h3>
              <p className="intro-card__description">
                List your job to find the perfect developer for the role.
              </p>
              <Link to="/add-job" className="btn">
                Add Job
              </Link>
            </IntroCard>
          </div>
        </div>
      </section>
    </>
  );
}
