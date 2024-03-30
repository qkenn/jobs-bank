export default function IntroCard({ children, bg }) {
  return (
    <>
      <div className={`intro-card intro-card--${bg}`}>{children}</div>
    </>
  );
}
