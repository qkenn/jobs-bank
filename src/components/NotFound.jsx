import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="section">
        <div className="error">
          <div className="wrapper">
            <h1 className="error__title">404 Not Found</h1>
            <p className="error__description">this page does not exists</p>
            <Link to="/" className="btn">
              Go back
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
