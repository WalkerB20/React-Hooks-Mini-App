import React, { useState, useEffect } from 'react';

function RaceSelector({ onChange }) {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/races')
      .then(response => response.json())
      .then(data => setRaces(data.results))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {races.map(race => (
        <option key={race.index} value={race.name}>{race.name}</option>
      ))}
    </select>
  );
}

export default RaceSelector;
