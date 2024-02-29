export default function NewPlayerForm() {
  return (
    <>
      <h2>New player form</h2>
      <h3>Add a new player</h3>
      <form>
        <label>
          Name:
          <input type="text" name="player-name" id="player-name" />
        </label>
        <br />
        <label>
          Breed:
          <input type="text" name="player-breed" id="player-breed" />
        </label>
        <br />
        <label>
          Image Url:
          <input type="text" name="player-image" id="player-image" />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
