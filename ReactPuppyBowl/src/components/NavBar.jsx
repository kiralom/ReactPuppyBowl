import { Link } from "react-router-dom";

export default function NavBar() {
  const randomId = Math.floor(Math.random() * 5 + 1);
  return (
    <>
      <h2>Nav Bar</h2>
      <Link to="/">All Players </Link>
      <Link to={`/players/${randomId}`}>Random Player</Link>
    </>
  );
}
