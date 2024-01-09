import React from 'react';

function SubmitButton({ onSubmit }) {
  return (
    <button onClick={onSubmit}>Create Character</button>
  );
}

export default SubmitButton;
