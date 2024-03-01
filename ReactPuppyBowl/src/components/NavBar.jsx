import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NavBar() {
  const randomId = Math.floor(Math.random() * 5 + 1);
  return (
    <>
      <Button
        sx={{ margin: 3 }}
        variant="contained"
        color="warning"
        size="large"
      >
        <Link to="/">All Players </Link>
      </Button>
      <Button variant="contained" color="warning" size="large">
        <Link to={`/players/${randomId}`}>Random Player</Link>
      </Button>
    </>
  );
}
