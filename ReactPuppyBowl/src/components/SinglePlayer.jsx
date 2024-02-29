import { useParams } from "react-router-dom";
import { useGetSinglePlayerQuery } from "../api/playerSlice";

export default function SinglePlayer() {
  const { id } = useParams();
  const { data, isLoading } = useGetSinglePlayerQuery(id);
  const player = data?.data.player;

  return (
    <>
      <h2>Single player</h2>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h4>{player.name}</h4>
          <p>{player.breed}</p>
          <img src={player.imageUrl} alt={`Picture of ${player.name}`} />
        </div>
      )}
    </>
  );
}
