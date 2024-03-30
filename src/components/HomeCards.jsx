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
              <a href="#" className="btn">
                Browse Jobs
              </a>
            </IntroCard>

            <IntroCard bg="blue">
              <h3 className="intro-card__title">For Employers</h3>
              <p className="intro-card__description">
                List your job to find the perfect developer for the role.
              </p>
              <a href="#" className="btn">
                Add Job
              </a>
            </IntroCard>
          </div>
        </div>
      </section>
    </>
  );
}
