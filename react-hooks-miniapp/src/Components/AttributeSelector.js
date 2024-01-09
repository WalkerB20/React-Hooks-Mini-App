import React from 'react';

function AttributeSelector({ onChange }) {
  const attributes = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

  return (
    <div>
      {attributes.map(attr => (
        <div key={attr}>
          <label>{attr}: </label>
          <input type="number" onChange={(e) => onChange(attr, e.target.value)} />
        </div>
      ))}
    </div>
  );
}

export default AttributeSelector;
