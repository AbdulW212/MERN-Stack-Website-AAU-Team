import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Player({ player }) {
  const [showStats, setShowStats] = useState(false); //State variable to track whether stats are shown or hiden

  // Function to toggle the display of stats
  const toggleStats = () => {
    setShowStats(!showStats);
  };

  return (
    <div className="player">
      <h2>Name: {player.name}</h2> {/* Display player name */}
      <p>Hometown: {player.hometown}</p> {/* Display player hometowm */}
      <p>Position: {player.position}</p> {/* Display player postion */}
      
      {/* Display stats if showStats is true */}
      {showStats && (
        <>
          <p>Points Per Game: {player.pointsPerGame}</p>
          <p>Assist Per Game: {player.assistPerGame}</p>
          <p>Rebounds Per Game: {player.reboundsPerGame}</p>
          <p>Steals Per Game: {player.stealsPerGame}</p>
          <p>Blocks Per Game: {player.blocksPerGame}</p>
          
        </>
      )}
      {/* Button to toggle the display of stats */}
      <button onClick={toggleStats}>
        {showStats ? 'Hide Stats' : 'Show Stats'} {/*Changes the button text based on showStat state */}
      </button>
    </div>
  );
}

export default Player;