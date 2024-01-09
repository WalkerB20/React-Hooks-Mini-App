import React from 'react';

function CharacterPreview({ character }) {
  return (
    <div>
      <h2>Character Preview:</h2>
      <p>Race: {character.race}</p>
      <p>Class: {character.class}</p>
      <p>Attributes:</p>
      <ul>
        {Object.entries(character.attributes).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterPreview;
