import React from 'react'
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import Player from '../components/Player';
import { getPlayers } from '../util/playersApi';

function Players() {
    // State variable for storing list of players
    const [players, setPlayers] = useState([]);

    // Fetch players from the server when the component mounts
    useEffect(() => {
        //Fetch players from the server
        getPlayers(setPlayers);
    }, []);

    return (
        <div>
            {/* map through the list of players and render each of them */}
            {players.map(player => {
                return (
                    <Player 
                        key={player._id} 
                        player={player} 
                    />
                );
            })}
        </div>
    );
}

export default Players;