import React, { useState, useEffect } from 'react';

function ClassSelector({ onChange }) {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/classes')
      .then(response => response.json())
      .then(data => setClasses(data.results))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {classes.map(cls => (
        <option key={cls.index} value={cls.name}>{cls.name}</option>
      ))}
    </select>
  );
}

export default ClassSelector;
