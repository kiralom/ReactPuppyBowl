import {
  useGetPlayersQuery,
  useDeletePlayerMutation,
} from "../api/playerSlice";
import { useNavigate } from "react-router-dom";
import NewPlayerForm from "./NewPlayerForm";

export default function AllPlayers() {
  const { data, isLoading, refetch } = useGetPlayersQuery();
  const navigate = useNavigate();
  const [deletePlayer, result] = useDeletePlayerMutation();

  return (
    <>
      <h2>Roster</h2>
      <div className="roster">
        {!isLoading ? (
          data?.data?.players.map((player) => (
            <div key={player.id} className="player-card">
              <h4>{player.name}</h4>
              <p>{player.breed}</p>
              <img src={player.imageUrl} alt={`Picture of ${player.name}`} />
              <br />
              <button onClick={() => navigate(`/players/${player.id}`)}>
                View Details
              </button>
              <button
                onClick={async () => {
                  await deletePlayer(player.id);
                  refetch();
                }}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
        <div className="player-card">
          <NewPlayerForm></NewPlayerForm>
        </div>
      </div>
    </>
  );
}
