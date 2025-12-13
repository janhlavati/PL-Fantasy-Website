import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataHandling = () => {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const[playerData, setPlayerData] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const teamValue = params.get('team');

        if (teamValue) {
            axios.get(`http://localhost:8080/api/v1/player?team=${encodeURIComponent(teamValue)}`)
                .then(response => {
                    console.log("Data fetched: ", response.data);
                    setPlayerData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                    setError("Failed to fetch player data.");
                    setLoading(false);
                });
            }else{
                setLoading(false);
            }
        }, []);

        console.log("Rendering with playerData: ", playerData);

        if (loading) {
            return <p>Loading...</p>
        }

        if (error) {
            return <p>{error.message}</p>
        }

        return (
            <div className="table-container">
                <pre>{JSON.stringify(playerData, null, 2)}</pre>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Nation</th>
                            <th>Position</th>
                            <th>Matches Played</th>
                            <th>Minutes Played</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Yellow Cards</th>
                            <th>Red Cards</th>
                            <th>Team</th>
                        </tr>
                    </thead>

                    <tbody>
                        {playerData.map((player) => (
                            <tr key={player.name}>
                                <td>{player.name || "N/A"}</td>
                                <td>{player.nation.split(" ")[0] || "N/A"}</td>
                                <td>{player.position || "N/A"}</td>
                                <td>{player.matchesPlayed || 0}</td>
                                <td>{player.minutesPlayed || 0}</td>
                                <td>{player.goals || 0}</td>
                                <td>{player.assists || 0}</td>
                                <td>{player.yellowCards || 0}</td>
                                <td>{player.redCards || 0}</td>
                                <td>{player.team || "N/A"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
export default DataHandling;