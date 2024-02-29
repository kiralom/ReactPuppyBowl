import NewPlayerForm from "./NewPlayerForm";
import { useGetPlayersQuery } from "../api/playerSlice";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const dummyPlayers = [
    {
      id: 2,
      name: "Crumpet",
      breed: "American Staffordshire Terrier",
      status: "field",
      imageUrl:
        "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Crumpet-PBXVI.jpg",
      createdAt: "2021-06-15T16:21:14.103Z",
      updatedAt: "2021-06-15T16:21:14.103Z",
      teamId: 1,
      cohortId: 1,
    },
    {
      id: 4,
      name: "Daphne",
      breed: "German Shepherd",
      status: "field",
      imageUrl:
        "http://r.ddmcdn.com/w_960/s_f/o_1/cx_25/cy_0/cw_960/ch_1440/APL/uploads/2020/01/Daphne-PBXVI.jpg",
      createdAt: "2021-06-15T16:21:14.103Z",
      updatedAt: "2021-06-15T16:21:14.103Z",
      teamId: 2,
      cohortId: 1,
    },
    {
      id: 10,
      name: "Kenny",
      breed: "Golden Retriever / Boxer",
      status: "bench",
      imageUrl:
        "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Kenny-PBXVI.jpg",
      createdAt: "2021-06-15T16:21:14.103Z",
      updatedAt: "2021-06-15T16:21:14.103Z",
      teamId: 2,
      cohortId: 1,
    },
  ];
  const { data, isLoading } = useGetPlayersQuery();
  const navigate = useNavigate();

  return (
    <>
      <h2>All players</h2>
      <NewPlayerForm />
      <h3>Roster</h3>

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
            <button>Remove</button>
          </div>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}
