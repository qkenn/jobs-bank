import { useLoaderData } from "react-router-dom";

export default function JobPage() {
  const job = useLoaderData();

  return (
    <>
      <section className="section">
        <div className="wrapper">
          <div className="grid grid--job"></div>
        </div>
      </section>
    </>
  );
}
