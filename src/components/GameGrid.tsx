import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </>
  );
};

export default GameGrid;