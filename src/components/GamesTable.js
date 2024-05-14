import React from "react";

function GamesTable(props) {
  const { games, isLoading, isError } = props;
  /* INSTRUCTION: Show "loading..." when isLoading is true */
  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  /* INSTRUCTION: Show "error" when isError is true */
  if (isError) {
    return (
      <div>
        <h3>Error</h3>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genres</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {/* INSTRUCTION: if games data is available, display the games in a table. if not, display a "No games found." message */}
        {games.length > 0 ? (
          games.map((g) => (
            <tr key={g.title}>
              <td>{g.title}</td>
              <td>
                {g.genres[0]}, {g.genres[1]}{" "}
              </td>
              <td>{g.rating}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No Games Found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default GamesTable;
