import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobHomeCards from "../components/JobHomeCards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobHomeCards isHome={true} />
    </>
  );
}
