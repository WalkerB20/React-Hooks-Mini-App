import React, { useState } from 'react';
import RaceSelector from './Components/RaceSelector';
import ClassSelector from './Components/ClassSelector';
import AttributeSelector from './Components/AttributeSelector';
import CharacterPreview from './Components/CharacterPreview';
import SubmitButton from './Components/SubmitButton';
import './App.css';



function App() {
  const [character, setCharacter] = useState({
    race: '',
    class: '',
    attributes: {
      Strength: 0,
      Dexterity: 0,
      Constitution: 0,
      Intelligence: 0,
      Wisdom: 0,
      Charisma: 0,
    }
  });

  const handleRaceChange = (selectedRace) => {
    setCharacter(prev => ({ ...prev, race: selectedRace }));
  };

  const handleClassChange = (selectedClass) => {
    setCharacter(prev => ({ ...prev, class: selectedClass }));
  };

  const handleAttributeChange = (attribute, value) => {
    setCharacter(prev => ({
      ...prev,
      attributes: {
        ...prev.attributes,
        [attribute]: value
      }
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Character created:', character);
    // Here you would typically send this data to a server or some other form of storage
  };

  return (
    <div className="App">
      <h1>D&D Character Creator</h1>
      <form onSubmit={handleSubmit}>
        <RaceSelector onChange={handleRaceChange} />
        <ClassSelector onChange={handleClassChange} />
        <AttributeSelector onChange={handleAttributeChange} />
        <CharacterPreview character={character} />
        <SubmitButton />
      </form>
    </div>
  );
}

export default App;