import {
  useCreatePlayerMutation,
  useGetPlayersQuery,
} from "../api/playerSlice";
import { useState } from "react";

export default function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [createPlayer, result] = useCreatePlayerMutation();

  const { refetch } = useGetPlayersQuery();

  async function handleSubmit(e) {
    e.preventDefault();
    await createPlayer({ name, breed, imageUrl });
    refetch();
  }

  return (
    <>
      <div className="newPlayerForm">
        <h2>Add a new player</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="player-name"
              id="player-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Breed:
            <input
              type="text"
              name="player-breed"
              id="player-breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </label>
          <br />
          <label>
            Image Url:
            <input
              type="text"
              name="player-image"
              id="player-image"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
