import "./scss/index.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HomeCards />
      <JobListings />
    </>
  );
}

export default App;
